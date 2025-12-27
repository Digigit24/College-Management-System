import React, { useState } from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { DataTable } from '@/components/common/DataTable';
import type { Action, Column } from '@/components/common/DataTable';

import { Calendar, Edit, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Holiday {
  id: string;
  name: string;
  date: string;
  type: 'national' | 'regional' | 'college';
  description: string;
}

const mockHolidays: Holiday[] = [
  { id: '1', name: 'Republic Day', date: '2025-01-26', type: 'national', description: 'National holiday' },
  { id: '2', name: 'Holi', date: '2025-03-14', type: 'national', description: 'Festival of colors' },
  { id: '3', name: 'Independence Day', date: '2025-08-15', type: 'national', description: 'National holiday' },
  { id: '4', name: 'Diwali', date: '2025-10-20', type: 'national', description: 'Festival of lights' },
  { id: '5', name: 'College Foundation Day', date: '2025-09-15', type: 'college', description: 'College anniversary' },
];

export default function HolidaysPage() {
  const [holidays] = useState<Holiday[]>(mockHolidays);

  const columns: Column<Holiday>[] = [
    {
      header: 'Holiday Name',
      accessor: 'name',
      cell: (value, row) => (
        <div>
          <div className="font-semibold text-gray-900 dark:text-white">{value}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{row.description}</div>
        </div>
      ),
    },
    {
      header: 'Date',
      accessor: 'date',
      cell: (value) => new Date(value).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    },
    {
      header: 'Type',
      accessor: 'type',
      cell: (value) => {
        const colors = {
          national: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
          regional: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
          college: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
        };
        return <Badge className={colors[value]}>{value.charAt(0).toUpperCase() + value.slice(1)}</Badge>;
      },
    },
  ];

  const actions: Action<Holiday>[] = [
    { label: 'Edit', icon: Edit, onClick: (row) => console.log('Edit', row) },
    { label: 'Delete', icon: Trash2, onClick: (row) => console.log('Delete', row), variant: 'danger' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
      <div className="p-6 max-w-7xl mx-auto">
        <PageHeader
          title="Holidays"
          description="Manage academic holidays and leave calendar"
          action={{ label: 'Add Holiday', onClick: () => {}, icon: Calendar }}
        />
        <DataTable data={holidays} columns={columns} actions={actions} />
      </div>
    </div>
  );
}
