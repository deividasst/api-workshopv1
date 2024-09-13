import { test, expect } from '@playwright/test';

test.only('api works', async ({ request }) => {
  const responseBody = await test.step(`get request`, async () => {
    const response = await request.get("https://freetestapi.com/api/v1/countries");
    return await response.json()
  })

  // console.log(responseBody)

  await test.step(`expect API schema is valid`, async () => {
    for (const country of responseBody) {
      const requiredKeys = ['id', 'name', 'population', 'land_area', 'density', 'capital', 'currency', 'flag']
      expect(Object.keys(country)).toEqual(requiredKeys);
    }
  })
});
