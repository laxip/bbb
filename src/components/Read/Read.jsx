import { useBeersStore } from '../../store';

const Read = () => {
  const beers = useBeersStore((state) => state.beers);

  console.log(beers);

  return <div>read</div>;
};

export default Read;
