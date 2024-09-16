import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { useHotkey } from "../index";

function Component() {
  const [count, setCount] = useState(0);
  useHotkey(
    "a",
    () => {
      setCount((s) => s + 1);
    },
    [],
  );

  return (
    <div>
      <p>Hotkey "a" pressed {count} times.</p>
    </div>
  );
}

function App() {
  const [mounted, setMounted] = useState(true);

  return (
    <div>
      <h3>example</h3>
      <input />
      <br />
      <br />
      <button onClick={() => setMounted((s) => !s)}>
        {mounted ? "unmount" : "mount"}
      </button>
      {mounted && <Component />}
    </div>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
