import styled from 'styled-components';
import {Title, Avatar} from './LocationItem';
import { Scrollbars } from 'react-custom-scrollbars';
import Router from 'next/router';

const LocationContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
    @media only screen and (max-width: 576px) {
        flex-wrap:wrap;
    }
    
`
const TitleContainer = styled.div`
    width: 15rem;
    text-align:center;
    color: white;
    position: relative;
    @media only screen and (max-width: 576px) {
        width: 100%;
    }
`
const ResidentsContainer = styled.div`
    flex-grow:1;
    display: flex;
    flex-wrap:wrap;
    justify-content:center;
`
const Resident = styled.div`
    display: flex;
    width: 25rem;
    height: 145px;
    background: #073955;
    margin: .5rem;
    border-radius: .2rem;
    cursor: pointer;
    @media only screen and (max-width: 576px) {
        width: 100%;
        height: 120px;
    }
`
const ResidentDescription = styled.div`
    flex-grow:1;
    color:white;
    padding:.25rem;
    
`
export const BackBtn = styled.div`
    cursor: pointer;
    font-size: 2rem;
    text-align:center;
    position: absolute;
    top: 1rem;
    left: 1rem;
`

export const Image = styled.img`
    padding: .5rem;
    @media only screen and (max-width: 576px) {
        padding: 0rem;
    }
`


const LocationDescriptions = (props) => {
  return (
    <Scrollbars>
    <LocationContainer>

            <TitleContainer>
                <Image src = {props.type + '.png'}/>
                <Title size={'big'}>{props.name}</Title>
                <Title size={'smal'}>{props.type}</Title>
                <BackBtn onClick={() => {Router.push('/')}}>&#8656;</BackBtn>
            </TitleContainer>
            <ResidentsContainer>
                {props.residents.map((resident)=>{
                    return(
                        <Resident onClick = {() => Router.push(`/resident?id=${resident.id}`)}>
                            <Avatar src = {resident.image}/>
                            <ResidentDescription>
                                <Title size={'big'}>{resident.name}</Title>
                                <Title size={'small'}>{props.name}</Title>
                                <Title size={'smal'}>{resident.species}</Title> 
                            </ResidentDescription>
                        </Resident>
                    )
                })}
            </ResidentsContainer>
    </LocationContainer>
    </Scrollbars>
  )
}
export default LocationDescriptions;

