let card_container = document.getElementById("card_container")
let recipie_url = ("https://api.edamam.com/search?&app_id=58257113&app_key=a6a377d2cd0fefbdaf8c0cdec160df43&q=")
async function check(recipes) {
    let response = await fetch(recipie_url+recipes)
    let data = await response.json()
    // console.log(data)
      let matches = data.hits
      console.log(matches) 
    console.log(matches[0].recipe.calories)
    card_container.innerHTML=""
    for(let i =0 ;i<matches.length; i++){
        let card = document.createElement("div")
        card.setAttribute("class","card_items")
        let imgurl=matches[i].recipe.image
        card.innerHTML=`
        <div class="image">
        <img src="${imgurl}"  alt="fucking wait"> 
        </div>
        <div class="calories">
        <h2 class="heading">${matches[i].recipe.label}</h2>
        <h4 class="details"><strong >Calories:-</strong>${matches[i].recipe.calories.toFixed(3)}</h4>
        <h4 class="details"><strong >CuisineType:-</strong>${matches[i].recipe.cuisineType[0]}</h4>
        </div>
        <div class="icon"><i class="fas fa-heart"></div>
        <div class="buttons">
         <button id="instructions">Instructions</button>
         <button id="ingredients">Ingredients</button>
        </div>
        `
        card_container.appendChild(card)
    }
    let instructions = getElementById("instructions")
    instructions.addEventListener("click",()=>{
        window.location.href="$"
    })
}

   

let searched_data = document.getElementById("search_input")
let search_btn = document.getElementById("search")
search_btn.addEventListener("click",(e)=>{
    e.preventDefault()
    // card()
    let ext_data = searched_data.value
    let x = check(ext_data)
})



