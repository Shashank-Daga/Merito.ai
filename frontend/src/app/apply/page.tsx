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

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNo: "",
    email: "",
    position: "",
    experience: "",
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

    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_APPS_SCRIPT_URL || process.env.GOOGLE_APPS_SCRIPT_WEB_APP_URL
    if (!scriptUrl) {
      alert('Google Apps Script URL is not configured. Please check your environment variables.')
      return
    }

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      if (result.success) {
        alert('Form submitted successfully!')
        setFormData({
          fullName: "",
          contactNo: "",
          email: "",
          position: "",
          experience: "",
          currentCtc: "",
          expectedCtc: "",
          noticePeriod: "",
          resumeLink: "",
        })
      } else {
        alert('Submission failed: ' + result.error)
      }
    } catch (error) {
      alert('Error submitting form: ' + (error as Error).message)
    }
  }

  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="rounded-2xl border bg-card p-8 md:p-12">
        <h1 className="text-4xl font-bold text-center mb-8">Apply Form</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
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

        <div>
          <label htmlFor="experience" className="block text-sm font-medium mb-2">
            Year of Experience
          </label>
          <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
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

        <div>
          <label htmlFor="noticePeriod" className="block text-sm font-medium mb-2">
            Notice Period
          </label>
          <Select value={formData.noticePeriod} onValueChange={(value) => handleInputChange("noticePeriod", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select notice period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="immediately">Immediately</SelectItem>
              <SelectItem value="15-days">15 days</SelectItem>
              <SelectItem value="30-days">30 days</SelectItem>
              <SelectItem value="45-days">`&gt;`45 days</SelectItem>
            </SelectContent>
          </Select>
        </div>

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

        <Button type="submit" className="w-full">
          Submit
        </Button>
        </form>
        </div>
      </div>
    </section>
  )
}
