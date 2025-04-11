import { ScrollArea } from "@/components/ui/scroll-area"
import { widgetTypes } from "@/constants/constants"
import { useState, useEffect } from "react"

interface SidebarProps {
    onAddItem: (type: keyof typeof widgetTypes) => void
    onDragStart: (e: DragEvent, type: keyof typeof widgetTypes) => void
}

export function Sidebar({ onAddItem, onDragStart }: SidebarProps) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768) // Adjust breakpoint as needed
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    if (isMobile) {
        return (
            <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t flex justify-around p-2 z-50">
                {Object.entries(widgetTypes).map(([type, { icon: Icon }]) => (
                    <button
                        key={type}
                        className="flex flex-col items-center text-white"
                        onClick={() => onAddItem(type as keyof typeof widgetTypes)}
                    >
                        <Icon className="w-6 h-6" />
                    </button>
                ))}
            </div>
        )
    }

    return (
        <div className="w-64 border-r">
            <ScrollArea className="h-full">
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-4">Unical.dnd</h3>
                    {Object.entries(widgetTypes).map(([type, { icon: Icon, label }]) => (
                        <div
                            key={type}
                            className="flex items-center p-2 mb-2 rounded-lg cursor-move hover:bg-gray-900"
                            draggable
                            onDragStart={(e) => onDragStart(e, type as keyof typeof widgetTypes)}
                            onClick={() => onAddItem(type as keyof typeof widgetTypes)}
                        >
                            <Icon className="w-5 h-5 mr-2" />
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}