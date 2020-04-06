import "@testing-library/jest-dom";
import React from "react";

import {
  render,
  fireEvent,
  screen,
  waitForElement
} from "@testing-library/react";
import StatusBar from "./StatusBar";

describe("<StatusBar />", () => {
  it("Should render the amount of films in plural case", async () => {
    const moviesAmount = 42;
    const { getByText } = render(<StatusBar detectedAmount={moviesAmount} />);

    // expect(screen.queryByText(/^zz/i)).toBeInTheDocument;
    await waitForElement(() => getByText(/42 movies was found/i));
  });

  it("Should render the amount of films in single case", async () => {
    const moviesAmount = 1;
    const { getByText } = render(<StatusBar detectedAmount={moviesAmount} />);

    // expect(screen.queryByText(/^zz/i)).toBeInTheDocument;
    await waitForElement(() => getByText(/1 movie was found/i));
  });
});
