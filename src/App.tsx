import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import './App.scss';
import {deleteUser, getUsers} from './getData';
import { loadingUser, State } from './story';
import NewUser from './components/NewUser/NewUser';

interface Props {
  users: User[];
  loadUsers: (users: User[]) => void;
}

const App: FC<Props> = (props) => {
  const {
    users,
    loadUsers,
  } = props;

  useEffect(() => {
    getUsers()
      .then(loadUsers);
  }, [loadUsers]);

  const hundleDelete = (id: number | undefined) => {
    deleteUser(id);
    getUsers()
      .then(loadUsers);
  };

  return (
    <div className="App">
      <h1>Merehead</h1>
      <NewUser />
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {`${user.name} ${user.surname} ${user.desc}`}
            <button
              type="button"
              onClick={() => hundleDelete(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
};

const mapStateToProps = (state: State) => ({
  users: state.users,
});

const mapDispatchToProps = {
  loadUsers: loadingUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
