import { photos } from '../photos';
import Image from 'next/image';

export default function LayoutFillBackground() {
  return (
    <div>
      <h2 style={{ background: 'red', color: 'white', textAlign: 'center' }}>
        Layout Fill with CSS to have this H2 on top of the background image
      </h2>

      <div
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
        }}
      >
        <Image
          src="/photos/oliveira-wins.jpg"
          alt="Miguel Oliveira wins in Portugal"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom center"
        />
      </div>
    </div>
  );
}
