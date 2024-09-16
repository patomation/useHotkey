import React, { useEffect, useState } from "react";
import { hotkey } from "@patomation/hotkey";

export function useHotkey(
  command: string,
  callback: () => void,
  deps: React.DependencyList = [],
) {
  useEffect(() => {
    hotkey(command, callback);
    return () => {
      hotkey.remove(command);
    };
  }, deps);
}
