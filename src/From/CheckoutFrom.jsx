import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
// import './CheckoutFrom.css'

// import { ImSpinner9 } from 'react-icons/im'
import useAuth from '../Hook/useAuth'
import axoissecure from '../Hook/Axoissecure'
import { Navigate, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const CheckoutForm = ({ data, closeModal }) => {
    const navigate = useNavigate()
  const stripe = useStripe()
  const elements = useElements()
  const { user } = useAuth()
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [success, setSuccess] = useState('')

 useEffect(() => {

   
  if(data?.campfees > 0){

    axoissecure.post('/create-paymnet-intent',{price : data?.campfees})
    .then(res => {console.log(res.data.clientSecret)
    
         setClientSecret(res.data.clientSecret)
    })
  }

 },[axoissecure])
 

  // Create Payment Intent

  const handleSubmit = async event => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      console.log('error', error)
      setCardError(error.message)
    } else {
      setCardError('')
      console.log('payment method', paymentMethod)
    }


            // comfrim payment


            const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment(clientSecret,{

                payment_method:{
    
                    card: card,
                    billing_details:{
    
                        email:user?.email || 'anonymus',
                        name:user?.displayName || 'anonymus' 
                    }
                }
            })

            if(confirmError){

                console.log(confirmError)
            }else{
    
                console.log('paymnet ',paymentIntent)
              if(paymentIntent.status === 'succeeded'){

                setSuccess(paymentIntent.status)}

                
                const payment = {

                    email:user?.email,
                    name:user?.displayName,
                    status:data?.status,
                    payment:data?.payment,
                    campname:data?.campname,
                    price:data?.campfees,
                    date:new Date(),
                    location:data?.location,
                    transitionId:paymentIntent.id,
                    campid:data?._id,
                    registeredid:data?.campid,
                

                }
            
                const res = await axoissecure.post('/payment',payment)
                console.log('from 105 ---->',res)

                const ress = await axoissecure.patch(`/payment/status/${data?._id}`)

                console.log('update--->',ress.data)

             
                if(res.data.insertedId){
                    navigate('/dashboard/payment-history')
                   return Swal.fire({
                    title: "Payment",
                    text: "You clicked the button!",
                    icon: "success"
                  });
                  
                  
                }

               
            }
    


   
  }

  return (
    <>
      <form className='my-2' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className='flex mt-2 justify-around'>
          <button
            type='button'
            className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            type='submit'
            disabled={!stripe || !clientSecret }
            className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
          >
         
              `Pay ${data?.campfees}$`
        
          </button>
        </div>
      </form>
      {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
      {success && <p className='text-green-600 ml-8'>{success}</p>}
      
    </>
  )
}

export default CheckoutForm;