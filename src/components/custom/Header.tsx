import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="border-b py-4 flex justify-end">
          <Button variant="ghost" className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/images/author.jpg" alt="User" />
              <AvatarFallback />
            </Avatar>
            <span>Javohir G.</span>
          </Button>
    </header>
  )
}