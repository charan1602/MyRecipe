let faV_div = document.getElementById("card_container")
let array_elements = JSON.parse(localStorage.getItem("favorites"))
console.log(array_elements)
// for(let i =0 ;i<array_elements.length;i++){
//     console.log(array_elements[i])
// }
for(let i =0 ;i<array_elements.length; i++){
    console.log(array_elements[i].recipe.label)
    let card = document.createElement("div")
    card.setAttribute("class","card_items")
    card.setAttribute("data-value",`${i}`)
    let imgurl=array_elements[i].recipe.image
    card.innerHTML=`
    <div class="image">
    <img src="${imgurl}"  alt="wait"> 
    </div>
    <div class="calories">
    <h2 class="heading">${array_elements[i].recipe.label}</h2>
    <h4 class="details"><strong >Calories:-</strong>${array_elements[i].recipe.calories.toFixed(3)}</h4>
    <h4 class="details"><strong >CuisineType:-</strong>${array_elements[i].recipe.cuisineType[0]}</h4>
    </div>
    <div class="buttons">
     <button class="instructions">Instructions</button>
     <button class="ingredients">Ingredients</button>
     </div>
     <button class="remove">Remove</button>
    `
    faV_div.appendChild(card)
}
let remove = document.querySelectorAll(".remove")
remove.forEach((button)=>{
    button.addEventListener("click",()=>{
       parent = this.ParentElement
       let key = array_elements.
    })
})