import styled from 'styled-components';
import {Avatar, Title} from './LocationItem';
import {BackBtn,Image} from './LocationDescriptions';
import { Scrollbars } from 'react-custom-scrollbars';
import Router from 'next/router';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;  
`
const ResidentContainer = styled.div`
    width: 20rem;
    position: relative;
    color:white;
    padding: .2rem;
`
const ResidentDescription = (props) => {
  return (
    <Container>
        <ResidentContainer>
          <Image src = {props.character.image} />
          <Title size={'big'}>{props.character.name}</Title>
          <Title size={'small'}>{props.character.location.name}</Title>
          <Title size={'small'}>{props.character.species}</Title>
          <Title size={'big'}>Status:</Title>
          <Title size={'small'}>{props.character.status}</Title>
          <Title size={'big'}>Home planet:</Title>
          <Title size={'small'}>{props.character.origin.name}</Title>
          <BackBtn onClick={()=>{Router.back()}}>&#8656;</BackBtn>
        </ResidentContainer>
    </Container>
  )
}
export default ResidentDescription;

