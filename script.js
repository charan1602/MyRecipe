let card_container = document.getElementById("card_container")
let error = document.getElementById("error")
let fav_page = document.getElementById("fav_page")
let def = document.getElementById("default")
let popup = document.getElementById("popup")
// console.log(popup)
// let got_array = []
let favorites = document.querySelectorAll(".favorites")
let recipie_url = ("https://api.edamam.com/search?&app_id=58257113&app_key=a6a377d2cd0fefbdaf8c0cdec160df43&q=")
async function check(recipes) {
    try{
        def.innerHTML=""
        error.innerHTML=""
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
        card.setAttribute("data-value",`${i}`)
        let imgurl=matches[i].recipe.image
        card.innerHTML=`
        <div class="image">
        <img src="${imgurl}"  alt="wait"> 
        </div>
        <div class="calories">
        <h2 class="heading">${matches[i].recipe.label}</h2>
        <h4 class="details"><strong >Calories:-</strong>${matches[i].recipe.calories.toFixed(3)}</h4>
        <h4 class="details"><strong >CuisineType:-</strong>${matches[i].recipe.cuisineType[0]}</h4>
        </div>
        <div class="buttons">
         <button class="instructions">Instructions</button>
                  <button type="button" class="ingredients" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ingredients</button>
         </div>
         <button class="favorites">Add to Favorites</button>
        `
        card_container.appendChild(card)
    }
    // let heading = document.querySelectorAll(".heading")
    // let 
    // let h_value = heading.value
    // console.log(h_value)
    let instruction = document.querySelectorAll(".instructions")
     instruction.forEach((button)=> {
        button.addEventListener("click",function (){
        let element =  this.parentElement
        let data = element.parentElement
        // console.log(data)
        // console.log(this.heading)
        // let h_value = data.querySelector("heading").innerText
        let key = data.getAttribute("data-value")
        // console.log(key)
       let instruction_link = matches[key].recipe.url
        window.location.href=`${instruction_link}`
        })
     });
     fav_page.addEventListener("click",()=>{
            window.location.href="favorites.html"
     })
    // let item = document.getElementById("main_cont")
    let ingredient = document.querySelectorAll(".ingredients")
      ingredient.forEach((button) => {
        button.addEventListener("click",function (e){
            // console.log(button)
            e.preventDefault()
            
            let parent = this.parentElement
            let grandparent = parent.parentElement
            // console.log(grandparent)
            let key = grandparent.getAttribute("data-value")
            let count = matches[key].recipe.ingredients
            console.log(count)
            popup.innerHTML=""
            // console.log(popup)
            for(let i =0 ; i<count.length;i++){
                popup.innerHTML+=`
                   <div><strong>${count[i].food}:-</strong>${count[i].text}</div>
                `
            }
           
            // console.log(key)
            // let slidein = document.getElementsByClassName("slide_in")
            // console.log(slidein.innerHTML)
            // slidein.style.display = "block"
            // let slidein_div = document.createElement("div")
            // slidein_div.innerHTML=`
            // <h1>${matches[key].recipe.dishType}</h1>

            // `
            // slidein.appendChild(slidein_div)

        })
    });
    
    let favorites = document.querySelectorAll(".favorites")
    favorites.forEach((button)=>{
        button.addEventListener("click",function(){
            let parent = this.parentElement    
            let key = parent.getAttribute("data-value")
            // console.log(key)
            let got_array = JSON.parse(localStorage.getItem("favorites")) || []
            let key_value = matches[key]
            // console.log(got_array)
            let present=0
            for(let i=0;i<got_array.length;i++){            
                    // console.log(got_array[i])
                    console.log(key_value)
                if(got_array[i].recipe.label == key_value.recipe.label)
                 {
                    present = present+1
                 }             
            }
            console.log(present)
           if(present !=1){
            got_array.push(key_value)
            localStorage.setItem("favorites",JSON.stringify(got_array))
           }
           else{
            alert("This recepie is alredy added to favorites")
             button.disabled = "true"
           }
           
            // console.log(favorite_array)
            // console.log(key_value)
            // let unique_key = `${recipes}_${key}`
            // console.log(unique_key)
        //    let output = JSON.parse(localStorage.getItem("favorites")) 
        //    console.log(output)
        })
    })

    }
    catch{
        // console.log(def)
        card_container.innerHTML=""
        def.innerHTML=""
        error.innerHTML=""
        error_data = document.createElement("div")
        error_data.setAttribute("id","error_div")
        error_data.innerHTML=`
        <h3>Something</h3>
        <img src="img/th-removebg-preview.png" alt="Bootstrap" width="400" height="400">
        <h3>Went wrong</h3>
        `
        error.appendChild(error_data)
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

// localStorage.clear()