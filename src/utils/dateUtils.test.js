import { fromEpoch, fromEpochToDay } from "./dateUtils";

test("fromEpoch", () => {
  const mock = 1386613800000;
  const expected = "10/12/2013";
  expect(fromEpoch(mock)).toMatch(expected);
});

test("fromEpochToDay", () => {
  const mock = 1386613800000;
  const expected = "Tue";
  expect(fromEpochToDay(mock)).toMatch(expected);
});
