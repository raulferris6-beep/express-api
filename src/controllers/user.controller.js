export const getUsers = (req, res) => {
  res.json('todos los usuarios')
}

export const createUser = (req, res) => {
  console.log(req.body)

  res.status(201).json('usuario creado')
}

export const updateUser = (req, res) => {
  console.log(req.params.id)

  res.json(`usuario ${req.params.id} actualizado`)
}

export const deleteUser = (req, res) => {
  console.log(req.params.id)

  res.json(`usuario ${req.params.id} eliminado`)
}
