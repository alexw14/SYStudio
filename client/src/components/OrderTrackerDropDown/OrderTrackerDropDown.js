import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const OrderTrackerDropDown = (props) => {
  const options = [
    { monthAndYear: '1121', displayMonthAndYear: 'November 2021' },
    { monthAndYear: '1021', displayMonthAndYear: 'October 2021' },
    { monthAndYear: '0921', displayMonthAndYear: 'September 2021' },
    { monthAndYear: '0821', displayMonthAndYear: 'August 2021' },
    { monthAndYear: '0721', displayMonthAndYear: 'July 2021' },
    { monthAndYear: '0621', displayMonthAndYear: 'June 2021' },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index, option) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    props.handleDropDownSelection(option.monthAndYear);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List component="nav">
        <ListItem button id="dropdown-button" onClick={handleClickListItem}>
          <ListItemText primary={options[selectedIndex].displayMonthAndYear} />
        </ListItem>
      </List>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option.monthAndYear}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index, option)}
          >
            {option.displayMonthAndYear}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default OrderTrackerDropDown;
