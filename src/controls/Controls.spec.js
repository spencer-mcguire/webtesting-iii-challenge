import React from "react";
import { render, getByTitle, fireEvent } from "@testing-library/react";
import Controls from "./Controls";

test("Controls render properly", () => {
  const { getByTestId } = render(<Controls />);
  getByTestId("mainControls");
});

test("Unlock Gate", () => {
  let locked = true;
  let closed = false;
  const { getByTestId } = render(<Controls locked={locked} closed={closed} />);

  getByTestId("mainControls");
});
