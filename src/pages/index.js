import Head from 'next/head';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Web App</title>
      </Head>
      <main>
        <h1>Welcome to My Web App</h1>
        <Button>Click Me</Button>
      </main>
    </div>
  );
}