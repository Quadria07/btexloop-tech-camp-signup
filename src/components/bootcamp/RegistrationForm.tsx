
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { FileText, AlertCircle, Sparkles, Users } from "lucide-react";

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
    <section className="py-16 md:py-24 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #F7AD92 0%, #FF7947 100%)' }}>
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <Sparkles className="absolute top-20 left-10 w-8 h-8 text-white animate-pulse" />
        <Users className="absolute top-40 right-20 w-12 h-12 text-white animate-bounce" />
        <Sparkles className="absolute bottom-40 left-20 w-6 h-6 text-white animate-pulse" />
        <FileText className="absolute bottom-20 right-10 w-10 h-10 text-white animate-bounce" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Urgency Message */}
        <div className="bg-white border-l-8 border-red-500 p-6 mb-12 rounded-r-2xl shadow-2xl">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <AlertCircle className="w-8 h-8 text-red-500 mt-1" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-red-800 mb-2">⏰ Limited Slots Available!</h3>
              <p className="text-red-700 text-lg font-semibold">Reserve a space for your child today!</p>
              <p className="text-red-600 mt-2">Only children with completed registration and payment will be admitted.</p>
            </div>
          </div>
        </div>

        {/* Form Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-4 mb-6">
            <FileText className="w-10 h-10 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Register Your Child
            </h2>
          </div>
          <p className="text-xl text-white/90 font-medium">
            Secure your child's spot in the future of technology
          </p>
        </div>
        
        {/* Form Container */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/30 to-white/10 rounded-3xl blur"></div>
          <form onSubmit={handleSubmit} className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl space-y-8">
            {/* Child Information Section */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: '#FF7947' }}>
                <Users className="w-6 h-6 mr-3" />
                Child Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="full_name" className="text-lg font-semibold">Child's Full Name *</Label>
                  <Input
                    id="full_name"
                    required
                    value={formData.full_name}
                    onChange={(e) => handleInputChange('full_name', e.target.value)}
                    className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-orange-400 rounded-xl"
                  />
                </div>
                
                <div>
                  <Label htmlFor="age" className="text-lg font-semibold">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    min="5"
                    max="18"
                    required
                    value={formData.age}
                    onChange={(e) => handleInputChange('age', e.target.value)}
                    className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-orange-400 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <Label className="text-lg font-semibold">Gender *</Label>
                  <Select onValueChange={(value) => handleInputChange('gender', value)} required>
                    <SelectTrigger className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-orange-400 rounded-xl">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="M">Male</SelectItem>
                      <SelectItem value="F">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-lg font-semibold">Course Choice *</Label>
                  <Select onValueChange={(value) => handleInputChange('course_choice', value)} required>
                    <SelectTrigger className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-orange-400 rounded-xl">
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AI">🤖 Artificial Intelligence</SelectItem>
                      <SelectItem value="Robotics">🦾 Robotics</SelectItem>
                      <SelectItem value="Web Dev">💻 Web Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <Label htmlFor="school_name" className="text-lg font-semibold">School Name *</Label>
                  <Input
                    id="school_name"
                    required
                    value={formData.school_name}
                    onChange={(e) => handleInputChange('school_name', e.target.value)}
                    className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-orange-400 rounded-xl"
                  />
                </div>
                
                <div>
                  <Label htmlFor="current_class" className="text-lg font-semibold">Current Class *</Label>
                  <Input
                    id="current_class"
                    required
                    value={formData.current_class}
                    onChange={(e) => handleInputChange('current_class', e.target.value)}
                    className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-orange-400 rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Parent Information Section */}
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center" style={{ color: '#FF7947' }}>
                <Users className="w-6 h-6 mr-3" />
                Parent/Guardian Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="parent_name" className="text-lg font-semibold">Parent/Guardian Name *</Label>
                  <Input
                    id="parent_name"
                    required
                    value={formData.parent_name}
                    onChange={(e) => handleInputChange('parent_name', e.target.value)}
                    className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-orange-400 rounded-xl"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone_number" className="text-lg font-semibold">Phone Number *</Label>
                  <Input
                    id="phone_number"
                    type="tel"
                    required
                    value={formData.phone_number}
                    onChange={(e) => handleInputChange('phone_number', e.target.value)}
                    className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-orange-400 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 mt-6">
                <div>
                  <Label htmlFor="email_address" className="text-lg font-semibold">Email Address *</Label>
                  <Input
                    id="email_address"
                    type="email"
                    required
                    value={formData.email_address}
                    onChange={(e) => handleInputChange('email_address', e.target.value)}
                    className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-orange-400 rounded-xl"
                  />
                </div>

                <div>
                  <Label htmlFor="home_address" className="text-lg font-semibold">Home Address *</Label>
                  <Textarea
                    id="home_address"
                    required
                    value={formData.home_address}
                    onChange={(e) => handleInputChange('home_address', e.target.value)}
                    className="mt-2 text-lg border-2 border-gray-200 focus:border-orange-400 rounded-xl"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center" style={{ color: '#FF7947' }}>
                <Sparkles className="w-6 h-6 mr-3" />
                Additional Information
              </h3>

              <div>
                <Label className="text-lg font-semibold">How did you hear about us? *</Label>
                <Select onValueChange={(value) => handleInputChange('referral_source', value)} required>
                  <SelectTrigger className="mt-2 h-12 text-lg border-2 border-gray-200 focus:border-orange-400 rounded-xl">
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

              <div className="bg-gray-50 p-6 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Checkbox
                    id="prior_experience"
                    checked={hasPriorExperience}
                    onCheckedChange={handlePriorExperienceChange}
                  />
                  <Label htmlFor="prior_experience" className="text-lg font-semibold">
                    Does your child have prior tech experience?
                  </Label>
                </div>

                {hasPriorExperience && (
                  <div>
                    <Label htmlFor="prior_tech_details" className="text-lg font-semibold">Please describe their experience</Label>
                    <Textarea
                      id="prior_tech_details"
                      value={formData.prior_tech_details}
                      onChange={(e) => handleInputChange('prior_tech_details', e.target.value)}
                      placeholder="Tell us about your child's previous tech experience..."
                      className="mt-2 text-lg border-2 border-gray-200 focus:border-orange-400 rounded-xl"
                      rows={3}
                    />
                  </div>
                )}
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
              style={{ backgroundColor: '#FF7947' }}
            >
              {loading ? (
                <div className="flex items-center space-x-3">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  <span>Registering...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-6 h-6" />
                  <span>Register Now - Secure Your Spot!</span>
                </div>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
