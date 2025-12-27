import React, { useState } from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { DataTable, Column, Action } from '@/components/common/DataTable';
import { Briefcase, Edit, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Staff {
  id: string;
  name: string;
  employeeId: string;
  role: string;
  department: string;
  joiningDate: string;
  salary: string;
  status: 'active' | 'resigned' | 'retired';
}

const mockStaff: Staff[] = [
  { id: '1', name: 'Emma Wilson', employeeId: 'STAFF001', role: 'Library Manager', department: 'Library', joiningDate: '2020-08-20', salary: '$45,000', status: 'active' },
  { id: '2', name: 'David Martinez', employeeId: 'STAFF002', role: 'Accounts Manager', department: 'Accounts', joiningDate: '2019-09-10', salary: '$52,000', status: 'active' },
  { id: '3', name: 'Robert Brown', employeeId: 'STAFF003', role: 'Lab Technician', department: 'Science Lab', joiningDate: '2021-01-15', salary: '$38,000', status: 'active' },
];

export default function StaffPage() {
  const [staff] = useState<Staff[]>(mockStaff);

  const columns: Column<Staff>[] = [
    {
      header: 'Staff Member',
      accessor: 'name',
      cell: (value, row) => (
        <div>
          <div className="font-semibold text-gray-900 dark:text-white">{value}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{row.employeeId}</div>
        </div>
      ),
    },
    { header: 'Role', accessor: 'role' },
    { header: 'Department', accessor: 'department' },
    { header: 'Joining Date', accessor: (row) => new Date(row.joiningDate).toLocaleDateString() },
    { header: 'Salary', accessor: 'salary' },
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

  const actions: Action<Staff>[] = [
    { label: 'Edit', icon: Edit, onClick: (row) => console.log('Edit', row) },
    { label: 'Delete', icon: Trash2, onClick: (row) => console.log('Delete', row), variant: 'danger' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
      <div className="p-6 max-w-7xl mx-auto">
        <PageHeader
          title="Staff Management"
          description="Manage non-teaching staff"
          action={{ label: 'Add Staff', onClick: () => {}, icon: Briefcase }}
        />
        <DataTable data={staff} columns={columns} actions={actions} />
      </div>
    </div>
  );
}
