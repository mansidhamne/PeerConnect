import React from 'react';
import Image from 'next/image';

function ProgressBar({ progress }) {
  return (
    <div className="flex flex-col py-4 mt-8 bg-gradient-to-tr from-red-200 via-slate-100 to-red-100 w-full rounded-lg">
        <h1 className="text-center font-semibold text-2xl">Streaks</h1>
        <div className="flex flex-row justify-between pr-7">
            <Image src="/streaks.png" alt="poke" width={160} height={150} className="pt-3"/>
            <div className="pt-4 flex flex-col gap-4">
                <div className="flex flex-row justify-between">
                    <h2 className="font-bold text-base text-blue-700">LEVEL: </h2>
                    <h2 className="font-bold text-base">4</h2>
                </div>
                <div className="flex flex-row justify-between gap-7">
                    <h2 className="font-bold text-base text-blue-700">POINTS EARNED: </h2>
                    <h2 className="font-bold text-base">20</h2>
                </div>
                <div className="flex flex-col justify-between gap-5 text-center">
                    <h2 className="font-bold text-base text-green-700 hover:cursor-pointer">DON'T FORGET TO GET TODAYS POINTS!</h2>
                    <a href="/studyroom"><button className=" p-2 rounded-lg font-bold text-base text-slate-50 bg-green-700 hover:cursor-pointer hover:bg-green-500">JOIN STUDY ROOM</button></a>
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default ProgressBar;
