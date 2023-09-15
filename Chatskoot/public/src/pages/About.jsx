import React from "react";
import {styled,Box} from '@mui/material';

const Component = styled(Box)`
    background:'black';
    color:'white';
    height:100vh;
`
    
function AboutPage(){
    return(
        <Component>Hello</Component>
    )
}

export default AboutPage;