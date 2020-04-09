import {getResidentDscr} from '../query';
import Layout from '../components/Layout';
import ResidentDescription from '../components/ResidentDescription';

const Resident = (props) => {
    return (
      <Layout>
        <ResidentDescription character = {props.character}/>
      </Layout>
    )
  }


  export async function getServerSideProps(ctx) {
    const resident = await getResidentDscr(ctx.query.id);
    return {props: {character:resident.data.character}}
}

  export default Resident;
