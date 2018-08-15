import React from 'react';
import Moment from 'moment';

import styles from './styles.css';

const CardInfo = function(props){
  console.log(props.location);
  return (
    <div className={styles.container}>
      <div className={styles.species}>
        <h1>Specie</h1>
        <div>
          <p>{props.location.species_name}</p>
        </div>
      </div>
      <div className={styles.encounter}>
        <h1>Encounter</h1>
        <p>{Moment(props.location.encounter_date).format("MMM Do YY")}</p>
      </div>
    </div>
  );
}

export default CardInfo;
