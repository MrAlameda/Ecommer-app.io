import { useState, useEffect } from "react"

import { PizzasCards } from "./PizzasCard"
import { ComplementCards } from "./ComplementsCard"
import { Sodas } from "./SodasCard"
import { Ordenar } from "./Ordenar"

//=======LISTA DE PRODUCTOS===================

let comidas={
    "pizzas":[
      {
        "name":"clasica",
        "ingredientes":["pepperoni"],
        "size":"meidana",
        "precio":"7"
      },
      {
        "name":"mexicana",
        "ingredientes":["pimiento","jalapeño","frijoles","chorizo","cebolla"],
        "size":"meidana",
        "precio":"9"
      },
      {
        "name":"carnes",
        "ingredientes":["pepperoni"],
        "size":"meidana",
        "precio":"8"
      },{
        "name":"hawaiana",
        "ingredientes":["jamon","piña"],
        "size":"meidana",
        "precio":"9"
      }
    ],
    "sodas":[
      {
        "name":"pepsi",
        "size":"3L",
        "precio":"2"
      },
      {
        "name":"Bigcola",
        "size":"3L",
        "precio":"2"
      },
      {
        "name":"Fanta",
        "size":"3L",
        "precio":"1"
      },
    ],
    "complementos":[
      {
        "name":"rollos de canela",
        "precio":"5"
      },
      {
        "name":"pan de ajo",
        "precio":"4"
      },
    ],
    "igredientes":[
        "pepperoni",
        "frijoles",
        "jalapeño",
        "pimiento",
        "chorizo"
    ]
  }

//============================================

// ===========================================


function Filter(){
    return(
        <div>
            filter
        </div>
    )
}

function Main(){

// menu de pizzas =========================

    let [ pizza , setPizza ] = useState([])

    let pizzas=async(a)=>{
        let i=await a.pizzas
        setPizza(i)
    }

    useEffect(()=>{
      pizzas(comidas)
    },[])

// ===================++===================

// menu de complementos ===================

    let [comple,setComple]=useState([])

    let complement=async(a)=>{
      let i=await a.complementos
      setComple(i)
  }

  useEffect(()=>{
    complement(comidas)
  },[])

// ===================++===================

// menu de Sodas ==========================


let [soda,setSoda]=useState([])

let sodas=async(a)=>{
  let i=await a.sodas
  setSoda(i)
}

useEffect(()=>{
  sodas(comidas)
},[])

// ===================++===================

// orden ==================================
let newOrden =[]

let adOrden=(nameProduct,priceProduct)=>{
  let i={
    "name":nameProduct,
    "price":priceProduct
  }
  newOrden.push(i)
  console.log(newOrden)
}

let [pedir, setPedir] = useState([])

let pedidos=async(a)=>{
  let i=await a
  setPedir(i)
}

useEffect(()=>{
  pedidos(newOrden)
},[])


// ===================++===================


    return(
        <section className="main">
            <section className="pizzas">
                <PizzasCards
                  pizzas={pizza}
                  quiero={adOrden}
                />
            </section>
            <section className="complementos">
                <ComplementCards
                  complements={comple}
                  quiero={adOrden}
                />
            </section>
            <section className="sodas">
                <Sodas 
                sodas={soda}
                quiero={adOrden}
                />
            </section>
            <section className="filterPlace">
                <Ordenar
                   pedidos={pedir}
                />
            </section>
        </section>
    )
}

export { Main }