import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, BookOpen, FileCheck, DollarSign, Award, Bell } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';

export default function StudentDashboard() {
  const user = useAuthStore((state) => state.user);

  const upcomingClasses = [
    { time: '09:00 AM', subject: 'Mathematics', teacher: 'Mrs. Johnson', room: 'Room 101' },
    { time: '11:00 AM', subject: 'Physics', teacher: 'Mr. Smith', room: 'Lab 1' },
    { time: '02:00 PM', subject: 'English', teacher: 'Ms. Brown', room: 'Room 205' },
  ];

  const assignments = [
    { title: 'Math Assignment - Chapter 5', subject: 'Mathematics', dueDate: 'Tomorrow', status: 'pending' },
    { title: 'Physics Lab Report', subject: 'Physics', dueDate: 'In 3 days', status: 'pending' },
    { title: 'English Essay', subject: 'English', dueDate: 'Next week', status: 'completed' },
  ];

  const recentNotices = [
    { title: 'Parent-Teacher Meeting', date: 'Dec 30, 2025', type: 'important' },
    { title: 'Sports Day Announcement', date: 'Jan 5, 2026', type: 'event' },
    { title: 'Library Books Return Reminder', date: 'Dec 28, 2025', type: 'reminder' },
  ];

  const stats = [
    {
      title: 'Attendance',
      value: '94.5%',
      icon: Calendar,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Subjects',
      value: '8',
      icon: BookOpen,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Pending Tasks',
      value: '2',
      icon: FileCheck,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      title: 'Fee Status',
      value: 'Paid',
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">Welcome, {user?.full_name}!</h1>
        <p className="text-muted-foreground mt-1">
          Class {user?.class} - Roll No: {user?.roll_number}
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
        {/* Today's Schedule */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Today's Classes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingClasses.map((cls, index) => (
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
                      {cls.teacher} - {cls.room}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Assignments */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="w-5 h-5" />
              Assignments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {assignments.map((assignment, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 border rounded-md"
                >
                  <div className="flex-1">
                    <p className="font-medium text-sm">{assignment.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {assignment.subject} • Due: {assignment.dueDate}
                    </p>
                  </div>
                  <Badge
                    variant={assignment.status === 'completed' ? 'success' : 'warning'}
                  >
                    {assignment.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notices and Performance */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Recent Notices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentNotices.map((notice, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 border rounded-md hover:bg-accent transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-medium text-sm">{notice.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notice.date}</p>
                  </div>
                  <Badge variant="outline">{notice.type}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Academic Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Mathematics</span>
                  <span className="font-medium">92%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Physics</span>
                  <span className="font-medium">88%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '88%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>English</span>
                  <span className="font-medium">85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
