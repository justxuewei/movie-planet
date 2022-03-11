import React from "react";
import {Box} from "@mui/material";

class Index extends React.Component {
    render() {
        return (
            <Box>
                {this.props.children}
            </Box>
        )
    }
}

export default Index;
