import { useEffect, useState } from "react"

type TimerProps = {
    labelSesion: string,
    labelBreak: string,
    sessionTime: number,
    breakTime: number,
}

export default function Timer({ labelSesion, labelBreak, sessionTime, breakTime }: TimerProps) {
    const [isPaused, setIsPaused] = useState(true)
    const [timeLeft, setTimeLeft] = useState(sessionTime * 60); //el timepo lo queremos siempre en segundos
    const [label, setLabel] = useState(labelSesion)

    useEffect(() => { //si modificamos el tiempo breakTime
        setTimeLeft(breakTime * 60);
        setLabel(labelBreak);
        setIsPaused(true);
    }, [breakTime]);

    useEffect(() => { //si modificamos el tiempo sesionTime
        setTimeLeft(sessionTime * 60);
        setLabel(labelSesion);
        setIsPaused(true);
    }, [sessionTime]);

    

    useEffect(() => { //funcionalidad del timer
        if (timeLeft <= 0 || isPaused) return;

        const interval = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft, isPaused]);

    useEffect(() => {
        // Si el tiempo llega a 0
        if (timeLeft <= 0) {
            if (label === labelSesion) {
                setLabel(labelBreak);
                setTimeLeft(breakTime * 60); // Cambiar al tiempo de break
            } else {
                setLabel(labelSesion);
                setTimeLeft(sessionTime * 60); // Cambiar al tiempo de sesion
            }
        }
    }, [timeLeft, label, sessionTime, breakTime, labelSesion, labelBreak]);

    // Función para formatear el tiempo en MM:SS
    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const handleRestart = () => { //funcion para reiniciar
        setIsPaused(true)
        setLabel(labelSesion)
        setTimeLeft(sessionTime * 60)
    }
    return (
        <section className="w-1/4 aspect-square text-white mt-5 border-8 p-8 rounded-4xl flex flex-col justify-around items-center">
            <h3 id="timer-label" className="text-5xl font-bold"> {label} </h3>
            <p id="time-left" className="text-[100px] font-bold"> {formatTime(timeLeft)} </p>
            <div className="w-full flex justify-around">
                <button onClick={() => setIsPaused(!isPaused)} className="cursor-pointer">
                    {isPaused ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="size-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                        </svg>
                    )}
                </button>

                <button className="cursor-pointer" onClick={() => handleRestart()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
                    </svg>
                </button>
            </div>
        </section>
    )
}
