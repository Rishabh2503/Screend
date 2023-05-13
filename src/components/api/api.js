export const fetchShows = () => {
    return fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => data.map((entry) => entry.show));
  };
  export const fetchShowSummary = (id) => {
    return fetch(`https://api.tvmaze.com/shows/${id}?embed=summary`)
      .then((response) => response.json())
      .then((data) => data.summary);
  };