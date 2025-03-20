import { Dispatch } from "react"

type TimerDisplayProps = {
    id: string,
    idButtonD: string,
    idButtonU: string,
    label: string,
    timer: number,
    setTimer: Dispatch<React.SetStateAction<number>>
}


export default function TimerDisplay({ id, idButtonD, idButtonU, label, timer, setTimer }: TimerDisplayProps) {
    const handleIncrement = () => {
        if(timer < 60){
            setTimer(prev => prev +1)
        }
    }  
    
    const handleDecrement = () => {
        if(timer > 1){
            setTimer(prev => prev - 1)
        }
    }
    return (
        <div>
            <h2 id={id} className="text-white text-4xl">{label}</h2>
            <div className="flex w-full justify-between mt-5">
                <button className="cursor-pointer" id={idButtonD} onClick={handleDecrement}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white font-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>

                </button>
                <h3 className="text-4xl text-white">{"" + timer}</h3>
                <button className="cursor-pointer" id={idButtonU} onClick={handleIncrement}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white font-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>

                </button>
            </div>
        </div>
    )
}
