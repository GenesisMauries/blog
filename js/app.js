const articleContainer = document.getElementById('textBlog')
const fetchData = () => {
  fetch('js/data.json', {})
    .catch(error => console.log(`Tienes este problemita: ${error.message}`))
    .then((response) => response.json())
    .then(datos => drawData(datos))
}

const drawData = (datos)=>{
  for(data of datos.slice(-3)){
    document.getElementById("recent").innerHTML+= `<div class="card mx-2 mt-2" style="width: 12rem;">
    <img src="${data.image}" class="card-img-top" alt="${data.title}" style="height: 150px;">
    <div class="card-body ">
      <h5 class="card-title">${data.title.length<25? data.title: data.title.substring(0,26)+'...'}</h5>
        <button type="button" class="float-right align-text-bottom btn btn-primary article " id="${data.id}">
          Leer artículo
        </button>
      </div>
    </div>`
  }
  const articles = document.getElementsByClassName('article')
  Array.from(articles).forEach(element => element.addEventListener('click', () => {showArticle(element.id, datos), articleRel(datos)}))
}
const showArticle = (id, data) => {
  articleContainer.innerHTML = ''
  const article = data.find(element => element.id === id)
  articleContainer.innerHTML = `<h2 class="text-center mt-1">${article.title}</h2>
  <h5 class="text-left">${article.category}</h5>
  <p class="font-weight-light text-muted">Este artículo es informativo... </p>
  <p class="text-justify mt-3">${article.text}</p>`
  window.location.href = '#textBlog'
}
const articleRel=(datos)=>{
  for(data of datos.slice(0,4)){
    document.getElementById("articleRela").innerHTML+= `<div class="card text-white bg-info mt-2">
    <div class="card-body text-center">
        <img src="${data.image}" class="card-img-top" alt="${data.title}" style="height: 100px;">
        <p class="card-text">${data.title}</a>
        <button type="button" class="btn btn-warning article" id="${data.id}">
          Leer artículo
        </button>
    </div>
  </div>`
  document.getElementById("relaArticle").innerHTML+= `<div class="col-4 offset-1 ">
  <div class="card text-white bg-info mt-2">
      <div class="card-body text-center">
          <img src="${data.image}" class="card-img-top" alt="${data.title}" style="height: 100px;">
          <p class="card-text">${data.title}</a>
          <button type="button" class="btn btn-warning article mt-1" id="${data.id}">
          Leer artículo
          </button>
      </div>
</div>
</div>`
  }
  const articles = document.getElementsByClassName('article')
  Array.from(articles).forEach(element => element.addEventListener('click', () => {showArticle(element.id, datos)}))
  
}

window.onload = fetchData()

