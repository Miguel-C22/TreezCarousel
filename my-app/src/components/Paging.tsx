import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PagingProps = {
  totalPages: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
};

function Paging({ totalPages, onPageChange }: PagingProps) {
  return (
    <Stack spacing={2} className="paging_container">
      <Pagination  
        count={totalPages}
        onChange={onPageChange}
        sx={{
          '& .Mui-selected': {
            backgroundColor: '#0c2002 !important', // Dark green background when selected
            color: 'white !important', // Text color when selected
          },
          '& .MuiPaginationItem-page': {
            backgroundColor: '#a9e079', // Light green background when not selected
            color: '#333', // Text color when not selected
          },
          '& .MuiPaginationItem-page:hover': {
            backgroundColor: '#0c2002', // Darker green background on hover
            color: 'white', // Text color on hover
          },
        }}
       />
    </Stack>
  );
}

export default Paging