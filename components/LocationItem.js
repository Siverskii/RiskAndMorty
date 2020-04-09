import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 30rem;
    height: 145px;
    background: #312A2A;
    margin: .5rem;
    border-radius: .2rem;
    cursor: pointer;
    @media only screen and (max-width: 576px) {
      height:120px;
      width:100%;
  }
`
export const Avatar = styled.img`
    width:145px;
    height:145px;
    @media only screen and (max-width: 576px) {
      width: 120px;
      height:120px;
  }
`
const Description = styled.div`
    flex-grow:1;
    display:flex;
    flex-direction:column;
    padding-left: .5rem;
`
const TitleContainer = styled.div`
    flex-grow:1;
    display: flex;
    flex-direction:column;
    padding-top:1rem;
    color: #f3f3f3;
    @media only screen and (max-width: 576px) {
        padding-top:.1rem;
  }
`
export const Title = styled.div`
    font-size: ${(props) => props.size == "big" ? '1.5rem' : '1.125rem'}; 
    font-weight: ${(props) => props.size == "big" ? 'bold' : 'normal'};
    @media only screen and (max-width: 576px) {
        font-size: ${(props) => props.size == "big" ? '1.1rem' : '1rem'}; 
        font-weight: ${(props) => props.size == "big" ? 'bold' : 'normal'};
  }
`
const ResidentContainer = styled.div``
const ResidentAvatar = styled.img`
    width: 50px;
    height: 50px;
    margin-right: .5rem;
`


const LocationItem = (props) => {
  return (
    <Container onClick = {props.navigate}>
        <Avatar src = {props.location.type + '.png'}/>
        <Description>
            <TitleContainer>
                <Title size={'big'}>{props.location.name}</Title>
                <Title size={'small'}>{props.location.type}</Title>
            </TitleContainer>
            <ResidentContainer>
                {props.location.residents.splice(0,3).map((resident)=>{
                    if (resident.image != null) return <ResidentAvatar src = {resident.image}/>
                })}
            </ResidentContainer>
        </Description>
    </Container>
  )
}
export default LocationItem;


