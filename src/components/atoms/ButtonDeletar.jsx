
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

export default function ButtonDeletar({ onClick }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button 
        variant="outlined" 
        startIcon={<DeleteIcon />} 
        onClick={onClick}
      >
        Deletar
      </Button>
    </Stack>
  );
}
