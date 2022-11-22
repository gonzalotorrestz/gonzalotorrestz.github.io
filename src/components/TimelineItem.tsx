import React from 'react'

function TimelineItem({ year, title, company, tech, description }: { year: string, title: string, company: string, tech: any, description: string }) {
    return (
        <ol className='flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700'>
            <li className='mb-10 ml-4'>
                <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700' />
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                    <span className='inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md'>
                        {year}
                    </span>
                    <h3 className='text-lg font-semibold text-stone-900 dark:text-white'>
                        {title}
                    </h3>
                    <div className='my-1 text-sm font-normal leading-none text-stone-400'>
                        @ {company}
                    </div>
                </p>
                <p className='my-2 text-base font-normal text-stone-500 dark:text-stone-200'>
                    {description}
                </p>
                <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
                    {tech.map((techItem: string) => (
                        <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-stone-300 rounded-md'>
                            {techItem}
                        </span>
                    ))}
                </p>
            </li>
        </ol>
    )
}

export default TimelineItem