import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import brands from '../data/brands';

interface DrawerProps {
  onSelectBrand: (brand: string) => void; // Define the prop type for onSelectCategory
}

const DrawerBrands: React.FC<DrawerProps> = ({ onSelectBrand }) => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, right: open });
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {brands.map((brand) => (
          <ListItem key={brand.id} disablePadding>
            <ListItemButton onClick={() => onSelectBrand(brand.brand)}>
              <ListItemText primary={brand.brand} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Brands</Button>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
};


export default DrawerBrands;