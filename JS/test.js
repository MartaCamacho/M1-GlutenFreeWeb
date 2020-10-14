//API KEY 1 - c0579e462a3848dc96338129e0a230f9 
//API KEY 2 - a112c4d2e68f43d482bbf42cf5b6994b
//API KEY 3 - 99a9e25d870940849ebc295e3f83c4e9 
//API KEY 4 - 05cb6366852147739a94b6a50e21bf21 
//API KEY 5 - 43999b205346422a8c4111173508a428
//API KEY 6 - 07e47d692db0410fbc73a5ffdfec4b08 


// const limit_size_screen = window.matchMedia('screen and (max-width: 768px)');
// const bars = document.querySelector('.bars');
// const barsButton = document.querySelector('#bars-button');

// function validation(event) {
// 	if (event.matches) {
// 		barsButton.addEventListener('click', hideShow);
// 	} else {
// 		barsButton.removeEventListener('click', hideShow);
// 	}
// }
// validation(limit_size_screen);

// function hideShow() {
// 	if (bars.classList.contains('is-active')) {
// 		bars.classList.remove('is-active');
// 	} else {
// 		bars.classList.add('is-active');
// 	}
// }


// //test a ver si puedo meter la info

// let newRandomRecipe = document.createElement('div');

// let divRandom = document.getElementById('randomRecipe');

// divRandom.appendChild(newRandomRecipe)































//la wena es esta en teoría



async function getRecipes() {
    const recipeResponse = await fetch(
      "https://api.spoonacular.com/recipes/complexSearch?diet=glutenfree&number=10&apiKey=07e47d692db0410fbc73a5ffdfec4b08"
    );
    const recipeJSON = await recipeResponse.json();
    const profiles = recipeJSON.results.map(async (recipe) => {
      const id = recipe.id;
      const profileResponse = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?&apiKey=07e47d692db0410fbc73a5ffdfec4b08`
      );
      const profileJSON = await profileResponse.json();
      return profileJSON;
    });
    return Promise.all(profiles);
  }
  const divRecipeinfo = document.getElementById("recipes");
  function generateHTML(data) {
    data.map((recipe) => {
      const recipes = document.createElement("div");
      divRecipeinfo.appendChild(recipes);
      recipes.innerHTML = `
      <a href="${recipe.sourceUrl} alt="${recipe.title}">  <img src='${recipe.image}'>
      <span>${recipe.title}</span>
      <h2>${recipe.summary}</h2><a/>
              `;
    });
  }
  async function getElements() {
    const recipes = await getRecipes();
    generateHTML(recipes);
  }
  getElements();




  // esta es la que hice con erik y se quedó pillada

      //variable for all the descriptions
	  const getRecipesDescription = async() => {
		const responseId = await fetch(`https://api.spoonacular.com/recipes/${getRecipes.id}/information?&apiKey=99a9e25d870940849ebc295e3f83c4e9`);
		const recipeId = await responseId.json();
	
		let allRecipesInfo = recipeId.results.map(async oneRecipe => {
		const recipeDescription = await document.createElement('div');
			
		recipe.innerHTML = await ` <img class="recipePhoto" src= "${oneRecipe.image}" alt="${oneRecipe.title}" > <p>&#127860 ${oneRecipe.title}</p> <p> ${oneRecipe.instructions}</p>`;
		await divRecipeinfo.appendChild(recipeDescription);
		});
		}