import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import GamePageDetail from './GamePageDetail';

function GamePageDetailAccordion({gameData}) {
  return (
    <Accordion className='bg-primary' type='single' collapsible>
      <AccordionItem className='border-b border-none bg-base_dark' value='item'>
        <AccordionTrigger className='border-b border-none bg-primary text-base-100 font-black text-3xl pl-12'>
          More Info
        </AccordionTrigger>
        <AccordionContent className='border-primary bg-base_dark'>
          <GamePageDetail />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default GamePageDetailAccordion;
