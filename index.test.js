import { add, divide, multiply, subtract } from "./index";
// -----------------add---------------------
test("returns 5 if called with add(2, 3)", () => {
    const results = add(2, 3);
    expect(results).toBe(5)
});

test("returns a negative value if the greater argument is negative", () => {
    const results = add(1, -5)
    expect(results).toBeLessThan(0)
});

test("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
    const results = add(0.1, 0.2);
    expect(results).toBeCloseTo(0.3);
});

// -----------------Subtract---------------------
test("returns 10 if called with subtract(15, 5)", () => {
  const results = subtract(15, 5);
  expect(results).toBe(10);
});

test("returns a negative value if the second argument is greater than the first one", () => {
  const results = subtract(1, 5);
  expect(results).toBeLessThan(0);
});

// -----------------multiply--------------------
test("returns 8 if called with multiply(2, 4)", () => {
  const results = multiply(2, 4);
  expect(results).toBe(8);
});

test("returns a negative value if only the first argument is negative", () => {
  const results = multiply(-1, 5);
  expect(results).toBeLessThan(0);
});
test("returns a negative value if only the second argument is negative", () => {
  const results = multiply(1, -5);
  expect(results).toBeLessThan(0);
});

test("returns a positive value if called with two negative arguments", () => {
  const results = multiply(-4, -3);
  expect(results).toBeGreaterThan(0)
});

// -----------------divide--------------------
test("returns 3 if called with divide(9, 3)", () => {
  const results = divide(9, 3);
  expect(results).toBe(3);
});

test("returns a negative value if only the first argument is negative", () => {
  const results = divide(-1, 0);
  expect(results).toBe("You should not do this!");
});