fetch("./Products.json")
    .then(resp=>resp.json())
    .then(datas=>{
        return datas 
    })

function Items(){
    return(
        <section>
            <div className="Container-Card">
                <div className="titleProduct">
                    hola
                </div> 
            </div>
        </section>
    )
}

export { Items }