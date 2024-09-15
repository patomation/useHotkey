import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { useHotkey } from "../index";

function Component() {
  const [count, setCount] = useState(0);
  const [preventDefault, setPreventDefault] = useState(false);
  useHotkey(
    "a",
    (event) => {
      if (preventDefault) {
        event.preventDefault();
      }
      setCount((s) => s + 1);
    },
    [preventDefault],
  );

  return (
    <div>
      <p>Hotkey "a" pressed {count} times.</p>

      <button onClick={() => setPreventDefault((s) => !s)}>
        {preventDefault ? "preventDefault ON" : "preventDefault OFF"}
      </button>
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
