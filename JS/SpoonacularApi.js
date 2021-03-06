//API KEY 1 - c0579e462a3848dc96338129e0a230f9 
//API KEY 2 - a112c4d2e68f43d482bbf42cf5b6994b
//API KEY 3 - 99a9e25d870940849ebc295e3f83c4e9 
//API KEY 4 - 05cb6366852147739a94b6a50e21bf21
//API KEY 5 - 43999b205346422a8c4111173508a428
//API KEY 6 - 7f0c4697ea0844dab974a6aec315fb6b





// //variable to get all the recipes from the API:

const getRandomRecipe = async() => {
    
    //get all the recipes from the API
    const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?diet=glutenfree&number=100&apiKey=99a9e25d870940849ebc295e3f83c4e9");
    const recipe = await response.json();
    const arrayRecipes = recipe.results;
    
    //get a random recipe
    const randomNum = Math.floor((Math.random()) * (arrayRecipes.length));
    const objRecipe = arrayRecipes[randomNum];
    const objRecipeId = objRecipe.id;
    
    //get the detailes info of the random recipe
    const responseId = await fetch(`https://api.spoonacular.com/recipes/${objRecipeId}/information?&apiKey=99a9e25d870940849ebc295e3f83c4e9`);
    const recipeId = await responseId.json();
    
    return recipeId;
    }
    
    getRandomRecipe()





//CODE FOR GETTING INFO FROM THE API

async function getRecipes() {
    const recipeResponse = await fetch(
      "https://api.spoonacular.com/recipes/complexSearch?diet=glutenfree&number=2&apiKey=c0579e462a3848dc96338129e0a230f9 "
    );
    const recipeJSON = await recipeResponse.json();
    const profiles = recipeJSON.results.map(async (recipe) => {
      const id = recipe.id;
      const profileResponse = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?&apiKey=c0579e462a3848dc96338129e0a230f9 `
      );
      const profileJSON = await profileResponse.json();
      return profileJSON;
    });
    return Promise.all(profiles);
  }


  const divRecipeinfo = document.querySelector(".recipe-full-list");


  function generateHTML(data) {
    
    data.map((recipe) => {
        const recipes = document.createElement("div");
        if (recipe.instructions !== null) {
            recipes.innerHTML = `
            <img class="recipePhoto" src='${recipe.image}'>
                    <span class="recipe-title">${recipe.title}</span>
                    <p>${recipe.instructions}</p>`;
                    divRecipeinfo.appendChild(recipes);
            } else {
                recipes.innerHTML = `
                <img class="recipePhoto" src='${recipe.image}'>
                <span class="recipe-title">${recipe.title}</span>
                <p>${recipe.summary}</p>`;
                divRecipeinfo.appendChild(recipes);
            }
  });
}


  async function getElements() {
    const recipes = await getRecipes();
    generateHTML(recipes);
  };
  getElements();

// END OF CODE FOR GETTING INFO FROM THE API




// CODE FOR GETTING THE RANDOM RECIPE


    const divRandomRecipeinfo = document.querySelector(".random-recipe");
    
    
    function generateRdmHTML(rdmData) {
    
        const randomRecipes = document.createElement("div");
        if (rdmData.instructions !== null) {
            randomRecipes.innerHTML = `
            <img src='${rdmData.image}'>
            <span>${rdmData.title}</span>
            <h2>${rdmData.instructions}</h2>`;
                    divRandomRecipeinfo.appendChild(randomRecipes);
        } else {
            randomRecipes.innerHTML = `
            <img src='${rdmData.image}'>
            <span>${rdmData.title}</span>
            <h2>${rdmData.summary}</h2>`;
            divRandomRecipeinfo.appendChild(randomRecipes);
            }
    }
    async function getRandomElements() {
        const recipes = await getRandomRecipe();
        generateRdmHTML(recipes);
    };
    
    getRandomElements();

//END OF CODE FOR GETTING THE RANDOM RECIPE