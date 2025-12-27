import type { Action, Column } from '@/components/common/DataTable';
import { DataTable } from '@/components/common/DataTable';
import { PageHeader } from '@/components/common/PageHeader';
import { useState } from 'react';

import { Badge } from '@/components/ui/badge';
import { Edit, Mail, Phone, Trash2, Users } from 'lucide-react';

interface Faculty {
  id: string;
  name: string;
  employeeId: string;
  department: string;
  designation: string;
  email: string;
  phone: string;
  subjects: string[];
  experience: number;
  status: 'active' | 'on-leave' | 'inactive';
}

const mockFaculties: Faculty[] = [
  { id: '1', name: 'Dr. Sarah Johnson', employeeId: 'EMP001', department: 'Computer Science', designation: 'Professor', email: 'sarah.j@college.com', phone: '+1 555-0101', subjects: ['Data Structures', 'Algorithms'], experience: 15, status: 'active' },
  { id: '2', name: 'Prof. Michael Chen', employeeId: 'EMP002', department: 'Mathematics', designation: 'Associate Professor', email: 'michael.c@college.com', phone: '+1 555-0102', subjects: ['Calculus', 'Linear Algebra'], experience: 12, status: 'active' },
  { id: '3', name: 'Dr. Lisa Thompson', employeeId: 'EMP003', department: 'Physics', designation: 'Assistant Professor', email: 'lisa.t@college.com', phone: '+1 555-0103', subjects: ['Mechanics', 'Thermodynamics'], experience: 8, status: 'active' },
  { id: '4', name: 'Prof. David Martinez', employeeId: 'EMP004', department: 'Chemistry', designation: 'Professor', email: 'david.m@college.com', phone: '+1 555-0104', subjects: ['Organic Chemistry'], experience: 18, status: 'on-leave' },
];

export default function FacultiesPage() {
  const [faculties] = useState<Faculty[]>(mockFaculties);

  const columns: Column<Faculty>[] = [
    {
      header: 'Faculty',
      accessor: 'name',
      cell: (value, row) => (
        <div>
          <div className="font-semibold text-gray-900 dark:text-white">{value}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">{row.employeeId}</div>
        </div>
      ),
    },
    { header: 'Department', accessor: 'department' },
    { header: 'Designation', accessor: 'designation' },
    {
      header: 'Contact',
      accessor: 'email',
      cell: (value, row) => (
        <div className="text-sm">
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <Mail className="h-3 w-3 mr-1" />
            {value}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
            <Phone className="h-3 w-3 mr-1" />
            {row.phone}
          </div>
        </div>
      ),
    },
    {
      header: 'Experience',
      accessor: 'experience',
      cell: (value) => `${value} years`,
    },
    {
      header: 'Status',
      accessor: 'status',
      cell: (value) => {
        const colors = {
          active: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
          'on-leave': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
          inactive: 'bg-gray-100 text-gray-800',
        };
        return <Badge className={colors[value]}>{value.replace('-', ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</Badge>;
      },
    },
  ];

  const actions: Action<Faculty>[] = [
    { label: 'Edit', icon: Edit, onClick: (row) => console.log('Edit', row) },
    { label: 'Delete', icon: Trash2, onClick: (row) => console.log('Delete', row), variant: 'danger' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
      <div className="p-6 max-w-7xl mx-auto">
        <PageHeader
          title="Faculty Members"
          description="Manage faculty members and teaching staff"
          action={{ label: 'Add Faculty', onClick: () => {}, icon: Users }}
        />
        <DataTable data={faculties} columns={columns} actions={actions} />
      </div>
    </div>
  );
}
