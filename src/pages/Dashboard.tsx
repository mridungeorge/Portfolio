
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

// Mock data for statistics (replace with real data from API/Supabase later)
const pageViewsData = [
  { name: "Mon", views: 120 },
  { name: "Tue", views: 180 },
  { name: "Wed", views: 150 },
  { name: "Thu", views: 200 },
  { name: "Fri", views: 250 },
  { name: "Sat", views: 180 },
  { name: "Sun", views: 110 },
];

const interactionData = [
  { name: "Resume Downloads", value: 45 },
  { name: "Terminal Usage", value: 78 },
  { name: "Contact Form", value: 53 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const Dashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [contactRequests, setContactRequests] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    } else if (user) {
      fetchUserProfile();
      fetchContactRequests();
    }
  }, [user, loading, navigate]);

  const fetchUserProfile = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user?.id)
      .single();

    if (data) {
      setProfile(data);
    }
  };

  const fetchContactRequests = async () => {
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (data) {
      setContactRequests(data);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="spinner border-t-4 border-cyber h-12 w-12 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-cyber">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-lighter/30 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {profile?.full_name || profile?.username || "User"}
            </p>
          </div>
          <div className="glass p-2 rounded-lg flex items-center space-x-3 mt-4 md:mt-0">
            <Avatar className="h-10 w-10">
              <AvatarImage src={profile?.avatar_url} />
              <AvatarFallback className="bg-cyber/20 text-cyber">
                {profile?.username?.substring(0, 2) || user?.email?.substring(0, 2) || "U"}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{profile?.username || user?.email}</p>
              <p className="text-xs text-muted-foreground">Administrator</p>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="glass mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="contacts">Contact Requests</TabsTrigger>
            <TabsTrigger value="interactions">User Interactions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glass">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Total Page Views</CardTitle>
                  <CardDescription>Last 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">1,290</div>
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">
                  +12.5% from last week
                </CardFooter>
              </Card>
              
              <Card className="glass">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Resume Downloads</CardTitle>
                  <CardDescription>Last 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">45</div>
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">
                  +23% from last week
                </CardFooter>
              </Card>
              
              <Card className="glass">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Terminal Sessions</CardTitle>
                  <CardDescription>Last 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">78</div>
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground">
                  +8% from last week
                </CardFooter>
              </Card>
            </div>
            
            <Card className="glass">
              <CardHeader>
                <CardTitle>Page Views Trend</CardTitle>
                <CardDescription>Daily visits over the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ChartContainer config={{ views: { theme: { light: '#0088FE', dark: '#0088FE' } } }}>
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <BarChart data={pageViewsData}>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="views" fill="#0088FE" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-6">
            <Card className="glass">
              <CardHeader>
                <CardTitle>Recent Contact Requests</CardTitle>
                <CardDescription>People who have reached out through the contact form</CardDescription>
              </CardHeader>
              <CardContent>
                {contactRequests.length === 0 ? (
                  <p className="text-center py-6 text-muted-foreground">No contact requests yet</p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contactRequests.map((request) => (
                        <TableRow key={request.id}>
                          <TableCell className="font-medium">{request.name}</TableCell>
                          <TableCell>{request.email}</TableCell>
                          <TableCell className="max-w-xs truncate">{request.message}</TableCell>
                          <TableCell>
                            {new Date(request.created_at).toLocaleDateString()}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interactions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Interaction Distribution</CardTitle>
                  <CardDescription>How visitors interact with your portfolio</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={interactionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {interactionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass">
                <CardHeader>
                  <CardTitle>Terminal Usage</CardTitle>
                  <CardDescription>Most popular terminal commands</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Command</TableHead>
                        <TableHead className="text-right">Usage Count</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">help</TableCell>
                        <TableCell className="text-right">42</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">projects</TableCell>
                        <TableCell className="text-right">29</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">skills</TableCell>
                        <TableCell className="text-right">23</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">contact</TableCell>
                        <TableCell className="text-right">18</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">experience</TableCell>
                        <TableCell className="text-right">14</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
