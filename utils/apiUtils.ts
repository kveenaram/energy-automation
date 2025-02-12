import { request } from '@playwright/test';

export async function getRandomCocktail() {
  const apiRequest = await request.newContext();
  const response = await apiRequest.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  const data = await response.json();
  return data.drinks[0].strDrink;
}
