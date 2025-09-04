"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function ValidatePage() {
  const [id, setId] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (id.trim()) {
      router.push(`/validate/${id}`)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-[400px] shadow-xl">
        <CardHeader>
          <CardTitle className="text-center">Certificate Validation</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter Certificate ID"
            />
            <Button type="submit" className="w-full">
              Validate
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
