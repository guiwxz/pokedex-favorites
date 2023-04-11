import "@testing-library/jest-dom";
import { fireEvent, getByText, render } from "@testing-library/react";
import { expect, describe, test, vi } from "vitest";

import Button from "../components/Button";
import { Home } from "../containers/home/home";
import { BrowserRouter } from "react-router-dom";

describe("buttons", () => {
  test("Should be able to see the Buttons on screen", () => {
    const { getAllByTestId, debug } = render(<Button></Button>);

    debug();

    expect(getAllByTestId("button")).toBeDefined();
  });

  test("Click on Button to go to List Page", () => {
    const { getByTestId, debug } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(getByTestId("button").textContent).toBe("Abrir pokedex");

    debug();

    fireEvent.click(getByTestId("button"));

    expect(window.location.pathname).toBe("/list");
  });
});
