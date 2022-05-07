// Query selectors
const bttnMeal = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');
const mealName = document.querySelector('[mealName]')
const mealArea = document.querySelector('[mealArea]')

// evento que funcionara como event listener y hacer la consulta a la API
// para hacer uso de la api haemos uso de las promesas por medio del metodo fetch
//  programacion asincrona
bttnMeal.addEventListener('click', () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => res.json())
        .then(res => {
            createMeal(res.meals[0]);
            console.log(res) //impresion de datos en pantalla para trabajar con ellos
        })
        .catch(e => {
            console.warn(e);
        });
});
//Funcion para realizar la creacion de las comidas y acomodar los datos obtenidos
const createMeal = meal => {
        // arreglo que almacenara los ingredientes
        const ingredients = [];
        // obtencion de los primeros 20 ingredientes
        for (let i = 1; i <= 20; i++) {
            if (meal[`strIngredient${i}`]) {
                // agrega ingredientes al arreglo
                ingredients.push(
                        `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
    } else {
        // sale del ciclo en caso de que no se encuentren ingredientes
        break;
    }
}
// Modificacion de datos
// Nombre de platillo
console.log(meal.strMeal)
mealName.textContent = meal.strMeal;
// Area o pais del platillo
console.log(meal.strArea)
mealArea.textContent = meal.strArea;
// const newInnerHTML = `
// <div class="row">
// <div class="columns five">
//     <img src="${meal.strMealThumb}" alt="Meal Image">
//     ${
//         meal.strCategory
//             ? `<p><strong>Category:</strong> ${meal.strCategory}</p>`
//             : ''
//     }
//     ${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
//     ${
//         meal.strTags
//             ? `<p><strong>Tags:</strong> ${meal.strTags
//                     .split(',')
//                     .join(', ')}</p>`
//             : ''
//     }
//     <h5>Ingredients:</h5>
//     <ul>
//         ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
//     </ul>
// </div>
// <div class="columns seven">
//     <h4>${meal.strMeal}</h4>
//     <p>${meal.strInstructions}</p>
// </div>
// </div>
// ${
// meal.strYoutube
//     ? `
// <div class="row">
// <h5>Video Recipe</h5>
// <div class="videoWrapper">
//     <iframe width="420" height="315"
//     src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
//     </iframe>
// </div>
// </div>`
//     : ''
// }
// `;

// meal_container.innerHTML = newInnerHTML;
};