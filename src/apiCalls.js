const getData = (section) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?=api-key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
}

export { getData }