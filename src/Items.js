fetch("/Products.json")
    .then(resp=>resp.json())
    .then(datas=>{
        console.log(datas)
    })

function Items(){
    return(
        <section>
            <div className="Container-Card">
                <div className="titleProduct">

                </div> 
            </div>
        </section>
    )
}

export { Items }