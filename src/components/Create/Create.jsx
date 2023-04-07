import { useCallback } from 'react';
import { useBeersStore } from '../../store';
import { useNavigate } from 'react-router-dom';
import BeerForm from '../BeerForm';

const Create = () => {
  const addBeer = useBeersStore((state) => state.addBeer);
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (data) => {
      addBeer(data);
      navigate('/');
    },
    [addBeer]
  );

  return <BeerForm onSubmit={onSubmit} />;
};

export default Create;
