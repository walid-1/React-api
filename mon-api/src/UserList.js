import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function UserList() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(result);
      setUser(result.data);
    };
    fetchData();
  }, []);
  /*
const [data,setData]= useState([]);
useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res =>setData (res.data)
      );
}, []);
*/
  return (
    <>
      <TableContainer>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">id</StyledTableCell>
              <StyledTableCell align="right">name</StyledTableCell>
              <StyledTableCell align="right">email</StyledTableCell>
              <StyledTableCell align="right">phone</StyledTableCell>
              <StyledTableCell align="right">web site</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((item) => (
              <TableRow key={item.objectID}>
                <StyledTableCell align="right">{item.id}</StyledTableCell>
                <StyledTableCell align="right">{item.name}</StyledTableCell>
                <StyledTableCell align="right">{item.email}</StyledTableCell>
                <StyledTableCell align="right">{item.phone}</StyledTableCell>
                <StyledTableCell align="right">{item.website}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
    /*
        <ul>
        {user.map(item => (
          <li key={item.objectID}>
            <span>{item.name}</span><br />
            <span>{item.email}</span><br />
        <span>{item.address.street}</span>
          </li>
        ))}
      </ul>*/
  );
}
export default UserList;
