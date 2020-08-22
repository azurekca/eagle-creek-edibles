import Recipe from "/admin/preview-templates/recipe.js";


// Register the Recipe component as the preview for entries in the recipe collection
CMS.registerPreviewTemplate("recipes", Recipe);
// Register the main style sheet for the preview
CMS.registerPreviewStyle("/static/css/style.css");