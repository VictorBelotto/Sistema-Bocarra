import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
  ListItemPrefix,
} from "@material-tailwind/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import BotaoMenu from "../Botoes/BotaoMenu";
import BotaoPaginas from "../Botoes/BotaoPaginas.jsx";
import { Calculator, Layers, ClipboardPenLine } from 'lucide-react';
import { useViewAtivaStore } from "../../context/ViewAtivaStore.js";

export function SideBar() {
  const [open, setOpen] = React.useState(0);
  const [viewAtivaStore, setViewAtivaStore] = useViewAtivaStore(state => [state.viewAtiva, state.setViewAtiva])

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-full w-full max-w-[20rem] p-0 bg-slate-900 text-slate-100">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Bocarra System
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
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-2  hover:bg-card-escuro  rounded-2xl gap-2">
              <ListItemPrefix>
                <Layers className="w-5 h-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal text-lg">
                Orçamentos
              </Typography>
            </AccordionHeader>
          </ListItem>

          <AccordionBody className="py-1 overflow-hidden">
            <List className="p-0 flex flex-col gap-2">

              <ListItem className={`p-0 w-full rounded-2xl ${viewAtivaStore === 'calculadoraLona' ? 'bg-purple-700' : ''}`}>
                <BotaoMenu
                  icon={<ChevronRightIcon strokeWidth={3} className="h-3 w-5 self-center" />}
                  label={'Lonas'}
                  onClick={() => setViewAtivaStore('calculadoraLona') }
                />
              </ListItem>

              <ListItem className={`p-0 w-full rounded-2xl ${viewAtivaStore === 'calculadoraEstrutura' ? 'bg-purple-700' : ''}`}>

                <BotaoMenu
                  icon={<ChevronRightIcon strokeWidth={3} className="h-3 w-5 self-center" />}
                  label={'Estruturas'}
                  onClick={() => setViewAtivaStore('calculadoraEstrutura')}
                />
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-2 hover:bg-card-escuro rounded-2xl gap-2">
              <ListItemPrefix>
                <Calculator className="w-5 h-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal text-lg">
                Calculadoras
              </Typography>
            </AccordionHeader>
          </ListItem>

          <AccordionBody className="py-1 overflow-hidden">
            <List className="p-0 flex flex-col gap-2">
              <ListItem className={`p-0 w-full rounded-2xl ${viewAtivaStore === 'calculadoraCupula' ? 'bg-purple-700' : ''}`}>
                <BotaoMenu
                  label={'Cúpula'}
                  icon={<ChevronRightIcon strokeWidth={3} className="h-3 w-5 self-center" />}
                  onClick={() => setViewAtivaStore('calculadoraCupula')}
                />
              </ListItem>
              <ListItem className={`p-0 w-full rounded-2xl ${viewAtivaStore === 'calculadoraTorre' ? 'bg-purple-700' : ''}`}>
                <BotaoMenu
                  label={'Torre'}
                  icon={<ChevronRightIcon strokeWidth={3} className="h-3 w-5 self-center" />}
                  onClick={() => setViewAtivaStore('calculadoraTorre')}
                />
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-fundo-verde" />

        <Accordion
          open={open === 3}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-2 hover:bg-card-escuro rounded-2xl gap-2">
              <ListItemPrefix>
                <ClipboardPenLine className="w-5 h-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal text-lg">
                Planilhas
              </Typography>
            </AccordionHeader>
          </ListItem>

          <AccordionBody className="py-1 overflow-hidden">
            <List className="p-0 flex flex-col gap-2">
              <ListItem className={`p-0 w-full rounded-2xl ${viewAtivaStore === 'calculadoraCupula' ? 'bg-purple-700' : ''}`}>
                <BotaoPaginas
                  label={'Orçamento'}
                  to={'/impressao'}
                  icon={<ChevronRightIcon strokeWidth={3} className="h-3 w-5 self-center" />}
                />
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>


      </List>
    </Card>
  );
}