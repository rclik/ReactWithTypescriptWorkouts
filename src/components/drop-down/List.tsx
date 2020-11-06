import React, { useContext } from "react";
import { DropdownContext, DropdownContextInterface } from "./DropdownContext";

interface Props {
  children: JSX.Element[] | null; // oylesine null olabilir diyelim.
  child?: JSX.Element | null;
}

const List: React.FC<Props> = (props: Props) => {
  console.log('List is rendered');
  
  const ddContext: DropdownContextInterface = useContext(DropdownContext);

  return ddContext.isShown ? <div>{props.children}</div> : null;
};

export default List;
