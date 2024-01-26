import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart } from '../actions/cartActions'
import { useParams, useNavigate } from 'react-router-dom'



const CartScreen = () => {
    const history = useNavigate()
    const productId = useParams()

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart
    console.log('cartItems: ', cartItems)

    useEffect(() =>{
        if (productId) {
            dispatch(addToCart(productId.id,qty))
        }
    }, [dispatch, productId,qty])

  return (
    <div>
      Cart
    </div>
  )
}

export default CartScreen