import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const NavWrapper = styled.div`
  display: flex;
  
  width: 100%;
  height: 60px;
  background-color: #021229;
  justify-content: space-around;
  align-items: center;
  
`;
export const NavWrapper2 = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #021229;
  justify-content: flex-end;
  margin-left:auto;
  align-items:  ;
  

`;
export const NavWrapper3 = styled.div`
  display: flex;
  width: 100%;
  height: 36px;
  background-color: #121323;
  justify-content: space-around;
  margin-left:auto;
  align-items: center;
  

`;

export const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height:auto;
  margin:10px;
  margin-left:20px;

 
}
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height:auto;
  margin: 10px;
  color:#000;
  color: rgba(0,0,0,0);
  text-shadow: 0 0 0 #000;


`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0 0.5rem;
  &:hover{color: white;};
`;