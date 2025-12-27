import type { Action, Column } from '@/components/common/DataTable';
import { DataTable } from '@/components/common/DataTable';
import { PageHeader } from '@/components/common/PageHeader';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Building2, Edit, Trash2 } from 'lucide-react';

interface Department {
  id: string;
  name: string;
  code: string;
  head: string;
  totalStaff: number;
  totalStudents: number;
  established: string;
  status: 'active' | 'inactive';
}

const mockDepartments: Department[] = [
  { id: '1', name: 'Computer Science', code: 'CS', head: 'Dr. Sarah Johnson', totalStaff: 25, totalStudents: 450, established: '1995', status: 'active' },
  { id: '2', name: 'Mathematics', code: 'MATH', head: 'Prof. Michael Chen', totalStaff: 18, totalStudents: 320, established: '1985', status: 'active' },
  { id: '3', name: 'Physics', code: 'PHY', head: 'Dr. Lisa Thompson', totalStaff: 15, totalStudents: 280, established: '1985', status: 'active' },
  { id: '4', name: 'Chemistry', code: 'CHEM', head: 'Prof. David Martinez', totalStaff: 14, totalStudents: 260, established: '1990', status: 'active' },
  { id: '5', name: 'English Literature', code: 'ENG', head: 'Dr. Emily Watson', totalStaff: 12, totalStudents: 240, established: '1985', status: 'active' },
];

export default function DepartmentsPage() {
  const [departments] = useState<Department[]>(mockDepartments);

  const columns: Column<Department>[] = [
    {
      header: 'Department',
      accessor: 'name',
      cell: (value, row) => (
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
            <Building2 className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="ml-3">
            <div className="font-semibold text-gray-900 dark:text-white">{value}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{row.code}</div>
          </div>
        </div>
      ),
    },
    { header: 'Head of Department', accessor: 'head' },
    {
      header: 'Staff',
      accessor: 'totalStaff',
      cell: (value) => <span className="font-semibold text-indigo-600 dark:text-indigo-400">{value}</span>,
    },
    {
      header: 'Students',
      accessor: 'totalStudents',
      cell: (value) => <span className="font-semibold text-green-600 dark:text-green-400">{value}</span>,
    },
    { header: 'Established', accessor: 'established' },
    {
      header: 'Status',
      accessor: 'status',
      cell: (value) => (
        <Badge className={value === 'active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-gray-100 text-gray-800'}>
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </Badge>
      ),
    },
  ];

  const actions: Action<Department>[] = [
    { label: 'Edit', icon: Edit, onClick: (row) => console.log('Edit', row) },
    { label: 'Delete', icon: Trash2, onClick: (row) => console.log('Delete', row), variant: 'danger' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
      <div className="p-6 max-w-7xl mx-auto">
        <PageHeader
          title="Departments"
          description="Manage academic departments and divisions"
          action={{ label: 'Add Department', onClick: () => {}, icon: Building2 }}
        />
        <DataTable data={departments} columns={columns} actions={actions} />
      </div>
    </div>
  );
}
