import React from 'react'
import { render } from 'react-dom'

function PortfolioItem({ title, imgUrl, stack, repo, live }: { title: string, imgUrl: string, stack: any, link: string, repo: string, live: string }) {
  return (
    <div className='border-2 border-stone-900 dark:border-stone-300 rounded-md overflow-hidden'>
      <a href={live} target="_blank" >
        {
          imgUrl !== null ?
            (<img
              src={imgUrl}
              alt="Project screenshot "
              className='w-full h-36 md:h-28 xl:h-48 object-cover cursor-pointer' />
            ) : (<div

              className='w-full h-36 md:h-28 xl:h-48 object-cover cursor-pointer' />
            ) }
      </a>
      <div className='w-full p-4'>
        <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>

        <div className='flex flex-wrap mb-4'>
          <a href={repo} target="_blank"><p className='font-semibold border-2 rounded-md px-2 mr-3 hover:bg-stone-900 hover:text-stone-300 dark:hover:bg-stone-300 dark:hover:text-stone-900'>View Code</p></a>
          {
            live !== null ?
              (
                <a href={live} target="_blank">
                  <p className='font-semibold border-2 rounded-md px-2 hover:bg-stone-900 hover:text-stone-300 dark:hover:bg-stone-300 dark:hover:text-stone-900'>Live Demo</p>
                </a>
              ) : null}

        </div>
        <p className='flex flex-wrap gap-1 flex-row items-center justify-start'>
          {stack.map((stackItem: string) => (
            <span className='inline-block px-2 py-1 font-semibold border-2 text-xs bg-gradient-to-br from-stone-300 to-stone-600  border-stone-900 dark:border-stone-300 rounded-md'>
              {stackItem}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default PortfolioItem