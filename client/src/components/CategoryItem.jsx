import { Button, Grid } from '@mui/material';
import React from 'react';

const CategoryItem = ({ item }) => {


  return (
    <Grid item xs={12} md={3.75} sx={{ margin: "3px", height: "70vh", position: "relative" }} >
        <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover"  }}   />
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div style={{ color: "#ffffff", marginBottom: "10px" }}>{item.title}</div>
          <Button variant='contained' color='error' style={{ color: 'black' }}  >SHOP NOW</Button>
        </div>
    </Grid>
  )
}

export default CategoryItem