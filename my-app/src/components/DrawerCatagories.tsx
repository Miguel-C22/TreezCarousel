import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
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
      sx={{ width: 250, backgroundColor: '#0c2002', height: '100%', fontWeight: "bold" }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography variant="h6" style={{ fontWeight: 'bold', marginLeft: '16px', color: 'white' }}>
        Categories
      </Typography>
       <List>
        {allCatagories.map((category) => (
          <ListItem key={category.id} disablePadding>
            <ListItemButton onClick={() => onSelectCategory(category.category)}>
              <ListItemText
                primary={category.category}
                primaryTypographyProps={{ style: { color: 'white' } }} // Set text color to dark green
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={{ color: '#0c2002', fontWeight: 'bold' }}>Categories</Button>
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