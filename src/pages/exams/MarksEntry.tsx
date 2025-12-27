import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Save, Upload } from 'lucide-react';

export default function MarksEntry() {
  const [selectedExam, setSelectedExam] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const students = [
    { id: '1', name: 'John Doe', rollNumber: '001', marks: '', maxMarks: 100 },
    { id: '2', name: 'Jane Smith', rollNumber: '002', marks: '', maxMarks: 100 },
    { id: '3', name: 'Mike Wilson', rollNumber: '003', marks: '', maxMarks: 100 },
    { id: '4', name: 'Sarah Johnson', rollNumber: '004', marks: '', maxMarks: 100 },
    { id: '5', name: 'David Brown', rollNumber: '005', marks: '', maxMarks: 100 },
  ];

  const [marksData, setMarksData] = useState(students);

  const handleMarksChange = (id: string, value: string) => {
    setMarksData(
      marksData.map((student) =>
        student.id === id ? { ...student, marks: value } : student
      )
    );
  };

  const handleSave = () => {
    console.log('Saving marks:', marksData);
    alert('Marks saved successfully!');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Marks Entry</h1>
        <p className="text-muted-foreground mt-1">
          Enter examination marks for students
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Select Exam</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="exam">Examination</Label>
              <Select
                id="exam"
                value={selectedExam}
                onChange={(e) => setSelectedExam(e.target.value)}
              >
                <option value="">Select Exam</option>
                <option value="mid-term-math">Mid-Term Mathematics</option>
                <option value="final-physics">Final Physics Exam</option>
                <option value="chemistry-test">Chemistry Test</option>
              </Select>
            </div>

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
                <option value="11B">11B</option>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {selectedExam && selectedClass && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Student Marks</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Upload className="w-4 h-4 mr-2" />
                  Import Excel
                </Button>
                <Button size="sm" onClick={handleSave}>
                  <Save className="w-4 h-4 mr-2" />
                  Save Marks
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Roll No.</TableHead>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Max Marks</TableHead>
                  <TableHead>Marks Obtained</TableHead>
                  <TableHead>Percentage</TableHead>
                  <TableHead>Grade</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {marksData.map((student) => {
                  const marks = parseFloat(student.marks) || 0;
                  const percentage = (marks / student.maxMarks) * 100;
                  const grade =
                    percentage >= 90
                      ? 'A+'
                      : percentage >= 80
                      ? 'A'
                      : percentage >= 70
                      ? 'B'
                      : percentage >= 60
                      ? 'C'
                      : percentage >= 50
                      ? 'D'
                      : 'F';

                  return (
                    <TableRow key={student.id}>
                      <TableCell>{student.rollNumber}</TableCell>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.maxMarks}</TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          min="0"
                          max={student.maxMarks}
                          value={student.marks}
                          onChange={(e) =>
                            handleMarksChange(student.id, e.target.value)
                          }
                          className="w-24"
                          placeholder="0"
                        />
                      </TableCell>
                      <TableCell>
                        {student.marks ? `${percentage.toFixed(2)}%` : '-'}
                      </TableCell>
                      <TableCell>
                        {student.marks ? (
                          <span className="font-medium">{grade}</span>
                        ) : (
                          '-'
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
