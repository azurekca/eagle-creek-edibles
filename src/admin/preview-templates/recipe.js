import htm from 'https://unpkg.com/htm?module';

const html = htm.bind(h);

// Preview component for a recipe
const Recipe = createClass({
	render() {
    const entry = this.props.entry;
    const title = entry.getIn([ 'data', 'title' ], null)
    const image = entry.getIn(['data', 'image'], null);
    const previewImg = this.props.getAsset(image).toString();
    const rating = entry.getIn([ 'data', 'rating'], null);
    let stars = '';
    for (let i = 0; i < rating; i++) {
      stars += '★';
    }

    return html`
      <div class="text-wrapper flow">
        <h1>${title}</h1>
        <div class="flex">
          <p class="inline stars">${stars}</p>
          <p class="inline">🔪 Prep time: ${entry.getIn([ 'data', 'prepTime' ], null)}</p>
          <p class="inline">⏱️ Cooking time: ${entry.getIn([ 'data', 'cookTime' ], null)}</p>
        </div>
        <h2>Ingredients</h2>
        <ul>
          ${entry.getIn([ 'data', 'ingredients' ], []).map(
            ingredient =>
              html`
                  <li>${ingredient}</li>
                `
          )}
        </ul>
        <h2>Instructions</h2>
        ${this.props.widgetFor('body')}
      </div
    `;
	}
});

export default Recipe;
