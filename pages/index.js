import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Layout from '../components/Layout';
import LocationItem from '../components/LocationItem'
import { Scrollbars } from 'react-custom-scrollbars';
import {getLocation} from '../query';


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: flex-start;
`
const IndicatorContainer = styled.div`
    width:100%;
    display: flex;
    justify-content:center;
`
const Indicator = styled.img`
    width:207px;
    height:155px;
    @media only screen and (max-width: 576px) {
      width: 100px;
      height:75px;
  }
`

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:props.data,
      page:1,
      loading:false
    }
    this.maxPage = Math.ceil(props.total.count/20);
    this.handleScroll = this.handleScroll.bind(this);
  }

  async handleScroll(e){
    if(!this.state.loading){
      if (Math.floor(e.target.scrollHeight-e.target.scrollTop) == e.target.clientHeight 
      || Math.ceil(e.target.scrollHeight-e.target.scrollTop) == e.target.clientHeight){
        if(this.state.page < this.maxPage){
          this.setState({loading:true}); 
          const locations = await getLocation(this.state.page + 1);
          let data = [...this.state.data].concat(locations.data.locations.results);
          this.setState({data,page:this.state.page + 1,loading:false});   
        }    
    }
    }
  }
  
  render(){
    return (
      <Layout>
          <Scrollbars onScroll={this.handleScroll}>
          <Container>
            {
              this.state.data.map((location)=>{
                  return (
                    <LocationItem navigate = {() => Router.push(`/location?id=${location.id}`)} 
                                  key={location.id} 
                                  location={location}/>
                  )     
              })
            }
            {this.state.loading && <IndicatorContainer><Indicator src="./loading.gif"/></IndicatorContainer>}
          </Container>
          </Scrollbars>
      </Layout>
  )
  }   
}

export async function getServerSideProps() {
    const data = await getLocation(1);
    return {props: {
                      data:data.data.locations.results,
                      total:data.data.locations.info
                    }
            }
}
  
export default MainScreen;


