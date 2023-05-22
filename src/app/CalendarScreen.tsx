import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';


const DaysOfWeek = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

const useStyles = makeStyles({
    table: {
      borderTop: "1px solid rgb(224, 224, 224)",
      minHeight: '100%',
      "& td ~ td, & th ~ th": { 
        borderLeft: "1px solid rgb(224, 224, 224)",
    },
    },
  });

export function CalendarScreen(){

    const classes = useStyles();
    const weeks = generateCalendar(getToday());
    const firstDate = weeks[0][0].date;
    const lastDate = weeks[weeks.length-1][6].date;


    return (
      <Box display="flex"  height='100%' alignItems="stretch">
        <Box borderRight="1px solid rgb(224, 224, 224)" width="16em" padding='16px'>
          <h2>Agenda React</h2>
          <Button variant="contained" color="primary">
          Novo Evento
          </Button>

          <Box marginTop='64px'>
            <h3>Agendas</h3>
            <FormControlLabel control={<Checkbox/>}  label="Pessoal"/>
            <FormControlLabel control={<Checkbox/>}  label="Trabalho"/>
          </Box>

        </Box>
        <TableContainer component={'div'}>
          <Box display="flex " alignItems="center" padding="8px 16px">
            <Box >
              <IconButton aria-label="Mês Anterior">
              <Icon>chevron_left</Icon>
              </IconButton>
              <IconButton aria-label="Próximo mês">
              <Icon>chevron_right</Icon>
              </IconButton>
              
            </Box>
            <Box component='h3' marginLeft="16px" flex="1">Junho de 2021</Box>
            <IconButton aria-label="Usuário">
            <Avatar> <Icon>person</Icon> </Avatar>
            </IconButton>
            
          </Box>
          <Table className={classes.table} aria-label="a dense table">
            <TableHead>
              <TableRow>
                {DaysOfWeek.map(day => <TableCell key={day} align='center'>{day}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {weeks.map((week, i) => (
                <TableRow key={i}>
                  {week.map(cell => (
                  <TableCell key={cell.date} align='center'>
                    {cell.date}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      );
    
}

interface IcalendarCell{
  date: string;
}

function generateCalendar(date:string): IcalendarCell[][]{
  const weeks: IcalendarCell[][] = [];
  const jsDate = new Date(date + "T12:00:00");
  const currentMonth = jsDate.getMonth();

  const currentDay = new Date(jsDate.valueOf());
  currentDay.setDate(1);

  const dayOfWeek = currentDay.getDay();

  currentDay.setDate(1- dayOfWeek);

  do{
    const week: IcalendarCell[] = [];
    for(let i=0; i< DaysOfWeek.length; i++){
      const isoDate = currentDay.getFullYear() + '-' + (currentDay.getMonth()+1).toString().padStart(2, "0") + '-' + currentDay.getDate().toString().padStart(2, "0")
      week.push({date: isoDate});
      currentDay.setDate(currentDay.getDate() + 1);
    }
    weeks.push(week);
    
  } while(currentDay.getMonth() == currentMonth)
  return weeks;
}

function getToday(){
  return "2021-06-17";
}