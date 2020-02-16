import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    table: {
        minWidth: 650,
        maxWidth: 400
      }
  }),
);

export  function EmployeeTable(props) {
  const classes = useStyles();


  function addEmployee() {
    props.addEmployee(
                {
                "id": "89898989898989",
                "employee_name": "Mitesh Patel",
                "employee_salary": "320800",
                "employee_age": "61",
                "profile_image": ""
                }
            )

  }

  function setEmployeeFilter(event){
      props.setEmployeeFilter(event.target.value)
      event.preventDefault()
  }

  return (
    <div>
          <Button variant="contained" className={classes.root} onClick={addEmployee}>Add Employee</Button>
          <TextField id="filled-basic" label="Filled" variant="filled" onChange={setEmployeeFilter}/>

              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Dessert ID</TableCell>
                      <TableCell align="right">Name</TableCell>
                      <TableCell align="right">Age</TableCell>
                      <TableCell align="right">Salary</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {props.employees.map(row => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell align="right">{row.employee_name}</TableCell>
                        <TableCell align="right">{row.employee_age}</TableCell>
                        <TableCell align="right">{row.employee_salary}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

    </div>

  );
}
