import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  Brain, 
  Target,
  AlertCircle,
  CheckCircle,
  Clock,
  Download
} from "lucide-react";

const modelPerformance = [
  { metric: "Accuracy", value: 94.2, target: 95, status: "good" },
  { metric: "Precision", value: 91.8, target: 90, status: "excellent" },
  { metric: "Recall", value: 96.5, target: 95, status: "excellent" },
  { metric: "F1-Score", value: 94.1, target: 92, status: "excellent" }
];

const predictionHistory = [
  { date: "Jan 15", predicted: 15, actual: 12, accuracy: 87 },
  { date: "Jan 14", predicted: 8, actual: 9, accuracy: 92 },
  { date: "Jan 13", predicted: 22, actual: 18, accuracy: 85 },
  { date: "Jan 12", predicted: 5, actual: 6, accuracy: 95 },
  { date: "Jan 11", predicted: 11, actual: 11, accuracy: 100 }
];

const riskFactors = [
  { factor: "Rainfall Intensity", importance: 0.35, trend: "increasing" },
  { factor: "Ground Displacement", importance: 0.28, trend: "stable" },
  { factor: "Pore Pressure", importance: 0.18, trend: "increasing" },
  { factor: "Rock Fractures", importance: 0.15, trend: "stable" },
  { factor: "Temperature", importance: 0.04, trend: "decreasing" }
];

const alertStats = [
  { period: "Last 7 days", predicted: 45, actual: 42, falsePositives: 5, accuracy: 89 },
  { period: "Last 30 days", predicted: 198, actual: 185, falsePositives: 23, accuracy: 91 },
  { period: "Last 90 days", predicted: 567, actual: 532, falsePositives: 78, accuracy: 88 }
];

export default function Analytics() {
  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Predictive Analytics</h1>
          <p className="text-muted-foreground">
            AI model performance and prediction insights
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button size="sm">
            <Brain className="h-4 w-4 mr-2" />
            Retrain Model
          </Button>
        </div>
      </div>

      {/* Model Performance */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {modelPerformance.map((metric, index) => (
          <Card key={index} className="mining-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.metric}</CardTitle>
              <div className="flex items-center space-x-1">
                {metric.status === 'excellent' ? (
                  <CheckCircle className="h-4 w-4 text-success" />
                ) : metric.status === 'good' ? (
                  <Target className="h-4 w-4 text-primary" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-warning" />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}%</div>
              <div className="flex items-center justify-between mt-2">
                <Progress value={metric.value} className="flex-1 mr-2 h-2" />
                <span className="text-xs text-muted-foreground">Target: {metric.target}%</span>
              </div>
              <Badge 
                variant={metric.status === 'excellent' ? 'secondary' : 
                        metric.status === 'good' ? 'default' : 'destructive'}
                className="text-xs mt-2"
              >
                {metric.status}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Analytics */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Prediction Accuracy Trends */}
        <div className="lg:col-span-2">
          <Card className="mining-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span>Prediction Accuracy Trends</span>
              </CardTitle>
              <CardDescription>
                Model performance over the last 5 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {predictionHistory.map((day, index) => (
                  <div key={index} className="flex items-center justify-between space-y-2">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium w-12">{day.date}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground">Pred:</span>
                        <span className="text-sm font-mono">{day.predicted}</span>
                        <span className="text-xs text-muted-foreground">Act:</span>
                        <span className="text-sm font-mono">{day.actual}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Progress value={day.accuracy} className="w-24 h-2" />
                      <span className="text-sm font-mono w-12">{day.accuracy}%</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Chart Placeholder */}
              <div className="mt-6 h-48 bg-muted/10 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Accuracy trend visualization</p>
                  <p className="text-xs">Interactive chart would display here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Risk Factor Analysis */}
        <div className="space-y-6">
          <Card className="mining-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-primary" />
                <span>Risk Factors</span>
              </CardTitle>
              <CardDescription>Feature importance analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {riskFactors.map((factor, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{factor.factor}</span>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className={`h-3 w-3 ${
                        factor.trend === 'increasing' ? 'text-destructive' :
                        factor.trend === 'decreasing' ? 'text-success' : 'text-muted-foreground'
                      }`} />
                      <span className="text-xs text-muted-foreground">{factor.trend}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Progress value={factor.importance * 100} className="flex-1 h-2" />
                    <span className="text-xs font-mono">{(factor.importance * 100).toFixed(1)}%</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="mining-card">
            <CardHeader>
              <CardTitle>Model Status</CardTitle>
              <CardDescription>Current system state</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Training Data</span>
                <Badge variant="secondary">2.4M samples</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Last Training</span>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs">6 hours ago</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Model Version</span>
                <Badge variant="outline">v2.1.3</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Next Update</span>
                <span className="text-xs text-muted-foreground">In 18 hours</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Alert Performance */}
      <Card className="mining-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-warning" />
            <span>Alert Performance Analysis</span>
          </CardTitle>
          <CardDescription>
            Historical accuracy of rockfall predictions and alert generation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="7days">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="7days">7 Days</TabsTrigger>
              <TabsTrigger value="30days">30 Days</TabsTrigger>
              <TabsTrigger value="90days">90 Days</TabsTrigger>
            </TabsList>
            
            {alertStats.map((stat, index) => (
              <TabsContent key={index} value={index === 0 ? "7days" : index === 1 ? "30days" : "90days"} className="mt-6">
                <div className="grid gap-4 md:grid-cols-4">
                  <div className="text-center p-4 rounded-lg bg-muted/20">
                    <p className="text-2xl font-bold text-primary">{stat.predicted}</p>
                    <p className="text-sm text-muted-foreground">Predicted Events</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/20">
                    <p className="text-2xl font-bold text-success">{stat.actual}</p>
                    <p className="text-sm text-muted-foreground">Actual Events</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/20">
                    <p className="text-2xl font-bold text-warning">{stat.falsePositives}</p>
                    <p className="text-sm text-muted-foreground">False Positives</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/20">
                    <p className="text-2xl font-bold text-foreground">{stat.accuracy}%</p>
                    <p className="text-sm text-muted-foreground">Overall Accuracy</p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}