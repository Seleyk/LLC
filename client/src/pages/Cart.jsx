import { Button, ButtonGroup, Divider, List, ListItem, ListItemText, Typography, useMediaQuery } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { bestGloves } from '../data'
import Footer from '../components/Footer';

const Cart = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)")

  return (
    <div>
      <Navbar />
      <Announcement />
      <Stack flexDirection={ isNonMobileScreen ? "row" : "column" } gap={1} padding={ isNonMobileScreen ? "50px": "10px" } >
        <Box flex='2'>
          <Typography mb={3} variant='h5' fontWeight={500} >Shopping Cart</Typography>
          <List sx={{ boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)', padding: '30px' }} >
            <ListItem sx={{ display: "flex" }}>
              <Box><img src={bestGloves[7].img} alt={bestGloves[7].id} style={{ width: "125px" }}  /></Box>
              <Stack flex={2} >
                <Typography>Product Name</Typography>
                <ListItemText sx={{ padding: "15px", flex: 2, }}
                  primary={
                    <React.Fragment>
                      <Typography sx={{ color: "grey" }}>
                        Color: {bestGloves[7].id}
                      </Typography>
                      <Typography>
                        Size: {bestGloves[7].id}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </Stack>
              <Typography flex={1} fontWeight={500} variant='h6' >${bestGloves[7].price}</Typography>
              <Box flex={1} >
                <ButtonGroup sx={{ display: 'flex', alignItems: 'center', width: 'fit-content', border: '.75px solid' }} >
                  <Button variant="standard" ><RemoveIcon /></Button>
                  <Box >1</Box>
                  <Button variant="standard" ><AddIcon /></Button>
                </ButtonGroup>
              </Box>
            </ListItem>
            <Divider />
          </List>
        </Box>
        <Box flex='1' >
          <Typography mb={3} variant='h5' fontWeight={500} >Payment Summary</Typography>
          <Box flex={1} sx={{   boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)', padding: '30px' }} >
            <Box>
              <Typography bgcolor='#efefef' textAlign='center' textTransform='uppercase' mb={2}>Guest Account</Typography>
              <Stack mb={2} direction='row'><Typography sx={{ mr: 'auto' }}>Transaction code</Typography> <Typography>AG554221</Typography></Stack>
              <Divider />
              <Stack mt={2} mb={2} direction='row'><Typography sx={{ mr: 'auto' }}>Order Summary</Typography> <Typography>$125</Typography></Stack>
              <Stack mb={2} direction='row'><Typography sx={{ mr: 'auto' }}>Est. Shipping</Typography> <Typography>$15</Typography></Stack>
              <Stack mb={2} direction='row'><Typography sx={{ mr: 'auto' }}>Total</Typography> <Typography>$140</Typography></Stack>
              <Button variant='contained' sx={{ mt: "25px", bgcolor: "black", color: "white", letterSpacing: ".25rem"  }} fullWidth>Checkout</Button>
            </Box>
          </Box>
        </Box>
      </Stack>
      <Footer />
    </div>
  )
}

export default Cart