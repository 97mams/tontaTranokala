import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Trash2 } from "lucide-react"

export function ModalConfirm({title, description, isConfirm}: {title: string, description: string, isConfirm: () => void}) {
  return (
    <Dialog>
        <DialogTrigger render={<Button variant="outline"><Trash2 /></Button>} />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {description}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Annuler</Button>} />
            <Button variant="destructive" onClick={isConfirm}>
              Confirmer
            </Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
