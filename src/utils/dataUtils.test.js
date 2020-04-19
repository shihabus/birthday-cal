import { sortBy, groupBy } from "./dataUtils";

test("sortBy", () => {
  const mockData = [
    { user: "fred", age: 48 },
    { user: "barney", age: 36 },
    { user: "fred", age: 40 },
    { user: "jake", age: 34 }
  ];
  const expected = [
    { user: "fred", age: 48 },
    { user: "fred", age: 40 },
    { user: "barney", age: 36 },
    { user: "jake", age: 34 }
  ];
  const sorted = sortBy(mockData, "age");
  expect(sorted).toEqual(expected);
});

test("groupBy", () => {
  const mockData = [
    { user: "fred", age: 48 },
    { user: "barney", age: 40 },
    { user: "fred", age: 40 },
    { user: "jake", age: 34 }
  ];
  const expected = {
    "34": [{ user: "jake", age: 34 }],
    "40": [
      { user: "barney", age: 40 },
      { user: "fred", age: 40 }
    ],
    "48": [{ user: "fred", age: 48 }]
  };
  const grouped = groupBy(mockData, function(user) {
    return user.age;
  });
  expect(grouped).toEqual(expected);
});
