"use server"

export async function submitContactForm(formData: FormData) {
  // Simulate processing time
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Basic validation
  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "All fields are required.",
    }
  }

  if (!email.includes("@")) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  // In a real application, you would send the email here
  // For now, we'll just simulate success
  console.log("Contact form submission:", { name, email, subject, message })

  return {
    success: true,
    message: `Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`,
  }
}
