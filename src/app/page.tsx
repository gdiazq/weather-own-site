import { Header } from '@/components/layout/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-5xl md:text-4xl font-semibold text-black dark:text-white drop-shadow-md">
          Weather On Day
        </h1>
      </main>
    </>
  );
}
