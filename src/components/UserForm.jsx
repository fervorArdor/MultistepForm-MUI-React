import React, { useState } from 'react'
import { Stepper, Step, StepLabel, Button, Grid, Card } from '@material-ui/core'
import FormOrderDetails from './FormOrderDetails'
import FormShippingDetails from './FormShippingDetails'
import Confirm from './Confirm'
import Success from './Success'

function getSteps() {
    return ['Order Summary', 'Shipping Details', 'Payment']
}

function getStepContent(step) {
    switch(step+1){
        case 1: 
            return (
                <FormOrderDetails />
            )
        case 2: 
            return (
                <FormShippingDetails />
            )
        case 3: 
            return (
                <Confirm />
            )
        default: 
            return 'An Error has occured'
    }
}

const UserForm = () => {
    const [activeStep, setActiveStep] = useState(0)
    const steps = getSteps()

    const handleNext = () => {
        setActiveStep(s => s+1)
    }
    
    const handlePrev = () => {
        setActiveStep(s => s-1)
    }
    
    const handleReset = () => {
        setActiveStep(0)
    }    

    return (
        <div style={{ margin: '0px 50px' }}>
            {activeStep === steps.length ? (
                <div align='center'>
                    <Success />
                    <Button onClick={handleReset}>Reset</Button>
                </div>
            ) : (
                <div>
                    <Stepper alternativeLabel activeStep={activeStep} style={{ marginBottom: '20px' }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <Card style={{ padding: '50px' }}>
                        {getStepContent(activeStep)}
                        <Grid item xs={12} align='center' style={{ marginTop: '40px' }}>
                            {activeStep !== 0 && <Button size='large' variant='contained' onClick={() => handlePrev()}>Back</Button>}
                            <Button type='submit' size='large' style={{ marginLeft: '40px' }}
                                variant='contained' color='primary' onClick={() => handleNext()}>
                                Continue to make payment
                            </Button>
                        </Grid>
                    </Card>
                </div>
            )}
        </div>
    )
}

export default UserForm
