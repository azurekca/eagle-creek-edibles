module.exports = function(collection) {
  const typesSet = new Set();
  // use collection.getAll to turn the collection into an iterable
  // if collection item has a property of "item.data.type", do something
  collection.getAll().forEach(function(item) {
    if ("type" in item.data) {
      let types = item.data.type;

      // in Netlify CMS admin.yml, set up recipes to have a multi select of type
      // add type in types array to set to get unique values
      for (const type of types) {
        typesSet.add(type);
      }
    }
  });
  return [...typesSet].sort();
}