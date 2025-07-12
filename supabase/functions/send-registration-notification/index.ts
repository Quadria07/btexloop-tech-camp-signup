
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface RegistrationData {
  full_name: string;
  age: number;
  gender: string;
  school_name: string;
  current_class: string;
  course_choice: string;
  parent_name: string;
  phone_number: string;
  email_address: string;
  home_address: string;
  prior_tech_experience: boolean;
  prior_tech_details?: string;
  referral_source: string;
  created_at: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { registrationData }: { registrationData: RegistrationData } = await req.json();

    // For now, we'll just log the registration data
    // In a real implementation, you would integrate with an email service like Resend
    console.log("New Registration:", registrationData);

    // Simulate email sending
    const adminEmails = ["quadriadebisi3@gmail.com", "btexloopacademy@gmail.com"];
    
    // Admin notification email content
    const adminEmailContent = `
      New Btexloop Summer Tech Bootcamp 2025 Registration
      
      Child Information:
      - Name: ${registrationData.full_name}
      - Age: ${registrationData.age}
      - Gender: ${registrationData.gender}
      - School: ${registrationData.school_name}
      - Current Class: ${registrationData.current_class}
      - Course Choice: ${registrationData.course_choice}
      
      Parent Information:
      - Parent Name: ${registrationData.parent_name}
      - Phone: ${registrationData.phone_number}
      - Email: ${registrationData.email_address}
      - Address: ${registrationData.home_address}
      
      Other Details:
      - Prior Tech Experience: ${registrationData.prior_tech_experience ? 'Yes' : 'No'}
      ${registrationData.prior_tech_details ? `- Experience Details: ${registrationData.prior_tech_details}` : ''}
      - How they heard about us: ${registrationData.referral_source}
      - Registration Time: ${new Date(registrationData.created_at).toLocaleString()}
    `;

    // Parent confirmation email content
    const parentEmailContent = `
      Thank you for registering ${registrationData.full_name} for the Btexloop Summer Tech Bootcamp 2025!
      
      Registration Summary:
      - Child: ${registrationData.full_name} (Age ${registrationData.age})
      - Course: ${registrationData.course_choice}
      - Start Date: July 28th, 2025
      - Time: 10:00 AM – 12:00 PM
      - Location: City Hall, Olonkoro, Osogbo, Osun State
      
      Next Steps:
      Our team will contact you within 24 hours at ${registrationData.phone_number} to complete payment and onboarding.
      
      Contact us:
      Phone/WhatsApp: +234 813 122 6618, +234 903 218 8542
      Email: info@btexloopacademy.com.ng
      
      CATCH THEM YOUNG, EMPOWER THEM ALWAYS
      - Btexloop Academy Team
    `;

    console.log("Admin Email Content:", adminEmailContent);
    console.log("Parent Email Content:", parentEmailContent);
    console.log("Admin Emails:", adminEmails);
    console.log("Parent Email:", registrationData.email_address);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Registration notification sent successfully",
        adminEmails,
        parentEmail: registrationData.email_address
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-registration-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
