const remoteURL = "http://localhost:5002";

export default {
  get(component, id) {
    return fetch(`${remoteURL}/${component}/${id}`).then(result => result.json());
  },
  getAll(component) {
    return fetch(`${remoteURL}/${component}`).then(result => result.json());
  }
};
