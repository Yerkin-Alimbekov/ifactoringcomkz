import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AlignJustify } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Send } from 'lucide-react';
import { 
  FaBusinessTime, 
  FaClock, 
  FaIndustry, 
  FaProjectDiagram, 
  FaShippingFast } from 'react-icons/fa';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AlignJustify className='cursor-pointer text-primary' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col items-center justify-between h-full py-8'>
          <div className='flex flex-col gap-y-32 text-center text-[#2563eb]'>
            <p>Индустриальная Факторинговая Компания</p>
          </div>
          <p className='max-w-[200px] text-centre items-center text-[30px]'>Что такое факторинг?</p>
            <p className='text-[14px] max-w-[200px] text-justify mt-[-50px]'>
            Факторинг – это комплекс услуг, позволяющий обменять будущую выручку на деньги, 
            если вы продаете товары или услуги на условиях отсрочки платежа. 
            Вы  получаете деньги сразу после поставки.
            </p>
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-22'>
              <Link href={"https://wa.me/+77771216161"}>
                <Button className='gap-x-2 bg-[#2563eb] mt-12'>
                  Свяжитесь с нами <Send size={18} />
                </Button>
              </Link>
            </div>
               <div  className='flex gap-x-6 mx-auto xl:mx-0 mb-4 text-[#2563eb] dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all'>
                    <FaIndustry
                    />
                    <FaBusinessTime
                    />
                      <FaProjectDiagram
                    />
                      <FaClock
                    />
                      <FaShippingFast
                    />
                    </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
