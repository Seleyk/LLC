import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import Footer from "../components/Footer"
import Products from '../components/Products';
import { Box } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useMediaQuery } from '@mui/material'


const ProductList = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)")
//   const [color, setColor] = useState(null);
//   const [size, setSize] = useState(null);
//   const [price, setPrice] = useState(null);


  return (
    <div>
      <Navbar />
      <Announcement />
      <div
        style={{
          margin: "50px 0",
          padding: "0 80px",
          letterSpacing: ".2rem",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px",  textAlign: "center" }}>Muay Thai Shorts</h1>
        <p style={{ textAlign: "center" }}>
          Our best collection of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour, or randomized
          words which don’t look even slightly believable.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "0 50px" }}>
        <Box display={ isNonMobileScreen? "null" : "flex"} flexDirection={ isNonMobileScreen? "row" : "column" } sx={{ minWidth: "120px" }}>
            <FormControl sx={{ mb: "14px" }} fullWidth>
                <InputLabel >Color</InputLabel>
                <Select
                // value={color}
                label="Color"
                // onChange={handleChange}
                >
                    <MenuItem >White</MenuItem>
                    <MenuItem >Red</MenuItem>
                    <MenuItem >Orange</MenuItem>
                    <MenuItem >Yellow</MenuItem>
                    <MenuItem >Green</MenuItem>
                    <MenuItem >Blue</MenuItem>
                    <MenuItem >Black</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel>Size</InputLabel>
                <Select
                // value={age}
                label="Age"
                // onChange={handleChange}
                >
                    <MenuItem>XS</MenuItem>
                    <MenuItem>S</MenuItem>
                    <MenuItem>M</MenuItem>
                    <MenuItem>L</MenuItem>
                    <MenuItem>XL</MenuItem>
                    <MenuItem>XXL</MenuItem>
                    <MenuItem>XXXL</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                // value={age}
                label="Age"
                // onChange={handleChange}
                >
                    <MenuItem>Newest</MenuItem>
                    <MenuItem>Price: Low to High</MenuItem>
                    <MenuItem>Price: High to Low</MenuItem>
                </Select>
            </FormControl>
        </Box>
      </div>
      <Products />
      <Footer />
    </div>
  );
}

export default ProductList