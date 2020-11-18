var favoriteRecipe = {
    'title' : 'Mole',
    'servings' : 2,
    'ingredients': ['cumin', 'cinnamon', 'cocoa']
};
console.log(favoriteRecipe.title);
console.log('servings: ' + favoriteRecipe.servings);
console.log('Ingredients:');
for(var i = 0; i < favoriteRecipe.ingredients.length; i++){
    console.log(favoriteRecipe.ingredients[i]);
}