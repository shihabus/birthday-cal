import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Header from "./Header";

test("Header snapshot", () => {
  const { container } = render(<Header />);
  expect(container.firstChild).toMatchSnapshot();
});
