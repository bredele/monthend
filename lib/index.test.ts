import test from "node:test";
import assert from "node:assert";
import monthend from ".";

test("returns last day of current month when no parameters provided", () => {
  const result = monthend();
  const now = new Date();
  const expected = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  assert.strictEqual(result, expected);
});

test("returns 31 for months with 31 days", () => {
  assert.strictEqual(monthend(1, 2023), 31); // January
  assert.strictEqual(monthend(3, 2023), 31); // March
  assert.strictEqual(monthend(5, 2023), 31); // May
  assert.strictEqual(monthend(7, 2023), 31); // July
  assert.strictEqual(monthend(8, 2023), 31); // August
  assert.strictEqual(monthend(10, 2023), 31); // October
  assert.strictEqual(monthend(12, 2023), 31); // December
});

test("returns 30 for months with 30 days", () => {
  assert.strictEqual(monthend(4, 2023), 30); // April
  assert.strictEqual(monthend(6, 2023), 30); // June
  assert.strictEqual(monthend(9, 2023), 30); // September
  assert.strictEqual(monthend(11, 2023), 30); // November
});

test("returns 28 for February in non-leap years", () => {
  assert.strictEqual(monthend(2, 2023), 28);
  assert.strictEqual(monthend(2, 2021), 28);
  assert.strictEqual(monthend(2, 2019), 28);
});

test("returns 29 for February in leap years", () => {
  assert.strictEqual(monthend(2, 2024), 29);
  assert.strictEqual(monthend(2, 2020), 29);
  assert.strictEqual(monthend(2, 2016), 29);
  assert.strictEqual(monthend(2, 2000), 29); // Century leap year
});

test("handles century years correctly", () => {
  assert.strictEqual(monthend(2, 1900), 28); // Not a leap year
  assert.strictEqual(monthend(2, 2000), 29); // Leap year
  assert.strictEqual(monthend(2, 2100), 28); // Not a leap year
});

test("matches README example", () => {
  assert.strictEqual(monthend(4, 2018), 30); // April 2018
});
