import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import JSONViewer from "./JSONViewer";

test("JSONViewer snapshot", () => {
  const mockData = [];
  const { container } = render(<JSONViewer data={mockData} />);
  expect(container.firstChild).toMatchSnapshot();
});
