function FormInput({ register, name, errors, label, type = 'text' }) {
  return (
    <div className='relative w-full'>
      <div className='mb-2 font-semibold text-base_dark'>{label}</div>
      <input
        type={type}
        {...register(name)}
        className='input-bordered w-full border-2 p-1.5 text-black'
      />
      {errors[name] && (
        <div className='mt-1 text-wrap text-[12px] font-semibold text-danger'>
          {errors[name].message}
        </div>
      )}
    </div>
  );
}

export default FormInput;
