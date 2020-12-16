import { photos } from '../photos';
import Image from 'next/image';

export default function LayoutFixed() {
  return (
    <div>
      <h2>My Image</h2>

      {photos.map((photo) => (
        <Image
          key={photo.src}
          width={photo.width}
          height={photo.height}
          src={photo.src}
          alt={photo.alt}
        />
      ))}
    </div>
  );
}
