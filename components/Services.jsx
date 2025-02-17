import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <GanttChartSquare size={62} strokeWidth={0.8} color='#2563eb' />,
    title: '',
    description:
      'Поставщик отгружает Заказчику товар/услугу на условиях отсрочки платежа и подписывает подтверждающие документы.',
  },
  {
    icon: <Blocks size={62} strokeWidth={0.8} color='#2563eb' />,
    title: '',
    description:
      'Предоставляет документы нам, и получает финансирование.',
  },
  {
    icon: <Gem size={62} strokeWidth={0.8} color='#2563eb' />,
    title: '',
    description:
      'Заказчик перечисляет сумму нам и остаток мы отправляем на счет Поставщику.',
  },
];

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36 mt-[-30px]'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          Как мы работаем?
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='w-full max-w-[424px] h-[200px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                key={index}
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
