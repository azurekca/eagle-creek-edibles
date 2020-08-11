// search cards by title or ingredients and only show matching cards
const searchForm = document.getElementById('search-recipes');
searchForm.addEventListener('submit', () => {
  event.preventDefault();
  const searchTerms = document.getElementById('search').value.split(' ');
  searchRecipes(searchTerms);
});

function searchRecipes(searchTerms) {
  
  // get all the recipe cards on the page and show all
  const recipeCards = document.getElementsByClassName('index-card');
  showAllElements(recipeCards);

  // loop through each card looking for search string, show if found : hide if not found
  for (let i = 0; i < recipeCards.length; i++) {
    const recipeCard = recipeCards[i];
    const recipe = recipeCard.firstElementChild.innerText.toLowerCase();
    searchTerms.forEach(term => {
      if (!recipe.includes(term)) {
        recipeCard.style.display = 'none';
      }
    });
  }
}

function showAllElements(elements) {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.style.display = '';
  }
}