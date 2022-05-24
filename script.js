window.addEventListener("DOMContentLoaded", function(event) { 
  window.scrollTo({ top: 0, behavior: 'smooth' });

//Recipes Data
const recipes = [
	{
		name: "pizza",
		ingredients: ["harina", " tomate", " muzzarella"],
		cant: [150, 100, 120],
		steps: `Haz una masa y deja levar, luego agrega de salsa y queso Muzzarella. Cocina al horno durante 15 minutos`
	},
	{
		name: "hamburguesa",
		ingredients: ["carne", " pan", " queso"],
		cant: [120, 180, 25],
		steps: `Haz un medallón de carne, aplasta y cocina en la plancha. Agrega queso hasta derretir y haz un sanguche`
	},
	{
		name: "papas",
		ingredients: ["papas"],
		cant: [200],
		steps: `Corta las papas en bastones y luego fríelas en aceite durante 10 minutos`
	},
	{
		name: "ensalada",
		ingredients: ["lechuga", " tomate", " huevo", " pollo", " aceite", " limón"],
		cant: [120, 80, 80, 120, 25, 25],
		steps: `Corta todos los ingredientes en trozos pequeños, y luego mezcla en un bowl con aceite y limón`
	},
	{
		name: "pasta",
		ingredients: ["fideos", " salsa", " pollo", " queso"],
		cant: [250, 125, 100, 50],
		steps: `Haz una salsa con pollo y tomate. Hierve los fideos en agua con sal durante 10 minutos, luego mezclalos con la salsa y termina con queso rallado`
	},
  {
		name: "empanadas",
		ingredients: [" masa", " carne", " cebolla", " morron"],
		cant: [1000, 800, 500, 250],
		steps: `Haz 25 tapas de empanadas con tu masa, cocina las verduras y luego agrega la carne. Por último rellena las empanadas y hornea por 50min`
	},
  {
		name: "guiso",
		ingredients: ["lentejas", " morron", " cebolla", " salsa", "panceta"],
		cant: [250, 125, 100, 50, 600],
		steps: `Hierve las lentejas durante 30min, cocina la panceta y las verduras, luego agrega salsa y las lentejas. Cocina durante 30 min`
	},
  {
		name: "milanesas",
		ingredients: ["carne", " pan rallado", " huevo", " perejil"],
		cant: [150, 80, 100, 50],
		steps: `Pasa la carne por harina, luego por huevo previo mezclado con ajo y perejil. Empana y golpea fuerte. Luego fríelas en aceite durante 10 min.`
	},
]

let selectedRecipes = [];

//DOM Interaction

//Error
const errorModal = document.querySelector('.error');

//Inputs
const btn = document.querySelector('#btn');
const chooseRecipe = document.querySelector('#inputGroupSelect');
let comensales = document.querySelector('#comensales');
const reload = document.querySelector('#reload');
const btnMath = document.querySelector('#btn-math');
const addRecipe = document.querySelector('#add-recipe');

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
			const calc = [];
		
			if (arrayItem.name === chooseRecipe.value){
				for (let i = 0; i < arrayItem.cant.length; i++) {
					calc.push(calcIngredients(arrayItem.cant[i]));
				}

				//Show Result
				cardImg.src=`./src/img/${arrayItem.name}.png`;
				cardTitle.innerHTML = `${arrayItem.name}`;
				cardSubTitle.innerHTML = `👩‍🍳 Para tu receta vas a necesitar:`;
				cardIngredients.innerHTML = `Ingredientes: ${arrayItem.ingredients}`;
				cardCants.innerHTML = `Cantidades: ${calc} (gr).`;
				cardSteps.innerHTML = `Pasos a seguir: ${arrayItem.steps}`;

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

addRecipe.onclick = (event) => {
	event.preventDefault();
  if (chooseRecipe.value && comensales.value > 0) {
    recipes.forEach(function (arrayItem) {
      if (arrayItem.name === chooseRecipe.value){
        // Save selection on storage
      selectedRecipes.push(arrayItem);
    
      let saveInStorage = (clave, valor) => {
        localStorage.setItem(clave, valor);
      }
    
      const json = JSON.stringify(selectedRecipes);
    
      for (const recipe of selectedRecipes) {
        saveInStorage(recipe.name, JSON.stringify(recipe))
      }
      console.log('add');
      }
    });
  }
};

reload.onclick = (event) => {
	event.preventDefault();
	location.reload();
};

// Show recipes selected list

Object.keys(localStorage).map(function(key, index) {
  const item = JSON.parse(localStorage[key]);
  const recipesSelectedList = document.querySelector('.selected-recipes-list');
  let li = document.createElement('li');
  li.innerHTML = `${item.name}`;
  recipesSelectedList.appendChild(li);
});

// calc ingredients

btnMath.onclick = (event) => {
  Object.keys(localStorage).map(function(key, index) {
    const item = JSON.parse(localStorage[key]);
    const recipesSelectedCalc = document.querySelector('.selected-recipes-calc');
    let liIngredients = document.createElement('li');
    let liCants = document.createElement('li');
    liIngredients.innerHTML = `${item.ingredients}`;
    liCants.innerHTML = `${item.cant}`;
    recipesSelectedCalc.appendChild(liIngredients);
    recipesSelectedCalc.appendChild(liCants);
  });
}
});