import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({id, name, hp, sprites}) {
  const front = sprites.front;
  const back = sprites.back;
  
  //set state to track clicks that will show pokemon back image
  const [isClicked, setClicked] = useState(false);

  function handleClick(){
    setClicked(!isClicked);
  }

  return (
    <Card>
      <div id={id} onClick={handleClick}>
        <div className="image">
          {isClicked ? <img alt="oh no!" src={back} /> : <img alt="back sprite" src={front} />}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
           {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
