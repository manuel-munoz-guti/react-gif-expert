import { React} from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3> {category} </h3>
            {
                isLoading  && (<h2>Cargando...</h2>)
            }
            {/* Forma mas antigua*/}
            {/* <ol>{
                images.map( (element) => {
                    return <li key={element.id}> {element.title} </li>
                })
            }</ol> */}
            
            {/* Forma mas nueva */}
            <div className="card-grid">{
                images.map( (element) => ( 
                    <GifItem 
                        key={element.id} 
                        title={element.title}   // se pueden quitar estas dos ultimas filas por { ... element } hacer una dispersion de los parametros
                        url={element.url}  
                    /> 
                ))
            }</div>
        </>
  )
}
