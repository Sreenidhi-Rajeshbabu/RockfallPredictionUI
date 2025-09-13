import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  AlertTriangle, 
  TrendingUp, 
  Shield, 
  MapPin,
  Zap,
  CloudRain,
  Thermometer
} from "lucide-react";

const riskZones = [
  { id: 1, name: "North Slope A", risk: "high", probability: 87, lastUpdate: "2 min ago" },
  { id: 2, name: "East Wall B", risk: "medium", probability: 45, lastUpdate: "5 min ago" },
  { id: 3, name: "South Quarry", risk: "low", probability: 12, lastUpdate: "1 min ago" },
  { id: 4, name: "West Ridge", risk: "medium", probability: 38, lastUpdate: "3 min ago" },
];

const recentAlerts = [
  { id: 1, type: "Critical", message: "Unusual displacement detected in North Slope A", time: "2 min ago" },
  { id: 2, type: "Warning", message: "Heavy rainfall increasing pore pressure", time: "15 min ago" },
  { id: 3, type: "Info", message: "Sensor maintenance completed in Zone C", time: "1 hour ago" },
];

const environmentalFactors = [
  { name: "Rainfall", value: "12.5mm", status: "elevated", icon: CloudRain },
  { name: "Temperature", value: "18°C", status: "normal", icon: Thermometer },
  { name: "Ground Vibration", value: "0.3mm/s", status: "normal", icon: Activity },
  { name: "Pore Pressure", value: "145kPa", status: "elevated", icon: Zap },
];

export default function Dashboard() {
  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="mining-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Zones</CardTitle>
            <MapPin className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">2 high risk zones</p>
          </CardContent>
        </Card>

        <Card className="mining-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Predictions</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">Model accuracy</p>
          </CardContent>
        </Card>

        <Card className="mining-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">3 require attention</p>
          </CardContent>
        </Card>

        <Card className="mining-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">System Status</CardTitle>
            <Shield className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">Online</div>
            <p className="text-xs text-muted-foreground">All sensors active</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Risk Zones */}
        <Card className="mining-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Risk Zone Assessment</span>
            </CardTitle>
            <CardDescription>
              Real-time probability analysis for monitored areas
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {riskZones.map((zone) => (
              <div key={zone.id} className="flex items-center justify-between space-y-2">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium">{zone.name}</span>
                    <div className="flex items-center space-x-2">
                      <Badge 
                        className={`risk-indicator ${
                          zone.risk === 'high' ? 'risk-high' :
                          zone.risk === 'medium' ? 'risk-medium' : 'risk-low'
                        }`}
                      >
                        {zone.risk}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{zone.lastUpdate}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Progress 
                      value={zone.probability} 
                      className="flex-1 h-2"
                    />
                    <span className="text-sm font-mono">{zone.probability}%</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card className="mining-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              <span>Recent Alerts</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="border-l-2 border-primary/20 pl-3 py-2">
                <div className="flex items-center justify-between mb-1">
                  <Badge 
                    variant={alert.type === 'Critical' ? 'destructive' : 
                            alert.type === 'Warning' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {alert.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                </div>
                <p className="text-sm">{alert.message}</p>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              View All Alerts
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Environmental Factors */}
      <Card className="mining-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CloudRain className="h-5 w-5 text-primary" />
            <span>Environmental Factors</span>
          </CardTitle>
          <CardDescription>
            Current conditions affecting slope stability
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {environmentalFactors.map((factor) => (
              <div key={factor.name} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/20">
                <factor.icon className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-sm font-medium">{factor.name}</p>
                  <p className="text-lg font-bold">{factor.value}</p>
                  <Badge 
                    variant={factor.status === 'elevated' ? 'destructive' : 'secondary'}
                    className="text-xs mt-1"
                  >
                    {factor.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}