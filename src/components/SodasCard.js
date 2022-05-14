let Sodas=({sodas=[],quiero})=>{
    const Quiero=(a,b)=>{
        quiero(a,b);
    }

    return(
        <div
          className="menuItemsSodas"
        >
          {
            sodas.map((item,index)=>(
              <div
                  className="item"
                  key={index}
              >
                  <img alt="imagen" src={null}/>
                  <div className="name">{item.name}</div>

                  <div className="sizePrices">
                    
                      <p>Precio: ${item.precio}</p>
                    
                  </div>
                    <button className="btn" onClick={Quiero(item.name,item.precio)}>Agregar</button>
              </div>
          ))
          }
        </div>
    )
}

export { Sodas }