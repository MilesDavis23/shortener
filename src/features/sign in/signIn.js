import React from "react";
import { useTheme, TextField, Paper, Button } from '@mui/material';


function SignIn() {
    const theme = useTheme();
    return (
        <div style={{ display: 'flex', background: theme.palette.background.paper, justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Paper sx={{ width: '600px', background: theme.palette.background.paper, padding: 2 }}>
                <form>
                    <div style={{ padding: 10 }}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter username"
                            sx={{ width: '100%' }}

                        />
                    </div>
                    <div style={{ padding: 10 }}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter password"
                            sx={{ width: '100%' }}

                        />
                    </div>
                    <div style={{ padding: 10 }}>
                        <Button variant="contained" color="secondary" type="submit" sx={{ width: '100%' }}>
                            Login
                        </Button>
                    </div>
                </form>
            </Paper>
        </div>
    )
};

export default SignIn;