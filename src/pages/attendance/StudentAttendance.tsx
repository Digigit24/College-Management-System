import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Save, Calendar } from 'lucide-react';

export default function StudentAttendance() {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  const students = [
    { id: '1', name: 'John Doe', rollNumber: '001', status: 'present' },
    { id: '2', name: 'Jane Smith', rollNumber: '002', status: 'present' },
    { id: '3', name: 'Mike Wilson', rollNumber: '003', status: 'absent' },
    { id: '4', name: 'Sarah Johnson', rollNumber: '004', status: 'present' },
    { id: '5', name: 'David Brown', rollNumber: '005', status: 'late' },
  ];

  const [attendance, setAttendance] = useState(students);

  const toggleStatus = (id: string) => {
    const statuses = ['present', 'absent', 'late', 'half_day'];
    setAttendance(
      attendance.map((student) => {
        if (student.id === id) {
          const currentIndex = statuses.indexOf(student.status);
          const nextIndex = (currentIndex + 1) % statuses.length;
          return { ...student, status: statuses[nextIndex] };
        }
        return student;
      })
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present':
        return 'success';
      case 'absent':
        return 'destructive';
      case 'late':
        return 'warning';
      case 'half_day':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const stats = {
    total: attendance.length,
    present: attendance.filter((s) => s.status === 'present').length,
    absent: attendance.filter((s) => s.status === 'absent').length,
    late: attendance.filter((s) => s.status === 'late').length,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Student Attendance</h1>
        <p className="text-muted-foreground mt-1">Mark daily attendance for students</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Total Students</p>
            <p className="text-2xl font-bold">{stats.total}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Present</p>
            <p className="text-2xl font-bold text-green-600">{stats.present}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Absent</p>
            <p className="text-2xl font-bold text-red-600">{stats.absent}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-muted-foreground">Late</p>
            <p className="text-2xl font-bold text-yellow-600">{stats.late}</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mark Attendance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="class">Class</Label>
              <Select
                id="class"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <option value="">Select Class</option>
                <option value="10A">10A</option>
                <option value="10B">10B</option>
                <option value="11A">11A</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  id="date"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 pl-9 text-sm"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {selectedClass && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Students - {selectedClass}</span>
              <Button size="sm">
                <Save className="w-4 h-4 mr-2" />
                Save Attendance
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Roll No.</TableHead>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendance.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.rollNumber}</TableCell>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(student.status)}>
                        {student.status.replace('_', ' ')}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleStatus(student.id)}
                      >
                        Change Status
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
