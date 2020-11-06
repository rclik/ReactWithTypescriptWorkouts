import React, { useState } from "react";
import { DropdownContext, DropdownContextInterface } from "./DropdownContext";
import List from "./List";
import ListItem from "./ListItem";
import Toggle from "./Toggle";

interface Props {
  children: JSX.Element[] | null;
}

const Dropdown: React.FC<Props> & {
  Toggle: typeof Toggle;
  List: typeof List;
  ListItem: typeof ListItem;
} = (props: Props) => {
  console.log('Dropdown is rendered');

  const [isShown, setShown] = useState<boolean>(false);

  const contextValue: DropdownContextInterface = {
    isShown: isShown,
    setShown: setShown,
  };

  return (
    <DropdownContext.Provider value={contextValue}>
      <div>{props.children}</div>
    </DropdownContext.Provider>
  );
};

export default Dropdown;

Dropdown.Toggle = Toggle;
Dropdown.List = List;
Dropdown.ListItem = ListItem;
