import React, { FC, useState } from 'react';
import { connect } from 'react-redux';
import { postUser } from '../../getData';
import { loadingUser } from '../../story';

interface Props {
  loadUsers: (users: User[]) => void;
}

const NewUser: FC<Props> = (props) => {
  const { loadUsers } = props;

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [desc, setDesc] = useState('');

  const hundleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;

    switch (target.id) {
      case 'name':
        setName(target.value);
        break;
      case 'surname':
        setSurname(target.value);
        break;
      case 'desc':
        setDesc(target.value);
        break;
      default:
        break;
    }
  };

  const hundleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const user = { name, surname, desc };

    if (name !== '' && surname !== '' && desc !== '') {
      postUser(user)
        .then(loadUsers);
    }
  };

  return (
    <>
      <form onSubmit={hundleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={hundleInput}
            value={name}
            type="text"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input
            onChange={hundleInput}
            value={surname}
            type="text"
            id="surname"
          />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <input
            onChange={hundleInput}
            value={desc}
            type="text"
            id="desc"
          />
        </div>
        <button type="submit">Add new user</button>
      </form>
    </>
  );
};

const mapDispatchToProps = {
  loadUsers: loadingUser,
};

export default connect(null, mapDispatchToProps)(NewUser);
