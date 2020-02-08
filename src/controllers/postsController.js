const list = (req, res) => {
  res.send({ message: 'Soy el controlador de posts' });
}

const find = (req, res) => {
  res.send({ message: 'Soy el controlador del posts' });
}

const create = (req, res) => {
  res.send({ message: 'Soy el controlador del posts' });
}

const update = (req, res) => {
  res.send({ message: 'Soy el controlador del posts' });
}

const del = (req, res) => {
  res.send({ message: 'Soy el controlador del posts' });
}

export default{
  list,
  find,
  create,
  update,
  del,
}
