"use client";
import DevImg from './DevImg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Kalkulator from './Kalkulator';

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  ListChecks,
  ListFilter,
} from 'lucide-react';
import { RiWhatsappLine } from 'react-icons/ri';

const infoData = [
  {
    icon: <RiWhatsappLine size={24} />,
    text: '+7 777 121 6161',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+ 7 708 831 3522',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'ifactoringcompany@gmail.com',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'г.Алматы, ул.Толе би 302, оф.39',
  },
];

const qualificationData = [
  {
    title: 'Условия',
    data: [
      {
        university: 'Сумма финансирования:',
        qualification: '90% от суммы подтвержденной дебиторской задолженности',
        years: '',
      },
      {
        university: 'Тип продукта:',
        qualification: 'факторинг без регресса (все риски, связанные с неоплатой передаются в факторинговую компанию)',
        years: '',
      },
      {
        university: 'Ставка вознаграждения:',
        qualification: 'комиссия за финансирование до 0,12% в день (3,6% в месяц)',
        years: '',
      },
      {
        university: 'Залоги:',
        qualification: 'не требуются',
        years: '',
      },
      {
        university: 'Гарантии учредителей:',
        qualification: 'не требуются',
        years: '',
      },
      {
        university: 'Срок финансирования:',
        qualification: 'до 90 дней',
        years: '',
      },
      {
        university: 'Прочие условия:',
        qualification: 'предоставление документов (счет-фактура, акты выполненных работ и т.д.), подтверждающих наличие дебиторской задолженности перед Компанией',
        years: '',
      },
    ],
  },
  {
    title: 'Требования',
    data: [
      {
        company: 'Основные требования',
        role: 'целевая группа: субъекты малого, среднего и крупного бизнеса, резиденты РК',
        role1: 'стабильный бизнес, действующий не менее 12 месяцев до подачи заявки на получение  займа',
        role2: 'положительный опыт работы с Компанией или ее дочерними компаниями',
      },
      {
        company: 'Предмет финансирования',
        role: 'контракт c Компанией, предусматривающий отсрочку по оплате',
        years: '',
      },
    ],
  },
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS',
      },
      {
        name: 'Front-end Development',
      },
      {
        name: 'Javascript, PHP',
      },
      {
        name: 'Back-end Development',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/figma.svg',
      },
      {
        imgPath: '/about/notion.svg',
      },
      {
        imgPath: '/about/wordpress.svg',
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className='xl:h-[860px] pb-12 xl:py-24 mb-[20px] mt-[-70px]'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          О Компании
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* image */}
          <div className='hidden xl:flex flex-1 relative'>
            <DevImg
              containerStyles='bg-white w-[605px] h-[505px] bg-no-repeat relative'
              imgSrc='/about/developer2.png'
            />
          </div>
          {/* tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-2 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Общая информация
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualifications'
                >
                  Условия работы
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                  Структура работы
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='tools'>
                  Калькулятор
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      Преимущества факторинга для поставщиков
                    </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                    Это простой процесс получения финансовых средств, что позволяет поставщику
                    заниматься основной деятельностью – продажами, не отвлекаясь на решение 
                    финансовых вопросов.
                    </p>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                    Быстрые сроки принятия решений по финансированию – до 3 рабочих дней.
                    </p>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                    Риски по получению дебиторской задолженности переносятся на факторинговую компанию.
                    </p>
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className='flex items-center gap-x-4 mx-auto xl:mx-0'
                            key={index}
                          >
                            <div className='text-primary text-[#2563eb]'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-[#2563eb]'>Language Skill</div>
                      <div className='border-b border-border'></div>
                      <div>English, French, Spanish, Italian</div>
                    </div>
                    */}
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      
                    </h3>
                    {/* experience & education wrapper */}
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* experience */}
                      <div className='flex flex-col gap-y-2'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <ListFilter />
                          <h4 className='font-medium'>
                            {getData(qualificationData, 'Требования').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-0'>
                          {getData(qualificationData, 'Требования').data.map(
                            (item, index) => {
                              const { company, role, role1, role2, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[54px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[54px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-[15px] leading-none mb-2'>
                                      {company}
                                    </div>
                                    <div className='text-[14px] leading-none text-muted-foreground mb-4 text-justify'>
                                      {role}
                                    </div>
                                    <div className='text-[14px] leading-none text-muted-foreground mb-4 text-justify'>
                                      {role1}
                                    </div>
                                    <div className='text-[14px] leading-none text-muted-foreground mb-4 text-justify'>
                                      {role2}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className='flex flex-col gap-y-2'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <ListChecks size={28} />
                          <h4 className='font-medium'>
                            {getData(qualificationData, 'Условия').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-0'>
                          {getData(qualificationData, 'Условия').data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[54px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[54px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-[15px] leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-[14px] leading-none text-muted-foreground mb-4 text-justify'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'></h3>
                    {/* skills */}
                    {/* tools */}
                    <div>
                      <div className='border-border mb-4'></div>
                      {/* tool list */}
                      <DevImg
                      containerStyles='w-[335px] h-[335px] bg-no-repeat relative bg-bottom'
                      imgSrc='/about/about1.png'
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value='tools'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'></h3>
                    {/* skills */}
                    {/* tools */}
                    <div>
                      <div className='border-border mb-4'></div>
                      {/* tool list */}
                      <Kalkulator />
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
