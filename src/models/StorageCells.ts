export const DEFAULT_TYPE_COUNT: number = 63;

export interface StorageCell {
    cellName: string;
    totalBytes: number;
    availableBytes: number;
    typeByteCost: number;
    allowedTypeCount: number;
    usedTypes: number;
    storedItemCount: number;
    useEqualPartitions: boolean;
}

export const createStorageCell = (
    name: string,
    totalBytes: number
): StorageCell => {
    return {
        cellName: name,
        totalBytes,
        availableBytes: totalBytes,
        typeByteCost: totalBytes / 128,
        allowedTypeCount: DEFAULT_TYPE_COUNT,
        usedTypes: 0,
        storedItemCount: 0,
        useEqualPartitions: true,
    };
};

export const getAvailableBytes = (cell: StorageCell): number => {
    const typeReservation = cell.typeByteCost * cell.usedTypes;
    const itemCost = cell.storedItemCount / 8;

    return cell.totalBytes - (typeReservation + itemCost);
};

export const getCurrentPartitionSizeInBytes = (cell: StorageCell): number => {
    return getAvailableBytes(cell) / cell.usedTypes;
};
