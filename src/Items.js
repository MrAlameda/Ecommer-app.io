function Items(){
    let Url="../db/Products.json"
    let hola=(url)=>{
        fetch (url, {
            method: 'POST'
          })
          .then(res => res.json())
          .then(res => {
            if (res.success) {
              //mensaje correcto
            }else{
            //mensaje de error
            }
          })
          .catch(function() {
            alert("Can't connect to backend try latter");
          });
        }
    hola(Url)
    return(
        <div>
            <h1>hola</h1>
        </div>
    )
}

export { Items }