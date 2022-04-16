import React, { useState } from 'react'

const ItemCount = () => {
    const [count, setCount] = useState (1)
    const [Stock, setStock] = useState (10)
    
    

const onAdd = () => {
    if (count < Stock){
        setCount(count + 1)
    }


    
}
    return (
        <>
        <button onClick={onAdd}> + </button>
        <p>{count}</p>
        <button > - </button>
        </>
    )
}

export default ItemCount






/*<p>Stock:{count} </p>
<button onClick={addStock}>Agregar stock</button>*/