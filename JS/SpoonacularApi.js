
// //variable to get all the recipes from the API:

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


    //variable for all the recipes
    const getRecipes = async() => {
    const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?diet=glutenfree&number=100&apiKey=a112c4d2e68f43d482bbf42cf5b6994b");
    const recipe = await response.json();
    return recipe;
    }
    
    getRecipes()



//test



    // function getAllRecipesTest () {

    //     const section = document.querySelector(".recipe-full-list");
      
      
    //     for (let i = 0; i < 100; i++) {
    //       // cada pokemon lleva su propio indice
    //       // tenemos que añadir el indice al fin de URL de la API
    //       fetch("https://api.spoonacular.com/recipes/complexSearch?diet=glutenfree&number=100&apiKey=a112c4d2e68f43d482bbf42cf5b6994b")
    //         .then((response) => {
    //           // convertiremos la respuesta a un objeto legible,
    //           // porque los datos de la respuesta (response.body) están codificados
      
    //           return response.json(); // response.json() es tambien una operacion asincrona
    //         })
    //         .then((data) => {
              
    //           const article = document.createElement('article');
    //           article.innerHTML = `
    //             <img src="${data.image}" alt="${data.name}"/>
    //             <h3>${data.name}</h3>
    //           `;
      
    //           section.appendChild(article);
    //         })
    //         .catch((err) => {})
    //     }
    //   }
      
      
    //   async function getPokemonsAA () {
    //     const section = document.querySelector(".recipe-full-list");
      
    //     for (let i = 0; i < 21; i++) {
    //       try {
    //         const response = await fetch(`https://api.spoonacular.com/recipes/${objRecipeId}/information?&apiKey=a112c4d2e68f43d482bbf42cf5b6994b`);
    //         const data = await response.json();
        
    //         const article = document.createElement('article');
    //         article.innerHTML = `
    //           <img src="${data.image}" alt="${data.name}"/>
    //           <h3>${data.name}</h3>
    //         `;
        
    //         section.appendChild(article);
    //       } catch (err) {
            
    //       }
    //     }
    //   }
      
    //   getPokemonsAA();


