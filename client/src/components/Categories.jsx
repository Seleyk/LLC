import { Grid } from '@mui/material';
import React from 'react';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
    <Grid container spacing={1} sx={{ padding: "20px", justifyContent: "space-around" }} >
        {categories.map((item) => (
           <CategoryItem item={item} key={item.id} /> 
        ))}
    </Grid>
  )
}

export default Categories;