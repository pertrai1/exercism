/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.';
  }
  if (remainingTime === 0) {
    return 'Lasagna is done.';
  }
  return 'Not done, please wait.';
}

export function preparationTime(layers, prepTime = 2) {
  return layers.length * prepTime;
}

export function quantities(layers) {
  const gramsOfNoodles = layers.filter(layer => layer === 'noodles').length * 50;
  const litersOfSauce = layers.filter(layer => layer === 'sauce').length * 0.2;

  return {
    noodles: gramsOfNoodles,
    sauce: litersOfSauce,
  };
}

export function addSecretIngredient(friendList, myList) {
  const specialIngredient = friendList[friendList.length - 1];
  myList.push(specialIngredient);
}

export function scaleRecipe(recipe, portionSize) {
  let result = {};
  for (const [key, value] of Object.entries(recipe)) {
    result[key] = (value * portionSize) / 2;
  }
  return result;
}
