
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
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error) {
        toast({
          title: "Error fetching profile",
          description: error.message,
          variant: "destructive"
        });
        return null;
      }
      return data;
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
