'use client'
import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from 'next/image';

const EventCard = ({ event }) => {
  return (
    <div className="bg-pink-200/80 p-4 rounded-lg shadow-md mb-4 min-w-[250px]">
      <h3 className="text-base font-semibold text-gray-800">{event.name}</h3>
      <h3 className="text-base font-semibold text-gray-800">{event.date}</h3>
    </div>
  );
};

const HomeCard = ({ card }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-4 flex flex-col text-center gap-2">
      <h3 className="text-xl text-blue-700 font-bold">{card.name}</h3>
      <p className="text-pretty text-lg font-semibold text-green-700">{card.desc}</p>
    </div>
  );
};

const Home= () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=a2fa33fed9bc43778e4f9fc5d1d08ccf');
        if (response.ok) {
          const data = await response.json();
          setNews(data.articles.slice(0, 2)); // Limit to two news items
        } else {
          console.error('Failed to fetch news');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);
  const timetable = [
    {
      exam:'DAA',
      day: 'Monday',
      date: '22/05/25',
      time: '2 - 5pm',
    },
    {
      exam:'CCN',
      day: 'Wednesday',
      date: '24/05/25',
      time: '2 - 5pm',
    },
    {
      exam:'OS',
      day: 'Friday',
      date: '26/05/25',
      time: '2 - 5pm',
    },
    {
      exam:'LA',
      day: 'Monday',
      date: '29/05/25',
      time: '2 - 5pm',
    },
  ]

  const events = [
    {
      name: 'Annual Day',
      date: '29th April, 2024',
    },
    {
      name: 'Bollywood Day',
      date: '2nd May, 2024',
    },
    {
      name: 'Food For Paws, RC',
      date: '5th May, 2024',
    },
  ]

  const cards = [
    {
      name: 'Study Room Updates',
      link: '/studyroom',
      desc: 'Collobarte with your peers and stay at the top of the game!',
    },
    {
      name: 'Tech Updates',
      link: '/',
      desc: 'Stay updated with all recent tech news!',
    },
    {
      name: 'Resources',
      link: '/resources',
      desc: 'Check out all required notes, ppts and previous papers',
    },
    {
      name: 'Pomodoro',
      link: '/progress',
      desc: 'Taking a break can lead to break of thoughts!',
    },
  ]

  return (
    <div className="flex flex-row h-screen justify-between overflow-hidden" style={{
        backgroundColor: "rgb(255, 228, 230)",
        backgroundImage: "radial-gradient(at 99% 81%, rgb(229, 229, 229) 0, transparent 79%), radial-gradient(at 54% 34%, rgb(2, 132, 199) 0, transparent 68%), radial-gradient(at 45% 59%, rgb(22, 101, 52) 0, transparent 1%), radial-gradient(at 84% 20%, rgb(232, 121, 249) 0, transparent 68%), radial-gradient(at 84% 47%, rgb(22, 163, 74) 0, transparent 1%), radial-gradient(at 55% 22%, rgb(52, 211, 153) 0, transparent 12%)"}}>
      <div className="flex flex-row gap-4 p-6">
        <div className="grid grid-cols-2 gap-x-6 items-center">
          <div className="bg-white px-4 pt-4 mb-4 p-7 rounded-xl shadow-md flex flex-col text-center gap-2 w-[350px]">
            <h3 className="text-xl text-blue-700 font-bold">Study Room Updates</h3>
            <p className="text-pretty text-lg font-semibold text-green-700">Collobarte with your peers and stay at the top of the game!</p>
            <Image src="/studyroom.jpeg" alt="studyroom" height={20} width={350}/>
            <a href="/studyroom" target="_blank"><button className="mt-2 bg-blue-700 text-white font-semibold text-xl py-2 px-4 rounded-xl">Join Now</button></a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md mb-4 flex flex-col text-center gap-2 w-[350px]">
            <h3 className="text-xl text-blue-700 font-bold pb-3">Tech Updates</h3>
            <p className="text-pretty text-lg font-semibold text-green-700">Stay updated with all recent tech news!</p>
            <div className="text-left">
              {news.map((article, index) => (
                <div key={index} className="bg-pink-300/40 rounded-xl p-4 mt-5 mb-3">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white px-4 py-7 rounded-xl shadow-md mb-4 flex flex-col text-center gap-2 w-[350px]">
            <h3 className="text-xl text-blue-700 font-bold">Pomodoro</h3>
            <p className="text-pretty text-lg font-semibold text-green-700">Stay Focused! Achieve your goals!</p>
            <a href="/progress" target="_blank"><button className="mt-2 bg-blue-700 text-white font-semibold text-xl py-2 px-4 rounded-xl">Start Now</button></a>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md mb-4 flex flex-col text-center gap-2 w-[350px]">
            <h3 className="text-xl text-blue-700 font-bold">Resources</h3>
            <p className="text-pretty text-lg font-semibold text-green-700">Check out all required notes, ppts and previous papers</p>
            <a href="/resources" target="_blank"><button className="mt-2 bg-blue-700 text-white font-semibold text-xl py-2 px-4 rounded-xl">Check It Out</button></a>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-slate-50 items-center w-[400px] border-l-2 gap-4">
        <div className="w-full">
          <h2 className="text-center text-xl font-bold w-full py-4">ESE TimeTable 2024</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date/Day</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Subject</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {timetable.map((exam, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{exam.date}, {exam.day}</TableCell>
                    <TableCell>{exam.time}</TableCell>
                    <TableCell>{exam.exam}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </div>
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-center text-xl font-bold w-full py-4">Upcoming Events</h2>
              {events.map((event, index) => (
                <EventCard key={index} event={event}/>
              ))}
        </div>
      </div>
    </div>
  )
}

export default Home

