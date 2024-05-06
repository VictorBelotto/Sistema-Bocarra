import React from 'react'

const BotaoMenu = ({onClick, label, icon}) => {
  return (
    <>
      <button
        className='flex gap-2 w-full py-2 px-4 text-base text-slate-300 text-left  hover:bg-purple-700 rounded-2xl '
        onClick={onClick}
      >
        {icon}{label}

      </button>
    </>
  )
}

export default BotaoMenu