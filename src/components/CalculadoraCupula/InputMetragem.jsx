import React from 'react'

const InputMetragem = ({value, label, id}) => {
  return (
    <div className='flex w-full justify-between'>
      <label htmlFor={id}>{label}</label>
      <input type="text"
        className='focus:outline-purple-700 outline-none py-1 w-16 text-slate-100 text-center  bg-card-contraste border-none rounded-md'
        value={value}
        id={id}
      />
    </div>
  )
}

export default InputMetragem