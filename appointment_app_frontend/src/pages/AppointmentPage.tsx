import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import FormControl from '@mui/material/FormControl';
import { Form } from 'react-router-dom';
import {Email} from '../emails/index';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Card, FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Typography } from '@mui/material';

export default function AppointmentPage (){
   const [age, setAge] = React.useState('');

   const handleChange = (event: SelectChangeEvent) => {
     setAge(event.target.value as string);
   };

   function handleEmail() {
      
   }
 return(
   <>
      
      <Box sx={{ minWidth: 220 }}>
         <FormControl >
            <Calendar/>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={age}
               label="Age"
               onChange={handleChange}
            >
               <MenuItem value={10}>Ten</MenuItem>
               <MenuItem value={20}>Twenty</MenuItem>
               <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <RadioGroup
               row
               aria-labelledby="demo-row-radio-buttons-group-label"
               name="row-radio-buttons-group"
            >
               <FormControlLabel value="female" control={<Radio />} label="Female" />
               <FormControlLabel value="male" control={<Radio />} label="Male" />
               <FormControlLabel value="other" control={<Radio />} label="Other" />
               
            </RadioGroup>
            <Grid container spacing={3}>
               <Grid item xs={4}>
               <Card>asdaf</Card>
               </Grid>
               <Grid item xs={4}>
               <Card>dfdfh</Card>
               </Grid>
               <Grid item xs={4}>
               <Card>dfhsdf</Card>
               </Grid>
            </Grid>
         </FormControl>
         <Button onClick={handleEmail}>Make Appointment</Button>
      </Box>
   </>
 );
}

