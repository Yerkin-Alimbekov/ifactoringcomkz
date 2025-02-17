import { Button } from './ui/button';
import Link from 'next/link';

const Cta = () => {
  return (
    <section className='py-14 bg-tertiary dark:bg-secondary/40 mt-[0px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <h2 className='h2 max-w-xl text-center mb-1'>
            Свяжитесь с нами,
          </h2>
          <h2 className='h2 max-w-xl text-center mb-8'>
            поработаем вместе.
          </h2>
          <Link href={"https://wa.me/+77771216161"}>
            <Button
            className='gap-x-2 bg-[#2563eb]'
            >
              WhatsApp
              </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
