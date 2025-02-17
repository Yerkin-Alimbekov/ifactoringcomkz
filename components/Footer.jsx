import { 
  FaBusinessTime, 
  FaClock, 
  FaIndustry, 
  FaProjectDiagram, 
  FaShippingFast } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-secondary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          {/* socials */}
          <div  className='flex gap-x-6 mx-auto xl:mx-0 mb-4 text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all'>
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
          {/* copyright */}
          <div className='text-muted-foreground text-center'>
            &copy; Индустриальная Факторинговая Компания. 2025.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
