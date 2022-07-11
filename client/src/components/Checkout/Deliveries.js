import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { useState } from "react";


export default function Deliveries(props){

    const[address, setAddress]= useState(false);

    const addressHandler=()=>{
        setAddress(<div>{address ? ( <p>  <TextField
            error
            id="outlined-error-helper-text"
            label="City"
            defaultValue="address"
            helperText="Incorrect entry."
            /></p>) : (<p>   <TextField
                disabled
                id="outlined-disabled"
                label="Disabled"
                defaultValue="Hello World"
                /></p> )}</div>);
        // setAddress(<div>{address ? ( <p>  <TextField
        //     error
        //     id="outlined-error-helper-text"
        //     label="City"
        //     defaultValue="address"
        //     helperText="Incorrect entry."
        //     /></p>) : (<p>   <TextField
        //         disabled
        //         id="outlined-disabled"
        //         label="Disabled"
        //         defaultValue="Hello World"
        //         /></p> )}</div>);
    }

    return (
    <Container sx={{ height: 400, width: "80%", backgroundColor:"#fff", textAlign: "center", mt: 3, borderRadius: 2  }}>
         <Box   sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
                <Grid item xs={12} sm={6}>
                <Typography 
                sx={{fontWeight: 'bold',justifyContent:'center', alignContent: 'center', color:'black', mt: 3, fontSize: 25}}>
                    DELIVERY ADDRESS
                </Typography>
                </Grid>
                <Box
                component="form"
                sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
                noValidate
                autoComplete="off"
                 > 
                 <Grid item xs={14} sm={6}>
                <Autocomplete
                    disablePortal
                    id="selectCity"
                    options={props.cities}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="City"  helperText='Check if your address is in the shipping area'
                    onSelect={addressHandler(!address)}
                    />}
                />
              {/* {addressHandler()} */}
                 
                </Grid>

       
            </Box>  
        </Box>







    </Container>


        
        );


}