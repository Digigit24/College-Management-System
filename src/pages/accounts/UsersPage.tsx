import React, { useState } from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { DataTable } from '@/components/common/DataTable';
import type { Action, Column } from '@/components/common/DataTable';

import { PermissionGate } from '@/components/common/PermissionGate';
import { ModulePermission } from '@/config/modules.config';
import { Users as UsersIcon, Edit, Trash2, Shield, Mail, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: string;
  department?: string;
  status: 'active' | 'inactive' | 'suspended';
  lastLogin: string;
  createdAt: string;
}

const mockUsers: User[] = [
  {
    id: '1',
    fullName: 'John Administrator',
    email: 'admin@college.com',
    phone: '+1 555-0101',
    role: 'Super Admin',
    status: 'active',
    lastLogin: '2025-01-15 09:30',
    createdAt: '2024-01-01',
  },
  {
    id: '2',
    fullName: 'Dr. Sarah Johnson',
    email: 'sarah.johnson@college.com',
    phone: '+1 555-0102',
    role: 'HOD',
    department: 'Computer Science',
    status: 'active',
    lastLogin: '2025-01-15 08:45',
    createdAt: '2024-06-15',
  },
  {
    id: '3',
    fullName: 'Prof. Michael Chen',
    email: 'michael.chen@college.com',
    phone: '+1 555-0103',
    role: 'Teacher',
    department: 'Mathematics',
    status: 'active',
    lastLogin: '2025-01-14 16:20',
    createdAt: '2024-08-10',
  },
  {
    id: '4',
    fullName: 'Emma Wilson',
    email: 'emma.wilson@college.com',
    phone: '+1 555-0104',
    role: 'Library Manager',
    department: 'Library',
    status: 'active',
    lastLogin: '2025-01-15 07:15',
    createdAt: '2024-08-20',
  },
  {
    id: '5',
    fullName: 'David Martinez',
    email: 'david.martinez@college.com',
    phone: '+1 555-0105',
    role: 'Accounts Staff',
    department: 'Accounts',
    status: 'active',
    lastLogin: '2025-01-15 09:00',
    createdAt: '2024-09-10',
  },
  {
    id: '6',
    fullName: 'Lisa Thompson',
    email: 'lisa.thompson@college.com',
    phone: '+1 555-0106',
    role: 'Teacher',
    department: 'Physics',
    status: 'suspended',
    lastLogin: '2024-12-20 14:30',
    createdAt: '2023-01-15',
  },
];

export default function UsersPage() {
  const [users] = useState<User[]>(mockUsers);

  const columns: Column<User>[] = [
    {
      header: 'User',
      accessor: 'fullName',
      cell: (value, row) => (
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
            <span className="text-indigo-600 font-semibold">
              {value.split(' ').map((n: string) => n[0]).join('')}
            </span>
          </div>
          <div className="ml-3">
            <div className="font-semibold text-gray-900">{value}</div>
            <div className="flex items-center text-xs text-gray-500 mt-1">
              <Mail className="h-3 w-3 mr-1" />
              {row.email}
            </div>
          </div>
        </div>
      ),
    },
    {
      header: 'Contact',
      accessor: 'phone',
      cell: (value) => (
        <div className="flex items-center text-sm text-gray-700">
          <Phone className="h-3 w-3 mr-2 text-gray-400" />
          {value}
        </div>
      ),
    },
    {
      header: 'Role & Department',
      accessor: 'role',
      cell: (value, row) => (
        <div>
          <div className="flex items-center">
            <Shield className="h-3 w-3 mr-1 text-indigo-600" />
            <span className="font-medium text-gray-900">{value}</span>
          </div>
          {row.department && (
            <div className="text-xs text-gray-500 mt-1">{row.department}</div>
          )}
        </div>
      ),
    },
    {
      header: 'Last Login',
      accessor: 'lastLogin',
      cell: (value) => (
        <div className="text-sm text-gray-600">{value}</div>
      ),
    },
    {
      header: 'Status',
      accessor: 'status',
      cell: (value) => {
        const colors = {
          active: 'bg-green-100 text-green-800',
          inactive: 'bg-gray-100 text-gray-800',
          suspended: 'bg-red-100 text-red-800',
        };
        return (
          <Badge className={colors[value]}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Badge>
        );
      },
    },
  ];

  const actions: Action<User>[] = [
    { label: 'Edit', icon: Edit, onClick: (row) => console.log('Edit', row) },
    { label: 'Delete', icon: Trash2, onClick: (row) => console.log('Delete', row), variant: 'danger' },
  ];

  const activeUsers = users.filter(u => u.status === 'active').length;
  const suspendedUsers = users.filter(u => u.status === 'suspended').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
      <div className="p-6 max-w-7xl mx-auto">
        <PageHeader
          title="Users"
          description="Manage system users and access control"
          action={{ label: 'Add User', onClick: () => {}, icon: UsersIcon }}
        />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Users</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{users.length}</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active</p>
            <p className="text-3xl font-bold text-green-600 mt-2">{activeUsers}</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Suspended</p>
            <p className="text-3xl font-bold text-red-600 mt-2">{suspendedUsers}</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Roles</p>
            <p className="text-3xl font-bold text-indigo-600 mt-2">8</p>
          </div>
        </div>

        <PermissionGate permission={ModulePermission.CORE_VIEW}>
          <DataTable data={users} columns={columns} actions={actions} />
        </PermissionGate>
      </div>
    </div>
  );
}
