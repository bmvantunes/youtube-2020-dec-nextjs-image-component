import Image from 'next/image';

export default function LayoutFillLikeInTheVideo() {
  return (
    <div>
      <h2>Layout Fill without any CSS like in the video. This message will not be visible, please check "layout-fill-background"</h2>

      <Image
        src="/photos/oliveira-wins.jpg"
        alt="Miguel Oliveira wins in Portugal"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom center"
      />
    </div>
  );
}
