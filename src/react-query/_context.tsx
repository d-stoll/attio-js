
import React from "react";

import { AttioCore } from "../core.js";

const AttioContext = React.createContext<AttioCore | null>(null);

export function AttioProvider(props: { client: AttioCore, children: React.ReactNode }): React.ReactNode { 
  return (
    <AttioContext.Provider value={props.client}>
      {props.children}
    </AttioContext.Provider>
  );
}

export function useAttioContext(): AttioCore { 
  const value = React.useContext(AttioContext);
  if (value === null) {
    throw new Error("SDK not initialized. Create an instance of AttioCore and pass it to <AttioProvider />.");
  }
  return value;
}
