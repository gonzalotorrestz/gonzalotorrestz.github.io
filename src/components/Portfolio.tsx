import React from 'react'
import PortfolioItem from './PortfolioItem'
import portfolio from '../data/portfolio'

function Portfolio() {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

          {portfolio.map((project: { title: any; imgUrl: any; stack: any; link: any }) => (
            <PortfolioItem
              key={project.title}
              title={project.title}
              imgUrl={project.imgUrl}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>

      </div>
    </div>
  )
}

export default Portfolio