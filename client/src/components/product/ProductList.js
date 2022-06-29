import * as React from 'react';
import { styled } from '@mui/material/styles';
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



export default function ProductList(props){
//   const products=props.productList; 

  const [productList, updateList] = useState(props.productList);

  const handleRemoveItem= (id)=>{
   updateList(productList.filter(product => product.id !== id));
  };

//   function onDelete(i) {
//     const res =  orders.findByIdAndRemove(i);
//   }


    return(
     
        <Box sx={{boxShadow: 10,  }}>
        {/* <TitleDivider Title="" /> */}
       <Typography sx={{fontWeight: 'bold', alignContent: 'center'}}> Product list</Typography>
        <List sx={{display: 'flex', flexDirection: 'column' }}> 

            
            {/* <Card><ListItem>{props.ProductList.map(product => product.name)}</ListItem></Card> */}
        
        {productList.map((product, id) => 
        <ListItem sx={{display: 'flex', flexDirection: 'row',  width: '100%'}} key={id} >
            <Card sx={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                    <ImageListItem sx={{ width: 100, height: 100, boxShadow:3 }}>
                         <img src={`${product.image}`} sx={{width: '10px'}}/>
                    </ImageListItem>
                    <CardContent sx={{ flex: 'auto', flexDirection: 'row'}}>
            <Typography sx={{fontWeight: 'bold', alignContent: 'right'}} > {product.name} </Typography>
            <Typography sx={{alignContent: 'left'}} > {product.price} </Typography>
            <Typography sx={{alignContent: 'left'}}>     </Typography>
             <IconButton edge="end" aria-label="delete" product={product} onClick={{handleRemoveItem}}><DeleteIcon /></IconButton>
                

            </CardContent>
            </Card>
        </ListItem>)}
        
        </List>
        </Box>
    );
}


// function generate(element) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     }),
//   );
// }

// const Demo = styled('div')(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
// }));

// export default function InteractiveList() {
//   const [dense, setDense] = React.useState(false);
//   const [secondary, setSecondary] = React.useState(false);

//   return (
//     <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
//       <FormGroup row>
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={dense}
//               onChange={(event) => setDense(event.target.checked)}
//             />
//           }
//           label="Enable dense"
//         />
//         <FormControlLabel
//           control={
//             <Checkbox
//               checked={secondary}
//               onChange={(event) => setSecondary(event.target.checked)}
//             />
//           }
//           label="Enable secondary text"
//         />
//       </FormGroup>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
//             Text only
//           </Typography>
//           <Demo>
//             <List dense={dense}>
//               {generate(
//                 <ListItem>
//                   <ListItemText
//                     primary="Single-line item"
//                     secondary={secondary ? 'Secondary text' : null}
//                   />
//                 </ListItem>,
//               )}
//             </List>
//           </Demo>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
//             Icon with text
//           </Typography>
//           <Demo>
//             <List dense={dense}>
//               {generate(
//                 <ListItem>
//                   <ListItemIcon>
//                     <FolderIcon />
//                   </ListItemIcon>
//                   <ListItemText
//                     primary="Single-line item"
//                     secondary={secondary ? 'Secondary text' : null}
//                   />
//                 </ListItem>,
//               )}
//             </List>
//           </Demo>
//         </Grid>
//       </Grid>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
//             Avatar with text
//           </Typography>
//           <Demo>
//             <List dense={dense}>
//               {generate(
//                 <ListItem>
//                   <ListItemAvatar>
//                     <Avatar>
//                       <FolderIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText
//                     primary="Single-line item"
//                     secondary={secondary ? 'Secondary text' : null}
//                   />
//                 </ListItem>,
//               )}
//             </List>
//           </Demo>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
//             Avatar with text and icon
//           </Typography>
//           <Demo>
//             <List dense={dense}>
//               {generate(
//                 <ListItem
//                   secondaryAction={
//                     <IconButton edge="end" aria-label="delete">
//                       <DeleteIcon />
//                     </IconButton>
//                   }
//                 >
//                   <ListItemAvatar>
//                     <Avatar>
//                       <FolderIcon />
//                     </Avatar>
//                   </ListItemAvatar>
//                   <ListItemText
//                     primary="Single-line item"
//                     secondary={secondary ? 'Secondary text' : null}
//                   />
//                 </ListItem>,
//               )}
//             </List>
//           </Demo>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
