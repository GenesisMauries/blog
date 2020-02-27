const articleContainer = document.getElementById('textBlog')
const fetchData = () => {
  fetch('js/data.json', {})
    .catch(error => console.log(`Tienes este problemita: ${error.message}`))
    .then((response) => response.json())
    .then(datos => drawData(datos))
}

const drawData = (datos)=>{
  for(data of datos.slice(-3)){
    document.getElementById("recent").innerHTML+= `<div class="card mx-2 mt-2" style="width: 18rem;">
    <img src="${data.image}" class="card-img-top" alt="${data.title}" style="height: 250px;">
    <div class="card-body">
      <h5 class="card-title">${data.title}</h5>
        <button type="button" class="float-right btn btn-primary article" id="${data.id}">
          Leer artículo
        </button>
      </div>
    </div>`
  }
  const articles = document.getElementsByClassName('article')
  Array.from(articles).forEach(element => element.addEventListener('click', () => {showArticle(element.id, datos)}))
}

const showArticle = (id, data) => {
  articleContainer.innerHTML = ''
  const article = data.find(element => element.id === id)
  articleContainer.innerHTML = `<h2 class="text-center mt-1">${article.title}</h2>
  <h5 class="text-left">${article.category}</h5>
  <p class="text-justify mt-3">${article.text}</p>`
}

window.onload = fetchData()

