import Image from 'next/image';
import Link from 'next/link';

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-between">
      <Link href="https://instagram.com/" target="_blank">
        <Image
          alt="Instagram logo"
          src="/assets/social/instagram.png"
          className="w-10 h-auto"
          width={40}
          height={0}
        />
      </Link>
      <Link href="https://facebook.com/" target="_blank">
        <Image
          alt="Facebook logo"
          src="/assets/social/facebook.png"
          className="w-10 h-auto"
          width={40}
          height={0}
        />
      </Link>
      <Link href="https://youtube.com/" target="_blank">
        <Image
          alt="YouTube logo"
          src="/assets/social/youtube.png"
          className="w-10 h-auto"
          width={40}
          height={0}
        />
      </Link>
      <Link href="https://pinterest.com/" target="_blank">
        <Image
          alt="Pinterest logo"
          src="/assets/social/pinterest.png"
          className="w-10 h-auto"
          width={40}
          height={0}
        />
      </Link>
      <Link href="https://linkedin.com/" target="_blank">
        <Image
          alt="LinkedIn logo"
          src="/assets/social/linkedin.png"
          className="w-10 h-auto"
          width={40}
          height={0}
        />
      </Link>
    </div>
  );
}
