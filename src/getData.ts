// const URL_USER = '/api/users';
const URL_USER = process.env.REACT_APP_URL_USER;

const getData = async <T>(): Promise<T> => {
  const response = await fetch(`${URL_USER}`);

  return response.json();
};

export const getUsers = (): Promise<User[]> => {
  return getData();
};

export const postUser = async (user: User) => {
  const response = await fetch(`${URL_USER}`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
    body: JSON.stringify(user),
  });

  return response.json();
};

export const deleteUser = (id: number | undefined) => {
  fetch(`${URL_USER}/${id}`, {
    method: 'DELETE',
  });
};
