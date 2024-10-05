import { useRef, useState } from 'react';
import './App.css';
import {
    createStorageCell,
    DEFAULT_TYPE_COUNT,
    StorageCell,
} from './models/StorageCells';
import React from 'react';
import { StorageCellComponent } from './components/StorageCellComponent';
import {
    Box,
    Grid,
    InputAdornment,
    TextField,
    Typography,
} from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import { CellCard } from './styles/CellCard';
import { theme } from './main';

const storageCellDefinitions = [
    { name: '1K ME Storage Cell', bytes: 1024 },
    { name: '4K ME Storage Cell', bytes: 4096 },
    { name: '16K ME Storage Cell', bytes: 16384 },
    { name: '64K ME Storage Cell', bytes: 65536 },
    { name: '256K ME Storage Cell', bytes: 262144 },
];

const App: React.FC = () => {
    const placeholderText = 'Enter a Unique Item Count';
    const [storageCells, setStorageCells] = useState<StorageCell[]>(
        storageCellDefinitions.map(config =>
            createStorageCell(config.name, config.bytes)
        )
    );

    const inputRef = useRef<HTMLInputElement>(null);

    const handleUniqueItemCountChange = (uniqueItemCount: number) => {
        const updatedCells = storageCells.map(cell => ({
            ...cell,
            storedItemCount: 64 * uniqueItemCount,
            usedTypes: uniqueItemCount,
        }));

        setStorageCells(updatedCells);
    };

    const handleUniqueItemCountChangeEvent = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const min = 0,
            max = DEFAULT_TYPE_COUNT;
        let value = Number(event.target.value);

        if (value < min) {
            event.preventDefault();
            event.target.value = min.toString();
            value = min;
        }
        if (value > max) {
            event.preventDefault();
            event.target.value = max.toString();
            value = max;
        }
        handleUniqueItemCountChange(value);
    };

    const handleFocus = () => {
        console.log('Focus event firing');
        if (inputRef.current) {
            inputRef.current.select();
        }
    };

    return (
        <Box
            sx={{
                padding: 4,
                maxWidth: 1200,
                margin: '0 auto',
                textAlign: 'center',
            }}
        >
            <Typography
                variant="h3"
                component="h1"
                mb="25px"
                gutterBottom
            >
                Minecraft ME Storage Drive Partition Calculator
            </Typography>

            <Box sx={{ mb: 4 }}>
                <TextField
                    inputRef={inputRef}
                    type="number"
                    onChange={handleUniqueItemCountChangeEvent}
                    onFocus={handleFocus}
                    placeholder={placeholderText}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <StorageIcon />
                            </InputAdornment>
                        ),
                    }}
                    inputProps={{
                        min: 0, // Ensures a minimum value of 0
                        max: 100, // Ensures a maximum value of 100
                        step: 1, // Optional: Add step size to control increments
                    }}
                    fullWidth
                    variant="outlined"
                    sx={{
                        backgroundColor: '#fafafa',
                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                        maxWidth: '300px',
                    }}
                />
            </Box>
            <Grid
                container
                spacing={3}
            >
                {storageCells?.map((cell, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={index}
                    >
                        <CellCard theme={theme}>
                            <StorageCellComponent
                                cellInfo={cell}
                            ></StorageCellComponent>
                        </CellCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default App;
