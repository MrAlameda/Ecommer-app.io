import { TYPE } from "../actions/shopActions";

export const shopInitialState={
    pizzas:[
      {
        id:1,
        name:"clasica",
        ingredientes:["pepperoni"],
        size:"meidana",
        precio:"7"
      },
      {
        id:2,
        name:"mexicana",
        ingredientes:["pimiento","jalapeño","frijoles","chorizo","cebolla"],
        size:"meidana",
        precio:"9"
      },
      {
        id:3,
        name:"carnes",
        ingredientes:["pepperoni"],
        size:"meidana",
        precio:"8"
      },{
        id:4,
        name:"hawaiana",
        ingredientes:["jamon","piña"],
        size:"meidana",
        precio:"9"
      }
    ],
    sodas:[
      {
        "id":5,
        "name":"pepsi",
        "size":"3L",
        "precio":"2"
      },
      {
        "id":6,
        "name":"Bigcola",
        "size":"3L",
        "precio":"2"
      },
      {
        "id":7,
        "name":"Fanta",
        "size":"3L",
        "precio":"1"
      },
    ],
    complementos:[
      {
        "id":8,
        "name":"rollos de canela",
        "precio":"5"
      },
      {
        "id":9,
        "name":"pan de ajo",
        "precio":"4"
      },
    ],
    car:[]
}

export const shopReducers=(state,action)=>{
    switch(action.type){
        case TYPE.ADD_PRODUCT:{
          let newItem=state.pizzas.find((prduct)=>prduct.id===action.payload)
          console.log(newItem)
        }
            break
        case TYPE.REMOVE_PRODUCT:{

        }
            break
        case TYPE.REMOVE_ALL_PRODUCTS:{

        }
            break
        case TYPE.CLEAR_PRODUCTS:{

        }
            break
        default :
            return state
            break
    }
}