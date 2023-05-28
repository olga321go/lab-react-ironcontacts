import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import React, { useState } from "react";

function App() {
  const [fiveContacts, setFiveContacts] = useState(contacts.slice(0, 5));
  const leftovers = [...contacts];
  leftovers.splice(0, 5);
  console.log("LEFTOVERS", leftovers);
  const [remainingContacts, setRemainingContacts] = useState(leftovers);

  const addRandomContact = () => {
    if (remainingContacts.length === 0) {
      console.log("no more contacts to add");
      return;
    }
    const contactToAddIndex = Math.floor(
      Math.random() * remainingContacts.length
    );
    const contactToAdd = remainingContacts[contactToAddIndex];
    console.log("RANDOM CONTACT TO ADD", contactToAdd);


    // setArray(oldArray => [...oldArray,newValue] );
    setFiveContacts(fiveContacts => [...fiveContacts,contactToAdd]);
  };

  const displayedContacts = [...fiveContacts];

  const sortByName = () => {
    displayedContacts.sort((a, b) => (a.name > b.name) ? 1 : -1);
    console.log("SORTED BY NAME", displayedContacts);
    setFiveContacts(fiveContacts);
    return;
  };

  const hasOscar = (elem) => {
    if (elem) {
      return <p>🏆</p>;
    }
  };
  const hasEmmy = (elem) => {
    if (elem) {
      return <p>🏆</p>;
    }
  };

  return (
    <div className="App">
      <table>
        <caption>
          IronContacts
        </caption>
        <button onClick={addRandomContact}>Add random contact</button>
        <button onClick={sortByName}>Sort by name</button>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        <tbody>
          {fiveContacts.map((contact) => {
            return (
              <tr>
                {" "}
                <td>
                  {" "}
                  <img alt="pic" src={contact.pictureUrl} id="contact-pic"/>{" "}
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity} </td>
                <td> {hasOscar(contact.wonOscar)} </td>
                <td>{hasEmmy(contact.wonEmmy)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
