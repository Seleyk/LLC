import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Container = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
`

const WidgetSm = () => {
  return (
    <Container>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Typography variant='h5' fontWeight='600' >New Members</Typography>
        <ListItem 
          alignItems="flex-start" 
          secondaryAction={
            <Button size='medium' variant='contained' sx={{ bgcolor: 'darkblue' }}>
              <VisibilityIcon fontSize='16px' sx={{ mr: 1 }} />
              <Typography fontSize='12px' >
                Display
              </Typography>
            </Button>
          }
            
        >
          <ListItemAvatar>
            <Avatar alt="Precious Sharp" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography fontWeight='600' >Precious Sharp</Typography>}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="grey"
                >
                  Software Developer
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem 
          alignItems="flex-start" 
          secondaryAction={
            <Button size='medium' variant='contained' sx={{ bgcolor: 'darkblue' }}>
              <VisibilityIcon fontSize='16px' sx={{ mr: 1 }} />
              <Typography fontSize='12px' >
                Display
              </Typography>
            </Button>
          }
            
        >
          <ListItemAvatar>
            <Avatar alt="Precious Sharp" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography fontWeight='600' >Precious Sharp</Typography>}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="grey"
                >
                  Software Developer
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem 
          alignItems="flex-start" 
          secondaryAction={
            <Button size='medium' variant='contained' sx={{ bgcolor: 'darkblue' }}>
              <VisibilityIcon fontSize='16px' sx={{ mr: 1 }} />
              <Typography fontSize='12px' >
                Display
              </Typography>
            </Button>
          }
            
        >
          <ListItemAvatar>
            <Avatar alt="Precious Sharp" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography fontWeight='600' >Precious Sharp</Typography>}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="grey"
                >
                  Software Developer
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem 
          alignItems="flex-start" 
          secondaryAction={
            <Button size='medium' variant='contained' sx={{ bgcolor: 'darkblue' }}>
              <VisibilityIcon fontSize='16px' sx={{ mr: 1 }} />
              <Typography fontSize='12px' >
                Display
              </Typography>
            </Button>
          }
            
        >
          <ListItemAvatar>
            <Avatar alt="Precious Sharp" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography fontWeight='600' >Precious Sharp</Typography>}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="grey"
                >
                  Software Developer
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem 
          alignItems="flex-start" 
          secondaryAction={
            <Button size='medium' variant='contained' sx={{ bgcolor: 'darkblue' }}>
              <VisibilityIcon fontSize='16px' sx={{ mr: 1 }} />
              <Typography fontSize='12px' >
                Display
              </Typography>
            </Button>
          }
            
        >
          <ListItemAvatar>
            <Avatar alt="Precious Sharp" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography fontWeight='600' >Precious Sharp</Typography>}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="grey"
                >
                  Software Developer
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </Container>
  )
}

export default WidgetSm