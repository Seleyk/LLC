import Search from '@mui/icons-material/Search'
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, Grid, IconButton } from '@mui/material'
import React from 'react'

const Product = ({ item }) => {
  return (
    <Grid item xs={12} md={3} sx={{ height: "350px", position: "relative", padding: "40px", display: "flex", alignItems: "center", justifyContent: 'center' }} >
      <img src={item.img} alt={item.id} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      <Box sx={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, opacity: 0, transition: " 0.5s ease-in-out", background: "black", cursor: "pointer", "&:hover": { opacity: .8 } }}>
        <Box sx={{ width: "100%", height: "100%", position: 'absolute', top: 0, left: 0, backgroundColor: "rbga(0, 0, 0, 0.2)", zIndex: "3", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.5s ease", cursor: "pointer", "&:hover": { opacity: 1 } }}>
          <IconButton sx={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "white", color: "black", display: "flex", alignItems: "center", justifyContent: "center", margin: "10px", transition: "all 0.5s ease", "&:hover": { backgroundColor: "#ffffff", transform: "scale(1.1)" } }} ><ShoppingCartOutlined /></IconButton>
          <IconButton sx={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "white", color: "black", display: "flex", alignItems: "center", justifyContent: "center", margin: "10px", transition: "all 0.5s ease", "&:hover": { backgroundColor: "#ffffff", transform: "scale(1.1)" } }} ><Search /></IconButton>
          <IconButton sx={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "white", color: "black", display: "flex", alignItems: "center", justifyContent: "center", margin: "10px", transition: "all 0.5s ease", "&:hover": { backgroundColor: "#ffffff", transform: "scale(1.1) " }}} ><FavoriteBorderIcon /></IconButton>
        </Box>
      </Box>
    </Grid>
  )
}

export default Product