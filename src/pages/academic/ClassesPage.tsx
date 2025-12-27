import React, { useState } from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { DataTable, Column, Action } from '@/components/common/DataTable';
import { PermissionGate } from '@/components/common/PermissionGate';
import { ModulePermission } from '@/config/modules.config';
import { GraduationCap, Edit, Trash2, Users, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Class {
  id: string;
  name: string;
  code: string;
  grade: string;
  section: string;
  classTeacher: string;
  totalStudents: number;
  capacity: number;
  subjects: number;
  room: string;
  status: 'active' | 'inactive';
}

const mockClasses: Class[] = [
  {
    id: '1',
    name: 'Class 10 - Section A',
    code: '10-A',
    grade: '10',
    section: 'A',
    classTeacher: 'Dr. Sarah Johnson',
    totalStudents: 45,
    capacity: 50,
    subjects: 8,
    room: 'Room 201',
    status: 'active',
  },
  {
    id: '2',
    name: 'Class 10 - Section B',
    code: '10-B',
    grade: '10',
    section: 'B',
    classTeacher: 'Prof. Michael Chen',
    totalStudents: 48,
    capacity: 50,
    subjects: 8,
    room: 'Room 202',
    status: 'active',
  },
  {
    id: '3',
    name: 'Class 11 - Section A (Science)',
    code: '11-A-SCI',
    grade: '11',
    section: 'A',
    classTeacher: 'Dr. Emily Watson',
    totalStudents: 42,
    capacity: 50,
    subjects: 10,
    room: 'Room 301',
    status: 'active',
  },
  {
    id: '4',
    name: 'Class 11 - Section B (Commerce)',
    code: '11-B-COM',
    grade: '11',
    section: 'B',
    classTeacher: 'Prof. David Martinez',
    totalStudents: 40,
    capacity: 50,
    subjects: 9,
    room: 'Room 302',
    status: 'active',
  },
  {
    id: '5',
    name: 'Class 12 - Section A (Science)',
    code: '12-A-SCI',
    grade: '12',
    section: 'A',
    classTeacher: 'Dr. Robert Wilson',
    totalStudents: 38,
    capacity: 50,
    subjects: 10,
    room: 'Room 401',
    status: 'active',
  },
];

export default function ClassesPage() {
  const [classes] = useState<Class[]>(mockClasses);

  const columns: Column<Class>[] = [
    {
      header: 'Class',
      accessor: 'name',
      cell: (value, row) => (
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="ml-3">
            <div className="font-semibold text-gray-900 dark:text-white">{value}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{row.code}</div>
          </div>
        </div>
      ),
    },
    {
      header: 'Class Teacher',
      accessor: 'classTeacher',
      cell: (value) => (
        <div className="text-sm text-gray-700 dark:text-gray-300">{value}</div>
      ),
    },
    {
      header: 'Students',
      accessor: (row) => `${row.totalStudents}/${row.capacity}`,
      cell: (_, row) => (
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-2 text-gray-400" />
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            {row.totalStudents}
          </span>
          <span className="text-gray-500 dark:text-gray-400">/{row.capacity}</span>
        </div>
      ),
    },
    {
      header: 'Subjects',
      accessor: 'subjects',
      cell: (value) => (
        <div className="flex items-center">
          <BookOpen className="h-4 w-4 mr-2 text-gray-400" />
          <span className="text-gray-700 dark:text-gray-300">{value}</span>
        </div>
      ),
    },
    {
      header: 'Room',
      accessor: 'room',
      cell: (value) => (
        <Badge variant="outline" className="dark:border-slate-600 dark:text-slate-300">
          {value}
        </Badge>
      ),
    },
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

  const actions: Action<Class>[] = [
    { label: 'Edit', icon: Edit, onClick: (row) => console.log('Edit', row) },
    { label: 'Delete', icon: Trash2, onClick: (row) => console.log('Delete', row), variant: 'danger' },
  ];

  const totalStudents = classes.reduce((sum, c) => sum + c.totalStudents, 0);
  const totalCapacity = classes.reduce((sum, c) => sum + c.capacity, 0);
  const occupancyRate = Math.round((totalStudents / totalCapacity) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
      <div className="p-6 max-w-7xl mx-auto">
        <PageHeader
          title="Classes"
          description="Manage classes, sections, and student allocations"
          action={{ label: 'Add Class', onClick: () => {}, icon: GraduationCap }}
        />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Classes</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{classes.length}</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Students</p>
            <p className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mt-2">{totalStudents}</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Capacity</p>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">{totalCapacity}</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Occupancy Rate</p>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">{occupancyRate}%</p>
          </div>
        </div>

        <PermissionGate permission={ModulePermission.ACADEMIC_VIEW}>
          <DataTable data={classes} columns={columns} actions={actions} />
        </PermissionGate>
      </div>
    </div>
  );
}
