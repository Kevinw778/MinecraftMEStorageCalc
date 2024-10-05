import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
        background: {
            paper: '#fff',
            default: '#f4f6f8',
        },
    },

    spacing: 8,

    shape: {
        borderRadius: 10,
    },

    shadows: [
        'none', // Level 0 shadow
        '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)', // Level 1 shadow
        '0px 1px 5px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.24)', // Level 2 shadow
        '0px 1px 8px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.24)', // Level 3 shadow
        '0px 1px 10px rgba(0, 0, 0, 0.12), 0px 1px 4px rgba(0, 0, 0, 0.24)', // Level 4 shadow
        '0px 1px 14px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.24)', // Level 5 shadow
        '0px 1px 18px rgba(0, 0, 0, 0.12), 0px 1px 6px rgba(0, 0, 0, 0.24)', // Level 6 shadow
        '0px 2px 16px rgba(0, 0, 0, 0.12), 0px 2px 6px rgba(0, 0, 0, 0.24)', // Level 7 shadow
        '0px 3px 14px rgba(0, 0, 0, 0.12), 0px 3px 6px rgba(0, 0, 0, 0.24)', // Level 8 shadow
        '0px 3px 16px rgba(0, 0, 0, 0.12), 0px 3px 6px rgba(0, 0, 0, 0.24)', // Level 9 shadow
        '0px 4px 18px rgba(0, 0, 0, 0.12), 0px 4px 6px rgba(0, 0, 0, 0.24)', // Level 10 shadow
        '0px 4px 20px rgba(0, 0, 0, 0.12), 0px 4px 7px rgba(0, 0, 0, 0.24)', // Level 11 shadow
        '0px 5px 22px rgba(0, 0, 0, 0.12), 0px 5px 8px rgba(0, 0, 0, 0.24)', // Level 12 shadow
        '0px 5px 24px rgba(0, 0, 0, 0.12), 0px 5px 9px rgba(0, 0, 0, 0.24)', // Level 13 shadow
        '0px 6px 28px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.24)', // Level 14 shadow
        '0px 6px 30px rgba(0, 0, 0, 0.12), 0px 6px 11px rgba(0, 0, 0, 0.24)', // Level 15 shadow
        '0px 7px 34px rgba(0, 0, 0, 0.12), 0px 7px 12px rgba(0, 0, 0, 0.24)', // Level 16 shadow
        '0px 8px 36px rgba(0, 0, 0, 0.12), 0px 8px 13px rgba(0, 0, 0, 0.24)', // Level 17 shadow
        '0px 8px 38px rgba(0, 0, 0, 0.12), 0px 8px 14px rgba(0, 0, 0, 0.24)', // Level 18 shadow
        '0px 9px 42px rgba(0, 0, 0, 0.12), 0px 9px 15px rgba(0, 0, 0, 0.24)', // Level 19 shadow
        '0px 9px 44px rgba(0, 0, 0, 0.12), 0px 9px 16px rgba(0, 0, 0, 0.24)', // Level 20 shadow
        '0px 10px 46px rgba(0, 0, 0, 0.12), 0px 10px 17px rgba(0, 0, 0, 0.24)', // Level 21 shadow
        '0px 10px 48px rgba(0, 0, 0, 0.12), 0px 10px 18px rgba(0, 0, 0, 0.24)', // Level 22 shadow
        '0px 11px 52px rgba(0, 0, 0, 0.12), 0px 11px 19px rgba(0, 0, 0, 0.24)', // Level 23 shadow
        '0px 11px 54px rgba(0, 0, 0, 0.12), 0px 11px 20px rgba(0, 0, 0, 0.24)', // Level 24 shadow
    ],
});

createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={theme}>
        <StrictMode>
            <App />
        </StrictMode>
    </ThemeProvider>
);
