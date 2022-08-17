import { Button, Container, IconButton, ImageListItem, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { useState } from "react";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import image from '../images/checkout_image.png';

export default function Deliveries(props){

    const[isValidAddress, setAddress]= useState();

    
    const addressHandler=()=>{
        setAddress(!isValidAddress);
    }

    function saveAddressHandler(event){
        console.log("save address");
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data.get("selectCity"));

        const orderAddress = {
            city: data.get("selectCity"), 
            address: data.get("address"),
            zip: data.get("zip"),
        };
        // props.address=orderAddress;
        console.log(orderAddress);
        
    }

    return (
    <Container sx={{ height: 450, width: "80%", backgroundColor:"#fff",  mt: 3, borderRadius: 2 , boxShadow: 3 }}>
               <Typography 
                sx={{display: 'flex',fontWeight: 'bold',justifyContent:'center', alignContent: 'center', color:'black', fontSize: 25}}>
                    DELIVERY ADDRESS
                </Typography>
               
                <Grid container spacing={2} mt={3}>
                    <Grid item sx={4}>
                    <ImageListItem sx={{ width: 300, height: 300, boxShadow:3, justifyItems:'left', display:'inline-flex',flexDirection: "row" }}> 
                         <img src={image} sx={{ width: '5'}}/>
                         </ImageListItem>
                    </Grid>
                    <Grid item  sx={8} >
                    <Box  
           component="form"
           noValidate
           autoComplete="off"
           onSubmit={saveAddressHandler}

           mt={4}
          sx={{ alignContent:'center', display: 'flex',
            //   display: "flex",
              flexDirection: "column",
              alignItems: "center",
              whiteSpace:'normal', 
            }}>
                    {/* <Grid item xs={24} md={12} sm={6} 
                      sx={{justifyItems:'left', flexDirection: "row", display: 'flex'}}>
                        <ImageListItem sx={{ width: 300, height: 300, boxShadow:3, justifyItems:'left', display:'inline-flex',flexDirection: "row" }}> 
                         <img src={image} sx={{ width: '5'}}/>
                         </ImageListItem>
                </Grid> */}

                {/* <Grid> 
                    <ImageListItem sx={{ width: 300, height: 300, boxShadow:3, justifyItems:'left', display:'inline-flex',flexDirection: "row" }}> 
                         <img src={image} sx={{ width: '5'}}/>
                         </ImageListItem></Grid> */}
                 <Grid item xs={8}>
                <Autocomplete
                    disablePortal
                    id="city"
                    name='city'
                    options={props.cities}
                    renderInput={(params) => <TextField {...params} label="City"  helperText='Check if your address is in the shipping area'
                    sx={{ width: 500 }}
                    fullWidth
                    />}
                    onChange={addressHandler}
                />
                </Grid>
                <Grid item xs={8} >
                    
                {isValidAddress ? <TextField
                    required
                    id="disabledAddress"
                    label="Address"
                    defaultValue="Address"
                    placeholder="Street & House number"
                    helperText=" "

                    sx={{ width: 500 }}
                /> :  <TextField
                        required
                        disabled
                        error
                        id="address"
                        name='address'
                        label="Address"
                        helperText="Please enter a suitable city"
                        sx={{ width: 500 }}
                        />}
                </Grid>
                <Grid item xs={8} >
                {isValidAddress ?  <TextField
                    required
                    id="zip"
                    label="Zip / Postcode"
                    type='code'
                    placeholder="Zip number"
                    sx={{ width: 500 }}
                    helperText=" "

                    /> :  <TextField
                        required
                        disabled
                        error
                        id="outlined-disabled"
                        label="Zip / Postcode"
                        helperText="Please enter a suitable city"
                        sx={{ width: 500 }}

                        />}
                </Grid>
                <Grid item xs={12} >
                    {/* <IconButton variant="contained"
                    size='large'
                    sx={{backgroundColor:'#dbc49dd2', position:'static'}}><LocalShippingIcon />SAVE ADDRESS</IconButton>
                 */}
                    
                </Grid>
                {isValidAddress ? (<Button 
                    variant="contained"
                    size='large'
                    type="submit"
                    sx={{backgroundColor:'#dbc49dd2', alignItems: 'center', width: 400}}>
                        Save Address
                </Button>): (
                <Button 
                    variant="contained"
                    disabled
                    size='large'
                    // onClick={saveAddressHandler}
                    sx={{backgroundColor:'#dbc49dd2', alignItems: 'center', width: 400}}>
                        Save Address
                </Button>)}
              
       
            </Box>  
            </Grid>
        </Grid>

    </Container>


        
        );


}