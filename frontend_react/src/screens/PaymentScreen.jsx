import React, { useState, useEffect } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { useParams, useNavigate } from 'react-router-dom'
import { savePaymentMethod } from '../actions/cartActions'


const PaymentScreen = () => {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const history = useNavigate()
    const dispatch = useDispatch()
    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    if (!shippingAddress.address) {
        history('/shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history('/placeorder')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />

            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend' style={{ marginBottom: '10px' }}> Select Method </Form.Label>
                    <Col>
                        <Form.Check
                            type='radio'
                            label='PayPal or Credit Card'
                            id='paypal'
                            name='paymentMethod'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            style={{ marginBottom: '10px' }}
                        >

                        </Form.Check>
                    </Col>
                </Form.Group>
                <Button type='submit' variant='primary' style={{ marginTop: '10px' }}>
                    Continue
                </Button>

            </Form>

        </FormContainer>
    )
}

export default PaymentScreen
