const Filter = ({ persons, filter }) => {
      
    const filteredPersons = filter
      ? persons.filter(person =>
            person.name.toLowerCase().includes(filter.toLowerCase())
        )
        : [];
     
    return (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            {filteredPersons.map(person => (
              <li key={person.id}>
                {person.name} {person.number}
              </li>
            ))}
          </ul>
        )
      }
      
export default Filter