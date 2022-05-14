
function PizzasCards({pizzas=[]}){
  
  return(
        <div
          className="menuItemsPizzas"
        >
          {
            pizzas.map((item,index)=>(
              <div
                  className="item"
                  key={index}
              >
                  <img alt="imagen" src={null}/>
                  <div className="name">{item.name}</div>

                  <div className="sizePrices">
                    
                      <p>tamaño {item.size} : precio {item.precio}</p>
                    
                  </div>
                  <button className="btn" onClick={()=>{alert(`${item.name}`)}}>Agregar</button>
              </div>
          ))
          }

        </div>
    )
}

export { PizzasCards }