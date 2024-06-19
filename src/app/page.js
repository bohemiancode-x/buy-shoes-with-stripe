"use client"

import { Suspense } from 'react';
import Link from 'next/link' 
import { products } from '@/data/Products';
import ProductCard from '@/components/ProductCard';
import { useSearchParams } from 'next/navigation';
import Loading from '@/components/Loading';

 function Home() {
  const query = useSearchParams()


  if (query.get('success')) {
    return (
      <main className='flex min-h-screen flex-col items-center gap-10 p-24'>
        <h1 className="text-6xl my-10 font-semibold">Buy shoes with Stripe!</h1>
        <div className="card w-96 bg-[green] text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl text-white">Order placed successfully!</h2>
            
            <div className="card-actions my-4 justify-end">
              <Link href="/" className="btn text-white border border-white">Go home?</Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (query.get('cancelled')) {
    return (
      <main className='flex min-h-screen flex-col items-center gap-10 p-24'>
        <h1 className="text-6xl my-10 font-semibold">Buy shoes with Stripe!</h1>
        <div className="card w-96 bg-[grey] text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-4xl text-white">Order not completed</h2>
            
            <div className="card-actions my-4 justify-end">
              <Link href="/" className="btn text-white border border-white">Try again?</Link>
            </div>
          </div>
        </div>
      </main>
    )
  }


  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <h1 className="text-6xl my-10 font-semibold">Buy shoes with Stripe!</h1>
      <div className="flex flex-wrap gap-10">
        {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              image={product.img}
              price={product.price}
              stripeId={product.stripeId}
            />
          ))}
      </div>
    </main>
  );
}

export default function Homepage() {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  )
}
