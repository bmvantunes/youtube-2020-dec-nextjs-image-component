import { photos } from '../photos';
import Image from 'next/image';

export default function LayoutResponsiveQuality100() {
  return (
    <div>
      <h2>Layout Responsive Image quality=100</h2>

      {photos.map((photo) => (
        <Image
          key={photo.src}
          width={photo.width}
          height={photo.height}
          src={photo.src}
          alt={photo.alt}
          layout="responsive"
          quality={100}
        />
      ))}
    </div>
  );
}
