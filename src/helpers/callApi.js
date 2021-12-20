export const callApi = (path, options) => {
  options?.body && (options.body = JSON.stringify(options.body))

  const url = 'http://localhost:8050'
  const defaultOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'GET',
  }
  return fetch(`${url}${path}`, { ...defaultOptions, ...options })
    .then(r => (options?.method === 'DELETE' ? r : r.json()))
    .then(d => {
      if (d.code < 200 || d.code > 399) {
        return Promise.reject(d)
      }
      return d
    })
}
