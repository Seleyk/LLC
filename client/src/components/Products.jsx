import { Grid, useMediaQuery } from '@mui/material';
import React from 'react';
import Product from './Product';
import { popularProducts } from '../data';


const Products = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)")


  return (
    <Grid container gap={isNonMobileScreen? 'null' : '8px'} spacing={isNonMobileScreen ? '5' : 'null'} sx={{display: "flex", marginTop: "2rem", alignItems: "center", justifyItems: "center", justifyContent: "space-between", padding: "20px" }}>
      {popularProducts.map((item) => (
       <Product item={item} key={item.id} />
      ))}
    </Grid>
  )
}

export default Products