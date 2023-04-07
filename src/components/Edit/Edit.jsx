import { useCallback, useEffect, useState } from 'react';
import { useBeersStore } from '../../store';
import { useNavigate, useParams } from 'react-router-dom';
import BeerForm from '../BeerForm';

const Edit = () => {
  let { id } = useParams();
  const [defaultValues, setDefaultValues] = useState();

  const getBeer = useBeersStore((state) => state.getBeer);
  const updateBeer = useBeersStore((state) => state.updateBeer);
  const navigate = useNavigate();

  useEffect(() => {
    const beer = getBeer(id);

    if (beer) {
      setDefaultValues(beer);
    }
  }, [id]);

  const onSubmit = useCallback(
    (data) => {
      updateBeer(id, data);
      navigate('/');
    },
    [updateBeer, id]
  );

  return <>{defaultValues && <BeerForm onSubmit={onSubmit} defaultValues={defaultValues} />}</>;
};

export default Edit;
