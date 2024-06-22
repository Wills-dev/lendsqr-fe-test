import { beforeAll, describe, expect, expectTypeOf, test } from "vitest";

const BEFORE_ALL_TIMEOUT = 30000;

describe("Request fot all user data", () => {
  let response: Response;
  let body: Array<{ [key: string]: unknown }>;

  beforeAll(async () => {
    response = await fetch(
      "https://run.mocky.io/v3/0d1b50ae-860a-446a-ad38-4e73b165c3b4"
    );
    body = await response.json();
  }, BEFORE_ALL_TIMEOUT);

  test("Should have response status 200", () => {
    expect(response.status).toBe(200);
  });

  test("Should have array in the body", () => {
    expectTypeOf(body).toBeArray();
  });
});
