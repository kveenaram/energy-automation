import { test, expect } from '@playwright/test';
import { getRandomCocktail } from '../../utils/apiUtils';

test('Call random cocktail API 3 times and store names', async () => {
    // Given I call a random cocktail 3 times
    const cocktailNames: string[] = [];

    // When I store the cocktail name in an array
    for (let i = 0; i < 3; i++) {
        const name = await getRandomCocktail();
        cocktailNames.push(name);
    }

    // Then my array should have 3 cocktails names
    expect(cocktailNames).toHaveLength(3);
});
