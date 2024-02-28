import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../components/ui/drawer';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

function ShadCnTest() {
  return (
    <div className='m-2 flex flex-col items-center justify-center rounded-md bg-base p-6'>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Peek a Boo! you're now gay</AccordionContent>
        </AccordionItem>
      </Accordion>

      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant='outline'>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <img src='https://media1.tenor.com/m/BAzma6OlbvAAAAAd/dancing-toothless-tothless.gif'></img>
          </CarouselItem>
          <CarouselItem>
            <img
              className='w-1-2'
              src='https://media1.tenor.com/m/1J9-qnKbPBkAAAAC/%E0%B8%9E%E0%B8%B5%E0%B9%88%E0%B9%82%E0%B8%95.gif'
            ></img>
          </CarouselItem>
          <CarouselItem>
            <img src='https://media.tenor.com/itjFesV8_RUAAAAi/soulja-boy-pepe.gif'></img>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default ShadCnTest;
