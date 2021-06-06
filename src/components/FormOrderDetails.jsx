import React from 'react'
import { Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import useStyles from './styles'

const FormOrderDetails = () => {
    const classes = useStyles()

    return (
        <div>
            <Typography variant='h4'>ORDER SUMMARY</Typography>
            <Typography variant='h5' align='center' className={classes.spacing}>Thank you for your order!</Typography>
            <Typography variant='body1'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium corporis doloremque deleniti, ex ipsam pariatur nemo? Itaque obcaecati atque ipsa iure nesciunt, illum libero beatae totam eum corrupti. Harum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium corporis doloremque deleniti, ex ipsam pariatur nemo? Itaque obcaecati atque ipsa iure nesciunt, illum libero beatae totam eum corrupti. Harum.
            </Typography>

            <Table aria-label='simple table' className={classes.spacing}>
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

            <Typography variant='body2' color='textSecondary'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, vitae, ab autem nihil porro omnis aliquid exercitationem accusantium velit laborum quibusdam reiciendis reprehenderit asperiores molestias! Neque autem ipsum placeat excepturi.
            </Typography>
        </div>
    )
}

export default FormOrderDetails
