import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

test("Display renders properly", () => {
  const { getByTestId } = render(<Display closed locked />);
  getByTestId("mainDisplay");
});
