import React, { useReducer } from "react";
import {CUSTOMERLIST_SUCCESS, CUSTOMERLIST_FAILURE} from './action';
import Context from "./context";

const initialState = { customerList: [], error: "", isLoading: true };

const customerReducer = (state, action) => {
  switch (action.type) {
    case CUSTOMERLIST_SUCCESS:
      return {
        ...state,
        customerList: action.payload,
        error:"",
        isLoading:false,
      }
    case CUSTOMERLIST_FAILURE:
      return {
        ...state,
        customerList:[],
        error: "Something went wrong",
        isLoading:false,
      };
    default:
      return state;
  }
};

const CustomerState = ({children}) => {
  const [state, dispatch] = useReducer(customerReducer, initialState);

  return (
    <Context.Provider
      value={{
        state,dispatch
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CustomerState;
