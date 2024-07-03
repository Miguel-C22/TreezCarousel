import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PagingProps = {
  totalPages: number;
  onPageChange: (event: React.ChangeEvent<unknown>, page: number) => void;
};

function Paging({ totalPages, onPageChange }: PagingProps) {
  return (
    <Stack spacing={2}>
      <Pagination  
        count={totalPages}
        onChange={onPageChange}
       />
    </Stack>
  );
}

export default Paging