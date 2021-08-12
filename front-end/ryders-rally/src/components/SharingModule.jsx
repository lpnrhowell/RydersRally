import React, { Component } from 'react';
import { gql, useQuery } from '@apollo/client';


function Sharing () {
    return(
      <div className="share-btn-container">
        <Footer/>
        <Sharing/>
      </div>
    )
  }
  export default Sharing;