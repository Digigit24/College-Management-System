import React, { useState } from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { DataTable } from '@/components/common/DataTable';
import { PermissionGate } from '@/components/common/PermissionGate';
import type { Action, Column } from '@/components/common/DataTable';

import { ModulePermission } from '@/config/modules.config';
import { CalendarDays, Edit, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Session {
  id: string;
  name: string;
  code: string;
  academicYear: string;
  startDate: string;
  endDate: string;
  type: 'semester' | 'term' | 'quarter';
  status: 'active' | 'upcoming' | 'completed';
  totalClasses: number;
}

const mockSessions: Session[] = [
  {
    id: '1',
    name: 'Spring Semester 2025',
    code: 'SPR-2025',
    academicYear: 'AY 2024-2025',
    startDate: '2025-01-06',
    endDate: '2025-05-31',
    type: 'semester',
    status: 'active',
    totalClasses: 48,
  },
  {
    id: '2',
    name: 'Fall Semester 2024',
    code: 'FALL-2024',
    academicYear: 'AY 2024-2025',
    startDate: '2024-08-01',
    endDate: '2024-12-20',
    type: 'semester',
    status: 'completed',
    totalClasses: 48,
  },
  {
    id: '3',
    name: 'Summer Term 2024',
    code: 'SUM-2024',
    academicYear: 'AY 2023-2024',
    startDate: '2024-05-15',
    endDate: '2024-07-31',
    type: 'term',
    status: 'completed',
    totalClasses: 24,
  },
];

export default function SessionsPage() {
  const [sessions] = useState<Session[]>(mockSessions);

  const columns: Column<Session>[] = [
    {
      header: 'Session',
      accessor: 'name',
      cell: (value, row) => (
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <CalendarDays className="h-5 w-5 text-purple-600" />
          </div>
          <div className="ml-3">
            <div className="font-semibold text-gray-900">{value}</div>
            <div className="text-sm text-gray-500">{row.code}</div>
          </div>
        </div>
      ),
    },
    {
      header: 'Academic Year',
      accessor: 'academicYear',
    },
    {
      header: 'Duration',
      accessor: (row) => `${row.startDate} - ${row.endDate}`,
      cell: (_, row) => (
        <div>
          <div className="text-sm text-gray-900">
            {new Date(row.startDate).toLocaleDateString()} -{' '}
            {new Date(row.endDate).toLocaleDateString()}
          </div>
        </div>
      ),
    },
    {
      header: 'Type',
      accessor: 'type',
      cell: (value) => (
        <Badge variant="outline">
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </Badge>
      ),
    },
    {
      header: 'Classes',
      accessor: 'totalClasses',
    },
    {
      header: 'Status',
      accessor: 'status',
      cell: (value) => {
        const colors = {
          active: 'bg-green-100 text-green-800',
          upcoming: 'bg-blue-100 text-blue-800',
          completed: 'bg-gray-100 text-gray-800',
        };
        return (
          <Badge className={colors[value]}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Badge>
        );
      },
    },
  ];

  const actions: Action<Session>[] = [
    { label: 'Edit', icon: Edit, onClick: (row) => console.log('Edit', row) },
    { label: 'Delete', icon: Trash2, onClick: (row) => console.log('Delete', row), variant: 'danger' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
      <div className="p-6 max-w-7xl mx-auto">
        <PageHeader
          title="Sessions"
          description="Manage academic sessions and terms"
          action={{ label: 'Add Session', onClick: () => {}, icon: CalendarDays }}
        />

        <PermissionGate permission={ModulePermission.CORE_VIEW}>
          <DataTable data={sessions} columns={columns} actions={actions} />
        </PermissionGate>
      </div>
    </div>
  );
}
