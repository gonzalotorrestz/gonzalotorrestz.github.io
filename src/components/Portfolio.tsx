import React from 'react'
import PortfolioItem from './PortfolioItem'
import portfolio from '../data/portfolio'

function Portfolio() {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {portfolio.map((project: { title: string; imgUrl: string; stack: any; repo: string; live: string;}) => (
            <PortfolioItem
              key={project.title}
              title={project.title}
              imgUrl={project.imgUrl ?? null}
              stack={project.stack}
              repo={project.repo}
              live={project.live ?? null}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Portfolio