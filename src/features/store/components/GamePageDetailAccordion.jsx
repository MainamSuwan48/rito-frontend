import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import GamePageDetail from './GamePageDetail';

function GamePageDetailAccordion({ gameData }) {
  return (
    <Accordion className='bg-primary' type='single' collapsible>
      <AccordionItem className='border-b border-none bg-base_dark' value='item'>
        <AccordionTrigger className='border-b border-none bg-primary pl-12 text-3xl font-black text-base-100'>
          More Info
        </AccordionTrigger>
        <AccordionContent className='border-primary bg-base_dark'>
          <GamePageDetail gameData={gameData} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default GamePageDetailAccordion;
