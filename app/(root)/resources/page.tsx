'use client'
import { SelectScrollable } from '@/components/combobox';
import { FollowingPointerDemo } from '@/components/following-demo';
import React from 'react';
import imagetoadd from "../../public/image.png"
import { Card } from '@/components/ui/card';
import { CardHoverEffectDemo } from '@/components/cards';
import { FollowingPointerDemoPast } from '@/components/following-demo_past';
import Image from 'next/image';
const Page = () => {
  return (
    <div className='h-full w-full overflow-x-auto bg-gradient-to-br from-slate-200 via-slate-300 to-sky-400'>
      <div className='flex justify-around items-center pt-6'>
        <p className='font-bold text-xl text-cyan-900'>Your Resources</p>
        <SelectScrollable />
      </div>
      <div>
        <h3 className='text-lg pl-20 pt-9'>Lecture Notes and Syllabus</h3>
      </div>
      <div className='flex justify-evenly w-full p-8'>
        <FollowingPointerDemo
          slug="Operating Systems"
          author=""
          date="28th March, 2024"
          title="Operating Systems"
          description="Download  Notes"
          image="imagetoadd"
          authorAvatar=""
          faculty='KKD'
          syllabus='Download Syllabus Here'
        />
        <FollowingPointerDemo
          slug="Operating Systems"
          author=""
          date="28th March, 2024"
          title="Operating Systems"
          description="Download  Notes"
          image="imagetoadd"
          authorAvatar=""
          faculty='KKD'
          syllabus='Download Syllabus Here'
        />
         <FollowingPointerDemo
          slug="Operating Systems"
          author=""
          date="28th March, 2024"
          title="Operating Systems"
          description="Download  Notes"
          image="/public/image.png"
          authorAvatar=""
          faculty='KKD'
          syllabus='Download Syllabus Here'
        />
      </div>
      <div>
        <p>Study Notes</p>
      </div>
      <div className='flex flex-row'>
        <CardHoverEffectDemo />
      
      </div>
      <div>
        <h3 className='text-lg pl-20 pt-9'>Past Year Papers</h3>
      </div>
      <div className='flex justify-evenly w-full p-8 pb-20'>
        <FollowingPointerDemoPast
          slug="Operating Systems"
          author=""
          date1="28th March, 2024"
          title="Operating Systems"
          description1="Download  Notes"
          image="imagetoadd"
          authorAvatar=""
          faculty='KKD'
          syllabus='Download Syllabus Here'
          date2="28th March, 2024"
          date3="28th March, 2024"
          date4="28th March, 2024"
          description2="Download  Notes"
          description3="Download  Notes"
          description4="Download  Notes" date={''} description={''}        />
                <FollowingPointerDemoPast
          slug="Operating Systems"
          author=""
          date1="28th March, 2024"
          title="Operating Systems"
          description1="Download  Notes"
          image="imagetoadd"
          authorAvatar=""
          faculty='KKD'
          syllabus='Download Syllabus Here'
          date2="28th March, 2024"
          date3="28th March, 2024"
          date4="28th March, 2024"
          description2="Download  Notes"
          description3="Download  Notes"
          description4="Download  Notes" date={''} description={''}        />
                <FollowingPointerDemoPast
          slug="Operating Systems"
          author=""
          date1="28th March, 2024"
          title="Operating Systems"
          description1="Download  Notes"
          image="imagetoadd"
          authorAvatar=""
          faculty='KKD'
          syllabus='Download Syllabus Here'
          date2="28th March, 2024"
          date3="28th March, 2024"
          date4="28th March, 2024"
          description2="Download  Notes"
          description3="Download  Notes"
          description4="Download  Notes" date={''} description={''}        />
      </div>
    </div>
  );
};

export default Page;


