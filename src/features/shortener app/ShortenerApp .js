import React from 'react';
import { useShortener } from '../functions/getLink';
import { useTheme, TextField, Paper, Button } from '@mui/material';

function ShortenerApp() {
    const theme = useTheme();
    const { original, setOriginal, shortened, getLinks } = useShortener();

    const handleSubmit = async (event) => {
        event.preventDefault();
        getLinks();
    }

    return (
        <div style={{ display: 'flex', background: theme.palette.background.paper, justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Paper sx={{ width: '600px', background: theme.palette.background.paper, padding: 2 }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ padding: 10 }}>
                        <TextField
                            fullWidth
                            variant='standard'
                            value={original}
                            onChange={(e) => setOriginal(e.target.value)}
                            placeholder="Insert link here"
                            sx={{ width: '100%' }}
                        />
                    </div>
                    <div style={{ padding: 10 }}>
                        {shortened && <a href={shortened}> {shortened} </a>}
                    </div>
                    <div style={{ padding: 10 }}>
                        <Button variant="contained" color="secondary" type="submit" sx={{ width: '100%' }} >
                            Shorten
                        </Button>
                    </div>
                </form>
            </Paper>
        </div>
    )
};

export default ShortenerApp;
