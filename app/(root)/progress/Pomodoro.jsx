import { useState, useEffect } from 'react';

function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [enteredTime, setEnteredTime] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility

  useEffect(() => {
    let timer = null;

    if (!isPaused && (minutes !== 0 || seconds !== 0)) {
      timer = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(timer);
            alert('Time is up! Take a break.');
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isPaused, minutes, seconds]);

  const togglePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const chooseTime = (newTime) => {
      setEnteredTime(newTime);
      setMinutes(newTime);
      setSeconds(0);
      setIsPaused(true);
      setShowDropdown(false);
    }; 

    const restartTimer = () => {
        setMinutes(enteredTime || 15);
        setSeconds(0);
        setIsPaused(true);
      };
    


  const options = [15, 20, 25, 30, 35, 45, 50, 55, 60]; 

  return (
    <div className="flex items-center justify-center mt-8 rounded-lg w-[600px]" style={{backgroundImage: "url('pomodoro.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
      <div className="main rounded-lg shadow-lg p-5 text-center">
        <h1 className="text-slate-50 text-3xl font-bold mb-8">Pomodoro Timer</h1>
        <div className="timer-circle border-8 border-slate-50 rounded-full w-48 h-48 flex items-center justify-center mx-auto text-white text-4xl font-bold mb-8">
          {`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
        </div>
        <div className="control-buttons mb-8">
          <button className="bg-slate-50/90 text-blue-700 font-semibold rounded-lg px-4 py-2 mr-4" onClick={togglePauseResume}>
            {isPaused ? 'Start' : 'Pause'}
          </button>
          <button className="bg-slate-50/90 text-blue-700 font-semibold rounded-lg px-4 py-2 mr-4" onClick={restartTimer}>
            Restart
          </button>
          <div className="relative inline-block text-left">
            <button className="bg-blue-500 text-white rounded px-4 py-2" onClick={() => setShowDropdown(!showDropdown)}> {/* Toggle dropdown visibility */}
              Choose Time
            </button>
            {showDropdown && (
              <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div className="py-1" role="none">
                  {options.map((option, index) => (
                    <button key={index} onClick={() => chooseTime(option)} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1">{option} minutes</button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
  );
};
export default PomodoroTimer;
