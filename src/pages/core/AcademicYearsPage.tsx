import React, { useState } from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { DataTable, Column, Action } from '@/components/common/DataTable';
import { PermissionGate } from '@/components/common/PermissionGate';
import { ModulePermission } from '@/config/modules.config';
import { Calendar, Edit, Trash2, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface AcademicYear {
  id: string;
  name: string;
  code: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'upcoming' | 'completed';
  isCurrent: boolean;
  totalStudents: number;
  totalClasses: number;
}

// Mock data
const mockAcademicYears: AcademicYear[] = [
  {
    id: '1',
    name: 'Academic Year 2025-2026',
    code: 'AY-2025-26',
    startDate: '2025-04-01',
    endDate: '2026-03-31',
    status: 'upcoming',
    isCurrent: false,
    totalStudents: 0,
    totalClasses: 0,
  },
  {
    id: '2',
    name: 'Academic Year 2024-2025',
    code: 'AY-2024-25',
    startDate: '2024-04-01',
    endDate: '2025-03-31',
    status: 'active',
    isCurrent: true,
    totalStudents: 2543,
    totalClasses: 48,
  },
  {
    id: '3',
    name: 'Academic Year 2023-2024',
    code: 'AY-2023-24',
    startDate: '2023-04-01',
    endDate: '2024-03-31',
    status: 'completed',
    isCurrent: false,
    totalStudents: 2312,
    totalClasses: 45,
  },
  {
    id: '4',
    name: 'Academic Year 2022-2023',
    code: 'AY-2022-23',
    startDate: '2022-04-01',
    endDate: '2023-03-31',
    status: 'completed',
    isCurrent: false,
    totalStudents: 2198,
    totalClasses: 42,
  },
];

export default function AcademicYearsPage() {
  const [academicYears] = useState<AcademicYear[]>(mockAcademicYears);
  const [isLoading] = useState(false);

  const handleAddYear = () => {
    console.log('Add academic year clicked');
  };

  const handleEdit = (year: AcademicYear) => {
    console.log('Edit year:', year);
  };

  const handleDelete = (year: AcademicYear) => {
    console.log('Delete year:', year);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusColor = (status: AcademicYear['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
      case 'completed':
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
    }
  };

  const columns: Column<AcademicYear>[] = [
    {
      header: 'Academic Year',
      accessor: 'name',
      cell: (value, row) => (
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center">
            <Calendar className="h-5 w-5 text-indigo-600" />
          </div>
          <div className="ml-3">
            <div className="flex items-center">
              <span className="font-semibold text-gray-900">{value}</span>
              {row.isCurrent && (
                <CheckCircle2 className="ml-2 h-4 w-4 text-green-500" />
              )}
            </div>
            <div className="text-sm text-gray-500">{row.code}</div>
          </div>
        </div>
      ),
    },
    {
      header: 'Duration',
      accessor: (row) => `${row.startDate} - ${row.endDate}`,
      cell: (_, row) => (
        <div>
          <div className="text-sm text-gray-900">
            {formatDate(row.startDate)} - {formatDate(row.endDate)}
          </div>
          <div className="text-xs text-gray-500">
            {Math.ceil(
              (new Date(row.endDate).getTime() - new Date(row.startDate).getTime()) /
                (1000 * 60 * 60 * 24)
            )}{' '}
            days
          </div>
        </div>
      ),
    },
    {
      header: 'Students',
      accessor: 'totalStudents',
      cell: (value) => (
        <span className="text-indigo-600 font-semibold">
          {value.toLocaleString()}
        </span>
      ),
    },
    {
      header: 'Classes',
      accessor: 'totalClasses',
      cell: (value) => <span className="text-gray-700 font-medium">{value}</span>,
    },
    {
      header: 'Status',
      accessor: 'status',
      cell: (value, row) => (
        <div className="flex flex-col gap-1">
          <Badge variant="default" className={getStatusColor(value)}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Badge>
          {row.isCurrent && (
            <span className="text-xs text-green-600 font-medium">Current Year</span>
          )}
        </div>
      ),
    },
  ];

  const actions: Action<AcademicYear>[] = [
    {
      label: 'Edit',
      icon: Edit,
      onClick: handleEdit,
    },
    {
      label: 'Delete',
      icon: Trash2,
      onClick: handleDelete,
      variant: 'danger',
    },
  ];

  const currentYear = academicYears.find((y) => y.isCurrent);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <PageHeader
        title="Academic Years"
        description="Manage academic years and sessions"
        action={{
          label: 'Add Academic Year',
          onClick: handleAddYear,
          icon: Calendar,
        }}
      />

      <div className="p-6 max-w-7xl mx-auto">
        {/* Current Year Highlight */}
        {currentYear && (
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-6 mb-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center mb-2">
                  <Calendar className="h-6 w-6 mr-2" />
                  <h2 className="text-xl font-bold">Current Academic Year</h2>
                </div>
                <p className="text-2xl font-bold mb-2">{currentYear.name}</p>
                <p className="text-indigo-100">
                  {formatDate(currentYear.startDate)} - {formatDate(currentYear.endDate)}
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{currentYear.totalStudents.toLocaleString()}</div>
                <div className="text-indigo-100">Students Enrolled</div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Years</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {academicYears.length}
                </p>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg">
                <Calendar className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active</p>
                <p className="text-3xl font-bold text-green-600 mt-2">
                  {academicYears.filter((y) => y.status === 'active').length}
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Upcoming</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">
                  {academicYears.filter((y) => y.status === 'upcoming').length}
                </p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <PermissionGate
          permission={ModulePermission.CORE_VIEW}
          fallback={
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12">
              <div className="text-center">
                <p className="text-gray-500 text-lg">
                  You don't have permission to view academic years
                </p>
              </div>
            </div>
          }
        >
          <DataTable
            data={academicYears}
            columns={columns}
            actions={actions}
            isLoading={isLoading}
            emptyMessage="No academic years found"
          />
        </PermissionGate>
      </div>
    </div>
  );
}
