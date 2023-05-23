import React from 'react'
import { ListadoTrabajos } from './ListadoTrabajos';

export const Inicio = () => {
  return (
    <div className='home'>
       

         <section className='lastworks'>
            <h2 className='heading'>ÚLTIMOS PROYECTOS</h2>
           

            <div className='words'>

            <ListadoTrabajos limite="2"/>
            </div>

         </section>


    </div>
  )
}
