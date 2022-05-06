window.addEventListener("DOMContentLoaded", function(event) { 

const chooseRecipe = prompt(`Busca tu receta Favorita:
pizza 🍕
hamburguesa 🍔
papas 🍟
ensalada🥗
pasta 🍝`);

let comensales = null;

if (chooseRecipe === 'pizza' ||
		chooseRecipe === 'hamburguesa' ||
		chooseRecipe === 'papas' ||
		chooseRecipe === 'ensalada' ||
		chooseRecipe === 'pasta') {

	comensales = prompt(`Cuántas personas van a comer?`);
	} else {
		alert(`Ingresa una receta Valida!`);
		alert(`Recarga la pagina para volver a empezar`);
	}


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
		"cant": [120, 1, 25],
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
		"cant": [120, 1, 1, 120, 25, 25],
		"steps": `Corta todos los ingredientes en trozos pequeños, y luego mezcla en un bowl con aceite y limón`
  },
	{
    "name": "pasta",
    "ingredients": ["fideos", " salsa", " pollo", " queso"],
		"cant": [250, 125, 100, 50],
		"steps": `Haz una salsa con pollo y tomate. Hierve los fideos en agua con sal durante 10 minutos, luego mezclalos con la salsa y termina con queso rallado`
  },
]

// Calculating ingredients

const calcIngredients = function (ingredient) {
	return ingredient * comensales;
}

// Search match for recipes choose

recipes.forEach(function (arrayItem) {
	const name = arrayItem.name;
	const steps = arrayItem.steps;
	const ingredients = arrayItem.ingredients;
	const cant = arrayItem.cant;


	if (name === chooseRecipe){
		for (let i = 0; i < cant.length; i++) {
			const calc = calcIngredients(cant[i]);
		}

		alert(`👩‍🍳 Para tu receta de ${name} vas a necesitar:
📍Ingredientes: ${ingredients}
⏲️Cantidades: ${cant} (gr).
📝Pasos a seguir: ${steps}`)
	}
});

});
