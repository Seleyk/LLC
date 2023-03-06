import { Avatar, Chip, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`

const WidgetLg = () => {
  return (
    <Container>
      <Typography variant="h5" fontWeight="600">
        Recent Transactions
      </Typography>
      <Table sx={{ minWidth: 650, mt: 0 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: '600', fontSize: '15px' }} >Customer</TableCell>
            <TableCell sx={{fontWeight: '600', fontSize: '15px' }} align="right">Date</TableCell>
            <TableCell sx={{fontWeight: '600', fontSize: '15px' }} align="right">Amount</TableCell>
            <TableCell sx={{fontWeight: '600', fontSize: '15px' }} align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Stack direction='row' alignItems='center' gap='14px' >
                  <Avatar alt="Precious Sharp" src="https://static.wixstatic.com/media/cc265e_f0631ce33cda4e66bc60f5058dfdd3e9.jpg/v1/fill/w_328,h_492,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cc265e_f0631ce33cda4e66bc60f5058dfdd3e9.jpg" />
                  <Typography fontWeight='600' component='span' >Someones Name</Typography>
                </Stack>
              </TableCell>
              <TableCell align="right">Mar 4 2023</TableCell>
              <TableCell align="right">$124.95</TableCell>
              <TableCell align="right"><Chip label="pending" color="primary" /></TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Stack direction='row' alignItems='center' gap='14px' >
                  <Avatar alt="Precious Sharp" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                  <Typography fontWeight='600' component='span' >Someones Name</Typography>
                </Stack>
              </TableCell>
              <TableCell align="right">Mar 4 2023</TableCell>
              <TableCell align="right">$124.95</TableCell>
              <TableCell align="right"><Chip label="Approved" color="success" /></TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Stack direction='row' alignItems='center' gap='14px' >
                  <Avatar alt="Precious Sharp" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                  <Typography fontWeight='600' component='span' >Someones Name</Typography>
                </Stack>
              </TableCell>
              <TableCell align="right">Mar 4 2023</TableCell>
              <TableCell align="right">$124.95</TableCell>
              <TableCell align="right"><Chip sx={{ opacity: .6 }} label="Declined" color="primary" /></TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Stack direction='row' alignItems='center' gap='14px' >
                  <Avatar alt="Precious Sharp" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                  <Typography fontWeight='600' component='span' >Someones Name</Typography>
                </Stack>
              </TableCell>
              <TableCell align="right">Mar 4 2023</TableCell>
              <TableCell align="right">$124.95</TableCell>
              <TableCell align="right"><Chip sx={{ opacity: .6 }} label="Pending" color="error" /></TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Stack direction='row' alignItems='center' gap='14px' >
                  <Avatar alt="Precious Sharp" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                  <Typography fontWeight='600' component='span' >Someones Name</Typography>
                </Stack>
              </TableCell>
              <TableCell align="right">Mar 4 2023</TableCell>
              <TableCell align="right">$124.95</TableCell>
              <TableCell align="right"><Chip sx={{ opacity: .6 }} label="Approved" color="success" /></TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Stack direction='row' alignItems='center' gap='14px' >
                  <Avatar alt="Precious Sharp" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                  <Typography fontWeight='600' component='span' >Someones Name</Typography>
                </Stack>
              </TableCell>
              <TableCell align="right">Mar 4 2023</TableCell>
              <TableCell align="right">$124.95</TableCell>
              <TableCell align="right"><Chip sx={{ opacity: .6 }} label="Approved" color="success" /></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
}

export default WidgetLg