"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

export default function ApplyPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    contactNo: "",
    email: "",
    position: "",
    experience: "",
    currentLocation: "",
    currentCtc: "",
    expectedCtc: "",
    noticePeriod: "",
    resumeLink: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Check if all fields are filled
    const requiredFields = ['fullName', 'contactNo', 'email', 'position', 'experience', 'currentLocation', 'currentCtc', 'expectedCtc', 'noticePeriod', 'resumeLink']
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData])
    if (missingFields.length > 0) {
      toast({
        title: "Validation Error",
        description: `Please fill in all required fields: ${missingFields.join(', ')}`,
        variant: "destructive",
      })
      return
    }

    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_WEB_APP_URL
    if (!scriptUrl) {
      toast({
        title: "Configuration Error",
        description: "Google Apps Script URL is not configured.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    try {
      // ✅ Use no-cors to bypass Google Apps Script CORS limitation
      await fetch(scriptUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      toast({
        title: "Success",
        description: "Form submitted successfully!",
        variant: "success",
      })
      setFormData({
        fullName: "",
        contactNo: "",
        email: "",
        position: "",
        experience: "",
        currentLocation: "",
        currentCtc: "",
        expectedCtc: "",
        noticePeriod: "",
        resumeLink: "",
      })
    } catch (error) {
      toast({
        title: "Submission Error",
        description: `Error submitting form: ${(error as Error).message}`,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="rounded-2xl border bg-white p-8 md:p-12">
          <h1 className="text-4xl font-bold text-center mb-8">Apply Form</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <Input
                id="fullName"
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                required
              />
            </div>

            {/* Contact No */}
            <div>
              <label htmlFor="contactNo" className="block text-sm font-medium mb-2">
                Contact No.
              </label>
              <Input
                id="contactNo"
                type="tel"
                value={formData.contactNo}
                onChange={(e) => handleInputChange("contactNo", e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email ID
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>

            {/* Position */}
            <div>
              <label htmlFor="position" className="block text-sm font-medium mb-2">
                Position Applying For
              </label>
              <Input
                id="position"
                type="text"
                value={formData.position}
                onChange={(e) => handleInputChange("position", e.target.value)}
                required
              />
            </div>

            {/* Experience */}
            <div>
              <label htmlFor="experience" className="block text-sm font-medium mb-2">
                Year of Experience
              </label>
              <Select
                value={formData.experience}
                onValueChange={(value) => handleInputChange("experience", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">0–1</SelectItem>
                  <SelectItem value="1-3">1–3</SelectItem>
                  <SelectItem value="3-5">3–5</SelectItem>
                  <SelectItem value="5-10">5–10</SelectItem>
                  <SelectItem value="10+">10+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Current Location */}
            <div>
              <label htmlFor="currentLocation" className="block text-sm font-medium mb-2">
                Current Location
              </label>
              <Input
                id="currentLocation"
                type="text"
                value={formData.currentLocation}
                onChange={(e) => handleInputChange("currentLocation", e.target.value)}
                required
              />
            </div>

            {/* Current CTC */}
            <div>
              <label htmlFor="currentCtc" className="block text-sm font-medium mb-2">
                Current CTC
              </label>
              <Input
                id="currentCtc"
                type="text"
                value={formData.currentCtc}
                onChange={(e) => handleInputChange("currentCtc", e.target.value)}
                required
              />
            </div>

            {/* Expected CTC */}
            <div>
              <label htmlFor="expectedCtc" className="block text-sm font-medium mb-2">
                Expected CTC
              </label>
              <Input
                id="expectedCtc"
                type="text"
                value={formData.expectedCtc}
                onChange={(e) => handleInputChange("expectedCtc", e.target.value)}
                required
              />
            </div>

            {/* Notice Period */}
            <div>
              <label htmlFor="noticePeriod" className="block text-sm font-medium mb-2">
                Notice Period
              </label>
              <Select
                value={formData.noticePeriod}
                onValueChange={(value) => handleInputChange("noticePeriod", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select notice period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediately">Immediately</SelectItem>
                  <SelectItem value="15-days">15 days</SelectItem>
                  <SelectItem value="30-days">30 days</SelectItem>
                  <SelectItem value="45-days">45+ days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Resume Link */}
            <div>
              <label htmlFor="resumeLink" className="block text-sm font-medium mb-2">
                Resume Link (Google Drive - Publicly Accessible)
              </label>
              <Input
                id="resumeLink"
                type="url"
                value={formData.resumeLink || ""}
                onChange={(e) => handleInputChange("resumeLink", e.target.value)}
                placeholder="https://drive.google.com/..."
                required
              />
            </div>

            <div className="flex justify-center">
              <Button type="submit" className="w-50" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
