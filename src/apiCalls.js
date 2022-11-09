const getSection = (section) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=2g0IGFodDXgFfkdSuJ6VAqTUWjPEm2J0`)
    .then(res => res.json())
}

export { getSection }