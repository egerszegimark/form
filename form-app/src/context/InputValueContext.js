import React, { createContext, useReducer } from "react";

const initialState = {
  title: "",
  link: "",
  season: "",
  episode: "",
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_INPUT_VALUE":
      return {
        ...state,
        //inputValue: payload,
        title: payload,
        link: payload,
        season: payload,
        episode: payload,
      };
    default:
      return state;
  }
};

const InputValueContext = createContext(initialState);

function InputValueProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <InputValueContext.Provider value={{ state, dispatch }}>
      {props.children}
    </InputValueContext.Provider>
  );
}

export { InputValueContext, InputValueProvider };
