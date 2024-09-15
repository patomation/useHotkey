import React, { useEffect, useState } from "react";
import { hotkey } from "@patomation/hotkey/src/index";

export function useHotkey(
  command: string,
  callback: (event: KeyboardEvent) => void,
  deps: React.DependencyList = [],
) {
  useEffect(() => {
    hotkey(command, callback);
    return () => {
      hotkey.remove(command);
    };
  }, deps);
}
