"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleMovingToMainPage = () => {
    router.push('/fix');
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header>
        <h1 className="text-shadow text-4xl font-bold italic underline">Quote Gen</h1>
      </header>

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="absolute top-60 text-slate-500 text-2xl left-4 italic font-bold whitespace-normal">
          <p>
            A simple Quote generater which will keep you motivated
            <br /> through some great quotes whenever needed
          </p>

          <Button className="my-4" onClick={handleMovingToMainPage}>
          {"Let’s begin"}
          </Button>
        </div>
      </main>
    </div>
  );
}
