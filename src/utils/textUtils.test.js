import extractInitials from "./textUtils";

test("extractInitials", () => {
  const mockData = "Raman Nayik";
  const expected = "RN";
  expect(extractInitials(mockData)).toEqual(expected);
});

test("extractInitials: empty", () => {
  const mockData = "";
  const expected = "";
  expect(extractInitials(mockData)).toEqual(expected);
});
