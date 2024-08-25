let card_container = document.getElementById("card_container")
let recipie_url = ("https://api.edamam.com/search?&app_id=58257113&app_key=a6a377d2cd0fefbdaf8c0cdec160df43&q=")
async function check(recipes) {
    let response = await fetch(recipie_url+recipes)
    let data = await response.json()
    // console.log(data)
      let matches = data.hits
      console.log(matches) 
    console.log(matches[0].recipe.calories)
    for(let i =0 ;i<matches.length; i++){
        let card = document.createElement("div")
        card.setAttribute("class","card_items")
        let imgurl=matches[i].recipe.image
        card.innerHTML=`
        <div id="image">
        <img src="${imgurl}"  alt="funcking wait"> 
        </div>
        <div id="calories">
       <h4><strong>Calories:-</strong>${matches[i].recipe.calories.toFixed(3)}</h4>
        </div>
        `
        card_container.appendChild(card)
    }
}

   

let searched_data = document.getElementById("search_input")
let search_btn = document.getElementById("search")
search_btn.addEventListener("click",(e)=>{
    e.preventDefault()
    // card()
    let ext_data = searched_data.value
    let x = check(ext_data)
})



