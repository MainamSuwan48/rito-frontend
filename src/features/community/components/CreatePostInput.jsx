export default function CreatePostInput({
  name,
  errors,
  register,
  type = 'text',
  isTextarea = false,
  placeholder,
}) {
  const inputClass =
    'py-2 px-4 col-span-3 border text-sm focus:border-base_dark focus:outline-none w-full';
  return (
    <div>
      {isTextarea ? (
        <div className='flex flex-col'>
          <textarea
            name={name}
            {...register(name)}
            placeholder={placeholder}
            className={`${inputClass} focus:border-base_dark focus:outline-none`}
            rows={3} // Adjust the number of rows as needed
          />
          {errors[name] && (
            <div className='text-wrap text-sm font-semibold text-danger'>
              {errors[name].message}
            </div>
          )}
        </div>
      ) : (
        <div className='flex flex-col gap-1'>
          <input
            {...register(name)}
            type={type}
            name={name}
            className={inputClass}
            placeholder={placeholder}
          />
          {errors[name] && (
            <div className=' text-wrap text-sm font-semibold text-danger'>
              {errors[name].message}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
