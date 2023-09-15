import React from "react";
import {AppBar,Toolbar,styled,Box} from '@mui/material';
import chatskoot from "../assets/logo.jpeg";
import {useNavigate} from "react-router-dom";
// import style from "styled-components"
const Header = styled(AppBar)`
    height:80px;
    background-color:#cfaa41;
`

const Component = styled(Box)`
    background-color:black;
    height:100vh;
`
const Logo = styled('img')({
    paddingTop:'250px',
    paddingLeft:'250px',
    height:'500px',
    backgroundColor:'black',
    placeItems:'center',
    justifyItems:'center',
    paddingBottom:'0px',
    position:'fixed'
})

const Chatskoot = styled('h1')({
    color:'black',
   paddingLeft:'40px',
    paddingRight:'100px',
    fontFamily:'Times',
   paddingTop:'15px'
    
})

const LoginButton=styled('button')({
    color:'black',
    backgroundColor:'#cfaa41',
    borderRadius:'10px',
    marginLeft:'1250px',
    height:'50px',
    width:'100px',
    fontWeight:'bolder',
    fontFamily:'Times',
    fontSize:'Larger',
    marginTop:'15px',
    position:'absolute',
    border:'none'
    
})

const AboutButton=styled('button')({
    color:'black',
    backgroundColor:'#cfaa41',
    borderRadius:'10px',
    marginLeft:'1380px',
    height:'50px',
    width:'100px',
    fontWeight:'bolder',
    fontFamily:'Times',
    fontSize:'Larger',
    marginTop:'15px',
    position:'fixed',
    border:'none'
})

const Start=styled('h1')({
    position:'fixed',
    color:'#cfaa41',
    paddingTop:'350px',
    paddingLeft:'600px',
    fontFamily:'times',
    fontSize:'40px'
})
function HomePage(){
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate('/login');
    }
    const handleAbout=()=>{
        navigate('/about');
    }
    return(
        <>
        <Component>
            <Header>
                <Toolbar>
                <Chatskoot>CHATSKOOT WEB</Chatskoot>
                    <LoginButton onClick={handleClick}>Login</LoginButton>
                    <AboutButton onClick={handleAbout}>About</AboutButton>
                </Toolbar>
            </Header>            
            <Logo src={chatskoot}/>
            <Start>Get Started with Chatskoot!</Start>
            
        </Component>
        </>
    )
}



export default HomePage;