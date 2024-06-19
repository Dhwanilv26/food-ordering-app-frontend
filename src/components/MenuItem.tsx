import { MenuItem } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
type Props = {
  menuItem: MenuItem;
  addToCart: () => void;
};

const MenuItemm = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className='cursor-pointer' onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
        <CardContent className='font-bold'>Rs {(menuItem.price / 100).toFixed(2)}</CardContent>
      </CardHeader>
    </Card>
  );
};

export default MenuItemm;
