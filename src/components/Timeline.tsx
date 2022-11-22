import React from 'react'
import timeline from '../data/timeline'
import TimelineItem from './TimelineItem'
import Title from './Title'

function Timeline() {
  return (
    <div className='flex flex-col md:flex-row justify-center my-20'>
      <div className='w-full md:w-7/12'>
        <Title id='Timeline'>Timeline</Title>
        {timeline.map((item: { id: string; year: any; position: any; company: any; tech: any; tasks: any }) => (
          <TimelineItem
            key={item.id}
            year={item.year}
            title={item.position}
            company={item.company}
            tech={item.tech}
            description={item.tasks}
          />
        ))}
      </div>
    </div>
  )
}

export default Timeline