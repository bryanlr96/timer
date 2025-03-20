import { useState } from "react"
import TimerDisplay from "./components/TimerDisplay"
import Timer from "./components/Timer"


function App() {
  const [sesion, setSesion] = useState(25.00)
  const [breakTime, setBreakTime] = useState(5.00)
  return (
    <>
      <main className=" w-full h-screen bg-[#1e555c] flex flex-col justify-center items-center">
        <h1 className="text-white text-7xl">Timer</h1>
        <section className=" w-1/3 flex mt-5 justify-between">
          <TimerDisplay
            id="break-label"
            idButtonD="break-decrement"
            idButtonU="break-increment"
            label="Break Length"
            timer={breakTime}
            setTimer={setBreakTime}
          />
          <TimerDisplay
            id="session-length"
            idButtonD="session-decrement"
            idButtonU="session-increment"
            label="Session Length"
            timer={sesion}
            setTimer={setSesion}
          />
        </section>
        <Timer
          labelSesion="Session"
          labelBreak="Break"
          sessionTime={sesion}
          breakTime={breakTime}
        />
      </main>
    </>
  )
}

export default App
