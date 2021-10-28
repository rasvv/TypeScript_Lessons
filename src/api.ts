let outing = []

export function getApi() { fetch('http://localhost:3000/places')
  .then(res => res.json())
  .then((out) => {
    // console.log('Output: ', out);
    outing = out
    return out
  })
  .catch(err => console.error(err))
return outing
}