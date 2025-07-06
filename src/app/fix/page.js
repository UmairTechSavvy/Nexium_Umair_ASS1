'use client';

import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MainPage() {
  const [quotes, setQuotes] = useState([]);

  const router = useRouter();

  const handleMoveBackToHomePage = () => {
    router.push('/');
  };

  const handleFetchDataFromBackend = async () => {
    try {
      const res = await axios.get('/api/user/quotes');
      setQuotes(res.data);
    } catch (err) {
      console.error('Error fetching data:', err.message);
    }
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/img3.jpg')]">
      <Button
        onClick={handleMoveBackToHomePage}
        variant="destructive"
        className="absolute right-4 top-4"
      >
        Home Page
      </Button>

      <header className="absolute left-2 top-60 text-2xl italic text-slate-500">
        <h1 className="font-bold">
          Please click the button below for a beautiful quote <br /> generation.
        </h1>
      </header>

      <main className="absolute left-4 top-[22rem]">
        <Button onClick={handleFetchDataFromBackend}>Please click here</Button>

        <ul className="mt-6 space-y-4">
          {quotes.map(({ quote, author }, idx) => (
            <li
              key={idx}
              className="max-w-xl rounded bg-white/80 p-4 shadow"
            >
              {/* ✅ Escaped the quotes using template literal for Vercel */}
              <p className="text-lg italic">{`"${quote}"`}</p>
              <p className="text-right text-sm font-semibold">— {author}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
