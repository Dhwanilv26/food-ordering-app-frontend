import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileNav from './MobileNav';
import MainNav from './MainNav';
import logoimg from '../models/logoimg.png';

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        delay: 0.2,
        when: 'beforeChildren',
        staggerChilderen: 0.1,
      },
    },
  };

  return (
    <div className='border-b-2 border-b-orange-500 py-6'>
      <div className='container mx-auto flex justify-between items-center '>
        <motion.div
          className='flex items-center justify-start'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.img src={logoimg} alt='Logo' variants={itemVariants} className='w-12 h-12 mr-3 ' />
          <motion.div variants={itemVariants} whileHover={{ scale: 1.1, color: '#feb47b' }}>
            <Link to='/' className='text-3xl ml-2 font-bold tracking-tight text-orange-500 '>
              KhaanaKart.com
            </Link>
          </motion.div>
        </motion.div>
        <div className='md:hidden'>
          <MobileNav />
        </div>
        <div className='hidden md:block'>
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
