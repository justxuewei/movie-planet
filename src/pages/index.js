import React from "react";
import {Box, InputAdornment, TextField} from "@mui/material";
import {Search} from '@mui/icons-material';

class Index extends React.Component {
    render() {
        return (
            <Box sx={{width: "100%"}}>
                <TextField fullWidth InputProps={{
                    startAdornment: (
                        <InputAdornment position={"start"}>
                            <Search/>
                        </InputAdornment>
                    )
                }}/>
            </Box>
        )
    }
}

export default Index;
