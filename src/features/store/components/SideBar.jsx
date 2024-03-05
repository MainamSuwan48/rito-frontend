import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function SideBar() {
  return (
    <div className='h-screen w-64 bg-base-300'>
      <Accordion type='single' className='w-full' collapsible>
        <AccordionItem value='item-1'>
          <AccordionTrigger className='h-[3rem] w-full bg-primary pl-4 text-neutral'>
            Genres
          </AccordionTrigger>
          <AccordionContent className='m-0 w-full p-0'>
            <div className='flex h-[3rem] w-full items-center justify-center pl-4 font-semibold  text-black'>
              <p>ALL</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
