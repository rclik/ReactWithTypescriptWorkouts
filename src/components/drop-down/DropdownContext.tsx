import React from "react";

export interface DropdownContextInterface {
  isShown: boolean;
  setShown: (shown: boolean) => void;
}

const initialContext: DropdownContextInterface = {
  isShown: false,
  setShown: () => {
    console.log("default setShown is called");
  },
};

export const DropdownContext = React.createContext<DropdownContextInterface>(
  initialContext
);
