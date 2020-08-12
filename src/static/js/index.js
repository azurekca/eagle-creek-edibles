const searchForm = document.getElementById('search-recipes');
const recipeCards = document.getElementsByClassName('index-card');
const filterButtonsList = document.getElementsByClassName('meal-type');

// Event Listeners
searchForm.addEventListener('submit', () => {
  event.preventDefault();
  const searchTerms = document.getElementById('search').value.split(' ');
  searchRecipes(searchTerms);
});

document.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const clickedBtn = event.target;
    // show only cards matching filter
    filterCards(clickedBtn.innerHTML);
    // set selected class on clicked button's list element, remove from rest
    for (let i = 0; i < filterButtonsList.length; i++) {
      filterButtonsList[i].classList.remove('selected');
    }
    clickedBtn.parentElement.classList.add('selected');
    // change border colour
    document.getElementById('button-list').style.borderBottomColor = getComputedStyle(clickedBtn.parentElement).backgroundColor
  }
});

/**
 * Show only cards that match all the search terms provided
 * @param {Array} searchTerms 
 */
function searchRecipes(searchTerms) {
  
  showAllElements(recipeCards);

  // loop through each card looking for search string, hide if not found
  for (let i = 0; i < recipeCards.length; i++) {
    const recipeCard = recipeCards[i];
    const recipe = recipeCard.firstElementChild.innerText.toLowerCase();
    searchTerms.forEach(term => {
      if (!recipe.includes(term.toLowerCase())) {
        recipeCard.style.display = 'none';
      }
    });
  }
}

function filterCards(filterString) {
  // show all cards
  showAllElements(recipeCards)
  if (filterString === 'All') return;
  for (let i = 0; i < recipeCards.length; i++) {
    const card = recipeCards[i];
    if (!card.dataset.recipeType.includes(filterString)) {
      card.style.display = 'none';
    }
  }
}

/**
 * Set display to default for all the dom elements in the collection
 * @param {element} elements dom collection
 */
function showAllElements(elements) {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.style.display = '';
  }
}