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

    expect(typeof responseBody[0].id).toBe('number')
    expect(typeof responseBody[0].name).toBe('string')
    expect(typeof responseBody[0].code).toBe('string')
    expect(typeof responseBody[0].country).toBe('string')
    expect(typeof responseBody[0].founded).toBe('string')
    expect(typeof responseBody[0].fleet_size).toBe('string')
    expect(typeof responseBody[0].headquarters).toBe('string')
    expect(typeof responseBody[0].website).toBe('string')
    expect(typeof responseBody[0].destinations).toBe('object')
});
