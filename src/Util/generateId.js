const generateId = (() => {
  var id = 0
  return () => (id += 1)
})()

export { generateId }