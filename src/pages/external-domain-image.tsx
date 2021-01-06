import Image from 'next/image';

export default function ExternalDomainImage() {
  return (
    <div>
      <h2>External Domain Image - Layout Responsive</h2>
      <h3>
        Image hosted at:
        https://upload.wikimedia.org/wikipedia/commons/b/b1/VAN_CAT.png
      </h3>

      <Image
        width={3840}
        height={3840}
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/VAN_CAT.png"
        alt="Some cat image from external URL"
        layout="responsive"
      />
    </div>
  );
}
