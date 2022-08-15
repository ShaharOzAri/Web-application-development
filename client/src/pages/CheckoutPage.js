import TitleDivider from "../components/UI/TitleDivider";
import CategoryCard from "../components/Category/CategoryCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Grid";
import ProductList from "../components/product/ProductList";
import CardReactFormContainer from 'card-react';
import CreditCratPayment from "../components/Checkout/CreditCardPayment";
import Deliveries from "../components/Checkout/Deliveries";
import { Button} from "@mui/material";
import { useAuth } from "../components/Utils/auth";
import { useNavigate } from "react-router-dom";

// import CreditCard from 'react-creditcard';
import { AddNewOrder } from "../controller/OrderController";

export default function CheckoutPage(props){
  const auth= useAuth();

  const placeOrderHandler=()=>{
    if( auth.cartItems===null){
      alert("your ");
    }
    else{

    }
    
    // const order=new order; 
}


    return (
      
    
    <Container  maxWidth='xxl' sx={{alignContent:'center', alignItems:'center', display:'inline', }}>
         <TitleDivider Title="CHECKOUT" />
       <ProductList mt={3} mb={3} productList={props.productList}/>
       <br/>
       <TitleDivider Title="" mt={3} />

      <Deliveries cities={cities} />
  {/* <CreditCratPayment /> */}

      <Grid mt={3} sx={{display:'flex', alignContent:'center', alignItems:'center', flexDirection: 'column'}}>
       <Button 
         variant="contained"
         size='large'
         onClick={placeOrderHandler}
         sx={{backgroundColor:'#dbc49dd2', alignItems: 'center', width: 400}}>
          Place order
        {/* SAVE ADDRESS */}
       </Button>
   </Grid> 
 
       
  
    </Container>
    ); 
}

const cities = [
  { label: 'Tzfat'},
  { label: 'Tel-Aviv'},
];