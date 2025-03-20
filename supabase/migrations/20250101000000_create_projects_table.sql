
-- Create a projects table to store GitHub URLs and other project-related data
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  tags JSONB,
  github_url TEXT,
  live_url TEXT,
  user_id UUID REFERENCES auth.users,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policy for selecting projects (anyone can view)
CREATE POLICY "Anyone can view projects" 
  ON public.projects 
  FOR SELECT 
  USING (true);

-- Create policy for inserting projects (authenticated users only)
CREATE POLICY "Authenticated users can insert projects" 
  ON public.projects 
  FOR INSERT 
  WITH CHECK (auth.role() = 'authenticated');

-- Create policy for updating projects (user can only update their own)
CREATE POLICY "Users can update their own projects" 
  ON public.projects 
  FOR UPDATE 
  USING (auth.uid() = user_id);

-- Create policy for deleting projects (user can only delete their own)
CREATE POLICY "Users can delete their own projects" 
  ON public.projects 
  FOR DELETE 
  USING (auth.uid() = user_id);
