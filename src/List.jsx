import Person from "./Person";
const List = ({ people, setPeople }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} setPeople={setPeople} {...person} />;
      })}
    </section>
  );
};

export default List;
