import styled from '@emotion/styled';
import { Pagination } from '@mui/material';

export const StyledPagination = styled(Pagination)`
  & .MuiPagination-ul .MuiPaginationItem-root {
    background-color: transparent;
    border-radius: 50%;
    color: ${props => (props.theme === 'dark' ? '#fff' : '#000')};
    border-color: ${props => (props.theme === 'dark' ? '#fff' : '#000')};
  }

  & .MuiPagination-ul .Mui-selected,
  & .MuiPagination-ul .Mui-selected:hover {
    background-color: ${props => (props.theme === 'dark' ? '#fff' : '#000')};
    color: ${props => (props.theme === 'dark' ? '#000' : '#fff')};
  }

  & .MuiPagination-ul .MuiPaginationItem-firstLast,
  & .MuiPagination-ul .MuiPaginationItem-previousNext {
    border-color: black;
  }
  & .MuiPagination-ul li:last-of-type {
    button {
      background-color: #eac645;
      color: black;
    }
  }

  & .MuiPagination-ul li:nth-last-of-type(2) {
    button {
      background-color: #eac645;
      color: black;
    }
  }

  & .MuiPagination-ul li:first-of-type {
    button {
      background-color: #111;
      color: #fff;
    }
  }

  & .MuiPagination-ul li:nth-of-type(2) {
    button {
      background-color: #111;
      color: #fff;
    }
  }
`;
