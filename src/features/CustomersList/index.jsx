import React, { useContext, useEffect, useState } from "react";
import Context from "../../context/context";
import getCustomerList from "../../context/service";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import "./style.css";

const CustomerList = () => {
  const context = useContext(Context);
  const { state, dispatch } = context;
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    getCustomerList(dispatch);
  }, []);

  const maxBid = (bids) => {
    const maxBids = bids.map((bid) => bid.amount);
    return Math.max(...maxBids);
  };

  const minBid = (bids) => {
    const minBids = bids.map((bid) => bid.amount);
    return Math.min(...minBids);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="main-div">
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead className="header">
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Premium</TableCell>
            <TableCell align="center">
              Max/Min bid{" "}
              <Button
                variant="contained"
                color={toggle ? "primary" : "secondary"}
                onClick={handleToggle}
              >
                {toggle ? "max" : "min"}
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.customerList.map((customer) => (
            <TableRow key={customer.firstname}>
              <TableCell component="th" scope="customer">
              <Avatar alt="Remy Sharp" src={customer.avatarUrl} className="image" />
                {customer.firstname} {customer.lastname}
              </TableCell>
              <TableCell align="center">{customer.email}</TableCell>
              <TableCell align="center">{customer.phone}</TableCell>
              <TableCell align="center">{`${customer.hasPremium}`}</TableCell>
              <TableCell align="center">
                {toggle ? maxBid(customer.bids) : minBid(customer.bids)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default CustomerList;
