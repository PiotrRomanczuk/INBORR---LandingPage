import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

interface ReserveDialogProps {
  className: string;
  bookingLink: URL;
  airbnbLink: URL;
  bookableLink: URL;
}


export function ReserveDialog({ className, bookingLink, airbnbLink, bookableLink }: ReserveDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className={`${className} `}
        >
          Zarezerwuj
        </Button>
      </DialogTrigger>
      <DialogContent className="p-x-2 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Zarezerwuj na:</DialogTitle>
        </DialogHeader>

        <Button>
          <Link href="https://rezerwacje.inborr.pl">Bookable</Link>
        </Button>


          <DialogDescription>
            Mozesz nas zarezerwowac na stronach:

          </DialogDescription>
        <div className="flex flex-row justify-between gap-4 py-2">

          <Link href={airbnbLink.toString()} className="relative block w-fit text-lg font-semibold leading-6 text-gray-900 
                  after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0
                   after:bg-blue-300 after:transition after:duration-300 after:content-[''] after:hover:scale-x-100">AIRBNB</Link>
          <Link href={bookingLink.toString()} className="relative block w-fit text-lg font-semibold leading-6 text-gray-900 
                  after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0
                   after:bg-blue-300 after:transition after:duration-300 after:content-[''] after:hover:scale-x-100">BOOKING</Link>
        </div>

    
      </DialogContent>
    </Dialog>
  );
}
