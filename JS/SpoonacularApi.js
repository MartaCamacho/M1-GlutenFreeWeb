
//variable to get all the recipes from the API:

const getRandomRecipe = async() => {
    
    //get all the recipes from the API
    const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?diet=glutenfree&number=100&apiKey=a112c4d2e68f43d482bbf42cf5b6994b");
    const recipe = await response.json();
    const arrayRecipes = recipe.results;
    
    //get a random recipe
    const randomNum = Math.floor((Math.random()) * (arrayRecipes.length));
    const objRecipe = arrayRecipes[randomNum];
    const objRecipeId = objRecipe.id;
    
    //get the detailes info of the random recipe
    const responseId = await fetch(`https://api.spoonacular.com/recipes/${objRecipeId}/information?&apiKey=a112c4d2e68f43d482bbf42cf5b6994b`);
    const recipeId = await responseId.json();
    
    return recipeId;
    }
    
    getRandomRecipe()




