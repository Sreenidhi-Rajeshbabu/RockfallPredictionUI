import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Bell, CheckCircle, Clock, Filter, Mail, MessageSquare } from "lucide-react";

const activeAlerts = [
  {
    id: 1,
    type: "Critical",
    title: "Severe Displacement Detected",
    location: "North Slope A",
    description: "Accelerometer readings show 15mm displacement in the last hour. Immediate evacuation recommended.",
    timestamp: "2024-01-15 14:23:00",
    timeAgo: "2 minutes ago",
    actionTaken: false,
    severity: "high"
  },
  {
    id: 2,
    type: "Warning",
    title: "Heavy Rainfall Alert",
    location: "All Zones",
    description: "Weather station reports 25mm rainfall in last 3 hours. Increased pore pressure expected.",
    timestamp: "2024-01-15 13:45:00",
    timeAgo: "40 minutes ago",
    actionTaken: true,
    severity: "medium"
  },
  {
    id: 3,
    type: "Critical",
    title: "Sensor Communication Lost",
    location: "East Wall B",
    description: "Loss of communication with 3 strain gauges. Manual inspection required.",
    timestamp: "2024-01-15 13:12:00",
    timeAgo: "1 hour ago",
    actionTaken: false,
    severity: "high"
  }
];

const historicalAlerts = [
  {
    id: 4,
    type: "Resolved",
    title: "Maintenance Complete",
    location: "South Quarry",
    description: "Scheduled sensor calibration completed successfully.",
    timestamp: "2024-01-15 10:30:00",
    resolution: "Maintenance completed, all sensors operational"
  },
  {
    id: 5,
    type: "Resolved",
    title: "False Positive - Machinery Vibration",
    location: "West Ridge",
    description: "Vibration alert caused by nearby blasting operations.",
    timestamp: "2024-01-15 09:15:00",
    resolution: "Confirmed as planned blasting activity"
  }
];

const alertStats = [
  { label: "Active Alerts", value: 3, change: "+1", color: "text-destructive" },
  { label: "Resolved Today", value: 12, change: "+2", color: "text-success" },
  { label: "Response Time", value: "3.2m", change: "-30s", color: "text-success" },
  { label: "System Uptime", value: "99.8%", change: "+0.1%", color: "text-success" }
];

export default function Alerts() {
  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Alert Management</h1>
          <p className="text-muted-foreground">
            Monitor and respond to real-time safety alerts
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Mail className="h-4 w-4 mr-2" />
            Configure Notifications
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {alertStats.map((stat, index) => (
          <Card key={index} className="mining-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`text-sm font-medium ${stat.color}`}>
                  {stat.change}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Alert Tabs */}
      <Card className="mining-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            <span>System Alerts</span>
          </CardTitle>
          <CardDescription>
            Real-time monitoring and alert management system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="active" className="flex items-center space-x-2">
                <Bell className="h-4 w-4" />
                <span>Active ({activeAlerts.length})</span>
              </TabsTrigger>
              <TabsTrigger value="resolved">
                <CheckCircle className="h-4 w-4 mr-2" />
                Resolved
              </TabsTrigger>
              <TabsTrigger value="settings">
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Active Alerts */}
            <TabsContent value="active" className="mt-6">
              <div className="space-y-4">
                {activeAlerts.map((alert) => (
                  <Card key={alert.id} className={`alert-card border-l-4 ${
                    alert.severity === 'high' ? 'border-l-destructive' : 'border-l-warning'
                  }`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Badge 
                            variant={alert.type === 'Critical' ? 'destructive' : 'default'}
                            className="font-semibold"
                          >
                            {alert.type}
                          </Badge>
                          <div>
                            <CardTitle className="text-lg">{alert.title}</CardTitle>
                            <CardDescription className="flex items-center space-x-2">
                              <span>{alert.location}</span>
                              <span>•</span>
                              <span>{alert.timeAgo}</span>
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {alert.actionTaken && (
                            <Badge variant="secondary" className="text-xs">
                              Action Taken
                            </Badge>
                          )}
                          <Clock className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {alert.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground font-mono">
                          {alert.timestamp}
                        </span>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Add Note
                          </Button>
                          <Button size="sm" variant={alert.actionTaken ? "secondary" : "default"}>
                            {alert.actionTaken ? "Mark Resolved" : "Take Action"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Resolved Alerts */}
            <TabsContent value="resolved" className="mt-6">
              <div className="space-y-4">
                {historicalAlerts.map((alert) => (
                  <Card key={alert.id} className="alert-card border-l-4 border-l-success/50">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Badge variant="secondary" className="font-semibold">
                            {alert.type}
                          </Badge>
                          <div>
                            <CardTitle className="text-lg">{alert.title}</CardTitle>
                            <CardDescription>{alert.location}</CardDescription>
                          </div>
                        </div>
                        <CheckCircle className="h-5 w-5 text-success" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        {alert.description}
                      </p>
                      <div className="bg-success/10 border border-success/20 rounded-lg p-3 mb-4">
                        <p className="text-sm text-success-foreground">
                          <strong>Resolution:</strong> {alert.resolution}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono">
                        {alert.timestamp}
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Settings */}
            <TabsContent value="settings" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="mining-card">
                  <CardHeader>
                    <CardTitle>Notification Channels</CardTitle>
                    <CardDescription>Configure how alerts are delivered</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">safety@minesite.com</p>
                      </div>
                      <input type="checkbox" checked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">SMS Alerts</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      </div>
                      <input type="checkbox" checked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Push Notifications</p>
                        <p className="text-sm text-muted-foreground">Mobile app alerts</p>
                      </div>
                      <input type="checkbox" checked className="rounded" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="mining-card">
                  <CardHeader>
                    <CardTitle>Alert Thresholds</CardTitle>
                    <CardDescription>Customize when alerts are triggered</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Displacement Threshold</label>
                      <div className="flex items-center space-x-2 mt-1">
                        <input type="range" min="5" max="20" defaultValue="10" className="flex-1" />
                        <span className="text-sm font-mono">10mm</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Rainfall Alert Level</label>
                      <div className="flex items-center space-x-2 mt-1">
                        <input type="range" min="10" max="50" defaultValue="20" className="flex-1" />
                        <span className="text-sm font-mono">20mm/h</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Vibration Sensitivity</label>
                      <div className="flex items-center space-x-2 mt-1">
                        <input type="range" min="0.1" max="1.0" step="0.1" defaultValue="0.5" className="flex-1" />
                        <span className="text-sm font-mono">0.5mm/s</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}