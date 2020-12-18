import { photos } from '../photos';

export default function NormalImage() {
  return (
    <div>
      <h2>Normal Image (img)</h2>

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
