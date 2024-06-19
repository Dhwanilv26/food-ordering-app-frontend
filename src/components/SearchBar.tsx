import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem } from './ui/form';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const formSchema = z.object({
  searchQuery: z.string({
    required_error: 'Restaurant name is required',
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
  searchQuery?: string;
};

const SearchBar = ({ onSubmit, onReset, placeHolder, searchQuery }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: '',
    });

    if (onReset) {
      onReset();
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: -1500 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { type: 'spring', stiffness: 300 },
    },
    tap: { scale: 0.9 },
  };

  const inputVariants = {
    focus: {
      borderColor: '#ff7e5f', // Change border color on focus
      boxShadow: '0 0 5px rgba(255, 126, 95, 0.5)', // Add box shadow
    },
  };

  return (
    <Form {...form}>
      <motion.form
        onSubmit={form.handleSubmit(onSubmit)}
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        className={`flex items-center gap-3 justify-between flex-row border-2 rounded-full p-3 ${
          form.formState.errors.searchQuery && 'border-red-500'
        }`}
      >
        <Search strokeWidth={2.5} size={30} className='ml-1 text-orange-500 hidden md:block' />
        <FormField
          control={form.control}
          name='searchQuery'
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormControl>
                <motion.div whileFocus={inputVariants.focus} className='relative'>
                  <Input
                    {...field}
                    className='border-none shadow-none text-xl focus-visible:ring-0'
                    placeholder={placeHolder}
                  />
                </motion.div>
              </FormControl>
            </FormItem>
          )}
        />
        <motion.div whileHover='hover' whileTap='tap' variants={buttonVariants}>
          <Button onClick={handleReset} type='button' variant='outline' className='rounded-full'>
            Reset
          </Button>
        </motion.div>
        <motion.div whileHover='hover' whileTap='tap' variants={buttonVariants}>
          <Button type='submit' className='rounded-full bg-orange-500 text-white'>
            Search
          </Button>
        </motion.div>
      </motion.form>
    </Form>
  );
};

export default SearchBar;
