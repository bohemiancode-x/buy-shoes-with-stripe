
import { loadStripe } from "@stripe/stripe-js";

// const useCheckout = ({ lineItems }) => {
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(async () => {
//         setLoading(true)
//         let stripePromise = null

//         try {
//             const getStripe = () => {
//                 if(!stripePromise) {
//                     stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
//                 }
//                 return stripePromise
//             }
    
//             const stripe = await getStripe()
    
//             await stripe.redirectToCheckout({
//                 mode: 'payment',
//                 lineItems,
//                 successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
//                 cancelUrl: window.location.origin
//             })

//         } catch (error) {
//            console.log(error)
//            setError(error) 
//         }
        
//         setLoading(false)
//     }, [])

//     return { loading, error }
// }

// export default useCheckout

export async function checkout({lineItems}){
	let stripePromise = null

	const getStripe = () => {
		if(!stripePromise) {
			stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
		}
		return stripePromise
	}

	const stripe = await getStripe()

	await stripe.redirectToCheckout({
		mode: 'payment',
		lineItems,
		successUrl: `${window.location.origin}?success=true`,
		cancelUrl: `${window.location.origin}?cancelled=true`
	})

}