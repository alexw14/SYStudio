import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const OrderTrackerDropDown = (props) => {
  const [monthAndYear, setMonthAndYear] = React.useState('');

  const options = [
    { monthAndYear: '1121', displayMonthAndYear: 'November 2021' },
    { monthAndYear: '1021', displayMonthAndYear: 'October 2021' },
    { monthAndYear: '0921', displayMonthAndYear: 'September 2021' },
    { monthAndYear: '0821', displayMonthAndYear: 'August 2021' },
    { monthAndYear: '0721', displayMonthAndYear: 'July 2021' },
    { monthAndYear: '0621', displayMonthAndYear: 'June 2021' },
  ];

  const handleChange = (event) => {
    setMonthAndYear(event.target.value);
    props.handleDropDownSelection(event.target.value);
  };

  const generateMenuItem = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.monthAndYear} value={option.monthAndYear}>
          {option.displayMonthAndYear}
        </MenuItem>
      );
    });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>Month and Year</InputLabel>
        <Select
          value={monthAndYear}
          label="Month and Year"
          onChange={handleChange}
        >
          {generateMenuItem()}
        </Select>
      </FormControl>
    </Box>
  );
};

export default OrderTrackerDropDown;
