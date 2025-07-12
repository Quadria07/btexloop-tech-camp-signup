
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { FileText } from "lucide-react";

interface RegistrationFormProps {
  onSuccess: (data: any) => void;
}

export const RegistrationForm = ({ onSuccess }: RegistrationFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [hasPriorExperience, setHasPriorExperience] = useState(false);
  
  const [formData, setFormData] = useState({
    full_name: "",
    age: "",
    gender: "",
    school_name: "",
    current_class: "",
    course_choice: "",
    parent_name: "",
    phone_number: "",
    email_address: "",
    home_address: "",
    prior_tech_experience: false,
    prior_tech_details: "",
    referral_source: ""
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePriorExperienceChange = (checked: boolean | "indeterminate") => {
    const booleanValue = checked === true;
    setHasPriorExperience(booleanValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Insert registration data
      const { data, error } = await supabase
        .from('bootcamp_registrations')
        .insert([{
          ...formData,
          age: parseInt(formData.age),
          prior_tech_experience: hasPriorExperience,
          prior_tech_details: hasPriorExperience ? formData.prior_tech_details : null
        }])
        .select()
        .single();

      if (error) throw error;

      // Send notification emails
      await supabase.functions.invoke('send-registration-notification', {
        body: { registrationData: data }
      });

      toast({
        title: "Registration Successful!",
        description: "Thank you for registering. We'll contact you within 24 hours.",
      });

      onSuccess(data);
    } catch (error: any) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 md:py-16 px-4" style={{ backgroundColor: '#F7AD92' }}>
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center space-x-3 mb-8 md:mb-12">
          <FileText className="w-8 h-8 md:w-10 md:h-10 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
            Register Your Child
          </h2>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 md:p-8 shadow-lg space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <Label htmlFor="full_name">Child's Full Name *</Label>
              <Input
                id="full_name"
                required
                value={formData.full_name}
                onChange={(e) => handleInputChange('full_name', e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="age">Age *</Label>
              <Input
                id="age"
                type="number"
                min="5"
                max="18"
                required
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <Label>Gender *</Label>
              <Select onValueChange={(value) => handleInputChange('gender', value)} required>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="M">Male</SelectItem>
                  <SelectItem value="F">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Course Choice *</Label>
              <Select onValueChange={(value) => handleInputChange('course_choice', value)} required>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AI">Artificial Intelligence</SelectItem>
                  <SelectItem value="Robotics">Robotics</SelectItem>
                  <SelectItem value="Web Dev">Web Development</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <Label htmlFor="school_name">School Name *</Label>
              <Input
                id="school_name"
                required
                value={formData.school_name}
                onChange={(e) => handleInputChange('school_name', e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="current_class">Current Class *</Label>
              <Input
                id="current_class"
                required
                value={formData.current_class}
                onChange={(e) => handleInputChange('current_class', e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <Label htmlFor="parent_name">Parent/Guardian Name *</Label>
              <Input
                id="parent_name"
                required
                value={formData.parent_name}
                onChange={(e) => handleInputChange('parent_name', e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="phone_number">Phone Number *</Label>
              <Input
                id="phone_number"
                type="tel"
                required
                value={formData.phone_number}
                onChange={(e) => handleInputChange('phone_number', e.target.value)}
                className="mt-1"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email_address">Email Address *</Label>
            <Input
              id="email_address"
              type="email"
              required
              value={formData.email_address}
              onChange={(e) => handleInputChange('email_address', e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="home_address">Home Address *</Label>
            <Textarea
              id="home_address"
              required
              value={formData.home_address}
              onChange={(e) => handleInputChange('home_address', e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label>How did you hear about us? *</Label>
            <Select onValueChange={(value) => handleInputChange('referral_source', value)} required>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                <SelectItem value="Friend">Friend/Word of Mouth</SelectItem>
                <SelectItem value="School">School</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="prior_experience"
                checked={hasPriorExperience}
                onCheckedChange={handlePriorExperienceChange}
              />
              <Label htmlFor="prior_experience">
                Does your child have prior tech experience?
              </Label>
            </div>

            {hasPriorExperience && (
              <div>
                <Label htmlFor="prior_tech_details">Please describe their experience</Label>
                <Textarea
                  id="prior_tech_details"
                  value={formData.prior_tech_details}
                  onChange={(e) => handleInputChange('prior_tech_details', e.target.value)}
                  placeholder="Tell us about your child's previous tech experience..."
                  className="mt-1"
                />
              </div>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full py-3 text-base md:text-lg font-semibold"
            style={{ backgroundColor: '#FF7947' }}
          >
            {loading ? "Registering..." : "Register Now"}
          </Button>
        </form>
      </div>
    </section>
  );
};
