
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

    console.log("Processing registration for:", registrationData.full_name);

    const adminEmails = ["quadriadebisi3@gmail.com", "btexloopacademy@gmail.com"];
    
    // Admin notification email content
    const adminEmailContent = `
      <h2>New Btexloop Summer Tech Bootcamp 2025 Registration</h2>
      
      <h3>Child Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${registrationData.full_name}</li>
        <li><strong>Age:</strong> ${registrationData.age}</li>
        <li><strong>Gender:</strong> ${registrationData.gender}</li>
        <li><strong>School:</strong> ${registrationData.school_name}</li>
        <li><strong>Current Class:</strong> ${registrationData.current_class}</li>
        <li><strong>Course Choice:</strong> ${registrationData.course_choice}</li>
      </ul>
      
      <h3>Parent Information:</h3>
      <ul>
        <li><strong>Parent Name:</strong> ${registrationData.parent_name}</li>
        <li><strong>Phone:</strong> ${registrationData.phone_number}</li>
        <li><strong>Email:</strong> ${registrationData.email_address}</li>
        <li><strong>Address:</strong> ${registrationData.home_address}</li>
      </ul>
      
      <h3>Other Details:</h3>
      <ul>
        <li><strong>Prior Tech Experience:</strong> ${registrationData.prior_tech_experience ? 'Yes' : 'No'}</li>
        ${registrationData.prior_tech_details ? `<li><strong>Experience Details:</strong> ${registrationData.prior_tech_details}</li>` : ''}
        <li><strong>How they heard about us:</strong> ${registrationData.referral_source}</li>
        <li><strong>Registration Time:</strong> ${new Date(registrationData.created_at).toLocaleString()}</li>
      </ul>
    `;

    // Parent confirmation email content
    const parentEmailContent = `
      <h2>Thank you for registering ${registrationData.full_name} for the Btexloop Summer Tech Bootcamp 2025!</h2>
      
      <h3>Registration Summary:</h3>
      <ul>
        <li><strong>Child:</strong> ${registrationData.full_name} (Age ${registrationData.age})</li>
        <li><strong>Course:</strong> ${registrationData.course_choice}</li>
        <li><strong>Start Date:</strong> July 28th, 2025</li>
        <li><strong>Time:</strong> 10:00 AM – 12:00 PM</li>
        <li><strong>Location:</strong> City Hall, Olonkoro, Osogbo, Osun State</li>
      </ul>
      
      <h3>Next Steps:</h3>
      <p>Our team will contact you within 24 hours at ${registrationData.phone_number} to complete payment and onboarding.</p>
      
      <h3>Contact us:</h3>
      <ul>
        <li><strong>Phone/WhatsApp:</strong> +234 813 122 6618, +234 903 218 8542</li>
        <li><strong>Email:</strong> info@btexloopacademy.com.ng</li>
      </ul>
      
      <p><strong>CATCH THEM YOUNG, EMPOWER THEM ALWAYS</strong><br>
      - Btexloop Academy Team</p>
    `;

    // Send admin notification emails
    const adminEmailPromises = adminEmails.map(async (adminEmail) => {
      try {
        const emailResponse = await resend.emails.send({
          from: "Btexloop Academy <onboarding@resend.dev>",
          to: [adminEmail],
          subject: `New Registration: ${registrationData.full_name} - ${registrationData.course_choice}`,
          html: adminEmailContent,
        });
        console.log(`Admin email sent to ${adminEmail}:`, emailResponse);
        return { email: adminEmail, success: true, response: emailResponse };
      } catch (error) {
        console.error(`Failed to send admin email to ${adminEmail}:`, error);
        return { email: adminEmail, success: false, error: error.message };
      }
    });

    // Send parent confirmation email
    const parentEmailPromise = (async () => {
      try {
        const emailResponse = await resend.emails.send({
          from: "Btexloop Academy <onboarding@resend.dev>",
          to: [registrationData.email_address],
          subject: `Registration Confirmed - ${registrationData.full_name} - Btexloop Summer Tech Bootcamp 2025`,
          html: parentEmailContent,
        });
        console.log(`Parent email sent to ${registrationData.email_address}:`, emailResponse);
        return { email: registrationData.email_address, success: true, response: emailResponse };
      } catch (error) {
        console.error(`Failed to send parent email to ${registrationData.email_address}:`, error);
        return { email: registrationData.email_address, success: false, error: error.message };
      }
    })();

    // Wait for all emails to be sent
    const [adminResults, parentResult] = await Promise.all([
      Promise.all(adminEmailPromises),
      parentEmailPromise
    ]);

    const successfulEmails = adminResults.filter(result => result.success).length;
    const totalEmails = adminResults.length + 1; // +1 for parent email
    const allSuccessful = successfulEmails === adminResults.length && parentResult.success;

    return new Response(
      JSON.stringify({ 
        success: allSuccessful,
        message: allSuccessful 
          ? "Registration notification emails sent successfully"
          : "Some emails failed to send",
        details: {
          adminEmails: adminResults,
          parentEmail: parentResult,
          summary: `${successfulEmails + (parentResult.success ? 1 : 0)}/${totalEmails} emails sent successfully`
        }
      }),
      {
        status: allSuccessful ? 200 : 207, // 207 = Multi-Status for partial success
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
