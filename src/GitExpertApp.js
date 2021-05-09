import React, { useState } from 'react';
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';

const GitExpertApp = () => {


    const [categorias, setCategorias] = useState(['One Punch']);

/*     const handleAdd = () => {

        setCategorias([...categorias, 'x-men']);

    }; */

    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr />

            <ol>
                {
                    categorias.map((category, i) => <GifGrid 
                    key={category}
                    categorias = {category}/>)
                }
            </ol>
        </>
    );
};

export default GitExpertApp;
