import "@testing-library/jest-dom";
import { React } from "react";
import SearchRegion from "./SearchRegion";

import { render, fireEvent } from "@testing-library/react";
describe("<SearchRegion />", () => {
  it('calls "onclick" prop on button click', () => {
    const onClick = jest.fn();
    const { getByText } = render(<SearchRegion searchBy={onClick} />);
    fireEvent.click(getByText(/search/i));
    expect(onClick).toHaveBeenCalled();
  });
});
