import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Layout from "./Layout";

test("Layout snapshot", () => {
  const { container } = render(<Layout />);
  expect(container.firstChild).toMatchSnapshot();
});
