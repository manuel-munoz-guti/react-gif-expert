import { React, useEffect, useState} from 'react';
import {getGifs} from '../api/gifApi';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

     const fetchData = async () =>{
         const newImages = await getGifs(category);
         setImages(newImages);
         setIsLoading(false);
     }

     useEffect( () => {
         fetchData();
     }, []);
  
    return {
        images,                              
        isLoading,
    }
}
