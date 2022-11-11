const getData = (data) => {
  return fetch(`https://eldenring.fanapis.com/api/${data}?limit=100`)
    .then(response => response.json())

}

export default getData
