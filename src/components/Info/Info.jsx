import React from 'react'
import { Info as IconInfo } from 'lucide-react';
import { Tooltip, Typography } from '@material-tailwind/react';

const Info = ({titulo,descricao, children}) => {
  return (
    <Tooltip
      className='py-2 px-4 bg-card-contraste cursor-pointer'
      content={
        <div className="w-fit ">
          <Typography color="white" className="font-medium">
            {titulo}
          </Typography>
          <Typography
            variant="small"
            color="white"
            className="font-normal opacity-80"
          >
            {descricao}
          </Typography>
        </div>
      }
    >
      {children}
    </Tooltip>
  )
}

export default Info