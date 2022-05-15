import { useReducer } from "react"

import { shopInitialState, shopReducers } from "../reducers/shopReducers"

import { Productos } from "./Productos"
import { Complementos } from "./Complementos"
import { Sodas } from "./Sodas"
import { Car } from "./Car"
import { TYPE } from "../actions/shopActions"

function Main(){
    const [state,dispatch]=useReducer(shopReducers,shopInitialState)

    const {pizzas,sodas,complementos,car} = state

    const addToCar=(id)=>{
        console.log(id)
        // dispatch({type:TYPE.ADD_PRODUCT,payload:id})
    }

    const removeToCar=()=>{
        
    }

    const clearCar=()=>{
        
    }


    return(
        <section className="main">
            <section className="pizzasMenu">
                <div className="pizzasPlace">
                    {pizzas.map((pizza)=><Productos 
                    key={pizza.id}
                    data={pizza}
                    addToCar={addToCar}/>
                )}
                </div>
            </section>
            <section className="complementsMenu">
                <div className="complementsPlace">
                   {complementos.map((complements)=><Complementos 
                        key={complements.id}
                        data={complements}
                        addToCar={addToCar}/>
                    )}
                </div>
            </section>
            <section className="sodasMenu">
                <div className="sodasPlace">
                    {sodas.map((complements)=><Sodas 
                        key={complements.id}
                        data={complements}
                        addToCar={addToCar}/>
                    )}
                </div>
            </section>
            <section className="Carrito">
                {
                    <>hola</>||car.map((item,index)=>
                        <Car 
                            key={index}
                            data={item}
                            removeToCar={removeToCar}
                        />
                )}
                <button onClick={clearCar}>Limpiar Carrito</button>
            </section>
        </section>
    )
}

export { Main }