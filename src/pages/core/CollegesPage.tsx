import type { Action, Column } from '@/components/common/DataTable';
import { DataTable } from '@/components/common/DataTable';
import { PageHeader } from '@/components/common/PageHeader';
import { useState } from 'react';

import { PermissionGate } from '@/components/common/PermissionGate';
import { Badge } from '@/components/ui/badge';
import { ModulePermission } from '@/config/modules.config';
import { Building2, Edit, Mail, MapPin, Phone, Trash2 } from 'lucide-react';

interface College {
  id: string;
  name: string;
  code: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  website?: string;
  establishedYear: number;
  status: 'active' | 'inactive';
  totalStudents: number;
  totalStaff: number;
}

// Mock data
const mockColleges: College[] = [
  {
    id: '1',
    name: 'Springfield College of Arts & Science',
    code: 'SCAS',
    address: '123 Education Street',
    city: 'Springfield',
    state: 'Illinois',
    phone: '+1 555-0101',
    email: 'info@springfield.edu',
    website: 'www.springfield.edu',
    establishedYear: 1985,
    status: 'active',
    totalStudents: 2543,
    totalStaff: 142,
  },
  {
    id: '2',
    name: 'Metro Technical Institute',
    code: 'MTI',
    address: '456 Tech Boulevard',
    city: 'Metro City',
    state: 'California',
    phone: '+1 555-0102',
    email: 'contact@metrotech.edu',
    website: 'www.metrotech.edu',
    establishedYear: 1995,
    status: 'active',
    totalStudents: 1832,
    totalStaff: 98,
  },
  {
    id: '3',
    name: 'Greenwood College',
    code: 'GWC',
    address: '789 Park Avenue',
    city: 'Greenwood',
    state: 'Oregon',
    phone: '+1 555-0103',
    email: 'admin@greenwood.edu',
    establishedYear: 2005,
    status: 'inactive',
    totalStudents: 0,
    totalStaff: 0,
  },
];

export default function CollegesPage() {
  const [colleges] = useState<College[]>(mockColleges);
  const [isLoading] = useState(false);

  const handleAddCollege = () => {
    console.log('Add college clicked');
    // TODO: Open modal/form to add college
  };

  const handleEdit = (college: College) => {
    console.log('Edit college:', college);
    // TODO: Open modal/form to edit college
  };

  const handleDelete = (college: College) => {
    console.log('Delete college:', college);
    // TODO: Show confirmation and delete college
  };

  const columns: Column<College>[] = [
    {
      header: 'College Code',
      accessor: 'code',
      cell: (value) => (
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center">
            <Building2 className="h-5 w-5 text-indigo-600" />
          </div>
          <span className="ml-3 font-semibold text-gray-900">{value}</span>
        </div>
      ),
    },
    {
      header: 'College Name',
      accessor: 'name',
      cell: (value, row) => (
        <div>
          <div className="font-medium text-gray-900">{value}</div>
          <div className="text-sm text-gray-500">Est. {row.establishedYear}</div>
        </div>
      ),
    },
    {
      header: 'Location',
      accessor: (row) => `${row.city}, ${row.state}`,
      cell: (value) => (
        <div className="flex items-center text-gray-700">
          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
          {value}
        </div>
      ),
    },
    {
      header: 'Contact',
      accessor: (row) => row,
      cell: (_, row) => (
        <div className="space-y-1">
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="h-3 w-3 mr-2 text-gray-400" />
            {row.phone}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="h-3 w-3 mr-2 text-gray-400" />
            {row.email}
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
      header: 'Staff',
      accessor: 'totalStaff',
      cell: (value) => (
        <span className="text-gray-700 font-medium">{value}</span>
      ),
    },
    {
      header: 'Status',
      accessor: 'status',
      cell: (value) => (
        <Badge
          variant={value === 'active' ? 'default' : 'secondary'}
          className={
            value === 'active'
              ? 'bg-green-100 text-green-800 hover:bg-green-100'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-100'
          }
        >
          {value === 'active' ? 'Active' : 'Inactive'}
        </Badge>
      ),
    },
  ];

  const actions: Action<College>[] = [
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <PageHeader
        title="Colleges"
        description="Manage and view all colleges in the system"
        action={{
          label: 'Add College',
          onClick: handleAddCollege,
          icon: Building2,
        }}
      />

      <div className="p-6 max-w-7xl mx-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Colleges</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {colleges.length}
                </p>
              </div>
              <div className="p-3 bg-indigo-50 rounded-lg">
                <Building2 className="h-8 w-8 text-indigo-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active</p>
                <p className="text-3xl font-bold text-green-600 mt-2">
                  {colleges.filter((c) => c.status === 'active').length}
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <Building2 className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-3xl font-bold text-indigo-600 mt-2">
                  {colleges.reduce((sum, c) => sum + c.totalStudents, 0).toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <Building2 className="h-8 w-8 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Staff</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">
                  {colleges.reduce((sum, c) => sum + c.totalStaff, 0).toLocaleString()}
                </p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <Building2 className="h-8 w-8 text-blue-600" />
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
                  You don't have permission to view colleges
                </p>
              </div>
            </div>
          }
        >
          <DataTable
            data={colleges}
            columns={columns}
            actions={actions}
            isLoading={isLoading}
            emptyMessage="No colleges found"
          />
        </PermissionGate>
      </div>
    </div>
  );
}
