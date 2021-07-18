import React from 'react';
import { Userlist } from './Userlist';

export function Directory(props) {
  return (
    <div className="Directory">
      <h2 style={{marginLeft: '1em', marginTop: '1em', fontSize: '1.5em'}}>Pet Directory<span class="emoji" role="img" aria-label="donut">🐾</span></h2>
      <Userlist
        usernames={['Soso_Danilovich', 'Groucho_Barks', 'Dolgert_Einstein', 'Demi_Meower', 'Mickey_ORodent']}
        onChoose={props.onChoose}
      />
    </div>
  );
}