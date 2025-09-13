import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  CloudRain, 
  Thermometer, 
  Wind, 
  Droplets,
  Activity,
  Zap,
  TrendingUp,
  TrendingDown
} from "lucide-react";

const weatherData = [
  { 
    label: "Temperature", 
    value: "18°C", 
    status: "normal", 
    trend: "stable",
    icon: Thermometer,
    details: "Range: 15-22°C"
  },
  { 
    label: "Rainfall", 
    value: "12.5mm", 
    status: "elevated", 
    trend: "increasing",
    icon: CloudRain,
    details: "Last 24h: 28mm"
  },
  { 
    label: "Wind Speed", 
    value: "15 km/h", 
    status: "normal", 
    trend: "stable",
    icon: Wind,
    details: "Direction: NW"
  },
  { 
    label: "Humidity", 
    value: "72%", 
    status: "high", 
    trend: "increasing",
    icon: Droplets,
    details: "Dew point: 13°C"
  }
];

const geologicalData = [
  { 
    label: "Ground Vibration", 
    value: "0.3mm/s", 
    status: "normal", 
    threshold: 85,
    icon: Activity,
    limit: "1.2mm/s"
  },
  { 
    label: "Pore Pressure", 
    value: "145kPa", 
    status: "elevated", 
    threshold: 75,
    icon: Zap,
    limit: "200kPa"
  },
  { 
    label: "Strain Level", 
    value: "250με", 
    status: "normal", 
    threshold: 45,
    icon: Activity,
    limit: "500με"
  }
];

const historicalData = [
  { time: "00:00", temp: 16, rainfall: 0, pressure: 120 },
  { time: "04:00", temp: 15, rainfall: 2, pressure: 125 },
  { time: "08:00", temp: 17, rainfall: 5, pressure: 135 },
  { time: "12:00", temp: 19, rainfall: 8, pressure: 140 },
  { time: "16:00", temp: 18, rainfall: 12, pressure: 145 },
  { time: "20:00", temp: 17, rainfall: 15, pressure: 148 }
];

export default function Environmental() {
  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Environmental Monitoring</h1>
          <p className="text-muted-foreground">
            Real-time environmental factors affecting slope stability
          </p>
        </div>
      </div>

      {/* Weather Conditions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {weatherData.map((item, index) => (
          <Card key={index} className="mining-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.label}</CardTitle>
              <item.icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <div className="flex items-center justify-between mt-2">
                <Badge 
                  variant={item.status === 'elevated' || item.status === 'high' ? 'destructive' : 'secondary'}
                  className="text-xs"
                >
                  {item.status}
                </Badge>
                <div className="flex items-center space-x-1">
                  {item.trend === 'increasing' ? (
                    <TrendingUp className="h-3 w-3 text-destructive" />
                  ) : item.trend === 'decreasing' ? (
                    <TrendingDown className="h-3 w-3 text-success" />
                  ) : (
                    <div className="h-3 w-3 bg-muted rounded-full" />
                  )}
                  <span className="text-xs text-muted-foreground">{item.trend}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{item.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Geological Sensors */}
        <div className="lg:col-span-2">
          <Card className="mining-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-primary" />
                <span>Geological Sensors</span>
              </CardTitle>
              <CardDescription>
                Ground stability monitoring systems
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {geologicalData.map((sensor, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <sensor.icon className="h-4 w-4 text-primary" />
                      <span className="font-medium">{sensor.label}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold">{sensor.value}</span>
                      <Badge 
                        variant={sensor.status === 'elevated' ? 'destructive' : 'secondary'}
                        className="text-xs"
                      >
                        {sensor.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Progress value={sensor.threshold} className="flex-1 h-2" />
                    <span className="text-xs text-muted-foreground">Limit: {sensor.limit}</span>
                  </div>
                </div>
              ))}
              
              {/* Historical Chart Placeholder */}
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-3">24-Hour Trend</h4>
                <div className="h-48 bg-muted/10 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Activity className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Sensor data visualization</p>
                    <p className="text-xs">Real-time charts would display here</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Environmental Impact */}
        <div className="space-y-6">
          <Card className="mining-card">
            <CardHeader>
              <CardTitle>Impact Assessment</CardTitle>
              <CardDescription>Environmental risk factors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Rainfall Impact</span>
                  <Badge variant="destructive">High</Badge>
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Heavy rainfall increases pore pressure and slope instability
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Temperature Effect</span>
                  <Badge variant="secondary">Low</Badge>
                </div>
                <Progress value={25} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Freeze-thaw cycles can affect rock stability
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Wind Loading</span>
                  <Badge variant="secondary">Minimal</Badge>
                </div>
                <Progress value={15} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  Current wind conditions pose minimal risk
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mining-card">
            <CardHeader>
              <CardTitle>Weather Forecast</CardTitle>
              <CardDescription>Next 48 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="today" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="today">Today</TabsTrigger>
                  <TabsTrigger value="tomorrow">Tomorrow</TabsTrigger>
                </TabsList>
                <TabsContent value="today" className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Afternoon</span>
                    <div className="flex items-center space-x-2">
                      <CloudRain className="h-4 w-4 text-primary" />
                      <span className="text-sm">Rain - 8mm</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Evening</span>
                    <div className="flex items-center space-x-2">
                      <CloudRain className="h-4 w-4 text-primary" />
                      <span className="text-sm">Heavy - 15mm</span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="tomorrow" className="mt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Morning</span>
                    <div className="flex items-center space-x-2">
                      <CloudRain className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">Light - 2mm</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Afternoon</span>
                    <div className="flex items-center space-x-2">
                      <Thermometer className="h-4 w-4 text-success" />
                      <span className="text-sm">Clear - 22°C</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}