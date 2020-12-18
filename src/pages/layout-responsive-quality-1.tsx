import { photos } from '../photos';
import Image from 'next/image';

export default function LayoutResponsiveQuality1() {
  return (
    <div>
      <h2>Layout Responsive Image quality=1</h2>

      {photos.map((photo) => (
        <Image
          key={photo.src}
          width={photo.width}
          height={photo.height}
          src={photo.src}
          alt={photo.alt}
          layout="responsive"
          quality={1}
        />
      ))}
    </div>
  );
}
