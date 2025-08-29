import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonCustom({ type, texto, onClick }) {
  return (
    <Button variant="contained" type={type} disableElevation onClick={onClick}>
      {texto}
    </Button>
  );
}