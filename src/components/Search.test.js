import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Search from "./Search";

test("Search snapshot", () => {
  const mockSubmit = jest.fn();
  const { container, getByLabelText } = render(
    <Search onSubmitCallBack={mockSubmit} />
  );
  const form = getByLabelText("form");

  fireEvent.submit(form);

  expect(mockSubmit).toHaveBeenCalledTimes(1);

  expect(container.firstChild).toMatchSnapshot();
});
