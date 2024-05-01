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
      <div className='flex justify-between items-center pt-6 px-12'>
        <p className='font-bold text-xl text-cyan-900'>Your Resources</p>
        <SelectScrollable />
      </div>
      <div>
        <h3 className='text-lg font-semibold pl-14 pt-9'>Lecture Notes and Syllabus</h3>
      </div>
      <div className='flex justify-evenly w-full py-8 px-9'>
        <a href="https://docs.google.com/presentation/d/1oYNe5vq50iU4WW5slQQwdTxCBHQlw3dT/edit#slide=id.p1" target='_blank'>
        <FollowingPointerDemo
          slug="Operating Systems"
          author=""
          date="28th March, 2024"
          title="Operating Systems"
          description="Download  Notes"
          faculty='KKD'
          syllabus='Download Syllabus Here' image={''} authorAvatar={''} />
        </a>
        <FollowingPointerDemo
          slug="Operating Systems"
          author=""
          date="28th March, 2024"
          title="Operating Systems"
          description="Download  Notes"

          faculty='KKD'
          syllabus='Download Syllabus Here' image={''} authorAvatar={''}  />
         <FollowingPointerDemo
          slug="Operating Systems"
          author=""
          date="28th March, 2024"
          title="Operating Systems"
          description="Download  Notes"
          image="/public/image.png"
          faculty='KKD'
          syllabus='Download Syllabus Here' authorAvatar={''}        />
      </div>
      <div>
      <h3 className='text-lg font-semibold pl-14 pt-9'>Student Notes</h3>
      </div>
      <div className='flex flex-row'>
        <CardHoverEffectDemo />
      
      </div>
      <div>
      <h3 className='text-lg font-semibold pl-14 pt-9'>Past Year Papers</h3>
      </div>
      <div className='flex justify-evenly w-full p-8 pb-20'>        
        <FollowingPointerDemoPast
          slug="Operating Systems"
          author=""
          date1="28th March, 2024"
          title="Operating Systems"
          description1="Download  Notes"
          image="imagetoadd"
          faculty='KKD'
          syllabus='Download Syllabus Here'
          date2="28th March, 2024"
          date3="28th March, 2024"
          date4="28th March, 2024"
          description2="Download  Notes"
          description3="Download  Notes"
          description4="Download  Notes" date={''} description={''}/>
          <FollowingPointerDemoPast
          slug="Operating Systems"
          author=""
          date1="28th March, 2024"
          title="Operating Systems"
          description1="Download  Notes"
          // image="imagetoadd"
          faculty='KKD'
          syllabus='Download Syllabus Here'
          date2="28th March, 2024"
          date3="28th March, 2024"
          date4="28th March, 2024"
          description2="Download  Notes"
          description3="Download  Notes"
          description4="Download  Notes" date={''} description={''} image={''}        />
          <FollowingPointerDemoPast
          slug="Operating Systems"
          author=""
          date1="28th March, 2024"
          title="Operating Systems"
          description1="Download  Notes"
          image="imagetoadd"
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


