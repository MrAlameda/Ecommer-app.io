import { useReducer } from "react"

import  { shopInitialState, shopReducers } from "../reducers/shopReducers"

import { TYPE } from "../actions/shopActions"

function Main(){
    const [prductState,dispatch]=useReducer(shopReducers,shopInitialState)

    const {productos,car,orden} = prductState
    return(
        <section className="main">
            <section className="pizzasMenu">
                <h1>Productos</h1><br/>
                <section className="pizzasPlace">
                    {productos.map((prod)=>
                    <div className="item" key={prod.id}>
                        <img src={prod.img}/>
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
                </section>
            </section>
            <section className="car">
                <h1>Carrito</h1>
                <section className="carPlace">
                {car.map((item)=>
                    <div className="item" key={item.id}>
                        <div>{item.name}</div>
                        <div>${item.precio}.00</div>
                        <div>cantidad: {item.quantity}</div>
                        <button className="btn btnRed" onClick={()=>{
                            dispatch({
                                type:TYPE.REMOVE_PRODUCT,
                                payload:item.id
                            })
                        }}>Eliminar</button>
                    </div>
                )}
                </section>
            </section>
            <section className="Total">
                <h1>Cuenta</h1>
                <div className="item itemTotal">
                    <div>Total:${orden}</div>
                
                    <button className="btn btnGreen" onClick={()=>{
                        dispatch({
                        type:TYPE.SUM_TOTAL,
                        payload:car
                    })}}>calcular</button>
                </div>
            </section>
        </section>
    )
}

export { Main }