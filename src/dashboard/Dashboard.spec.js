import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("FULL dashboard renders without crashing", () => {
  render(<Dashboard />);
});

test("Matches Snapshot", () => {
  const { baseElement } = render(<Dashboard />);
  expect(baseElement).toMatchSnapshot();
});
