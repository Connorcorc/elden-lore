export const fetchCall = (data) => {
  fetch(`https://eldenring.fanapis.com/api/${data}`)
    .then(response => response.json())
}
