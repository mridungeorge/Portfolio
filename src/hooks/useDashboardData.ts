
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

  // Create statistics tracking functions
  const fetchPageViews = async () => {
    // In a real application, this would fetch from Supabase
    // For now, we'll use mock data
    return [
      { name: "Mon", views: 120 },
      { name: "Tue", views: 180 },
      { name: "Wed", views: 150 },
      { name: "Thu", views: 200 },
      { name: "Fri", views: 250 },
      { name: "Sat", views: 180 },
      { name: "Sun", views: 110 },
    ];
  };

  // Fetch page views data
  const { data: pageViewsData = [], isLoading: pageViewsLoading } = useQuery({
    queryKey: ['pageViews'],
    queryFn: fetchPageViews,
    enabled: !!user
  });

  // Fetch interaction data
  const { data: interactionData = [], isLoading: interactionsLoading } = useQuery({
    queryKey: ['interactions'],
    queryFn: async () => {
      // Mock data - in a real app, fetch from Supabase
      return [
        { name: "Resume Downloads", value: 45 },
        { name: "Terminal Usage", value: 78 },
        { name: "Contact Form", value: 53 },
      ];
    },
    enabled: !!user
  });

  // Fetch terminal commands stats
  const { data: terminalCommands = [], isLoading: commandsLoading } = useQuery({
    queryKey: ['terminalCommands'],
    queryFn: async () => {
      // Mock data - in a real app, fetch from Supabase
      return [
        { command: "help", count: 42 },
        { command: "projects", count: 29 },
        { command: "skills", count: 23 },
        { command: "contact", count: 18 },
        { command: "experience", count: 14 },
      ];
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
