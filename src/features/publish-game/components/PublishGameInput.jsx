import React from 'react';

function PublishGameInput({
  register,
  name,
  errors,
  type = 'text',
  placeholder,
}) {
  return (
    <div className='relative w-8/12'>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className='input-bordered w-full rounded-md border-2 px-3 py-1.5 text-black'
        autoComplete='off'
      />
      {errors[name] && (
        <div className='mt-2 text-wrap text-sm font-semibold text-danger'>
          {errors[name].message}
        </div>
      )}
    </div>
  );
}

export default PublishGameInput;
