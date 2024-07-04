import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import allCatagories from '../data/allCatagories';

interface DrawerProps {
  onSelectCategory: (category: string) => void; // Define the prop type for onSelectCategory
}

const DrawerCatagories: React.FC<DrawerProps> = ({ onSelectCategory }) => {
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
        {allCatagories.map((category) => (
          <ListItem key={category.id} disablePadding>
            <ListItemButton onClick={() => onSelectCategory(category.category)}> {/* Passing the category to this prop function that is in the Carousel Component which will then filter items based off of category */}
              <ListItemText primary={category.category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Categories</Button>
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


export default DrawerCatagories;