const cachingGet = (get) => {
  const cache = {};

  return function cachedGet (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const request = get(...args)
      cache[key] = request;
      return request;
    }
  }
};

export default cachingGet;