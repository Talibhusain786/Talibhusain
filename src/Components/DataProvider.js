import React, { createContext, useState } from "react";

export const inputDataProvider = createContext();

export default function DataProvider(props) {
  const [todo, setTodo] = useState([]);
  const [date, setdate] = useState();

  const removeElement = (i) => {
    let newArray = [...todo];
    newArray.splice(i, 1);
    setTodo(newArray);
  };

  return (
    <inputDataProvider.Provider
      value={{ todo, setTodo, removeElement, date, setdate }}
    >
      {props.children}
    </inputDataProvider.Provider>
  );
}
