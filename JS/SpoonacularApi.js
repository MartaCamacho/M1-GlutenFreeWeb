//API KEY 1 - c0579e462a3848dc96338129e0a230f9 
//API KEY 2 - a112c4d2e68f43d482bbf42cf5b6994b
//API KEY 3 - 99a9e25d870940849ebc295e3f83c4e9 





// //variable to get all the recipes from the API:

// const getRandomRecipe = async() => {
    
//     //get all the recipes from the API
//     const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?diet=glutenfree&number=100&apiKey=99a9e25d870940849ebc295e3f83c4e9");
//     const recipe = await response.json();
//     const arrayRecipes = recipe.results;
    
//     //get a random recipe
//     const randomNum = Math.floor((Math.random()) * (arrayRecipes.length));
//     const objRecipe = arrayRecipes[randomNum];
//     const objRecipeId = objRecipe.id;
    
//     //get the detailes info of the random recipe
//     const responseId = await fetch(`https://api.spoonacular.com/recipes/${objRecipeId}/information?&apiKey=99a9e25d870940849ebc295e3f83c4e9`);
//     const recipeId = await responseId.json();
    
//     return recipeId;
//     }
    
//     getRandomRecipe()







    //variable for all the recipes
    const getRecipes = async() => {
    let divRecipeinfo = document.querySelector('.recipe-full-list');

    const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?diet=glutenfree&number=100&apiKey=43999b205346422a8c4111173508a428");
    const recipe = await response.json();
    
    let allRecipesInfo = recipe.results.map(async oneRecipe => {
    const recipe = await document.createElement('div');
    
    //añadir clase al div
    recipe.innerHTML = await ` <img class="recipePhoto" src= "${oneRecipe.image}" alt="${oneRecipe.title}" > <p>&#127860 ${oneRecipe.title}</p> <p> ${oneRecipe.instructions}</p>`;
    await divRecipeinfo.appendChild(recipe);
    });
    }
    
    //variable for all the descriptions
    const getRecipesDescription = async() => {
    const responseId = await fetch(`https://api.spoonacular.com/recipes/${oneRecipe.id}/information?&apiKey=99a9e25d870940849ebc295e3f83c4e9`);
    const recipeId = await responseId.json();

    let allRecipesInfo = recipeId.results.map(async oneRecipe => {
    const recipeDescription = await document.createElement('div');
        
    recipe.innerHTML = await ` <img class="recipePhoto" src= "${oneRecipe.image}" alt="${oneRecipe.title}" > <p>&#127860 ${oneRecipe.title}</p> <p> ${oneRecipe.instructions}</p>`;
    await divRecipeinfo.appendChild(recipeDescription);
    });
    }





    getRecipes()
    getRecipesDescription()


//otro test


//test a ver si puedo meter la info   ---NO VAAAAA




//fin otro test


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


