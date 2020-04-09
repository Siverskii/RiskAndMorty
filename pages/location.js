import {getResidents} from '../query';
import Layout from '../components/Layout';
import LocationDescriptions from '../components/LocationDescriptions';

const Location = (props) => {
    return (
      <Layout>
        <LocationDescriptions residents={props.data.residents}
                              name = {props.data.name}
                              type = {props.data.type}/>
      </Layout>
    )
  }


  export async function getServerSideProps(ctx) {
    const residents = await getResidents(ctx.query.id);
    return {props: {data:residents.data.location}}
}

  export default Location;