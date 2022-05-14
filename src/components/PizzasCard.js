
function PizzasCards({pizzas=[]}){
  console.log(pizzas)  
  
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
                  <div className="name">{item.name}</div>

                  <div className="sizePrices">
                    
                      <p>tamaño {item.size} : precio {item.precio}</p>
                    
                  </div>
                  <button onClick={()=>{alert(`${item.name}`)}}>Agregar</button>
              </div>
          ))
          }

        </div>
    )
}

export { PizzasCards }