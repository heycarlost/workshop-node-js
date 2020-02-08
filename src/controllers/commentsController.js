const list = (req, res) => {
  res.send({ message: 'Soy el controlador de comments' });
}

const find = (req, res) => {
  res.send({ message: 'Soy el controlador del comments' });
}

const create = (req, res) => {
  res.send({ message: 'Soy el controlador del comments' });
}

const update = (req, res) => {
  res.send({ message: 'Soy el controlador del comments' });
}

const del = (req, res) => {
  res.send({ message: 'Soy el controlador del comments' });
}

export default{
  list,
  find,
  create,
  update,
  del,
}
