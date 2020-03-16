import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import countryPopData from './countryPopulationData'

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
    const countryObj = countryPopData.find(c => c.country === eventValue)
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
          {countryPopData.map(option => (
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
