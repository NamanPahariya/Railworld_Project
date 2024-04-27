document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const search_input = document.getElementById('search-input');
    const search_button = document.getElementById('search-button');
  
    // Function to handle search
    async function searchRecipes(query) {
      const url = `https://tasty-co.p.rapidapi.com/recipes/search?query=${query}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '69c39f0122mshb237fc082f59477p10c6fdjsnaea2cb8d728e',
          'X-RapidAPI-Host': 'tasty-co.p.rapidapi.com'
        }
      };
  
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        displayRecipes(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    // Function to display recipes
    function displayRecipes(recipes) {
      const recipesContainer = document.getElementById('recipes-container');
      recipesContainer.innerHTML = ''; // Clear previous recipes
  
      recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
  
        const imageElement = document.createElement('img');
        imageElement.src = recipe.thumbnail_url;

        const nameElement = document.createElement('h2');
        nameElement.textContent = recipe.name;

        const orderBtn = document.createElement('button');
        orderBtn.innerHTML = "Order now";
  
          
        recipeElement.appendChild(imageElement);
        recipeElement.appendChild(nameElement);
        recipeElement.appendChild(orderBtn);
        recipesContainer.appendChild(recipeElement);
      });
    }
  
    // Initial search for "burger" when page loads
    // searchRecipes('burger');
    // Event listener for search button click
    search_button.addEventListener('click', () => {
      const query = search_input.value.trim();
      if (query !== '') {
       searchRecipes(query);
      }else{
      const errMsg = document.getElementById('err')

           errMsg.innerHTML = `<h1>Please enter the name to search food</h1>`
      }
    });
  });
  

  const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));



// gsap.from(".Recipes_body", {
//   y: 140,
//   opacity: 1,
//   duration: 0.5,
//   delay: -1,
// });

