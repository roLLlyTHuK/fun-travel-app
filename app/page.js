import Image from 'next/image';
import LoginForm from './components/LoginForm';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/home-bg.jpg"
        alt="travel"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <LoginForm />
    </main>
  );
}
