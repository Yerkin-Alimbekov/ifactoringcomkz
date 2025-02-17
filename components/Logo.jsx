import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href='/'>
      <p className='font-base text-primary text-[15px]'>Индустриальная Факторинговая Компания</p>
    </Link>
  );
};

export default Logo;
