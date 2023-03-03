import React from 'react';
import styled from "styled-components";
import { Avatar, Box } from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { Stack } from '@mui/system';

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  box-shadow: 0 1px 10px 0 rgba(0,0,0,.14902);
  position: sticky;
  top: 0;
  z-index: 1;
`

const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Box>
                <Logo>Fight Admin</Logo>
            </Box>
            <Box>
                <Stack direction="row" spacing={.25} >
                    <IconButton><Badge badgeContent={4} color="primary" ><NotificationsNoneIcon /></Badge></IconButton>   
                    <IconButton><LanguageIcon /></IconButton>
                    <IconButton><SettingsIcon /></IconButton>   
                    <Avatar 
                        alt="Remy Sharp" 
                        src="https://media.licdn.com/dms/image/D5603AQHdB5WgbvVV_w/profile-displayphoto-shrink_800_800/0/1676167484073?e=2147483647&v=beta&t=TDIWmP0qW5cW0RpG4ANgUJRN-LkaQMf1czAyWH7RQKg" 
                        sx={{ cursor: "pointer" }}
                    />   
                </Stack>
            </Box>
        </Wrapper>
    </Container>
  )
}

export default Navbar