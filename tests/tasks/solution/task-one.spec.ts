import { test, expect } from '@playwright/test';

test('api works', async ({ request }) => {
    const response = await request.get('https://freetestapi.com/api/v1/airlines')
    const responseBody = await response.json()
    
    console.log(responseBody)
});
