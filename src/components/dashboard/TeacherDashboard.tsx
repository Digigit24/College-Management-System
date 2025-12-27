import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Calendar, FileCheck, BookOpen, Clock } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';

export default function TeacherDashboard() {
  const user = useAuthStore((state) => state.user);

  const todayClasses = [
    { time: '09:00 AM', class: '10A', subject: 'Mathematics', room: 'Room 101' },
    { time: '11:00 AM', class: '10B', subject: 'Mathematics', room: 'Room 102' },
    { time: '02:00 PM', class: '11A', subject: 'Physics', room: 'Lab 1' },
  ];

  const pendingTasks = [
    { task: 'Grade assignments for 10A', dueDate: 'Today' },
    { task: 'Prepare quiz for 10B', dueDate: 'Tomorrow' },
    { task: 'Submit attendance report', dueDate: 'This week' },
    { task: 'Review exam papers', dueDate: 'This week' },
  ];

  const stats = [
    {
      title: 'My Classes',
      value: user?.classes?.length || 0,
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Total Students',
      value: '156',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Pending Assignments',
      value: '12',
      icon: FileCheck,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      title: 'Today\'s Classes',
      value: todayClasses.length,
      icon: Clock,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">Welcome, {user?.full_name}!</h1>
        <p className="text-muted-foreground mt-1">
          Here's your schedule and tasks for today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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

      {/* Main Content */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Today's Classes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Today's Classes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {todayClasses.map((cls, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-accent rounded-md"
                >
                  <div className="text-center min-w-[70px]">
                    <p className="text-sm font-medium">{cls.time}</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{cls.subject}</p>
                    <p className="text-sm text-muted-foreground">
                      {cls.class} - {cls.room}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pending Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="w-5 h-5" />
              Pending Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingTasks.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 border rounded-md hover:bg-accent transition-colors"
                >
                  <input type="checkbox" className="w-4 h-4" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.task}</p>
                    <p className="text-xs text-muted-foreground">Due: {item.dueDate}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 md:grid-cols-3">
            <button className="text-left px-4 py-3 bg-accent hover:bg-accent/80 rounded-md transition-colors">
              <p className="font-medium">Mark Attendance</p>
              <p className="text-xs text-muted-foreground">Today's attendance</p>
            </button>
            <button className="text-left px-4 py-3 bg-accent hover:bg-accent/80 rounded-md transition-colors">
              <p className="font-medium">Create Assignment</p>
              <p className="text-xs text-muted-foreground">Assign homework</p>
            </button>
            <button className="text-left px-4 py-3 bg-accent hover:bg-accent/80 rounded-md transition-colors">
              <p className="font-medium">View Students</p>
              <p className="text-xs text-muted-foreground">My students list</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
