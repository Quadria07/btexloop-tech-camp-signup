
-- Create table for bootcamp registrations
CREATE TABLE public.bootcamp_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  age INTEGER NOT NULL CHECK (age >= 5 AND age <= 18),
  gender TEXT NOT NULL CHECK (gender IN ('M', 'F')),
  school_name TEXT NOT NULL,
  current_class TEXT NOT NULL,
  course_choice TEXT NOT NULL CHECK (course_choice IN ('AI', 'Robotics', 'Web Dev')),
  parent_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  email_address TEXT NOT NULL,
  home_address TEXT NOT NULL,
  prior_tech_experience BOOLEAN NOT NULL DEFAULT false,
  prior_tech_details TEXT,
  referral_source TEXT NOT NULL CHECK (referral_source IN ('WhatsApp', 'Friend', 'School', 'Other')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS)
ALTER TABLE public.bootcamp_registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts (for registration form)
CREATE POLICY "Allow public registration inserts" 
  ON public.bootcamp_registrations 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy to prevent public reads (admin only access)
CREATE POLICY "Admin only access to registrations" 
  ON public.bootcamp_registrations 
  FOR SELECT 
  USING (false);
