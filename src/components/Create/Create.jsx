import { useForm } from 'react-hook-form';
import { Group } from './Create.styled';
import Button from '../ui/Button';

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Group>
        <label for="id">Name</label>
        <input defaultValue="test" id="name" {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}
      </Group>

      <Group>
        <label for="id">Name</label>
        <input defaultValue="test" id="name" {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}
      </Group>

      <Button type="submit">Create</Button>
    </form>
  );
};

export default Create;
