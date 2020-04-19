import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import CardSection from "./CardSection";

test("CardSection snapshot", () => {
  const { container } = render(<CardSection />);
  expect(container.firstChild).toMatchSnapshot();
});
