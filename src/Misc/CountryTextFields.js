import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const countries = [
    {	country	:	"China",	population	:1401768800},
    {	country	:	"India",	population	:1359812346},
    {	country	:	"United States",	population	:329453849},
    {	country	:	"Indonesia",	population	:266911900},
    {	country	:	"Pakistan",	population	:218950520},
    {	country	:	"Brazil",	population	:211257279},
    {	country	:	"Nigeria",	population	:206139587},
];

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function CountryTextFields() {
  const classes = useStyles();
  const [country, setCountry] = React.useState('');
  const [population, setPopulation ] = React.useState(0);

  const handleChange = event => {
    const eventValue = event.target.value
    setCountry(eventValue)
    const countryObj = countries.find(c => c.country === eventValue)
    setPopulation(countryObj.population);
    // console.log(countryObj, countryObj.population)
    
  };
  console.log(country)
  console.log("population: "+population)

  return (
    <form className={classes.root} noValidate autoComplete="off">
 
      <div>
        <TextField
          id="outlined-currency"
          select
          label="Select"
          value={country}
          onChange={handleChange}
          helperText="Please select your currency"
          variant="outlined"
        >
          {countries.map(option => (
            <MenuItem key={option.country} value={option.country}>
              {option.country}
            </MenuItem>
          ))}
        </TextField>
        <TextField
            type="number"
            variant="outlined"
            value={population}
        >
        </TextField>
      </div>
    </form>
  );
}
