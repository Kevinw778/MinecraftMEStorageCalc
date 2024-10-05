import React from 'react';
import {
    getAvailableBytes,
    getCurrentPartitionSizeInBytes,
    StorageCell,
} from '../models/StorageCells';

interface StorageCellProps {
    cellInfo: StorageCell;
}

export const StorageCellComponent: React.FC<StorageCellProps> = ({
    cellInfo,
}) => {
    return (
        <div>
            <div>
                <p style={{ fontSize: '24px' }}>
                    {cellInfo?.cellName} (Available Bytes:{' '}
                    <strong>{getAvailableBytes(cellInfo!)}</strong>)
                </p>
                <hr />
            </div>
            <p>
                Used Types: <strong>{cellInfo!.usedTypes}</strong>
            </p>
            <p>
                Partition Size:{' '}
                <strong>{getCurrentPartitionSizeInBytes(cellInfo!) | 0}</strong>
            </p>
            <p>
                Items Per Type:{' '}
                <strong>
                    {(getCurrentPartitionSizeInBytes(cellInfo!) | 0) * 8}
                </strong>
            </p>
            ---
            <br />
        </div>
    );
};
