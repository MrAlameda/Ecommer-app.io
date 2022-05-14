let ComplementCards=({complements=[]})=>{
    return(
        <div
        className="menuItemsComplements"
      >
        {
          complements.map((item,index)=>(
            <div
                className="item"
                key={index}
            >
            <img alt="imagen" src={null}/>
                <div className="name">{item.name}</div>

                <div className="sizePrices">
                  
                    <p>precio {item.precio}</p>
                  
                </div>
                <button onClick={()=>{alert(`${item.name}`)}} className="btn">Agregar</button>
            </div>
        ))
        }

      </div>
    )
}

export { ComplementCards }