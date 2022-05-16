import { TYPE } from "../actions/shopActions";

import carnes from "../img/carnes.png"
import pepperoni from "../img/pepperoni.png"
import hawaiana from "../img/hawaiana.png"
import mexicana from "../img/mexicana.png"
import bigcola from "../img/bigCola.png"
import canelones from "../img/Canelones.png"
import pepsi from "../img/pepsi.png"
import panAjo from "../img/panAjo.png"

const shopInitialState={
    productos:[
      {
        id:1,
        img:pepperoni,
        name:"clasica",
        ingredientes:["pepperoni"],
        size:"meidana",
        precio:7
      },
      {
        id:2,
        img:mexicana,
        name:"mexicana",
        ingredientes:["pimiento","jalapeño","frijoles","chorizo","cebolla"],
        size:"meidana",
        precio:9
      },
      {
        id:3,
        img:carnes,
        name:"carnes",
        ingredientes:["pepperoni"],
        size:"meidana",
        precio:8
      },{
        id:4,
        img:hawaiana,
        name:"hawaiana",
        ingredientes:["jamon","piña"],
        size:"meidana",
        precio:9
      },
      {
        "id":5,
        img:pepsi,
        "name":"pepsi",
        "size":"3L",
        "precio":2
      },
      {
        "id":6,
        img:bigcola,
        "name":"Bigcola",
        "size":"3L",
        "precio":2
      },
      {
        "id":8,
        img:canelones,
        "name":"rollos de canela",
        "precio":5
      },
      {
        "id":9,
        img:panAjo,
        "name":"pan de ajo",
        "precio":4
      },
    ],
    car:[
    ],
    orden:[]
}

const shopReducers=(state,action)=>{
    switch(action.type){
        case TYPE.ADD_PRODUCT:{

          const newProduct=action.payload
          const carContainer=state.car.find(
            prod=>prod.id===newProduct.id
          )

          return carContainer?{
            ...state
            ,
            car:state.car.map(prod=>
              prod.id===newProduct.id?{...prod,quantity:prod.quantity+1}:prod
            )
          }
          :
          {
            ...state,
            car:[
              ...state.car,
              {...newProduct,quantity:1}
            ]
            
          }
        }
        case TYPE.REMOVE_PRODUCT:{
          return{
            ...state,
            car:state.car.filter((prod)=>prod.id!==action.payload)
          }
        }
        case TYPE.SUM_TOTAL:{
            let hola=action.payload

            let precioTotal=hola.map((x)=>x.precio*x.quantity)
            let sumaTotal=precioTotal.reduce((aft,bef)=>aft+bef,0)
            console.log(true?(sumaTotal):("adios"))
            return true?{...state,orden:sumaTotal}:("Compra algo")
        }
        // case TYPE.CLEAR_PRODUCTS:{
          
        // }
        //     break
        default :
            return state
            break
    }
}


export { shopInitialState , shopReducers }