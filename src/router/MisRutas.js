import React from 'react'
import {Routes, Route, BrowserRouter, NaviLink, Navigate} from "react-router-dom";
import { Contacto } from '../componentes/Contacto';
import { Curriculum } from '../componentes/Curriculum';
import { Inicio } from '../componentes/Inicio';
import { Footer } from '../componentes/layaout/Footer';
import { HeaderNav } from '../componentes/layaout/Header';
import { Portafolio } from '../componentes/Portafolio';
import { Proyecto } from '../componentes/Proyecto';
import { Servicios } from '../componentes/Servicios';
import { Nav } from '../componentes/layaout/Nav';
import {Header} from '../componentes/layaout/Header';

export const MisRutas = () => {
  return (
    <div>


  
        <BrowserRouter>

            <Header></Header>
            <Nav></Nav>
            <section className='content'>
                <Routes>

                    <Route path='/' element= {<Navigate to="/inicio"></Navigate>}/>
                    <Route path='/inicio' element= {<Inicio/>}/>
                    <Route path='//porfolio' element= {<Portafolio/>}/>
                    <Route path='/skills' element= {<Servicios/>}/>
                    <Route path='/curriculum' element= {<Curriculum/>}/>
                    <Route path='/contacto' element= {<Contacto/>}/>
                    <Route path='/proyecto/:id' element={<Proyecto/>}/>
                    <Route path='*' element= {  
                    <div className='page'>
                    <h1 className='heading'>Error 404</h1>
                    </div>
                    }/>
                </Routes>
            </section>
        
        
       
        <Footer></Footer>
        
        
        </BrowserRouter>


    </div>
  )
}
