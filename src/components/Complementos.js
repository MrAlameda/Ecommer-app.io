export let Complementos=({data,addToCar})=>{
    let {id,name,size,precio}=data
    return ( 
        <div className="item">
            <h1>{name}</h1>
            <h3>${precio}.00</h3>
            <button className="btn" onClick={()=>{addToCar(id)}}>Agregar</button>
        </div>
    );
}
