import {Container, Typography, Grid, Button} from '@mui/material';
import { useAuth } from '../components/Utils/auth';
import { useParams } from "react-router-dom";
import { getOrderById } from '../controller/OrderController';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageListItem from "@mui/material/ImageListItem";
import Oops from '../components/images/oops.png';
import imgOrder from '../components/images/banner2.png';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default function OrderPage(props){
const auth= useAuth();
const userName=JSON.stringify(auth.getUser()).first_name;
const [validUserOrder, setValidUserOrder]= useState(false); 
const { orderId } = useParams();
const navigate= useNavigate(); 


const isValidUserOrder= async ()=>{
        var response= await getOrderById(response);
        console.log('response');
      
        console.log("response",response);

        if(response.status == 200){
            console.log("response",response);
            if(response.data.msg.userEmail===JSON.parse(auth.getUser()).email){
                console.log(response.data.msg.userEmail);
                setValidUserOrder(true);
            }
            else{
                console.log(response.data.msg);

                setValidUserOrder(false);
            }
        }else if(response.status == 403){
            console.log("Something went wrong,please try again");
        }

}

// isValidUserOrder();

// isValidUserOrder();
useEffect(()=>{isValidUserOrder()}, []);


return(
<Container mb={3} sx={{height: "80%", width: "80%", backgroundColor:"#fff",  mt: 3, borderRadius: 2 , boxShadow: 3, marginBottom: 10,  }}>

    <Grid Container mt={5}>
        {!(validUserOrder) ? 
            (<Grid item sx={{height: 300}}>
                <Grid item sx={{display:'flex', alignContent:'center',justifyContent:'center', alignItems:'center', flexDirection:'row'}}> 
                    <ImageListItem sx={{justifyContent:'center'}}> <img src={Oops} /></ImageListItem> 
                </Grid>
                <Typography mt={6} sx={{display: 'flex',fontWeight: 'bold',justifyContent:'center', alignContent: 'center', color:'black', fontSize: 30, paddingBottom:5}}> THERE'S NOTHING HERE </Typography>
                <Typography sx={{display: 'flex',justifyContent:'center', alignContent: 'center', color:'black', fontSize: 20}}>Sorry, we couldn't find the page you were looking for. </Typography>
                
        </Grid>) 
        : 
        (<Grid>
            <Grid item mt={4} sx={{display:'flex', alignContent:'center',justifyContent:'center', alignItems:'center', flexDirection:'row', paddingTop: 3}}> 
                <ImageListItem sx={{width: "70%",justifyContent:'center', borderRadius:3, }}> <img src={imgOrder} /></ImageListItem> 
            </Grid>
            <Typography mt={3} sx={{display: 'flex',fontWeight: 'bold',justifyContent:'center', alignContent: 'center', color:'black', fontSize: 25}}>
                 YOUR ORDER RECIEVED
            </Typography>
            <Typography sx={{fontWeight: 'bold', display: 'flex',justifyContent:'left', alignContent: 'center', color:'black', fontSize: 20, paddingBottom:2}}>
                    Hey, {`${JSON.parse(auth.getUser()).first_name}`}!
            </Typography>
            <Typography sx={{display: 'flex',justifyContent:'left', alignContent: 'center', color:'black', fontSize: 20, whiteSpace:2}}>
                Thank you for your order.<br/>
                We will contact you soon as posible to finish your order.<br/>
                Your order ID is: {orderId}
                {console.log(orderId)}
            </Typography>
            
            </Grid>)}

        </Grid>

            <Grid item sx={{display:'flex', alignContent:'center',justifyContent:'center', alignItems:'center', flexDirection:'row',paddingTop:4 ,paddingBottom: 5}}>
                <Button size="large" variant="contained" onClick={()=> navigate('/')} sx={{color: 'white', backgroundColor: '#1F1F1C'}} endIcon={<HomeRoundedIcon size="large"/>} >GO TO HOMEPAGE</Button>
            </Grid>
        
{/* 
    <Typography 
    sx={{display: 'flex',fontWeight: 'bold',justifyContent:'center', alignContent: 'center', color:'black', fontSize: 25}}>
        YOUR ORDER RECIEVED
    </Typography>

    <Typography 
        sx={{display: 'flex',justifyContent:'left', alignContent: 'center', color:'black', fontSize: 20}}>
        Hey, {`${JSON.parse(auth.getUser()).first_name}`}!
        {console.log(userName)}
        <br/><br/><br/><br/>
    


    </Typography>

    <Typography 
        sx={{display: 'flex',justifyContent:'left', alignContent: 'center', color:'black', fontSize: 20}}>
        <p>Thank you for your order.</p>
        We will back to you soon as posible to finish your order.
        Your order ID is: {`${JSON.parse(auth.getUser()).first_name}`}
        we will contact you within 48 hours
    </Typography>
   
        {console.log(orderId)} */}


 </Container>
 
 );

}