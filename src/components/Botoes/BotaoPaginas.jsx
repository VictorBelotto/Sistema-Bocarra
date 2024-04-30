import React from 'react';
import { Link } from 'react-router-dom';

const BotaoPaginas = ({ to, label, icon }) => {
  return (
    <Link to={to} className='flex gap-2 w-4/5 mt-2 text-left text-white py-2 px-4 bg-purple-700 bg-opacity-0 hover:bg-purple-800 rounded-2xl'>
      {icon}{label}
    </Link>
  );
};

export default BotaoPaginas;
