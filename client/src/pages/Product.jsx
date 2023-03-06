import React from 'react'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import { Box, Stack, Typography, useMediaQuery } from  '@mui/material'
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
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)")


  return (
    <div>
        <Navbar />
        { isNonMobileScreen && <Announcement />}
        <Stack flexDirection={ isNonMobileScreen ? "row" : "column" } gap={1} padding={ isNonMobileScreen ? "50px": "10px"} >
            <Box flex={2} >
                <img src={bestGloves[7].img} alt={bestGloves[7].id} style={{ width: "100%", maxHeight: "800px" }} />
            </Box>
            <Box flex={1} >
                <Box>
                    <Typography variant='h4' textTransform='uppercase' textAlign={ isNonMobileScreen ? "null" : "center" } mb="15px" > Some Boxing Gloves </Typography>
                    <Typography variant='p' fontSize='18px' fontWeight='600' color='darkgray' textAlign={ isNonMobileScreen ? "null" : "center" } >$ {bestGloves[7].price}</Typography>
                    <hr style={{ margin: "15px 0 6px" }} />
                    <Typography variant='p' fontSize='16px' lineHeight='1.65' mb={8} sx={{ marginBottom: "70px 0"  }} >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.
                    </Typography>
                    <FormControl fullWidth sx={{ mt: "70px" }}>
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
                    <FormControl sx={{ mb: "14px", mt: "15px" }} fullWidth>
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
                    <ButtonGroup sx={{ display: 'flex', alignItems: 'center', width: 'fit-content', border: '.75px solid', mt: "15px" }} >
                        <Button variant="standard" ><RemoveIcon /></Button>
                        <Box >1</Box>
                        <Button variant="standard" ><AddIcon /></Button>
                    </ButtonGroup>
                    <Button variant='contained' sx={{ mt: "25px", bgcolor: "black", color: "white"  }} fullWidth>Add to Cart</Button>
                </Box>
            </Box>
        </Stack>
        <Footer />
    </div>
  )
}

export default Product