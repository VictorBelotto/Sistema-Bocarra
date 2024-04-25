import React from 'react'

const BotaoMenu = ({onClick, label, icon}) => {
  return (
    <>
      <button
        className='flex gap-2 w-4/5 py-2 px-4 text-lg text-slate-300 text-left bg-purple-700 bg-opacity-0 hover:bg-purple-800 rounded-2xl '
        onClick={onClick}
      >
        {icon}{label}

      </button>
    </>
  )
}

export default BotaoMenu