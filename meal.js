fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=a`)
    .then(res => res.json())
    .then(data => {
        display_card(data.meals);
    })
    .catch(err => {
        alert(err);
    });


function display_card(data) {
    const card = document.getElementById("menu");
    card.innerHTML = '';

    if (!data || data.length === 0) {
        alert("No elements found");
    } else {
        data.forEach(element => {
            const div = document.createElement("div");
            div.classList.add("Food-card");
            div.innerHTML = `
            
                <div class="Food-card-img">
                    <img src="${element.strMealThumb}" alt="" class="Food-card-image">
                </div>
                <div class="Food-card-informations ">
                    <h5>${element.strMeal}</h5>
                    <h5>${element.strCategory}</h5>
                    <h5>${element.strArea}</h5>
                    <button class="btn btn-primary"  onclick='Details(${JSON.stringify(element)})'>Details</button>
                </div>
            `;
            card.appendChild(div);
        });
    }
}

const input_data = document.getElementById("search");
input_data.addEventListener("input", fetch_and_display_menu);

function fetch_and_display_menu() {
    const query = input_data.value.trim();
    if (query) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
            .then(res => res.json())
            .then(data => {
                display_card(data.meals);
            })
            .catch(err => {
                alert(err);
            });
    } else {
        document.getElementById("menu").innerHTML = "";
    }
}

function valid(object) {
    if (object != null) return object;
}



// function Details(element){
//     const card = document.getElementsByClassName("modal-body")[0];
//     card.innerHTML = ''; 

//     const div = document.createElement("div");
//     div.classList.add("Food-cards-recipy");


//     let ingredientsList = '';
//     for (let i = 1; i <= 20; i++) {
//         const ingredient = element['strIngredient' + i];
//         if (ingredient && ingredient.trim() !== '') {
//             ingredientsList += `${ingredient}, `;
//         }
//     }

//     div.innerHTML = `

//     <div  class="Food-card-top ">
//                 <div class="Food-card-img-top">
//                     <img src="${element.strMealThumb}" alt="" class="Food-card-image  mx-auto">
//                 </div>
//                 <div class="Food-card-informations">
//                     <h5>Ingrredients:</h5><hr>
//                     <h5>${ingredientsList}</h5>
//                     </div>
//         </div>
//         <div class="dis w-100 text-center">
//             <p>${element.strInstructions}</p>
//         </div>


//     `;
//     card.appendChild(div);



// }


// function Details(element) {
//     const card = document.getElementsByClassName("modal-body")[0];
//     card.innerHTML = '';

//     const div = document.createElement("div");
//     div.classList.add("Food-cards-recipy");


//     let ingredientsList = '';
//     for (let i = 1; i <= 20; i++) {
//         const ingredient = element['strIngredient' + i];
//         if (ingredient && ingredient.trim() !== '') {
//             ingredientsList += `${ingredient}, `;
//         }
//     }

//     div.innerHTML = `
//    <div class="card " style="max-width: 100%">
//   <div class="row g-0">
//     <div class="">
//       <img src="${element.strMealThumb}" class="img-fluid rounded-start" alt="...">
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
//         <h5 class="card-title">${element.strMeal}</h5>
//         <p class="card-text"><small class="text-body-secondary">${ingredientsList}</small></p>
//         <p class="card-text">${element.strInstructions}</p>
//       </div>
//     </div>
//   </div>
// </div>


        
//     `;
//     card.appendChild(div);



// }





function Details(element) {
    const card = document.getElementsByClassName("modal-body")[0];
    card.innerHTML = '';

    const div = document.createElement("div");
    div.classList.add("Food-cards-recipy");


    let ingredientsList = '';
    for (let i = 1; i <= 20; i++) {
        const ingredient = element['strIngredient' + i];
        if (ingredient && ingredient.trim() !== '') {
            ingredientsList += `${ingredient}, `;
        }
    }

    div.innerHTML = `
    <div class="Food-card-img ">
                    <img src="${element.strMealThumb}" alt="" class="Food-card-image">
                </div>
                <div class="Food-card-informations">
                    <h3>${element.strMeal} </h3>
                    <div class="Food-card-informations">
                    <h5>Ingrredients:</h5><hr>
                    <h5>${ingredientsList}</h5>
                    </div>
                    <p class="details">${element.strInstructions}</p>
                </div>
        
    `;
    card.appendChild(div);



}
