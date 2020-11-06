import React from "react";
import "./App.css";
// import Dropdown from "./components/drop-down/Dropdown";
import "./App.css";
import { UseEffectHookSamples } from "./hooks/use-effect/UseEffectHookSamples";

// const listItems: ListItem[] = [
//   { id: 1, value: "Item 1" },
//   { id: 2, value: "Item 2" },
//   { id: 3, value: "Item 3" },
//   { id: 4, value: "Item 4" },
// ];

// interface ListItem {
//   id: number;
//   value: string;
// }

function App() {
  return (
    <div className="App">
      {/* <Dropdown>
        <Dropdown.Toggle>Toggle</Dropdown.Toggle>
        <Dropdown.List>
          {listItems.map((listItem) => {
            console.log(listItem);
            return (
              <Dropdown.ListItem key={listItem.id}>
                {listItem.value}
              </Dropdown.ListItem>
            );
          })}
        </Dropdown.List>
      </Dropdown> */}

      <UseEffectHookSamples></UseEffectHookSamples>
    </div>
  );
}

export default App;
