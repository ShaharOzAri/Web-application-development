import {Container, Typography} from '@mui/material';
import { useAuth } from '../components/Utils/auth';


export default function OrderPage(props){
const auth= useAuth();
const userName=JSON.stringify(auth.getUser()).first_name;


return(
<Container mb={3} sx={{ height: 450, width: "80%", backgroundColor:"#fff",  mt: 3, borderRadius: 2 , boxShadow: 3 }}>
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
    </Typography>



 </Container>
 
 );

}