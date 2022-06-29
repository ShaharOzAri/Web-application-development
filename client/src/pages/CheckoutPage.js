import TitleDivider from "../components/UI/TitleDivider";
import CategoryCard from "../components/Category/CategoryCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Grid";
import ProductList from "../components/product/ProductList";

export default function CheckoutPage(props){
    return (
    
    <Container  maxWidth='xxl'>
         <TitleDivider Title="CHECKOUT" />
       <ProductList productList={props.productList}/>
    </Container>
    ); 
}