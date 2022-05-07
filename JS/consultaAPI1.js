// Query selectors
const bttnMeal = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');
const mealName = document.querySelector('[mealName]')
const mealArea = document.querySelector('[mealArea]')
const mealCategory = document.querySelector('[mealCategory]')
const mealTags = document.querySelector('[mealTags]')
const mealVideo = document.querySelector('[mealVideo]')


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
// category del platillo
console.log(meal.strCategory)
mealCategory.textContent = meal.strCategory;
// Tags del platillo
console.log(meal.strTags)
mealTags.textContent = meal.strTags;
// youtube o video del platillo
console.log(meal.strYoutube)
mealVideo.textContent = meal.strYoutube;
// cambiar imagen
let mealImage = meal.strMealThumb;
mealImg(mealImage);
};
const mealImg = (url) => {
    const mealImg = document.getElementById("mealImg")
    mealImg.src = url;
}
// https://www.florin-pop.com/blog/2019/09/random-meal-generator/