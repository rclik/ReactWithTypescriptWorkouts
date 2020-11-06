import React, { useEffect } from "react";

interface Props {
  children: string;
}

const ListItem: React.FC<Props> = (props) => {
  console.log('List Item is rendered');

  useEffect(() => {
    console.log('list item component is mounted ');
    return () => {
      console.log('list item component is unmounted');
    }
  }, [])


  return <div>{props.children}</div>;
};

export default ListItem;
