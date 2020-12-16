import { photos } from '../photos';

export default function LayoutFill() {
  return (
    <div>
      <h2>My Image</h2>

      {photos.map((photo) => (
        <img
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
