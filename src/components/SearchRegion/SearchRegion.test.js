import "@testing-library/jest-dom";
import React from "react";
import SearchRegion from "./SearchRegion";

import { render, fireEvent } from "@testing-library/react";
describe("<SearchRegion />", () => {
  it('calls "onclick" prop on button click', () => {
    const onClick = jest.fn();
    expect(SearchRegion).toBeDefined();
    const { getByText } = render(<SearchRegion onSubmit={onClick} />);
    fireEvent.click(getByText(/submit/i));
    expect(onClick).toHaveBeenCalled();
  });
});
