import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './ui/button';
import UsernameMenu from './UsernameMenu';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionButton = motion(Button);

const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
  hover: { color: '#33b249' }, // Green color on hover
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      type: 'spring',
      stiffness: 300,
    },
    backgroundColor: '#ff7e5f',
    borderColor: '#feb47b',
    color: '#fff',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.05)',
  },
  tap: {
    scale: 0.95,
    backgroundColor: '#ff6b6b',
  },
};

const boxVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)',
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    color: '#ff6b6b',
    transition: {
      duration: 0.3,
    },
  },
};

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className='flex space-x-2 items-center'>
      {isAuthenticated ? (
        <>
          <motion.div
            className='text-xl font-bold'
            variants={linkVariants}
            initial='hidden'
            animate='visible'
            whileHover='hover'
          >
            <Link to='/order-status' className='text-blue-500 hover:text-green-500'>
              Order Status
            </Link>
          </motion.div>
          <UsernameMenu />
        </>
      ) : (
        <motion.div
          className='p-1 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500'
          variants={boxVariants}
          initial='initial'
          animate='animate'
          whileHover='hover'
        >
          <MotionButton
            className='relative z-10 font-bold px-4 py-2 rounded-lg border-2 border-transparent text-white overflow-hidden'
            onClick={async () => await loginWithRedirect()}
            style={{ backgroundImage: 'linear-gradient(to right, #ffae42, #ff7e5f)' }}
            variants={buttonVariants}
            whileHover='hover'
            whileTap='tap'
          >
            <motion.span
              variants={textVariants}
              initial='hidden'
              animate='visible'
              whileHover='hover'
              transition={{ duration: 0.3 }}
            >
              Log In
            </motion.span>
          </MotionButton>
        </motion.div>
      )}
    </span>
  );
};

export default MainNav;
