import { useState, useEffect } from "react"

import { PizzasCards } from "./PizzasCard"
import { ComplementCards } from "./ComplementsCard"

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

// ==========PEDIDOS==========================

let orden=[];

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

// menu de pizzas =========================

// menu de complementos ===================

    let [comple,setComple]=useState([])

    let complement=async(a)=>{
      let i=await a.complementos
      setComple(i)
  }

  useEffect(()=>{
    complement(comidas)
  },[])


// menu de complementos ===================
    return(
        <section className="main">
            <section className="menu">
                <PizzasCards
                  pizzas={pizza}
                />
            </section>
            <section >
                <ComplementCards
                  complements={comple}
                />
            </section>
            <section className="filterPlace">
                <Filter/>
            </section>
        </section>
    )
}

export { Main }