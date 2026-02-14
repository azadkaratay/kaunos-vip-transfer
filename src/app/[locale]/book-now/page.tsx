import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Now | Dalaman VIP Transfer',
  description: 'Book your luxury VIP transfer in Dalaman',
};

export default function BookNowPage() {
  return (
    <div className="container mx-auto py-12">
      <div className="w-full max-w-4xl mx-auto">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSeBrrMWDzvAPYafxElpMw2Vfd-VJfZjhuxVz-BjiNxthmFnEg/viewform?embedded=true" 
          width="100%" 
          height="1156" 
          style={{border: 'none'}}
          title="Booking Form"
        >
          Yükleniyor…
        </iframe>
      </div>
    </div>
  );
}