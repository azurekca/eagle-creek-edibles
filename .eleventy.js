module.exports = function (eleventyConfig) {

  // copy static assets to output folder
  eleventyConfig.addPassthroughCopy("./src/static/images");
  eleventyConfig.addPassthroughCopy("./src/static/css");
  eleventyConfig.addPassthroughCopy("./src/static/js");
  
  // cms config and html
  eleventyConfig.addPassthroughCopy("./src/admin");

  // create collection
  eleventyConfig.addCollection("typeList", require("./src/utils/getTypeList.js"));

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: "src"
    }
  };
};