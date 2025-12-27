import type { Action, Column } from '@/components/common/DataTable';
import { DataTable } from '@/components/common/DataTable';
import { PageHeader } from '@/components/common/PageHeader';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { BookOpen, Edit, Trash2 } from 'lucide-react';

interface Subject {
  id: string;
  name: string;
  code: string;
  department: string;
  credits: number;
  type: 'theory' | 'practical' | 'both';
  semester: string;
  totalClasses: number;
}

const mockSubjects: Subject[] = [
  { id: '1', name: 'Data Structures', code: 'CS301', department: 'Computer Science', credits: 4, type: 'both', semester: 'Semester 3', totalClasses: 8 },
  { id: '2', name: 'Calculus I', code: 'MATH101', department: 'Mathematics', credits: 3, type: 'theory', semester: 'Semester 1', totalClasses: 12 },
  { id: '3', name: 'Physics Lab', code: 'PHY102L', department: 'Physics', credits: 2, type: 'practical', semester: 'Semester 1', totalClasses: 6 },
  { id: '4', name: 'Organic Chemistry', code: 'CHEM201', department: 'Chemistry', credits: 4, type: 'both', semester: 'Semester 2', totalClasses: 7 },
  { id: '5', name: 'Database Systems', code: 'CS401', department: 'Computer Science', credits: 4, type: 'both', semester: 'Semester 4', totalClasses: 5 },
];

export default function SubjectsPage() {
  const [subjects] = useState<Subject[]>(mockSubjects);

  const columns: Column<Subject>[] = [
    {
      header: 'Subject',
      accessor: 'name',
      cell: (value, row) => (
        <div>
          <div className="font-semibold text-gray-900 dark:text-white">{value}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{row.code}</div>
        </div>
      ),
    },
    { header: 'Department', accessor: 'department' },
    { header: 'Credits', accessor: 'credits' },
    {
      header: 'Type',
      accessor: 'type',
      cell: (value) => {
        const colors = {
          theory: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
          practical: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
          both: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
        };
        return <Badge className={colors[value]}>{value.charAt(0).toUpperCase() + value.slice(1)}</Badge>;
      },
    },
    { header: 'Semester', accessor: 'semester' },
    { header: 'Classes', accessor: 'totalClasses' },
  ];

  const actions: Action<Subject>[] = [
    { label: 'Edit', icon: Edit, onClick: (row) => console.log('Edit', row) },
    { label: 'Delete', icon: Trash2, onClick: (row) => console.log('Delete', row), variant: 'danger' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
      <div className="p-6 max-w-7xl mx-auto">
        <PageHeader
          title="Subjects"
          description="Manage subjects and course curriculum"
          action={{ label: 'Add Subject', onClick: () => {}, icon: BookOpen }}
        />
        <DataTable data={subjects} columns={columns} actions={actions} />
      </div>
    </div>
  );
}
