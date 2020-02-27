import "@testing-library/jest-dom";
import React from "react";

import { render, fireEvent, screen } from "@testing-library/react";
import StatusBar from "./StatusBar";

describe("<StatusBar />", () => {
  it("Should render the amount of films", () => {
    const moviesAmount = 42;
    render(<StatusBar detectedAmount={moviesAmount} />);

    expect(screen.queryByText(/^zz/i)).toBeInTheDocument;
  });
});
