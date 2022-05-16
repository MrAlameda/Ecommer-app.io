import { useReducer } from "react"

import  { shopInitialState, shopReducers } from "../reducers/shopReducers"

import { TYPE } from "../actions/shopActions"

function Main(){
    const [prductState,dispatch]=useReducer(shopReducers,shopInitialState)

    const {productos,car,orden} = prductState

    let sumar=(a)=>{
        console.log(a)
    }
    return(
        <section className="main">
            <section className="pizzasMenu">
                <div className="pizzasPlace">
                    {productos.map((prod)=>
                    <div className="item" key={prod.id}>
                        {/* <img src={prod.img}/> */}
                        <h1>{prod.name}</h1>
                        <h3>${prod.precio}.00</h3>
                        <button className="btn" onClick={()=>{
                            dispatch({
                                type:TYPE.ADD_PRODUCT,
                                payload:prod
                            })
                        }}>Agregar</button>
                    </div>
                    )}
                </div>
            </section>
            <section className="Car">
                {car.map((item)=>
                    <div className="item" key={item.id}>
                        <div>{item.name}</div>
                        <div>${item.precio}.00</div>
                        <div>cantidad: {item.quantity}</div>
                        <button className="btn" onClick={()=>{
                            dispatch({
                                type:TYPE.REMOVE_PRODUCT,
                                payload:item.id
                            })
                        }}>Eliminar</button>
                    </div>
                )}
                
            </section>
            <section>
                <div>{orden}</div>
            <button onClick={()=>{
                dispatch({
                    type:TYPE.SUM_TOTAL,
                    payload:car
                })
            }}>calcular</button>
            
            <button onClick={()=>{
                sumar(car)
            }}>mostrar</button>
            <button onClick={()=>{
                sumar(orden)
            }}>orden</button>
            </section>
        </section>
    )
}

export { Main }