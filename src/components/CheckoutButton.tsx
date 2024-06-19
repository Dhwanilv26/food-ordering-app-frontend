import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import LoadingButton from './LoadingButton';
import { Dialog, DialogTrigger, DialogContent } from './ui/dialog';
import UserProfileForm, { UserFormData } from '@/forms/user-profile-form/UserProfileForm';
import { useGetMyUser } from '@/api/MyUserApi';
type Props = {
  onCheckout: (userFormData: UserFormData) => void;
  disabled: boolean;
  isLoading: boolean;
};
const CheckoutButton = ({ onCheckout, disabled, isLoading }: Props) => {
  const { isAuthenticated, isLoading: isAuthLoading, loginWithRedirect } = useAuth0();

  const { pathname } = useLocation();

  const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
        // to direct to the /detail/restuarantid page after login
      },
    });
  };
  if (!isAuthenticated) {
    return (
      <Button onClick={onLogin} className='bg-orange-500 flex-1'>
        Login to Checkout
      </Button>
    );
  }

  if (isAuthLoading || !currentUser || isLoading) {
    return <LoadingButton />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={disabled} className='bg-orange-500 flex-1'>
          Proceed to Checkout
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-[425px]md:min-w-[700px] bg-gray-50'>
        <UserProfileForm
          currentUser={currentUser}
          onSave={onCheckout}
          isLoading={isGetUserLoading}
          title='Confirm Delivery Details'
          buttonText='Proceed to Pay'
        />
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutButton;
