"use server"

export async function submitConsultation(formData: FormData): Promise<{ success: boolean }> {
  const data = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    service: formData.get("service") as string,
    message: formData.get("message") as string,
    preferredDate: formData.get("preferredDate") as string,
  }

  // TODO: Wire to Resend API for production
  // For now, log and return success
  console.log("Consultation request:", data)

  // Simulate sending (replace with actual Resend call)
  return { success: true }
}
