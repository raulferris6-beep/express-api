export const log = (req, res, next) => {
  console.log(`Petición ${req.method} a ${req.url}`)
  next()
}
