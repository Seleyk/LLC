import { Button, TextField, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)")

  return (
    <Box
      flexDirection={isNonMobileScreen ? "row" : "column "}
      gap= { isNonMobileScreen ? "80px" : "50px"}
      padding= { isNonMobileScreen ? "75px 80px" : "34px 24px" }
      margin= "0 auto"
      sx={{ display: "flex", justifyContent: "space-between", background: "#efefef", color: "#6a6a6a" }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2 style={{ color: "#1C1B1B", marginBottom: "20px", textTransform: "uppercase",  }}>Fight Shop</h2>
        <p style={{ marginBottom: "16px", lineHeight: 1.65 }}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div style={{ display: "flex", gap: "15px" }} >
          <div><FacebookIcon /></div>
          <div><InstagramIcon /></div>
          <div><TwitterIcon /></div>
          <div><PinterestIcon /></div>
        </div>
      </div>
      <div style={{ flex: 1  }}>
        <div style={{ letterSpacing: ".2rem", textTransform: "uppercase", marginBottom: "20px" }}>Help</div>
        <div>
          <div style={{ lineHeight: 1.65, marginBottom: "10px",  }} >Home</div>
          <div style={{ lineHeight: 1.65, marginBottom: "10px",  }} >Men</div>
          <div style={{ lineHeight: 1.65, marginBottom: "10px",  }} >Women</div>
          <div style={{ lineHeight: 1.65, marginBottom: "10px",  }} >Boxing Gloves</div>
          <div style={{ lineHeight: 1.65, marginBottom: "10px",  }} >Protection</div>
          <div style={{ lineHeight: 1.65, marginBottom: "10px",  }} >My Account </div>
          <div style={{ lineHeight: 1.65, marginBottom: "10px",  }} >Cart</div>
          <div style={{ lineHeight: 1.65, marginBottom: "10px",  }} >Track your order</div>
          <div style={{ lineHeight: 1.65, marginBottom: "10px",  }} >Wishlist</div>
          <div style={{ lineHeight: 1.65, marginBottom: "10px",  }} >Terms</div>
        </div>
      </div>
      <div style={{ flex: 1 }}>
      <div style={{ letterSpacing: ".2rem", textTransform: "uppercase", marginBottom: "20px" }}>Contact Us</div>
        <p style={{ lineHeight: 1.65 }}>SELEY</p>
        <p style={{ lineHeight: 1.65 }}>123 First ave</p>
        <p style={{ lineHeight: 1.65 }}>New York, NY 10305</p>
        <p style={{ lineHeight: 1.65 }}>+1 (917) 456-7891</p>
        <p style={{ lineHeight: 1.65 }}>support@seley.com</p>
      </div>
      <div style={{ flex: 1 }}>
      <div style={{ letterSpacing: ".2rem", textTransform: "uppercase", marginBottom: "20px" }}>Newsletter</div>
        <div>Become a member to receive the latest updates and exclusive deals</div> 
        <TextField label="Enter your email address" variant="outlined" size='small' margin='dense' color="info" sx={{ marginBottom: "14px" }} />
        <Button variant="contained" sx={{ letterSpacing: ".2rem" }} > Subscribe </Button>
      </div>
    </Box>
  );
}

export default Footer