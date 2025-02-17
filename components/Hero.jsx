import Link from 'next/link';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

// components
import DevImg from './DevImg';
import Badge from './Badge';

const Hero = () => {
  return (
    <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-no-repeat bg-bottom bg-cover dark:bg-none'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          {/* text */}
          <div className='text-secondary flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-sm uppercase font-semibold mb-4 tracking-[4px]'>
              Платформа
            </div>
            <h1 className='text-[50px] mb-4'>Факторинг для поставщиков</h1>
            <p className='text-xl max-w-[490px] mx-auto xl:mx-0'>
            Услуги для производителей и поставщиков, ведущих торговую деятельность
            на условиях отсрочки платежа
            </p>
            {/* buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-22'>
              <Link href={"https://wa.me/+77771216161"}>
                <Button className='gap-x-2 bg-[#2563eb] mt-12'>
                  Связаться с нами <Send size={18} />
                </Button>
              </Link>
            </div>
            {/* socials */}
          </div>
          {/* image */}
          <div className='hidden xl:flex relative'>
            {/* badge 1 */}
            <Badge
              containerStyles='absolute top-[14%] -left-[4rem]'
              icon={<RiBriefcase4Fill />}
              endCountNum={1}
              badgeText='Простой и удобный процесс'
            />
            {/* badge 2 */}
            <Badge
              containerStyles='absolute top-[70%] -left-[4rem]'
              icon={<RiTodoFill />}
              endCountNum={2}
              endCountText=''
              badgeText='Минимальный пакет документов'
            />
            {/* badge 3 */}
            <Badge
              containerStyles='absolute top-[35%] -right-[3rem]'
              icon={<RiTeamFill />}
              endCountNum={3}
              endCountText=''
              badgeText='Не требуются залоги и поручительства'
            />
            <div className='w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
            <DevImg
              containerStyles='w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
              imgSrc='/about/developer.jpg'
            />
          </div>
        </div>
        {/* icon */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-[#2563eb]' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
