import React from 'react';

function Timeline() {
  return (
    <div className='timeline'>
      <div className="education">
        <h2>Education</h2>
        <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
          <li className='md:w-full md:ml-4'>
            <div className='absolute md:relative w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 md:mt-0 md:-left-0.5 border-white'/>
            <div className='flex flex-wrap gap-4 flex-row item-center justify-start text-xs md:text-sm'>
              <span className='inline-block px-2 py-1 font-semibold text-white bg-[#AA367C] rounded-md'>2023</span>
              <span className='text-lg font-semibold text-[#AA367C]'>B.Tech</span>
              <span className='my-1 text-sm font-normal leading-none text-stone-400'>4 Years</span>
            </div>
            <p className='my-2 text-base font-normal text-stone-500'>Electrical and Electronics Engineering</p>
          </li>
          <li className='md:w-full md:ml-4'>
            <div className='absolute md:relative w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 md:mt-0 md:-left-0.5 border-white'/>
            <div className='flex flex-wrap gap-4 flex-row item-center justify-start text-xs md:text-sm'>
              <span className='inline-block px-2 py-1 font-semibold text-white bg-[#AA367C] rounded-md'>2019</span>
              <span className='text-lg font-semibold text-[#AA367C]'>Intermediate</span>
              <span className='my-1 text-sm font-normal leading-none text-stone-400'>2 Years</span>
            </div>
            <p className='my-2 text-base font-normal text-stone-500'>MPC (Mathematics Physics Chemistry)</p>
          </li>
          <li className='md:w-full md:ml-4'>
            <div className='absolute md:relative w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 md:mt-0 md:-left-0.5 border-white'/>
            <div className='flex flex-wrap gap-4 flex-row item-center justify-start text-xs md:text-sm'>
              <span className='inline-block px-2 py-1 font-semibold text-white bg-[#AA367C] rounded-md'>2016</span>
              <span className='text-lg font-semibold text-[#AA367C]'>SSE (Secondary School of Education)</span>
            </div>
            <p className='my-2 text-base font-normal text-stone-500'>Shirdi Sai High School</p>
          </li>
        </ol>
      </div>

      <div className="work">
        <h2>Work</h2>
        <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
          <li className='md:w-full md:ml-4'>
            <div className='absolute md:relative w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 md:mt-0 md:-left-0.5 border-white'/>
            <div className='flex flex-wrap gap-4 flex-row item-center justify-start text-xs md:text-sm'>
              <span className='inline-block px-2 py-1 font-semibold text-white bg-[#AA367C] rounded-md'>2024</span>
              <span className='text-lg font-semibold text-[#AA367C]'>Developer (Intern)</span>
            </div>
            <p className='my-2 text-base font-normal text-stone-500'>Deep Thought Edu Tech Venture</p>
          </li>
        </ol>
       
      </div>
      
    </div>
  );
}

export default Timeline;
