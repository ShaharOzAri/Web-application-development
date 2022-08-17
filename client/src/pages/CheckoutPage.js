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
import { useState } from "react";

export default function CheckoutPage(props){
  const auth= useAuth();
  const [address, setFinalAddress]= useState(null); 

  const navigate= useNavigate();

  const createOrderProductsArr=()=>{
      // auth.cartItems.map(x-> )
      const orderArr= new Array; 
      auth.cartItems.forEach(p => { 
        orderArr.push({
          id: p._id,
          name: p.name, 
          qty: p.qty, 
        });
      });
      return orderArr; 
  };

  const placeOrderHandler= async (event)=>{
    event.preventDefault();
    if(address == null){
      alert('please insert a valid address');
    }
    else{

    

    // if( auth.cartItems===null){
    //   alert("your ");
    // }
    console.log("in place order");
    const currentDate = new Date();
    const userJson= JSON.parse(auth.getUser()); 
    
    const newOrder={
      // date: `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`,
      // hour: `${currentDate.getHours()}:${currentDate.getMinutes()}`,
      date:currentDate, 
      productIds: createOrderProductsArr(),
      totalSum: auth.getCartTotal(),
      userEmail: userJson.email,
      address: address,
    };



    
    // var response = await AddNewOrder(newOrder);
    // if (response.status == 200) {
    //   navigate(`orders`);
    // } else if (response.status == 403) {
    //   alert("Something went wrong,please try again");
    // }

    console.log('axios');
    var response= await AddNewOrder(newOrder);
    console.log(response.data.msg._id);
    if(response.status == 200){
      navigate(`order/id=${response.data.msg._id}`);
    }else if(response.status == 403){
      alert("Something went wrong,please try again");
    }
    
    console.log('print new order');
    console.log(newOrder);
    


      // const data = new FormData(event.currentTarget);
      
    }
    };

    const nav=()=> {
      alert('NAv');
      navigate(`orders`);
    };



    return (
      
    
    <Container  maxWidth='xxl' sx={{alignContent:'center', alignItems:'center', display:'inline', }}>
         <TitleDivider Title="CHECKOUT" />
       <ProductList mt={3} mb={3} productList={props.productList}/>
       <br/>
       <TitleDivider Title="" mt={3} />

      <Deliveries setFinalAddress={setFinalAddress} cities={cities} />
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