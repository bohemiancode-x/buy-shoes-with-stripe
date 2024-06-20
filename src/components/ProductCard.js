import { useState } from 'react';
import { checkout } from './checkout';

const ProductCard = ({ image, name, price, stripeId }) => {
    const [loading, setLoading] = useState(false)

    const BuyItem = async (id) => {
        setLoading(true);
    
        await checkout({
          lineItems: [
            {
              price: id,
              quantity: 1
            }
          ]
        })
    
        setLoading(false)
      }

  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title text-2xl lg:text-3xl">{name}</h2>
            <p className="text-3xl lg:text-5xl font-semibold text-slate-400">${price}</p>
            <div className="card-actions justify-end mt-10">
                <button
                    disabled={loading} 
                    className="btn btn-primary text-white text-xl lg:text-2xl px-5"
                    onClick={() => BuyItem(stripeId)}
                  >
                    {!loading ? (<><p>Buy Now</p><img className="w-6 h-6 lg:w-8 lg:h-8 mx-3" src="/cart.svg" alt="cart" /></>) : (
                      <span className="mx-3 loading loading-spinner loading-md lg:loading-lg"></span>
                      )}
                </button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard