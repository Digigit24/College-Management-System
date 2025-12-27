import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExamsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const exams = [
    {
      id: '1',
      name: 'Mid-Term Mathematics',
      subject: 'Mathematics',
      class: '10A',
      maxMarks: 100,
      date: '2026-01-15',
      status: 'scheduled',
    },
    {
      id: '2',
      name: 'Final Physics Exam',
      subject: 'Physics',
      class: '11A',
      maxMarks: 100,
      date: '2026-03-20',
      status: 'draft',
    },
    {
      id: '3',
      name: 'Chemistry Test',
      subject: 'Chemistry',
      class: '10B',
      maxMarks: 50,
      date: '2025-12-28',
      status: 'completed',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'default';
      case 'draft':
        return 'secondary';
      case 'completed':
        return 'success';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Examinations</h1>
          <p className="text-muted-foreground mt-1">
            Manage all examinations and tests
          </p>
        </div>
        <Link to="/exams/create">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create New Test
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Exams</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search exams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Exam Name</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Class</TableHead>
                <TableHead>Max Marks</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {exams.map((exam) => (
                <TableRow key={exam.id}>
                  <TableCell className="font-medium">{exam.name}</TableCell>
                  <TableCell>{exam.subject}</TableCell>
                  <TableCell>{exam.class}</TableCell>
                  <TableCell>{exam.maxMarks}</TableCell>
                  <TableCell>{new Date(exam.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(exam.status)}>
                      {exam.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="w-4 h-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
