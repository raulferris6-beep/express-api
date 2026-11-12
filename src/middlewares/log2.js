export const logs2 = (req, res, next) => {
  const inicio = Date.now()

  res.on('finish', () => {
    const duracion = Date.now() - inicio
    console.log(`${req.method} ${req.url} ${res.statusCode} - ${duracion} ms`)
  })

  next()
}
