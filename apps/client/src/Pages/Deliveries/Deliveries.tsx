import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


function createData(
    orderNumber: number,
    orderId: number,
    orderLocation: string,
    orderStatus: string,
) {
    return {orderNumber, orderId, orderLocation, orderStatus};
}

const rows = [
    createData(1, 72839445627, '1455 Blvd. De Maisonneuve Ouest, Montreal, Quebec H3G 1M8', 'Shipped'),
    createData(2, 22734442800, '200 University Ave W, Waterloo, ON N2L 3G1', 'Out for delivery'),
    createData(3, 35628200374, '2325 Rue de l\'Université, Québec, QC G1V 0A6', 'Delivered'),
    createData(4, 44812018975, 'New Haven, CT 06520, United States', 'Delivered'),
];

export default function Deliveries() {
    return (
        <Box mr={18} ml={18} mt={8} mb={10}>
            <Box ml={15} mt={5} mr={15} mb={10}>
                <Typography variant="h3" color="whitesmoke" gutterBottom>
                    Your Shipments
                </Typography>
            </Box>
            <TableContainer  sx={{background: '#646464'}}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ '&:first-child td, &:first-child th': { border: 0 },
                            height: '6rem' }}>
                            <TableCell align="center" sx={{backgroundColor: '#313030',  color: 'white', fontSize: '2.0rem'}}>#</TableCell>
                            <TableCell align="center" sx={{backgroundColor: '#313030', color: 'white', fontSize: '2.0rem'}}>Order Id</TableCell>
                            <TableCell align="center" sx={{backgroundColor: '#313030', color: 'white', fontSize: '2.0rem'}}>Address</TableCell>
                            <TableCell align="center" sx={{backgroundColor: '#313030', color: 'white', fontSize: '2.0em'}}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.orderNumber}
                                sx={{'&:last-child td, &:last-child th': {border: 0},
                                    height: '8rem',}}
                            >
                                <TableCell component="th" scope="row" align="center">
                                    <Typography  sx={{ color: 'white', fontSize: '1.3rem' }} >
                                        {row.orderNumber}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography  sx={{ color: 'white', fontSize: '1.3rem' }} >
                                        {row.orderId}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center" sx = {{color : 'white'}}>
                                    <Typography sx={{ color: 'white', fontSize: '1.3rem' }} >
                                        {row.orderLocation}
                                    </Typography>
                                </TableCell>
                                <TableCell align="center" >
                                    <Button style={{ color: 'white', backgroundColor: '#313030', width: '200px' }} sx={{  fontSize: '1.3rem' }} disabled>
                                        {row.orderStatus}
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
