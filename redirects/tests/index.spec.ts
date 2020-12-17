import { generateRedirects } from "../src/index"

test('generates preview page redirects', () => {
  expect(generateRedirects()).toBeTruthy();
});
