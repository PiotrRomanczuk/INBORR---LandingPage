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
          className={`${className} bg-white text-black py-6 hover:bg-black hover:text-white transition-colors duration-300 border border-black rounded-sm px-6 font-medium`}
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

          <div className="flex items-center gap-4">AIRBNB</div>
          <div className="flex items-center gap-4">BOOKING</div>
        </div>

    
      </DialogContent>
    </Dialog>
  );
}
