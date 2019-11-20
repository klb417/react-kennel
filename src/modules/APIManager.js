const remoteURL = "http://localhost:5002";

export default {
  get(route) {
    return fetch(`${remoteURL}/${route}`).then(result => result.json());
  },
  getAll(route) {
    return fetch(`${remoteURL}/${route}`).then(result => result.json());
  },
  delete(route) {
    return fetch(`${remoteURL}/${route}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
};
