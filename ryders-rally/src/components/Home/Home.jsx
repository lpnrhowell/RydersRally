import React, { useContext } from 'react';
import { Grid} from 'semantic-ui-react';
import { AuthContext } from '../../context/auth';
import Sharing from "../Sharing/Sharing.jsx";
import Events from '../Events/Events';
import "/_home.scss"


function Home() {
  const { user } = useContext(AuthContext);
 
  return (
    <div className="homepage">
      <Grid columns={2}>
        <Grid.Row className="page-title">
          <h1 id="title">Ryders Rally</h1>
        </Grid.Row>
        <Events/>
      </Grid>
      <Sharing />
    </div>
  );
}

export default Home;

