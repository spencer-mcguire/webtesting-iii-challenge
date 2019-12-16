import React from "react";
import { render } from "@testing-library/react";
import Controls from "./Controls";

test("Controls render properly", () => {
  const { getByTestId } = render(<Controls />);
  getByTestId("mainControls");
});
