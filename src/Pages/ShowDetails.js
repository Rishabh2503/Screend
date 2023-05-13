import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchShows } from "../components/api/api";

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetchShows(id).then(data => setShow(data));
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  const {
    name,
    image,
    summary,
    premiered,
    rating,
    genres,
    network,
    status,
    language,
  } = show;

  return (
    <div>
      <h1>{name}</h1>
      {image && <img src={image.medium} alt={name} />}
      <p dangerouslySetInnerHTML={{ __html: summary }}></p>
      <p>Premiered: {premiered}</p>
      <p>Rating: {rating && rating.average}</p>
      <p>Genres: {genres && genres.join(', ')}</p>
      <p>
        Network: {network && network.name}{' '}
        {network && network.country && `(${network.country.name})`}
      </p>
      <p>Status: {status}</p>
      <p>Language: {language}</p>
    </div>
  );
};

export default ShowDetails;