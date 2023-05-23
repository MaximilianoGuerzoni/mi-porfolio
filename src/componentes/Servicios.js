import React from 'react'

export const Servicios = () => {
  return (
    <div className='page'>
        <h1 className='heading'>SKILLS</h1>

    <section className='services'>
        <article className='service'>
            <h2>Web development</h2>
            <img src='./images/skill-icons.png' alt='icons-html-css-js'/>
        </article>
    </section>

    <section className='services'>
        <article className='service'>
            <h2>Graphic design</h2>
            <img src='./images/photoshop-icon.png' alt='icons-html-css-js'/>
        </article>
    </section>

    <section className='services'>
        <article className='service'>
            <h2>Video Edition</h2>
            <img src='./images/edition-video-icons.png' alt='icons-sonyvega-davinci'/>
        </article>
    </section>

    </div>
  )
}
