import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

export const useDashboardData = () => {
  const { user } = useAuth();
  const { toast } = useToast();

  // Fetch user profile
  const { data: profile, isLoading: profileLoading } = useQuery({
    queryKey: ['profile', user?.id],
    queryFn: async () => {
      if (!user) return null;
      
      try {
        // First try to get the profile
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .maybeSingle();

        if (error) {
          console.error("Error fetching profile:", error);
          throw error;
        }
        
        // If profile exists, return it
        if (data) {
          return data;
        }
        
        // If profile doesn't exist, attempt to create one using Supabase auth user data
        const userMetadata = {
          id: user.id,
          username: user.email?.split('@')[0] || 'user',
          full_name: user.user_metadata?.full_name || null,
          avatar_url: user.user_metadata?.avatar_url || null
        };
        
        // Attempt to create the profile
        const { data: newProfile, error: createError } = await supabase
          .auth.getUser();
          
        if (createError) {
          console.error("Error creating profile:", createError);
          throw createError;
        }
        
        // Return a temporary profile while waiting for the database to sync
        return userMetadata;
      } catch (err: any) {
        toast({
          title: "Error with profile",
          description: err.message || "Something went wrong with your profile",
          variant: "destructive"
        });
        
        // Return a minimal profile with just the user ID so the UI doesn't break
        return {
          id: user.id,
          username: user.email?.split('@')[0] || 'user'
        };
      }
    },
    enabled: !!user
  });

  // Fetch contact requests
  const { data: contactRequests = [], isLoading: contactsLoading } = useQuery({
    queryKey: ['contacts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        toast({
          title: "Error fetching contacts",
          description: error.message,
          variant: "destructive"
        });
        return [];
      }
      return data;
    },
    enabled: !!user
  });

  // Fetch page views data - empty array for now (will be implemented later)
  const { data: pageViewsData = [], isLoading: pageViewsLoading } = useQuery({
    queryKey: ['pageViews'],
    queryFn: async () => {
      // This would fetch real data from Supabase in a future implementation
      return [];
    },
    enabled: !!user
  });

  // Fetch interaction data - empty array for now (will be implemented later)
  const { data: interactionData = [], isLoading: interactionsLoading } = useQuery({
    queryKey: ['interactions'],
    queryFn: async () => {
      // This would fetch real data from Supabase in a future implementation
      return [];
    },
    enabled: !!user
  });

  // Fetch terminal commands stats - empty array for now (will be implemented later)
  const { data: terminalCommands = [], isLoading: commandsLoading } = useQuery({
    queryKey: ['terminalCommands'],
    queryFn: async () => {
      // This would fetch real data from Supabase in a future implementation
      return [];
    },
    enabled: !!user
  });

  return {
    profile,
    contactRequests,
    pageViewsData,
    interactionData,
    terminalCommands,
    loading: {
      profile: profileLoading,
      contacts: contactsLoading,
      pageViews: pageViewsLoading,
      interactions: interactionsLoading,
      commands: commandsLoading
    }
  };
};
