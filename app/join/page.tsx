import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function JoinPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Join MLSA Egypt Clubs</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Ready to become part of the MLSA Egypt community? Fill out the form below to get started on your journey with
        us.
      </p>
      <form className="space-y-6 max-w-md">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Enter your full name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email address" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="university">University</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your university" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cairo">Cairo University</SelectItem>
              <SelectItem value="alexandria">Alexandria University</SelectItem>
              <SelectItem value="ainshams">Ain Shams University</SelectItem>
              <SelectItem value="mansoura">Mansoura University</SelectItem>
              <SelectItem value="assiut">Assiut University</SelectItem>
              <SelectItem value="zagazig">Zagazig University</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="interests">Areas of Interest</Label>
          <Input id="interests" placeholder="e.g., AI, Web Development, Cloud Computing" />
        </div>
        <Button type="submit">Submit Application</Button>
      </form>
    </div>
  )
}

