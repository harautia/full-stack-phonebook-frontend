import noteService from '../services/notes'

/* The main problematic issue was the 'delete' button. Wasn't able to add that to app.jsx file and because
of this I needed sent setPersons and setAlert from line 37 to all consts. Not sure is this optimal? */

const handleDeleteData = (userId, name, setPersons, setAlert) => {
  deleteData(userId, name, setPersons, setAlert);
  console.log(userId);
};

const deleteData = (userId, name, setPersons, setAlert) => {
  if (window.confirm("Delete " + name + "?")) {
    noteService
      .deleteData(userId)
      .then(response => {
        setPersons(prevPersons => prevPersons.filter(person => person.id !== userId));
    })
    .catch(error => {
      setAlert(
        `Information of '${name}' is already deleted from server`
      )
      setTimeout(() => {
        setAlert(null)
      }, 5000)
    })
  }
};

const Persons = ({ persons, setPersons, setAlert }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {persons.map((person) => (
        <li className='persons' key={person.id}>
          {person.name} {person.number} 
          <button type="button" onClick={() => handleDeleteData(person.id, person.name, setPersons, setAlert)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Persons