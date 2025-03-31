import React from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({id, name, hp, sprites}) {
  const front = sprites.front

  return (
    <Card>
      <div id={id}>
        <div className="image">
          <img alt="oh no!" src={front} />
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
