import { useForm } from 'react-hook-form';
import Button from '../ui/Button';
import FormGroup from '../ui/FormGroup';
import FormError from '../ui/FormError';

const BeerForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <label htmlFor="name">Name</label>
        <input id="name" {...register('name', { required: true })} />
        {errors.name && <FormError>Incorrect value</FormError>}
      </FormGroup>

      <FormGroup>
        <label htmlFor="description">Short description</label>
        <input id="description" {...register('description', { required: true })} />
        {errors.description && <FormError>Incorrect value</FormError>}
      </FormGroup>

      <FormGroup>
        <label htmlFor="contributedBy">Contributed by</label>
        <input id="contributedBy" {...register('contributedBy', { required: true })} />
        {errors.contributedBy && <FormError>Incorrect value</FormError>}
      </FormGroup>

      <FormGroup>
        <label htmlFor="ibu">IBU</label>
        <input id="ibu" type="number" {...register('ibu', { required: true, min: 1, max: 100 })} />
        {errors.ibu && <FormError>Incorrect value</FormError>}
      </FormGroup>

      <Button type="submit">Create</Button>
    </form>
  );
};

export default BeerForm;
