import React from 'react';
import styled from 'styled-components';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';

const Container = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    background-color: rgb(251, 251, 255);
    position: sticky;
    top: 50px;
`

const Wrapper = styled.div`
    padding: 20px;
    color: #555;
`

const Menu = styled.div`
    margin-bottom: 10px;  
`

const Title = styled.h3`
    fontsize: 50px;
    color: rgb(197, 194, 194); 
`

const List = styled.ul`
    list-style: none;
    padding: 5px;
`

const Item = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    &:hover {
        background-color: rgb(240, 240, 255);
    }
    &:active{
        background-color: rgb(240, 240, 255);
    }
`

const Sidebar = () => {
  return (
    <Container>
       <Wrapper>
          <Menu>
            <Title>Dashboard</Title>
            <List>
                <Item>
                    <DashboardIcon fontSize='20px' sx={{ mr: "5px" }} />
                    Home
                </Item>
                <Item>
                    <TimelineIcon fontSize='20px' sx={{ mr: "5px" }} />
                    Analytics
                </Item>
                <Item>
                    <TrendingUpIcon fontSize='20px' sx={{ mr: "5px" }} />
                    Sales
                </Item>
            </List>
            <Title>Quick Menu</Title>
            <List>
                <Item>
                    <PeopleOutlineOutlinedIcon fontSize='20px' sx={{ mr: "5px" }} />
                    Users
                </Item>
                <Item>
                    <Inventory2OutlinedIcon fontSize='20px' sx={{ mr: "5px" }} />
                    Products
                </Item>
                <Item>
                    <PaidOutlinedIcon fontSize='20px' sx={{ mr: "5px" }} />
                    Transactions
                </Item>
                <Item>
                    <BarChartOutlinedIcon fontSize='20px' sx={{ mr: "5px" }} />
                    Reports
                </Item>
            </List>
            <Title>Notifications</Title>
            <List>
                <Item>
                    <MailOutlinedIcon fontSize='20px' sx={{ mr: "5px" }} />
                    Mail
                </Item>
                <Item>
                    <DynamicFeedOutlinedIcon fontSize='20px' sx={{ mr: "5px" }} />
                    Feedback
                </Item>
                <Item>
                    <ChatBubbleOutlineOutlinedIcon fontSize='20px' sx={{ mr: "5px" }} />
                    Messages
                </Item>
            </List>
            <Title>Staff</Title>
            <List>
                <Item>
                    <WorkOutlineOutlinedIcon fontSize='20px' sx={{ mr: "5px" }} />
                    Manage
                </Item>
                <Item>
                    <TimelineIcon fontSize='20px' sx={{ mr: "5px" }} />
                    Analytics
                </Item>
                <Item>
                    <ReportGmailerrorredOutlinedIcon fontSize='20px' sx={{ mr: "5px" }} />
                    Reports
                </Item>
            </List>
          </Menu>  
       </Wrapper>
    </Container>
  )
}

export default Sidebar