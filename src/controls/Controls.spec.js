import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls";

test("Controls render properly", () => {
  const { getByTestId } = render(<Controls />);
  getByTestId("mainControls");
});

test("Unlock Gate", () => {
  const { getByTestId } = render(<Controls locked={true} closed={false} />);

  getByTestId("mainControls");
});

test("Provide buttons to toggle closed and lock states", () => {
  const { getByText } = render(<Controls closed={false} locked={false} />);
  getByText(/lock gate/i);
  getByText(/close gate/i);
});

test("Close gate changes state to closed if clicked", () => {
  const { getByText, findByText } = render(<Controls closed={false} />);
  const button = getByText(/close gate/i);
  fireEvent.click(button);
  findByText(/open gate /i);
});

test("Close gate changes state to closed if clicked", () => {
  const { getByText, findByText } = render(<Controls locked={false} />);
  const button = getByText(/lock gate/i);
  fireEvent.click(button);
  findByText(/unlock gate /i);
});
