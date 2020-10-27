import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { SearchbarWrapper } from './HomeElements'
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap"
    },
    margin: {
        margin: theme.spacing(1)
    },
    withoutLabel: {
        marginTop: theme.spacing(3)
    },
    textField: {
        width: "25ch"
    }
}));

function Index() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <Box component="section">
                    <SearchbarWrapper>
                        <FormControl fullWidth className={classes.margin} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.amount}
                                onChange={handleChange("amount")}
                                startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </SearchbarWrapper>
                </Box>
                <Box component="section">
                    <SearchbarWrapper>
                        <FormControl fullWidth className={classes.margin} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.amount}
                                onChange={handleChange("amount")}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </SearchbarWrapper>
                </Box>
                <Box component="section">
                    <SearchbarWrapper>
                        <FormControl fullWidth className={classes.margin} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.amount}
                                onChange={handleChange("amount")}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </SearchbarWrapper>
                </Box>
                <Box component="section">
                    <SearchbarWrapper>
                        <FormControl fullWidth className={classes.margin} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                value={values.amount}
                                onChange={handleChange("amount")}
                                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                labelWidth={60}
                            />
                        </FormControl>
                    </SearchbarWrapper>
                </Box>
            </Container>
        </React.Fragment>
    )
}

export default Index

