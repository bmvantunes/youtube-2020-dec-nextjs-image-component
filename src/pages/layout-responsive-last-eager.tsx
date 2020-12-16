import { photos } from '../photos';
import Image from 'next/image';

export default function LayoutResponsiveLastEager() {
  return (
    <div>
      <h2>Layout Responsive</h2>

      {photos.map((photo, index) => (
        <Image
          key={photo.src}
          width={photo.width}
          height={photo.height}
          src={photo.src}
          alt={photo.alt}
          layout="responsive"
          loading={photos.length === index + 1 ? 'eager' : 'lazy'}
        />
      ))}
    </div>
  );
}
