import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Square from "./Square";

test("Square snapshot", () => {
  const mockProps = { name: "Babu Namboothiri" };
  const { getByText } = render(<Square {...mockProps} />);

  expect(getByText("BN")).toBeTruthy();
});
