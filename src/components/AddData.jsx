import noteService from '../services/notes'

const AddData = ({ persons, setPersons, name, number }) => {
//    console.log(name)
//    console.log(number)
//    console.log(persons)

const existingPerson = persons.find(person => person.name === name);

  if (existingPerson) {
    if (window.confirm(`${name} is already added to the phonebook, replace the old number with new?`)) {
      console.log('Modify Used data executed');
  
      const modifiedData = { name: existingPerson.name, number, id: existingPerson.id };
  
      noteService
        .updateData(existingPerson.id, modifiedData)
        .then(response => {
          setPersons(persons.map(person => 
            person.id === existingPerson.id ? response : person
          ));
        });
      }
      return; // This was incorret for long time and impact was that entry was also added as new!
    }

  if (persons.some(person => person.number === number)) {
    alert(`${number} is already added to the phonebook`);
    return;
  }

  // The ID had to modified like this in order that is defined as string ""
  const newData = {name, number, id: (Math.max(...persons.map(p => Number(p.id)), 0) + 1).toString()
  };
  noteService
  .addData(newData)
  .then(response => {
    setPersons(persons.concat(newData))
    console.log(response)
  })
};

export default AddData