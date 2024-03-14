import React, { useState, useEffect } from 'react';
import yelp from '../screens/api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [mess, setMess] = useState('');

  const searchApi = async (term) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: term,
          location: 'san jose'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setMess('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, mess];
};
