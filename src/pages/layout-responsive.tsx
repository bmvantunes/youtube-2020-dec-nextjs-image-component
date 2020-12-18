import { photos } from '../photos';
import Image from 'next/image';

export default function LayoutResponsive() {
  return (
    <div>
      <h2>Layout Responsive</h2>

      {photos.map((photo) => (
        <Image
          key={photo.src}
          width={photo.width}
          height={photo.height}
          src={photo.src}
          alt={photo.alt}
          layout="responsive"
        />
      ))}
    </div>
  );
}
