import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: '$',
    country: 'USA',
  },
  {
    value: 'EUR',
    label: '€',
    country: 'EUROPE',
  },
  {
    value: 'BTC',
    label: '฿',
    country: 'BITCOIN',
  },
  {
    value: 'JPY',
    label: '¥',
    country: 'JAPAN',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');
//   const [country, setCountry] = React.useState('');

  const handleChange = event => {
    setCurrency(event.target.value);
    // setCountry(event.target.value)
    console.log(event.target)
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
 
      <div>
        <TextField
          id="outlined-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          id="outlined-country"
          label="Country"
          value={currency}
          onChange={handleChange}
          helperText="Selected Country"
          variant="outlined"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
              {/* {option.value} */}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
}
