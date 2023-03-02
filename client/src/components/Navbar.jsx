import React from 'react'
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FlexBetween from '../styledComponents/FlexBetween'
import NavContainer from '../styledComponents/NavbarStyle'
import { Typography, useMediaQuery } from '@mui/material'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { Container } from '@mui/system';






const Navbar = () => {
  const isNonMobileScreen = useMediaQuery("(min-width: 1000px)")

  return (
    <NavContainer height={ isNonMobileScreen ? "60px" : "50px" }>
        <FlexBetween height="100%" padding={ isNonMobileScreen ? "0.625rem 1.25rem" : "0.625rem 0" }>
          
          <Container style={{ flex: 1, display: "flex", alignItems: "center" }}>
            { isNonMobileScreen && ( <Typography sx={{ marginRight: "2rem" }}> EN </Typography> ) }
            <Box sx={{ display: "flex", alignItems: "center", padding: "5px 0" }}>
              <SearchIcon sx={{ cursor: 'pointer', color: 'black', mr: 1, my: 0.5 }} />
              <TextField label="Search..." variant="standard" size='small' margin='dense' color="info" />
            </Box>
          </Container>
          <Container style={{ flex: 1, textAlign: "center" }}> <Typography fontSize={ isNonMobileScreen ? "30px" : "14px"} textTransform="uppercase" fontWeight="bold" > Fight Shop </Typography> </Container>
            {isNonMobileScreen ? (
              <Container style={{ flex: 1, display: "flex", alignItems: 'center', justifyContent: "flex-end", gap: "1rem"  }}>  
                <PersonOutlineOutlinedIcon fontWeight='bold' sx={{ cursor: "pointer", color: "black"}} />
                <Badge badgeContent={4} color="info" >
                  <ShoppingCartOutlinedIcon fontWeight='bold' sx={{ cursor: "pointer", color: "black"}} />
                </Badge>
              </Container>

            ) : (
              <div style={{ flex: 1, display: "flex", alignItems: 'center', justifyContent: "flex-end", }}>  
                <IconButton>
                  <PersonOutlineOutlinedIcon />
                </IconButton>
                <IconButton>
                  <Badge >
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                </IconButton>
              </div>
            )}    
        </FlexBetween>
    </NavContainer>
  )
}

export default Navbar