
type Lol = { code: string, label: string, lol: string }

const p1 = Promise.resolve({ code: '', label: '' })
const p2 = Promise.resolve({ code: '', label: '', lol: '' })

Promise.all([
  p1,
  p2
])
.then(([_, b]) => {
  const z: Lol = b
  console.log(z) 
})