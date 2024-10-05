import React from 'react';
import {
    getAvailableBytes,
    getCurrentPartitionSizeInBytes,
    StorageCell,
} from '../models/StorageCells';
import { Card, CardContent, Typography, Divider, Grid } from '@mui/material';

interface StorageCellProps {
    cellInfo: StorageCell;
}

export const StorageCellComponent: React.FC<StorageCellProps> = ({
    cellInfo,
}) => {
    return (
        <Card
            sx={{
                minWidth: 275,
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: '#f9f9f9',
            }}
        >
            <CardContent>
                <Typography
                    variant="h5"
                    component="div"
                    gutterBottom
                >
                    {cellInfo.cellName}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Grid
                    container
                    spacing={2}
                >
                    <Grid
                        item
                        xs={6}
                    >
                        <Typography variant="subtitle1">
                            Available Bytes:
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                    >
                        <Typography
                            variant="body1"
                            fontWeight="bold"
                        >
                            {getAvailableBytes(cellInfo) | 0}
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={6}
                    >
                        <Typography variant="subtitle1">Used Types:</Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                    >
                        <Typography
                            variant="body1"
                            fontWeight="bold"
                        >
                            {cellInfo.usedTypes}
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={6}
                    >
                        <Typography variant="subtitle1">
                            Partition Size:
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                    >
                        <Typography
                            variant="body1"
                            fontWeight="bold"
                        >
                            {getCurrentPartitionSizeInBytes(cellInfo!) | 0}
                        </Typography>
                    </Grid>

                    <Grid
                        item
                        xs={6}
                    >
                        <Typography variant="subtitle1">
                            Items Per Type:
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                    >
                        <Typography
                            variant="body1"
                            fontWeight="bold"
                        >
                            {(getCurrentPartitionSizeInBytes(cellInfo!) * 8) |
                                0}
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
