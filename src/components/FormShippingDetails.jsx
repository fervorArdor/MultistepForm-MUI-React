import React, { useState } from 'react'
import { Grid, Typography, TextField, InputAdornment, Radio } from '@material-ui/core'
import postnl from '../../src/assets/postnl.png'
import fedex from '../../src/assets/fedex.png'
import ups from '../../src/assets/ups.png'
import collectinperson from '../../src/assets/collectinperson.png'

const FormShippingDetails = () => {
    const [shippingMethod, setShippingMethod] = useState('postnl')
    const handleChange = e => {
        setShippingMethod(e.target.value)
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={4}>
                    <Typography>01</Typography>
                    <Typography variant='h4'>Personal Details</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={8}>
                        <Grid item xs={6}>
                            <TextField variant='outlined' label='First Name' fullWidth required/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField variant='outlined' label='Last Name' fullWidth required/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField type='email' variant='outlined' label='Email' fullWidth required/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField type='number' variant='outlined' label='Phone Number' fullWidth required/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container style={{ marginTop: '50px'  }}>
                <Grid item xs={4}>
                    <Typography>02</Typography>
                    <Typography variant='h4'>Shipping Details</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={8}>
                        <Grid item>
                            <Typography style={{ fontWeight: 600 }}>Shipping Address</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant='outlined' label='StreetAddress' fullWidth required/>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField variant='outlined' label='Zip Code' fullWidth required/>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField variant='outlined' label='City' fullWidth required/>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField type='text' variant='outlined' label='Country' fullWidth required/>
                        </Grid>

                    
                        <Grid item xs={12}>
                            <Typography style={{ fontWeight: 600 }}>Shipping Method</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                variant='outlined'
                                disabled
                                defaultValue='  PostNl'
                                label="PostNl"
                                InputProps={{
                                    // readOnly: true,
                                    startAdornment: (
                                        <InputAdornment>
                                            <img width='30' height='30' src={postnl} alt="" />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                    <InputAdornment>
                                        $0.99 
                                        <Radio
                                            checked={shippingMethod === 'postnl'}
                                            onChange={handleChange}
                                            value="postnl"
                                            name="shipping-method"
                                            inputProps={{ 'aria-label': 'postnl' }}
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
                                defaultValue='FedEx'
                                label="FedEx"
                                InputProps={{
                                    // readOnly: true,
                                    startAdornment: (
                                        <InputAdornment>
                                            <img style={{ marginLeft: '-15px' }} width='80' height='80' src={fedex} alt="" />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                    <InputAdornment>
                                        $0.99 
                                        <Radio
                                            checked={shippingMethod === 'fedex'}
                                            onChange={handleChange}
                                            value="fedex"
                                            name="shipping-method"
                                            inputProps={{ 'aria-label': 'fedex' }}
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
                                defaultValue='Ups'
                                label="Ups"
                                InputProps={{
                                    // readOnly: true,
                                    startAdornment: (
                                        <InputAdornment>
                                            <img style={{ marginLeft: '-20px' }} width='70' height='50' src={ups} alt="" />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                    <InputAdornment>
                                        $0.99 
                                        <Radio
                                            checked={shippingMethod === 'ups'}
                                            onChange={handleChange}
                                            value="ups"
                                            name="shipping-method"
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
                                defaultValue='Collect in Person'
                                label="In Person"
                                InputProps={{
                                    // readOnly: true,
                                    startAdornment: (
                                        <InputAdornment>
                                            <img style={{ marginLeft: '-10px' }} width='60' height='60' src={collectinperson} alt="" />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                    <InputAdornment>
                                        Free 
                                        <Radio
                                            checked={shippingMethod === 'inperson'}
                                            onChange={handleChange}
                                            value="inperson"
                                            name="shipping-method"
                                            inputProps={{ 'aria-label': 'inperson' }}
                                        />
                                    </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                            
            </Grid>
        </div>
    )
}

export default FormShippingDetails
