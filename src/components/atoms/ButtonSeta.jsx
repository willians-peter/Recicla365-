import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function ButtonSeta({ type, texto, onClick }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button 
        type={type} 
        variant="contained" 
        endIcon={<SendIcon />} 
        disableElevation 
        onClick={onClick}
      >
        {texto}
      </Button>
    </Stack>
  );
}
