import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Layers, Filter, Download, RefreshCw } from "lucide-react";

const heatMapData = [
  { zone: "A1", risk: 89, color: "bg-destructive", status: "Critical" },
  { zone: "A2", risk: 76, color: "bg-warning", status: "High" },
  { zone: "A3", risk: 45, color: "bg-warning", status: "Medium" },
  { zone: "B1", risk: 23, color: "bg-success", status: "Low" },
  { zone: "B2", risk: 67, color: "bg-warning", status: "High" },
  { zone: "B3", risk: 12, color: "bg-success", status: "Low" },
  { zone: "C1", risk: 91, color: "bg-destructive", status: "Critical" },
  { zone: "C2", risk: 34, color: "bg-primary", status: "Medium" },
  { zone: "C3", risk: 56, color: "bg-warning", status: "High" },
];

const geologicalLayers = [
  { name: "Surface Topology", active: true, opacity: 100 },
  { name: "Rock Structure", active: true, opacity: 85 },
  { name: "Fracture Network", active: false, opacity: 70 },
  { name: "Groundwater", active: true, opacity: 60 },
  { name: "Historical Events", active: false, opacity: 50 },
];

export default function RiskMaps() {
  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Risk Maps</h1>
          <p className="text-muted-foreground">
            Interactive visualization of rockfall probability zones
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Main Map View */}
        <div className="lg:col-span-3">
          <Card className="mining-card h-[600px]">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Mine Site Risk Heat Map</span>
              </CardTitle>
              <CardDescription>
                Real-time risk assessment with AI-predicted probability zones
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              {/* Simulated Heat Map Grid */}
              <div className="relative h-[450px] bg-muted/10 rounded-lg overflow-hidden border-2 border-border">
                <div className="absolute inset-4 grid grid-cols-3 grid-rows-3 gap-2">
                  {heatMapData.map((zone) => (
                    <div
                      key={zone.zone}
                      className={`${zone.color}/20 border-2 ${zone.color.replace('bg-', 'border-')} 
                        rounded-lg flex flex-col items-center justify-center p-4 transition-all
                        hover:scale-105 cursor-pointer shadow-lg backdrop-blur-sm`}
                    >
                      <div className="text-lg font-bold text-foreground">{zone.zone}</div>
                      <div className="text-2xl font-bold">{zone.risk}%</div>
                      <Badge 
                        className={`text-xs mt-2 ${
                          zone.status === 'Critical' ? 'risk-high' :
                          zone.status === 'High' ? 'risk-medium' : 
                          zone.status === 'Medium' ? 'risk-medium' : 'risk-low'
                        }`}
                      >
                        {zone.status}
                      </Badge>
                    </div>
                  ))}
                </div>
                
                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm p-3 rounded-lg border">
                  <p className="text-xs font-medium mb-2">Risk Level</p>
                  <div className="flex space-x-3 text-xs">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-success rounded"></div>
                      <span>Low (0-30%)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-warning rounded"></div>
                      <span>Medium (31-70%)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-destructive rounded"></div>
                      <span>High (71-100%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Controls Panel */}
        <div className="space-y-6">
          {/* Layer Controls */}
          <Card className="mining-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Layers className="h-5 w-5 text-primary" />
                <span>Map Layers</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {geologicalLayers.map((layer, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      checked={layer.active}
                      className="rounded border-border"
                    />
                    <span className="text-sm">{layer.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{layer.opacity}%</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Time Controls */}
          <Card className="mining-card">
            <CardHeader>
              <CardTitle>Time Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="current" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="current">Now</TabsTrigger>
                  <TabsTrigger value="24h">24H</TabsTrigger>
                  <TabsTrigger value="7d">7D</TabsTrigger>
                </TabsList>
                <TabsContent value="current" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Current risk assessment based on latest sensor data
                  </p>
                </TabsContent>
                <TabsContent value="24h" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    24-hour predictive analysis
                  </p>
                </TabsContent>
                <TabsContent value="7d" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    7-day forecast model
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="mining-card">
            <CardHeader>
              <CardTitle>Zone Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Critical Zones</span>
                <Badge variant="destructive">2</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">High Risk Zones</span>
                <Badge variant="default">3</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Safe Zones</span>
                <Badge variant="secondary">4</Badge>
              </div>
              <div className="flex justify-between pt-2 border-t">
                <span className="text-sm font-medium">Total Coverage</span>
                <span className="font-bold">100%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}