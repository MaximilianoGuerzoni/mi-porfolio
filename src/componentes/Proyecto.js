import React from 'react'
import {useParams} from 'react-router-dom'
import { trabajos } from '../data/trabajos';
import {useEffect, useState} from "react"
 
export const Proyecto = () => {
   const [proyecto, setProyecto] =useState({});
   const params = useParams();
   useEffect(()=>{
    let proyecto = trabajos.filter(trabajo=> trabajo.id === params.id);
    setProyecto (proyecto[0]);
   }, [params] );

  return (
    <div className='page page work'>
        <img src={"/images/"+ proyecto.id + ".png" } alt='imagenes-de-proyectos'/> 
        <h1 className='heading'>{proyecto.id} </h1>
        <p> {proyecto.tecnologias} </p>
        <p> {proyecto.descripcion} </p>
        <a href={"http://"+proyecto.url} target="_blank" >Ir al proyecto</a>
     

    </div>
  )
}