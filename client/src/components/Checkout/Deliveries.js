import { Button, Container, IconButton, ImageListItem, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { useState } from "react";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import image from '../images/checkout_image.png';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Deliveries(props){

    const[isValidAddress, setValidAddress]= useState();
    const[fullAddress, setFullAddress]= useState(null);
    const[city, setCity]= useState('');
    const[addressString, setAddressString]= useState('');
    const[zip, setZip]= useState('');
    const [checked, setChecked] = useState(true);

    const newAddress = {
        city: {type: String}, 
        address: {type: String},
        zip: {type: String},
    };

    function confirmAddressHandler(event){
        if(city!='' && addressString!= '' && zip!=''){

        }
            if(city===''){
                alert('city');
            }
            else if(addressString===''){
                alert('address')
            }
            else if(zip===''){
                alert('zip')
            }
            else{
            setChecked(!checked);
        }
 
    }
   

    
    // const addressHandler=(event)=>{
    //     setValidAddress(!isValidAddress);
    //     // var address=event.target.value;
    //     setCity(event.target.value);
    //     console.log(event.target.value);
    // }

    function saveAddressHandler(event){

        console.log("save address");
       
        event.preventDefault();
        console.log(addressString);
        if(newAddress.address!= null){
        
        newAddress.city= city.label;
        newAddress.address=addressString; 
        newAddress.zip=zip;
        // props.address=orderAddress;
        console.log(newAddress);

        props.setFinalAddress(`${newAddress.city}, ${addressString}, ${zip}`);
        setFullAddress(newAddress);
        console.log(fullAddress);
        }
        else{
            alert('not');
        }

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
                {/* { <Autocomplete
                    disablePortal
                    id="city"
                    name='city'
                    value={city}
                    options={props.cities}
                    renderInput={
                        (params) =>
                         <TextField {...params} label="City"   helperText='Check if your address is in the shipping area'
                        sx={{ width: 500 }}
                        fullWidth/>}
                        //<TextField {...params} label="City"   helperText='Check if your address is in the shipping area'

                    //     (params)=>{
                    //         params.map((c) => (
                    //             <MenuItem key={c} value={c}>
                    //               {c}
                    //             </MenuItem>));
                    // }}
                    onChange={addressHandler}
                /> } */}

                
                </Grid>
                <Grid item xs={8}>
                <Autocomplete
                    disablePortal
                    id="city"
                    name='city'
                    
                    // value={city}
                    options={props.cities}
                    renderInput={
                        (params) =>
                         <TextField {...params} label='City'  helperText='Check if your address is in the shipping area'
                        sx={{ width: 500 }}
                        fullWidth/>}
                    onChange={(event, newCity)=>{
                        setCity(newCity);
                        {newCity===null ? setValidAddress(false):setValidAddress(true)}

                       console.log(city);
                    }}
                
                       />
                    { console.log('check')}
                        { console.log(city)}
                    
                    {/* {console.log(props.cities)} */}
              

                </Grid>
                <Grid item xs={8} >
                    
                {isValidAddress ? <TextField
                    required
                    id="disabledAddress"
                    label="Address"
                    defaultValue="Address"
                    type="text"
                    placeholder="Street & House number"
                    helperText=" "
                    onChange={(event)=>{
                        setAddressString(event.target.value);
                        console.log(addressString);
                    }}
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
                    type='number'
                    placeholder="Zip number"
                    sx={{ width: 500 }}
                    helperText=" "
                    onChange={(event)=>{
                        setZip(event.target.value);
                        console.log(zip);
                    }}
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
                <Grid item xs={8} >
                    {/* <IconButton variant="contained"
                    size='large'
                    sx={{backgroundColor:'#dbc49dd2', position:'static'}}><LocalShippingIcon />SAVE ADDRESS</IconButton>
                 */}
                     <FormGroup>
                    {/* <FormControlLabel control={
                    (city!='' && addressString!= '' && zip!='') ? (<Checkbox color="default" 
                    onChange={()=>setChecked(!checked)}/>) : (<Checkbox />} label="Disabled" />) }
                    sx={{color: 'black'}}label="Please confirm your address" /> */}
                    </FormGroup>

                    {/* <FormGroup> */}
                        {/* {(city!='' && addressString!= '' && zip!='') ? 
                        (<FormControlLabel control={<Checkbox color="default" onChange={()=>setChecked(!checked)}/>} sx={{color: 'black'}} label="Please confirm your address"/>):
                        (<FormControlLabel disabled control={<Checkbox onChange={()=>setChecked(!checked)}/>} label="Please confirm your address" sx={{color: 'black'}}/>)} */}
                    
                    {/* {(city==='' || addressString=== '' || zip==='') ? (<FormControlLabel disabled checked={checked} control={<Checkbox/>} onChange={(event)=>setChecked(event.target.checked)} label="Please confirm your address" sx={{color: 'black'}}/>) :
                        (<FormControlLabel checked={checked} control={<Checkbox color="default" onChange={(event)=>setChecked(event.target.checked)}/>} sx={{color: 'black'}} label="Please confirm your address"/>)}
                        
                    
                    <FormControlLabel checked={checked} control={<Checkbox color="default"  onChange={()=>{

                    }}/> sx={{color: 'black'}} label="Please confirm your address"/>

                    </FormGroup>

                    
                    <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
                </Grid>
                {(checked) ? (<Button 
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