import React, { useContext, useEffect } from "react";
import Context from "../../context/context";
import getCustomerList from "../../context/service";

const CustomerList = () => {
  const context = useContext(Context);
  const { state, dispatch } = context;
  console.log(state);
  useEffect(() => {
    getCustomerList(dispatch);
  }, []);
  return <div>Customer list</div>;
};

export default CustomerList;
