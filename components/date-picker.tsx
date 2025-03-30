"use client"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function DatePicker({
  date,
  setDate,
}: {
  date?: Date
  setDate?: (date?: Date) => void
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <div className="p-4 flex flex-col space-y-2">
          {/* Simple date selection UI */}
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 31 }, (_, i) => {
              const day = i + 1
              const currentDate = new Date()
              currentDate.setDate(day)
              return (
                <Button
                  key={day}
                  variant="outline"
                  size="sm"
                  className="h-8 w-8"
                  onClick={() => {
                    if (setDate) {
                      const newDate = new Date()
                      newDate.setDate(day)
                      setDate(newDate)
                    }
                  }}
                >
                  {day}
                </Button>
              )
            })}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

