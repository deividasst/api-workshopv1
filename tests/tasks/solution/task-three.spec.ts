import { test, expect } from '@playwright/test';

test('api works', async ({ request }) => {
    const url = 'https://freetestapi.com/api/v1/airlines'
    const response = await request.get(url)
    const responseBody = await response.json()
    
    console.log(responseBody)

    const responseBodyLength = 50
    expect(responseBody).toHaveLength(responseBodyLength)

    const requiredKeys = ['id', 'name', 'code', 'country', 'founded', 'fleet_size', 'headquarters', 'website', 'destinations']

    expect(Object.keys(responseBody[0])).toEqual(requiredKeys)
});
