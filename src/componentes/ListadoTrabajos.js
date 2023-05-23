import React from 'react'
import { trabajos } from '../data/trabajos'
import { Link } from "react-router-dom"

export const ListadoTrabajos = ({ limite }) => {
  return (
    <div className='page'>


      {
        trabajos.slice(0, limite).map(trabajo => {
          return (

            <section key={trabajo.id} className='works'>
              <article key={trabajo.id} className="work-item">
                <div className='mask'>
                  <img src={"/images/" + trabajo.id + ".png"} alt='imagen-de-proyecto' />
                </div>
                <span> {trabajo.categorias} </span>
                <h2 ><Link to={"/proyecto/" + trabajo.id} > {trabajo.nombre}</Link> </h2>
                <h3> {trabajo.tecnologias} </h3>
              </article>
            </section>
          )
        })
      }

    </div>
  )
}
