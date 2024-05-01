'use client'
import React from 'react';
import { SidebarLinks } from '@/constants';
import { MdLogout } from 'react-icons/md';
import { IoIosSettings } from 'react-icons/io';
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';

interface Link {
  id: string;
  icon: JSX.Element;
  title: string;
}

const Sidebar: React.FC = () => {
  return (
    <div className="bg-neutral-50 text-zinc-900 min-w-[250px] sticky top-0 min-h-full select-none">
      <div className="flex flex-col h-screen justify-between pt-7">
        <div className="flex flex-col top-0">
          <div className="flex flex-row justify-center pl-4">
            <a href="/home" className="flex flex-row justify-center">
              <img src="/logo.png" alt="logo" className="w-[40px] h-[30px]" />
              <h4 className="pr-5 pl-2 pb-4 font-semibold text-[23px] text-center">PeerConnect</h4>
            </a>
          </div>
          <div>
            <ul className="px-5 mt-5 list-none flex flex-col gap-7">
              {SidebarLinks.map((Link: Link) => (
                <li key={Link.id}>
                  <a href={`${Link.id}`} className="flex flex-row gap-2 items-center text-lg">
                    {Link.icon}
                    {Link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col flex-end justify-end items-center gap-1 pb-7 text-[20px]">
          <UserButton/>
          <h3>Vivek</h3>
          <p>S.E. Comps</p>
          <div className="flex flex-row gap-4 items-center text-[23px] ">
            <IoIosSettings />
            <div>
              <MdLogout />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
