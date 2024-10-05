import { useRef, useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import {
    createStorageCell,
    DEFAULT_TYPE_COUNT,
    StorageCell,
} from './models/StorageCells';
import React from 'react';
import { StorageCellComponent } from './components/StorageCellComponent';

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

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.select();
        }
    };

    return (
        <>
            <div>
                <a
                    href="https://vitejs.dev"
                    target="_blank"
                >
                    <img
                        src={viteLogo}
                        className="logo"
                        alt="Vite logo"
                    />
                </a>
            </div>
            <h1>Minecraft ME Storage Drive Partition Calculator</h1>
            <div className="card">
                <input
                    ref={inputRef}
                    type="number"
                    onChange={e =>
                        handleUniqueItemCountChange(Number(e.target.value))
                    }
                    onFocus={handleFocus}
                    min={0}
                    max={DEFAULT_TYPE_COUNT}
                    placeholder={placeholderText}
                    style={{ width: `${placeholderText.length}ch` }}
                />
                {storageCells?.map((cell, index) => {
                    return (
                        <StorageCellComponent
                            key={index}
                            cellInfo={cell}
                        ></StorageCellComponent>
                    );
                })}
            </div>
        </>
    );
};

export default App;
