import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { Theme } from '@mui/material/styles';

export const CellCard = styled(Box)(({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    textAlign: 'left',
}));
