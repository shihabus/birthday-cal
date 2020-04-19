import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Card from "./Card";

test("Card snapshot", () => {
  const { container } = render(<Card />);
  expect(container.firstChild).toMatchSnapshot();
});
