import React from 'react'

const BotaoMenu = ({onClick, label, id, icon}) => {
  return (
    <>
      <button
        className='m-0 w-4/5 py-2 px-4  text-left bg-purple-700 bg-opacity-0 hover:bg-purple-800 rounded-2xl '
        onClick={onClick}
      >
        {label}
      </button>
    </>
  )
}

export default BotaoMenu