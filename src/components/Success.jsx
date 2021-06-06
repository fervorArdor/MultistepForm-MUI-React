import React from 'react'
import './success.css'
import { Typography, Button } from '@material-ui/core'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'

const Success = () => {
    return (
        <div className='root'>
            <svg width="133px" height="133px" viewBox="0 0 133 133" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="check-group" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <circle id="filled-circle" fill="#00e676" cx="66.5" cy="66.5" r="54.5"></circle>
                    <circle id="white-circle" fill="#FFFFFF" cx="66.5" cy="66.5" r="55.5"></circle>
                    <circle id="outline" stroke="#00e676" strokeWidth="4" cx="66.5" cy="66.5" r="54.5"></circle>
                    <polyline id="check" stroke="#FFFFFF" strokeWidth="4" points="41 70 56 85 92 49"></polyline>
                </g>
            </svg>

            <Typography variant='h4' style={{ color: '#00e676'}}>Successful payment</Typography>
            <Typography variant='h6'>Thank you for ordering!</Typography>
            
            <Table aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell align='left'>Item</TableCell>
                        <TableCell align='left'>Qty.</TableCell>
                        <TableCell align='left'>Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align='left'>Item 1</TableCell>
                        <TableCell align='left'>2</TableCell>
                        <TableCell align='left'>$200</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left'>Item 2</TableCell>
                        <TableCell align='left'>1</TableCell>
                        <TableCell align='left'>$100</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left'>Item 3</TableCell>
                        <TableCell align='left'>4</TableCell>
                        <TableCell align='left'>$400</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left'>Total</TableCell>
                        <TableCell align='left'>$700</TableCell>
                    </TableRow> 
                </TableBody>
            </Table>

            <Typography variant='body1' align='center' color='textSecondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur necessitatibus quisquam aliquid, soluta, animi nisi maxime facilis quis facere nihil eum corporis pariatur recusandae iste? Quibusdam tempora ex fugiat!</Typography>

            <Button variant='contained' size='large' style={{ backgroundColor: '#00e676', color: '#fff' }}>Print</Button>
        </div>
    )
}

export default Success
