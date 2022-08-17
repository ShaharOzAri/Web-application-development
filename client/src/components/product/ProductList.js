import * as React from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from "@mui/material/Card";
import TitleDivider from "../UI/TitleDivider";
import CardMedia from "@mui/material/CardMedia";
import ImageListItem from "@mui/material/ImageListItem";
import { CardContent } from '@mui/material';
import { useState } from 'react';
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { useAuth,AuthProvider } from '../Utils/auth';
import EuroSymbolTwoToneIcon from '@mui/icons-material/EuroSymbolTwoTone';





export default function ProductList(props){
  const auth = useAuth();

  console.log('start');
  // console.log(auth.cartItems);
  const products=props.productList; 

  const [list, updateList] = useState(products);


  const removeItemHandler= (e)=>{
    console.log('remove item');
    console.log(1);
    var p=e.target.getAttribute("removeProduct");
    auth.removeCartProduct(p);
  //  updateList(list.filter(product => product.name !== name));
    updateTotalSum();
  };

  const updateTotalSum= ()=>{
    console.log('sum total');
    auth.getCartTotal();

    // let sum=list.reduce((total, currentValue)=> total = total + currentValue.price, 0);
      return (<div>{!auth.cartTotal ? ( <p>no products yet.....</p>) : (<p>Total price: {auth.cartTotal} $</p> )}</div>)
    // return (<div>{! auth.cartTotal ? ( <p>no products yet.....</p>) : (<p>Total price: { auth.cartTotal}</p> )}</div>);

  }

    return(
     
       <Container sx={{boxShadow: 3, backgroundColor:"#fff", width: "80%", mt: 3, borderRadius: 2 , backgroundColor: '#FDFDFD' }} >
       <Typography sx={{display: 'flex',fontWeight: 'bold',justifyContent:'center', alignContent: 'center', color:'black', fontSize: 25}}> 
       PRODUCT LIST</Typography>

        <List sx={{display: 'flex', flexDirection: 'column',   color:'#F3E8DE' }}> 

        {auth.cartItems!=null ? (auth.cartItems.map(product => {return(
        <ListItem sx={{display: 'flex', flexDirection: 'row',  width: '100%', boxShadow:3, mb: 2, borderRadius:2,  backgroundColor: '#FDFDFD'}}  >
            {/* <Card sx={{display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: '#FDFDFD'}}> */}
                    <ImageListItem sx={{ width: 200, height: 200, boxShadow:3 }}>
                         <img src={`${product.images[0]}`} sx={{width: '10px'}}/>
                    </ImageListItem>
            <CardContent sx={{ flex: 'auto', flexDirection: 'row', fontFamily: 'monospace', color:'black'}}>
            <Typography sx={{fontWeight: 'bold', alignContent: 'right'}} >  {product.name} </Typography>
            <Typography sx={{alignContent: 'left'}} > <b>Price:</b> {product.price} $ </Typography>
            <Typography sx={{alignContent: 'left'}}>  <b>Quantity:</b> {product.qty} </Typography>
            
             {console.log('print product')}
             {console.log(product)}

             <Button sx={{color:'black', fontSize:'12'}} removeProduct={product._id} onClick={removeItemHandler}><DeleteIcon />remove</Button>
            
            </CardContent>
            {/* </Card> */}
        </ListItem> );})): 
        <Typography>
          Cart Is Empty
        </Typography>}
                <Typography sx={{alignContent: 'left', color: 'black', fontFamily:'monospace', backgroundColor:'#f4f4f4'}}> {updateTotalSum()}    </Typography>
        </List>
        </Container>
      
    );
}
