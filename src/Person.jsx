import React from 'react';

const Person = ({ id, name, age, image, setPeople }) => {
  const handleRemovePerson = () => {
    // Assuming setPeople is a function to update the state
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id));
  };

  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <h4>{name}</h4>
      <p>{age} years</p>
      <section>
        <button className="btn" onClick={handleRemovePerson}>
          Delete
        </button>
      </section>
    </article>
  );
};

export default Person;
