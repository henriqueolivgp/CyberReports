import Image from 'next/image';
import Link  from 'next/link'

export const Logo = () => {
  return (
    <>

        <Link href='/'>
          <Image src='/CyberReportsWhite.png' alt='Logo' width={300} height={500} />
        </Link>

    </>
  );
};
