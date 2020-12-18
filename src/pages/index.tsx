import Link from 'next/link';
import { ReactNode } from 'react';

export default function Home() {
  return (
    <>
      <p>This page contains all the demos made on our video!</p>

      <CustomLink href="/normal-image">Example using the "img" tag</CustomLink>
      <CustomLink href="/srcset">our srcset and sizes example</CustomLink>
      <CustomLink href="/layout-fill-like-in-the-video">
        Layout Fill like in the video
      </CustomLink>
      <CustomLink href="/layout-fill-background">
        Improved Layout Fill with CSS to have text on top of the background
        image
      </CustomLink>
      <CustomLink href="/layout-fixed">Layout Fixed</CustomLink>
      <CustomLink href="/layout-intrinsic">
        Layout Intrinsic (default layout)
      </CustomLink>
      <CustomLink href="/layout-responsive">Layout responsive</CustomLink>
      <CustomLink href="/layout-responsive-last-eager">
        Layout responsive with last image as eager
      </CustomLink>

      <hr />
      <h4>
        The next 3 examples are exactly the same, the only difference is the
        quality
      </h4>
      <h5>You can check your network tab to see the difference in KB/MB downloaded</h5>
      <CustomLink href="/layout-responsive-quality-1">
        Layout responsive and image quality=1
      </CustomLink>
      <CustomLink href="/layout-responsive-quality-30">
        Layout responsive and image quality=30
      </CustomLink>
      <CustomLink href="/layout-responsive-quality-100">
        Layout responsive and image quality=100
      </CustomLink>
    </>
  );
}

function CustomLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div>
      <Link href={href}>{children}</Link>
    </div>
  );
}
