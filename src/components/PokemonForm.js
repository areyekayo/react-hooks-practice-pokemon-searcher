import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleNewPokemon}) {
  //set form state for controlled form
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    }
  })
  //function to handle submit and post new pokemon
  function handleSubmit(event){
    event.preventDefault();
    const newPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.sprites.front,
        back: formData.sprites.back
      }
    };

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon)
    })
      .then((r) => r.json())
      .then((newPokemon) => handleNewPokemon(newPokemon))
  };
  
  //function to handle changes to name and hp input
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  //function to handle front image changes
  function handleFrontImage(event){
    setFormData({
      ...formData,
      sprites: {
        front: event.target.value,
        back: formData.sprites.back
      }
    })
  }
  //function to handle back image changes
  function handleBackImage(event){
    setFormData({
      ...formData,
      sprites: {
        front: formData.sprites.front,
        back: event.target.value
      }
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formData.name} onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formData.hp} onChange={handleChange} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.sprites.front}
            onChange={handleFrontImage}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.sprites.back}
            onChange={handleBackImage}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
