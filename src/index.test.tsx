import * as React from "react";
import { act } from "@testing-library/react";
import ReactDOM from "react-dom/client";
import { useHook } from "./index";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

const Consumer = (): React.ReactElement => {
  interface State {
    color: string;
  }
  const { foo } = useHook();
  return <div>{foo}</div>;
};

describe("useHook", () => {
  it("works", () => {
    act(() => {
      ReactDOM.createRoot(container).render(<Consumer />);
    });
    expect(container.textContent).toBe("bar");
  });
});
