fetch('js/data.json',{})
.catch(error => console.log(`Tienes este problemita: ${error.message}`))
.then((response) => response.json())
.then(datos => drawData(datos))

const drawData = (datos)=>{
  for(data of datos.slice(-3)){
    document.getElementById("recent").innerHTML+= `<div class="card mx-2 mt-2" style="width: 18rem;">
    <img src="${data.image}" class="card-img-top" alt="${data.title}" style="height: 250px;">
    <div class="card-body">
      <h5 class="card-title">${data.title}</h5>
        <button type="button" class="float-right btn btn-primary" id="${data.id}" onClick="more(id, data)">
          Leer artículo
        </button>
      </div>
    </div>`
  }
}

const more =(id,data)=>{
  document.getElementById("textBlog").innerHTML+=`<h2 class="text-center mt-1">${data.title}</h2>
  <h5 class="text-left">${data.category}</h5>
  <p class="text-justify mt-3">${data.text}</p>`

console.log(id,data)
}


