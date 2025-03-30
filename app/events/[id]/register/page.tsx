import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EventRegistrationPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Event Registration</CardTitle>
          <CardDescription>Please fill out the form to register for the event.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email address" type="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="university">University</Label>
                <Select>
                  <SelectTrigger id="university">
                    <SelectValue placeholder="Select your university" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="cairo">Cairo University</SelectItem>
                    <SelectItem value="alexandria">Alexandria University</SelectItem>
                    <SelectItem value="ainshams">Ain Shams University</SelectItem>
                    <SelectItem value="mansoura">Mansoura University</SelectItem>
                    <SelectItem value="assiut">Assiut University</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="major">Major</Label>
                <Input id="major" placeholder="Enter your major" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Register</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

