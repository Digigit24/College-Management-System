import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Save, Upload } from 'lucide-react';

export default function CreateAssignment() {
  const [formData, setFormData] = useState({
    title: '',
    subject: '',
    class: '',
    section: '',
    description: '',
    dueDate: '',
    totalMarks: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating assignment:', formData);
    alert('Assignment created successfully!');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create Assignment</h1>
        <p className="text-muted-foreground mt-1">Create a new assignment for students</p>
      </div>

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Assignment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Chapter 5 Problems"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="English">English</option>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="class">Class *</Label>
                <Select
                  id="class"
                  value={formData.class}
                  onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                  required
                >
                  <option value="">Select Class</option>
                  <option value="10A">10A</option>
                  <option value="10B">10B</option>
                  <option value="11A">11A</option>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="section">Section</Label>
                <Input
                  id="section"
                  placeholder="A"
                  value={formData.section}
                  onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date *</Label>
                <Input
                  id="dueDate"
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="totalMarks">Total Marks</Label>
                <Input
                  id="totalMarks"
                  type="number"
                  placeholder="100"
                  value={formData.totalMarks}
                  onChange={(e) => setFormData({ ...formData, totalMarks: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Assignment instructions and details..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={5}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="attachments">Attachments</Label>
              <div className="flex items-center gap-2">
                <Input id="attachments" type="file" multiple />
                <Button type="button" variant="outline">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload
                </Button>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">
                <Save className="w-4 h-4 mr-2" />
                Create Assignment
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </div>
  );
}
