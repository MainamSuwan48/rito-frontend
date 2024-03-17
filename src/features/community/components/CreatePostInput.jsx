export default function CreatePostInput(
  name,
  errors,
  type = 'text',
  isTextarea = false,
  placeholder
) {
  const inputClass =
    'py-2 px-4 col-span-3 border text-sm focus:border-base_dark focus:outline-none';
  return (
    <>
      {isTextarea ? (
        <div className='flex flex-col gap-2'>
          <textarea
            name='content'
            className={`${inputClass} focus:border-blue-500 focus:outline-none`}
            rows={3} // Adjust the number of rows as needed
          />
          {errors[name] && (
            <div className='mt-2 text-wrap text-sm font-semibold text-danger'>
              {errors[name].message}
            </div>
          )}
        </div>
      ) : (
        <div className='flex flex-col gap-2'>
          <input type={type} name={name} className={inputClass} />
          {errors[name] && (
            <div className='mt-2 text-wrap text-sm font-semibold text-danger'>
              {errors[name].message}
            </div>
          )}
        </div>
      )}
    </>
  );
}
