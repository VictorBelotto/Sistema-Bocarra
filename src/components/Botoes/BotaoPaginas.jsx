import React from 'react';
import { Link } from 'react-router-dom';

const BotaoPaginas = ({ to, label, icon }) => {
  return (
    <Link to={to} className='flex gap-2 w-full py-2 px-4 text-base text-slate-300 text-left  hover:bg-purple-700 rounded-2xl'>
      {icon}{label}
    </Link>
  );
};

export default BotaoPaginas;
