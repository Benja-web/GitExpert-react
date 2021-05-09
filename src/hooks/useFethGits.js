import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGits";

export const useFetchGifs = (categorias) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect(() => {
        getGifs(categorias).then(img => {
            setTimeout(() => {

                setState({
                    data: img,
                    loading: false
                });
            }, 3000);
        })
    }, [categorias]);

    /*    setTimeout(()=>{
           useState({
               data:[1,23,4,5,6,7],
               loading:false
           });
       },3000);
     */
    return state;
}