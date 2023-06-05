import { useForm } from 'react-hook-form'

function App() {

  let {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    reset()
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Name:
            <input {...register('firstname', {
              required: 'Required field!!!',
              maxLength: {
                value: 5,
                message: 'Length of name > 5!'
              }
            })} />
          </label>
        </div>

        {errors.firstname && <p>{errors.firstname.message}</p>}

        <div>
          <label>
            Surname:
            <input {...register('lastname', {
              required: 'Required field',
              minLength: {
                value: 3,
                message: 'Length < 3!'
              }
            })} />
          </label>

          {errors.lastname && <p>{errors.lastname.message}</p>}

        </div>
        <div>
          <input type='submit' />
        </div>
      </form>
    </div>
  );
}

export default App;
