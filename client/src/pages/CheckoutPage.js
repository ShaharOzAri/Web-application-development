import TitleDivider from "../components/UI/TitleDivider";
import CategoryCard from "../components/Category/CategoryCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Grid";
import ProductList from "../components/product/ProductList";
import CardReactFormContainer from 'card-react';
import CreditCratPayment from "../components/Checkout/CreditCardPayment";
import Deliveries from "../components/Checkout/Deliveries";
import { Button} from "@mui/material";

// import CreditCard from 'react-creditcard';
import { AddNewOrder } from "../controller/OrderController";

export default function CheckoutPage(props){
  const placeOrderHandler=(props)=>{
    // const order=new order; 
}


    return (
      
    
    <Container  maxWidth='xxl' sx={{alignContent:'center', alignItems:'center', display:'inline', }}>
         <TitleDivider Title="CHECKOUT" />
       <ProductList productList={props.productList}/>
       <TitleDivider Title="" sx={{mt:3}} />

      <Deliveries cities={cities} />
  {/* <CreditCratPayment /> */}

  <Button 
                    variant="contained"
                    size='large'
                    onSubmit={placeOrderHandler}
                    sx={{backgroundColor:'#dbc49dd2', alignItems: 'center', width: 400}}>
                        Place order
                        {/* SAVE ADDRESS */}
   </Button>
       
  
    </Container>
    ); 
}

const cities = [
  { label: 'Tzfat'},
  { label: 'Tel-Aviv'},
];