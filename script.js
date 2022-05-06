window.addEventListener("DOMContentLoaded", function(event) { 

const chooseRecipe = prompt(`Busca tu receta Favorita:
Pizza🍕
Hamburguesa🍔
Papas🍟
Ensalada 🥗
Pasta🍝`);

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
    "ingredients": ["harina", "tomate", "muzza"],
		"cant": [150, 100, 150],
		"steps": `Haz una masa con y deja levar, luego agrega de salsa y  queso. Cocina al horno durante 15 minutos`
  },
	{
    "name": "hamburguesa",
    "ingredients": ["carne", "pan", "queso"],
		"cant": [120, 1, 25],
		"steps": `Haz un medallón de carne, aplasta y cocina en la plancha. Agrega queso hasta derretir y haz un sanguche`
  },
	{
    "name": "papas",
    "ingredients": ["papas"],
		"steps": `Corta las papas en bastones y luego fríelas en aceite durante 10 minutos`
  },
	{
    "name": "ensalada",
    "ingredients": ["lechuga", "tomate", "huevo", "pollo", "aceite", "limón"],
		"steps": `Corta todos los ingredientes en trozos pequeños, y luego mezcla en un bowl con aceite y limón`
  },
	{
    "name": "pasta",
    "ingredients": ["fideos", "salsa", "pollo", "queso"],
		"steps": `Haz una salsa con pollo y tomate. Hierve los fideos en agua con sal durante 10 minutos, luego mezclalos con la salsa y termina con queso rallado`
  },
]

console.log(chooseRecipe, comensales, recipes[1].cant);


});
