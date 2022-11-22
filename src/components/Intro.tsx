import React from 'react'

function Intro() {
    return (
        <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
            <h1 className='text-4xl md:text-mb-1 dark:text-white md:mb-3 font-bold'>Hi, I'm Gonzalo</h1>
            <p className='text-base md:text-xl mb-3 font-medium'>Developer & DevOps Engineer</p>
            <p className='text-sm max-w-xl'>I'm a self-taught full-stack developer (with a .Net and Javascript background) based in Buenos Aires, Argentina. Since 2021, I've been working as a DevOps Engineer/SRE, having the opportunity to learn about containerization, CI/CD and developing for the cloud.</p>
        </div>

    )
}

export default Intro;