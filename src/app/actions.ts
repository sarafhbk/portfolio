"use server";

export interface ContactFormState {
  success: boolean;
  error: string;
}

export async function sendContact(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Validate fields
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return { success: false, error: "All fields are required." };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  // In production, integrate with an email service like Resend, SendGrid, etc.
  // For now, we simulate a successful submission
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Log the contact submission (replace with actual email service in production)
    console.log("Contact form submission:", {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    return { success: true, error: "" };
  } catch {
    return {
      success: false,
      error: "Something went wrong. Please try again or email me directly.",
    };
  }
}
