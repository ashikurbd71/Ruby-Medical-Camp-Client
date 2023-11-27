// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useEffect, useState } from 'react';
// import axoissecure from '../Hook/Axoissecure';
// import usePayment from '../usePayment';
// import useAuth from '../Hook/useAuth';
// import axoispublic from './../Hook/AxoissecurePublic';

// const CheckoutForm = () => {
//     const[error,setError] = useState('')
//     const[clientsecret,setClientSecret] = useState('')
//     const stripe = useStripe();
//     const elements = useElements();
//     const {user} = useAuth
//     const { data } = usePayment();
//     const price = data.map(item => item?.campfees )
    

    
  
//   console.log('from taka -->',price)


//     useEffect(() => {

//      axoissecure.post('/create-paymnet-intent',{price})

//       .then(res => {
        
        
//         console.log("31----->",res.data)
    
    
//         setClientSecret(res.data.clientSecret)
//     })
    
//     },[price])

    

//     const handleSubmit = async (event) =>{

//         event.preventDefault();

//         if (!stripe || !elements) {
            
//             return;
//           }

//           const card = elements.getElement(CardElement)
//           if (card == null) {
//             return;
//           }

//           const {error, paymentMethod} = await stripe.createPaymentMethod({
//             type: 'card',
//             card,
//           });
      
//           if (error) {
//             console.log('[error]', error);
//             setError(error.message)
//           } else {
//             console.log('[PaymentMethod]', paymentMethod);
//             setError('')
//           }



//         //   comfrim

//         const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment(clientsecret,{

//             payment_method:{

//                 card: card,
//                 billing_details:{

//                     email:user?.email || 'anonymus',
//                     name:user?.displayName || 'anonymus' 
//                 }
//             }
//         })

//         if(paymentIntent){

//             console.log(paymentIntent)
//         }

//         if(confirmError){

//             console.log(confirmError)
//         }

//     }
//     return (
//         <div>
//              <form onSubmit={handleSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: '16px',
//               color: '#424770',
//               '::placeholder': {
//                 color: '#aab7c4',
//               },
//             },
//             invalid: {
//               color: '#9e2146',
//             },
//           },
//         }}
//       />
       
//        <button
//        type="submit" disabled={!stripe || !clientsecret}
//   className="inline-block rounded border border-indigo-600 my-3 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
//   href="/download"
// >
//   Pay Now
// </button>
//     </form>
//     <p className='text-red-600 py-3'>{error}</p>
//         </div>
//     );
// };

// export default CheckoutForm;