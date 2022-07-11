import { Button, Container, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { useState } from "react";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function Deliveries(props){

    const[isValidAddress, setAddress]= useState();
    
    const addressHandler=()=>{
        setAddress(!isValidAddress);
    }

    return (
    <Container sx={{ height: 450, width: "80%", backgroundColor:"#fff", textAlign: "center", mt: 3, borderRadius: 2 , boxShadow: 3 }}>
         <Box   sx={{
              display: "-ms-inline-flexbox",
              position: 'sticky',
              flexDirection: "column",
              alignItems: "center",
            }}>
                <Grid item xs={20} sm={6} >
                <Typography 
                sx={{fontWeight: 'bold',justifyContent:'center', alignContent: 'center', color:'black', fontSize: 25}}>
                    DELIVERY ADDRESS
                </Typography>
                </Grid>
                <Grid item xs={20} sm={6} >
                </Grid>
                <Box
                component="form"
                // sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
                noValidate
                autoComplete="off"
                 > 
                 <Grid item xs={14} sm={20} mt={3}>
                <Autocomplete
                    disablePortal
                    id="selectCity"
                    options={props.cities}
                    renderInput={(params) => <TextField {...params} label="City"  helperText='Check if your address is in the shipping area'
                    sx={{ width: 400 }}
                    fullWidth
                    />}
                    onChange={addressHandler}
                />
                </Grid>
                <Grid item xs={14} sm={20} mt={3} >
                {isValidAddress ? <TextField
                    required
                    id="disabledAddress"
                    label="Address"
                    defaultValue="Address"
                    placeholder="Street & House number"
                    helperText=" "

                    sx={{ width: 400 }}
                /> :  <TextField
                        required
                        disabled
                        error
                        id="address"
                        label="Address"
                        helperText="Please enter a suitable city"
                        sx={{ width: 400 }}
                        />}
                </Grid>
                <Grid item xs={14} sm={20} mt={3} >
                {isValidAddress ?  <TextField
                    required
                    id="Zip"
                    label="Zip / Postcode"
                    placeholder="Zip number"
                    sx={{ width: 400 }}
                    helperText=" "

                    /> :  <TextField
                        required
                        disabled
                        error
                        id="outlined-disabled"
                        label="Zip / Postcode"
                        helperText="Please enter a suitable city"
                        sx={{ width: 400 }}

                        />}
                </Grid>
                <Grid item xs={14} sm={12} mt={3} >
                    <IconButton variant="contained"
                    size='large'
                    sx={{backgroundColor:'#dbc49dd2', position:'static'}}><LocalShippingIcon />SAVE ADDRESS</IconButton>
                
                    <Button 
                    variant="contained"
                    size='large'
                    sx={{backgroundColor:'#dbc49dd2', position:'static'}}>
                        <LocalShippingIcon />
                        SAVE ADDRESS
                    </Button>
                </Grid>

       
            </Box>  
        </Box>







    </Container>


        
        );


}