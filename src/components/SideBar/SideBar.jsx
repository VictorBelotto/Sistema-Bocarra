import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import BotaoMenu from "../Botoes/BotaoMenu";
import { Cone, Landmark, Pyramid } from "lucide-react";
import {ViewAtivaContext} from '../../context/ViewAtiva.jsx'
 
export function SideBar() {
  const [open, setOpen] = React.useState(0);
  const {viewAtiva, setViewAtiva} = React.useContext(ViewAtivaContext)
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Card className="h-full w-full max-w-[20rem] p-0 bg-slate-900 text-slate-100">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-2 px-3 hover:bg-card-escuro  rounded-2xl">
              <Typography color="blue-gray" className="mr-auto font-normal text-lg">
                Orçamentos
              </Typography>
            </AccordionHeader>
          </ListItem>
          
          <AccordionBody className="py-1 overflow-hidden">
            <List className="p-0 flex flex-col gap-2">

              <ListItem className={`p-0 w-full rounded-2xl ${viewAtiva === 'calculadoraLona'? 'bg-purple-700': ''}`}>
                <BotaoMenu 
                  label={'Lonas'} 
                  icon={<Cone/>}
                  onClick={()=> setViewAtiva('calculadoraLona')}
                />
              </ListItem>

              <ListItem className={`p-0 w-full rounded-2xl ${viewAtiva === 'calculadoraEstrutura'? 'bg-purple-700': ''}`}>
                <BotaoMenu 
                  label={'Estruturas'} 
                  icon={<Landmark/>}
                  onClick={()=> setViewAtiva('calculadoraEstrutura')}
                />
              </ListItem>
            </List>
          </AccordionBody>   
        </Accordion>

        <hr className="my-2 border-fundo-verde" />
        
        <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
              />
            }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-2 hover:bg-card-escuro rounded-2xl">
              <Typography color="blue-gray" className="mr-auto font-normal text-lg">
                Calculadoras
              </Typography>
            </AccordionHeader>
          </ListItem>

          <AccordionBody className="py-1 overflow-hidden"> 
            <List className="p-0 flex flex-col gap-2">
              <ListItem className={`p-0 w-full rounded-2xl ${viewAtiva === 'calculadoraCupula'? 'bg-purple-700': ''}`}>
                <BotaoMenu 
                  label={'Cúpula'} 
                  icon={<Pyramid/>}
                  onClick={()=> setViewAtiva('calculadoraCupula')}
                />
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-fundo-verde" />
       
      </List>
    </Card>
  );
}