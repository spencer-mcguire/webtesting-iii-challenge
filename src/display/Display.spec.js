import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

test("Display renders properly", () => {
  const { getByTestId } = render(<Display closed locked />);
  getByTestId("mainDisplay");
});

test("Display shows gate is open", () => {
  const { getByText } = render(<Display closed={false} />);
  getByText(/open/i);
});

test("Display shows the gate is closed", () => {
  const { getByText } = render(<Display closed={true} />);
  getByText(/closed/i);
});

test("Display shows the gate is unlocked", () => {
  const { getByText } = render(<Display locked={true} />);
  getByText(/^locked$/i);
});

test("Display shows the gate is locked", () => {
  const { getByText } = render(<Display locked={false} />);
  getByText(/unlocked/i);
});

test("Display shows the gate is closed and unlocked", () => {
  const { getByText } = render(<Display locked={false} closed={true} />);
  getByText(/unlocked/i);
  getByText(/closed/i);
});

test("Locked or Closed use red-led class", () => {
  const { getByText } = render(<Display locked={true} closed={true} />);
  expect(getByText(/closed/i).classList.contains("red-led")).toBe(true);
  expect(getByText(/locked/i).classList.contains("red-led")).toBe(true);
});

test("Unlocked or Open use green-led class", () => {
  const { getByText } = render(<Display locked={false} closed={false} />);
  expect(getByText(/open/i).classList.contains("green-led")).toBe(true);
  expect(getByText(/unlocked/i).classList.contains("green-led")).toBe(true);
});
