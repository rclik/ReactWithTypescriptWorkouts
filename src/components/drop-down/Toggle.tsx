import React, { FC, useContext } from "react";
import { DropdownContext, DropdownContextInterface } from "./DropdownContext";

interface Props {
  children: string;
}

const Toggle: FC<Props> = (props) => {
  const ddContext: DropdownContextInterface = useContext(DropdownContext);

  return (
    <div onClick={() => ddContext.setShown(!ddContext.isShown)}>
      {props.children}
    </div>
  );
};

export default Toggle;
