import React, { useState } from 'react'
import { Grid, Typography, TextField, InputAdornment, Radio } from '@material-ui/core'
import paypal from '../../src/assets/paypal.png'
import creditDebit from '../../src/assets/creditDebit.png'

const Confirm = () => {
    const [paymentMethod, setPaymentMethod] = useState('paypal')
    const handleChange = e => {
        setPaymentMethod(e.target.value)
    }

    return (
        <Grid container>
            <Grid item xs={4}>
                <Typography>03</Typography>
                <Typography variant='h4'>Payment Method</Typography>
            </Grid>
            <Grid item xs={8}>
                <Grid container spacing={8}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            disabled
                            defaultValue='PayPal'
                            label="PayPal"
                            InputProps={{
                                // readOnly: true,
                                startAdornment: (
                                    <InputAdornment>
                                        <img style={{ marginLeft: '-20px' }} width='70' height='50' src={paypal} alt="" />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                <InputAdornment>
                                    <Radio
                                        checked={paymentMethod === 'paypal'}
                                        onChange={handleChange}
                                        value="paypal"
                                        name="payment-method"
                                        inputProps={{ 'aria-label': 'ups' }}
                                    />
                                </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            disabled
                            defaultValue='  Credit or Debit card'
                            label="Credit or Debit card"
                            InputProps={{
                                // readOnly: true,
                                startAdornment: (
                                    <InputAdornment>
                                        <img width='50' height='50' src={creditDebit} alt="" />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                <InputAdornment>
                                    <Radio
                                        checked={paymentMethod === 'credit/debit'}
                                        onChange={handleChange}
                                        value="credit/debit"
                                        name="payment-method"
                                        inputProps={{ 'aria-label': 'credit/debit' }}
                                    />
                                </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <TextField type='number' variant='outlined' label='Card Number' fullWidth required />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField variant='outlined' label='Expiry date' fullWidth required />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField type='number' variant='outlined' label='CVC/CVV' fullWidth required />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Confirm
