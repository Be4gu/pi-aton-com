import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"

interface ImagePreviewProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  alt: string
}

export function ImagePreview({ isOpen, onClose, imageUrl, alt }: ImagePreviewProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-full p-0 dark:bg-gray-800">
        <div className="relative aspect-video w-full">
          <Image
            src={imageUrl}
            alt={alt}
            fill
            className="object-contain"
            quality={100}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

