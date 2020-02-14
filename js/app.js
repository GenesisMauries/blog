
fetch('js/data.json',{})
.catch(error => console.log(`Tienes este problemita: ${error.message}`))
.then((response) => response.json())
.then(datos => drawData(datos))



const drawData = (datos)=>{
  let data = datos.slice(-3)
  for (let i=0; i<data.length; i++){
    document.getElementById("recent").innerHTML+= `<div class="card mx-2 mt-2" style="width: 18rem;">
    <img src="~/${data[i].image}" class="card-img-top" alt="${data.title}" style="height: 250px;">
    <div class="card-body">
      <h5 class="card-title">${data[i].title}</h5>
         <button type="button" class="float-right btn btn-primary btn-leer" id="${data[i].id}" >
          Leer artículo
        </button>
      </div>
    </div>`
  }
  
}

  
  




