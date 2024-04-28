import * as React from "react";
import { useState } from "react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

function CalendarDemo() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="mt-4 bg-gradient-to-r from-blue-100 via-slate-100 to-blue-300 rounded-xl flex justify-center items-center">
      <div className="text-center">
        <h3 className="font-bold text-2xl mt-1 py-3">Calendar</h3>
        <div className="flex justify-center">
          <CalendarComponent
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md w-[600px] mb-2 flex justify-center"
          />
        </div>
      </div>
    </div>
  );
}

export default CalendarDemo;
