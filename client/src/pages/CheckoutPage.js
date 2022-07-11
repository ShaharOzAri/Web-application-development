import TitleDivider from "../components/UI/TitleDivider";
import CategoryCard from "../components/Category/CategoryCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Grid";
import ProductList from "../components/product/ProductList";
import CardReactFormContainer from 'card-react';
import CreditCratPayment from "../components/Checkout/CreditCardPayment";
import Deliveries from "../components/Checkout/Deliveries";
// import CreditCard from 'react-creditcard';


export default function CheckoutPage(props){
    return (
    
    <Container  maxWidth='xxl'>
         <TitleDivider Title="CHECKOUT" />
       <ProductList productList={props.productList}/>
       <TitleDivider Title="" sx={{}} />
       {/* <CardReactFormContainer container="card-wrapper" 
       
          formInputsNames={
      {
        number: 'CCnumber', // optional — default "number"
        expiry: 'CCexpiry',// optional — default "expiry"
        cvc: 'CCcvc', // optional — default "cvc"
        name: 'CCname' // optional - default "name"
      }
    }
    
    initialValues= {
      {
        number: '4242424242424242', // optional — default •••• •••• •••• ••••
        cvc: '123', // optional — default •••
        expiry: '16/12', // optional — default ••/••
        name: 'Random Name' // optional — default FULL NAME
      }
    }
    
    classes={
      {
        valid: 'valid-input', // optional — default 'jp-card-valid'
        invalid: 'invalid-input' // optional — default 'jp-card-invalid'
      }
    }
    
    formatting={true}>
        <form>
  <input placeholder="Full name" type="text" name="CCname" />
  <input placeholder="Card number" type="text" name="CCnumber" />
  <input placeholder="MM/YY" type="text" name="CCexpiry" />
  <input placeholder="CVC" type="text" name="CCcvc" />
</form>


    </CardReactFormContainer> */}
    {/* <CreditCard
  number="4111111111111111"
  cvc="123"
  expiry="1220"
  focused="cvc"
  backDescriptionText="Use of this card is governed by the conditions of use. You must not disclose your PIN to anyone."
  /> */}

<Deliveries cities={cities} />
  {/* <CreditCratPayment /> */}
    </Container>
    ); 
}

const cities = [
  { label: 'Tzfat'},
  { label: 'Tel-Aviv'},
];