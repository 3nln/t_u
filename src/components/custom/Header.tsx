import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Bell, Search } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b py-4 flex justify-between items-center px-4 sticky top-0 w-full right-0 z-50 bg-black/30 backdrop-blur-md mb-5">
      <h1>Unical.dnd</h1>
      {/* Search Bar */}
      <div className="items-center gap-2 hidden md:flex">
        <Search className="w-5 h-5 text-gray-500" />
        <Input
          type="text"
          placeholder="Search..."
          className="border rounded-md px-2 py-1"
        />
      </div>

      {/* Notification and User Section */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <button className="relative">
          <Bell className="w-6 h-6 text-gray-600" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        {/* User Avatar */}
        <Button variant="ghost" className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/images/author.jpg" alt="User" />
            <AvatarFallback />
          </Avatar>
          <span>Javohir G.</span>
        </Button>
      </div>
    </header>
  )
}