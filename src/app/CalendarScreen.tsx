import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const DaysOfWeek = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

const useStyles = makeStyles({
    root:{
        height: '100%',
    },
    table: {
      minHeight: '100%',
      "& td ~ td, & th ~ th": { 
        borderLeft: "1px solid rgb(224, 224, 224)",
    },
    },
  });

export function CalendarScreen(){

    const classes = useStyles();
    return (
        <TableContainer className={classes.root} component={'div'}>
          <Table className={classes.table} aria-label="a dense table">
            <TableHead>
              <TableRow>
                {DaysOfWeek.map(day => <TableCell key={day} align='center'>{day}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow >
                    {DaysOfWeek.map(day => <TableCell key={day} align='center'>x</TableCell>)}
                </TableRow>
                <TableRow >
                    {DaysOfWeek.map(day => <TableCell key={day} align='center'>x</TableCell>)}
                </TableRow>
                <TableRow >
                    {DaysOfWeek.map(day => <TableCell key={day} align='center'>x</TableCell>)}
                </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      );
    
}