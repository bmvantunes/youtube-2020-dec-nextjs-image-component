import { AppProps } from 'next/app';
import '../../styles/globals.css';
import Link from 'next/link';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>Hello YouTube friends!</h1>
      <h2>
        <a href="https://youtu.be/R4sdWUI3-mY">Youtube Video</a>
      </h2>
      <h2>
        <a href="https://github.com/bmvantunes/youtube-2020-dec-nextjs-image-component">
          GitHub Repository
        </a>
      </h2>
      <Link href="/">Go back to Index to see all demos!</Link>

      <Component {...pageProps} />
    </>
  );
}
