import React, { useState, useEffect } from 'react'

import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from '../hooks/useFethGits';

const GifGrid = ({ categorias }) => {


 
    const { data:imagenes, loading} =useFetchGifs(categorias);



    return (
        <>
            <h3 className='animate__fadeIn'>{categorias}</h3>
             {loading && <p>'Cargando..'</p>} 
            <div className="card-grid animate__flip">
                {
                    imagenes.map(img => {
                        return <GifGridItem key={img.id}
                            {...img} />
                    })
                }
            </div>
        </>
    )
}


export default GifGrid
