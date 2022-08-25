import React from 'react'
import styled from 'styled-components'
import {Search} from '@material-ui/icons'

import { Link } from 'react-router-dom';

import'./d.css'

const Container =styled.div`
height :60px;

`;
const Wraper = styled.div`
padding :10px 20px;
display : flex;
justify-content :space-between;
align-items: centre;
`;
const Left=styled.div`
flex:1;
display : flex;
align-items: center;`;
const Language=styled.span`
font-size:14px;
cursor:pointer;

`;

const SearchContainer=styled.div`
border :0.5px solid lightgray;
display : flex;
align-items: center;
margin-left:25px;
padding:5px;

`;
const Input = styled.input`
border: none;


`;




const Center=styled.div`
flex:1;
text-align:center;
`;
const Logo= styled.h1`
font-weigth:bold;
`;

const Right=styled.div`
flex:1;
display : flex;
align-items:center;
justify-content:flex-end;

`;



const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
`;




const Navbar = () => {
    return (
        <nav className='navbar'>
        
        <Container>
        <Wraper>
         <Left>
            <Language>EN</Language>
            <SearchContainer>
            <Input/>
           <Search style={{color:"gray",fontSize:"16px"}}/>
            </SearchContainer>
            
         </Left>
         <Center>
         <Logo>
         <Link className='allo' to="/">Mon Dector</Link>
         </Logo>
         </Center>
         <Right>
         <MenuItem>
         <Link className='allo' to="/register">Register</Link>
         </MenuItem>
         
         <MenuItem>
         <Link className='allo' to="/login">Sign in</Link>
        
       
         </MenuItem>
         
         
         
         </Right>
        </Wraper>
          
        </Container>
        </nav>
    )
}

export default Navbar
