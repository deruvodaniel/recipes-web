window.addEventListener("DOMContentLoaded", function(event) { 

//Recipes Data
const recipes = [
	{
		"name": "pizza",
		"ingredients": ["harina", " tomate", " muzzarella"],
		"cant": [150, 100, 120],
		"steps": `Haz una masa y deja levar, luego agrega de salsa y queso Muzzarella. Cocina al horno durante 15 minutos`
	},
	{
		"name": "hamburguesa",
		"ingredients": ["carne", " pan", " queso"],
		"cant": [120, 180, 25],
		"steps": `Haz un medallón de carne, aplasta y cocina en la plancha. Agrega queso hasta derretir y haz un sanguche`
	},
	{
		"name": "papas",
		"ingredients": ["papas"],
		"cant": [200],
		"steps": `Corta las papas en bastones y luego fríelas en aceite durante 10 minutos`
	},
	{
		"name": "ensalada",
		"ingredients": ["lechuga", " tomate", " huevo", " pollo", " aceite", " limón"],
		"cant": [120, 80, 80, 120, 25, 25],
		"steps": `Corta todos los ingredientes en trozos pequeños, y luego mezcla en un bowl con aceite y limón`
	},
	{
		"name": "pasta",
		"ingredients": ["fideos", " salsa", " pollo", " queso"],
		"cant": [250, 125, 100, 50],
		"steps": `Haz una salsa con pollo y tomate. Hierve los fideos en agua con sal durante 10 minutos, luego mezclalos con la salsa y termina con queso rallado`
	},
]

//DOM Interaction

//Error
const errorModal = document.querySelector('.error');

//Inputs
const btn = document.querySelector('#btn');
const chooseRecipe = document.querySelector('#inputGroupSelect');
let comensales = document.querySelector('#comensales');
const reload = document.querySelector('#reload');

//Card
let cardImg= document.querySelector('.card-img-top');
let cardTitle = document.querySelector('.card-title');
let cardSubTitle = document.querySelector('.card-sub-title');
let cardIngredients = document.querySelector('.card-ingredients');
let cardCants = document.querySelector('.card-cants');
let cardSteps = document.querySelector('.card-steps');

// Calculating ingredients

const calcIngredients = function (ingredient) {
	return ingredient * comensales.value;
}

btn.onclick = (event) => {
	event.preventDefault();
	
	if (chooseRecipe.value && comensales.value > 0) {
		// Search match for recipes choose
		recipes.forEach(function (arrayItem) {
			const name = arrayItem.name;
			const steps = arrayItem.steps;
			const ingredients = arrayItem.ingredients;
			const cant = arrayItem.cant;
			const calc = [];
		
			if (name === chooseRecipe.value){
				for (let i = 0; i < cant.length; i++) {
					calc.push(calcIngredients(cant[i]));
				}

				//Show Result
				cardImg.src=`./src/img/${name}.png`;
				cardTitle.innerHTML = `${name}`;
				cardSubTitle.innerHTML = `👩‍🍳 Para tu receta vas a necesitar:`;
				cardIngredients.innerHTML = `Ingredientes: ${ingredients}`;
				cardCants.innerHTML = `Cantidades: ${calc} (gr).`;
				cardSteps.innerHTML = `Pasos a seguir: ${steps}`;

				//Swiching Visible components
				document.querySelector('.card').style.opacity = '1';
				document.querySelector('.inputs').style.opacity = '0';
				document.querySelector('.inputs').style.display = 'none';
				errorModal.style.opacity = '0';
				errorModal.style.display = 'none';
			}
		});
	} else {
		//Show error
		errorModal.style.opacity = '1';
		errorModal.style.display = 'block';
	}
};


reload.onclick = (event) => {
	event.preventDefault();
	location.reload();
};

});