import styled from 'styled-components';
import {GlobalStyle} from "../GlobalStyles";

const LayoutContainer = styled.div`
    height: 100%;
    background: #c3c3c3;
    background: linear-gradient(180deg, rgba(55, 185, 22, 0) 0%, rgba(55, 185, 22, 0.3) 164.92%), url('./galaxy.png');
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const ScreenContainer = styled.div`
    height: calc(100% - 5rem);
    width:100%;
    @media only screen and (min-width: 768px)  {width: 720px;}
    @media only screen and (min-width: 992px)  {width: 960px;}
    @media only screen and (min-width: 1200px) {width: 1140px;}
`
const Header = styled.div`
    width: 100%;
    height: 5rem;
    display:flex;
    justify-content:center;
    background: black;
`
const HeaderImg = styled.img`
    height: 100%;
`
const Layout = (props) => {
  return (
    <React.Fragment>
        <GlobalStyle/>
        <LayoutContainer>
            <Header><HeaderImg src="./headerImg.png"/></Header>
            <ScreenContainer>
                {props.children}
            </ScreenContainer>
        </LayoutContainer>
    </React.Fragment>
  )
}
export default Layout;

