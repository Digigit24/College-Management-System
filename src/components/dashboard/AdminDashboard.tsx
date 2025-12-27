import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, GraduationCap, BookOpen, DollarSign, TrendingUp, UserCheck } from 'lucide-react';

export default function AdminDashboard() {
  const stats = [
    {
      title: 'Total Students',
      value: '1,234',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Total Teachers',
      value: '89',
      change: '+3%',
      icon: GraduationCap,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Total Classes',
      value: '45',
      change: '0%',
      icon: BookOpen,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Fee Collection',
      value: '$125,450',
      change: '+8%',
      icon: DollarSign,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
    {
      title: 'Attendance Rate',
      value: '94.5%',
      change: '+2%',
      icon: UserCheck,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      title: 'Performance',
      value: '87.2%',
      change: '+5%',
      icon: TrendingUp,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
    },
  ];

  const recentActivities = [
    { action: 'New student admission', user: 'John Doe', time: '2 hours ago' },
    { action: 'Fee payment received', user: 'Jane Smith', time: '3 hours ago' },
    { action: 'New teacher joined', user: 'Sarah Johnson', time: '5 hours ago' },
    { action: 'Exam results published', user: 'System', time: '1 day ago' },
    { action: 'Library book issued', user: 'Mike Wilson', time: '1 day ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold mt-2">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
                  </div>
                  <div className={`${stat.bgColor} p-3 rounded-lg`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activities */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.user}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <button className="text-left px-4 py-3 bg-accent hover:bg-accent/80 rounded-md transition-colors">
                <p className="font-medium">Add New Student</p>
                <p className="text-xs text-muted-foreground">Register a new student</p>
              </button>
              <button className="text-left px-4 py-3 bg-accent hover:bg-accent/80 rounded-md transition-colors">
                <p className="font-medium">Schedule Exam</p>
                <p className="text-xs text-muted-foreground">Create new examination</p>
              </button>
              <button className="text-left px-4 py-3 bg-accent hover:bg-accent/80 rounded-md transition-colors">
                <p className="font-medium">Generate Report</p>
                <p className="text-xs text-muted-foreground">View analytics and reports</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
