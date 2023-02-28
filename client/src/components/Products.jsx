import { Grid } from '@mui/material'
import React from 'react'
import Product from './Product'
import { popularProducts } from '../data'


const Products = () => {
  return (
    <Grid container spacing={5} sx={{display: "flex", marginTop: "2rem", alignItems: "center", justifyItems: "center", justifyContent: "space-between", padding: "20px" }}>
      {popularProducts.map((item) => (
       <Product item={item} key={item.id} />
      ))}
    </Grid>
  )
}

export default Products