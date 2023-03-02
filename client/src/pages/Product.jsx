import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import { Box } from  '@mui/material'
import Footer from '../components/Footer'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { bestGloves } from '../data'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const Product = () => {
  return (
    <div>
        <Navbar />
        <Announcement />
        <Box padding={{  }} >
            <Box>
                <img src={bestGloves[7].img} alt={bestGloves[7].img} />
            </Box>
            <Box>
                <Box>
                    <h1> Some Boxing Gloves </h1>
                    <div>{bestGloves[7].price}</div>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.
                    </p>
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
                    <p>In Stock</p>
                    <ButtonGroup>
                        <Button><RemoveIcon /></Button>
                        <Box>1</Box>
                        <Button><AddIcon /></Button>
                    </ButtonGroup>
                    <Button fullWidth>Add to Cart</Button>
                </Box>
            </Box>
        </Box>
        <Footer />
    </div>
  )
}

export default Product