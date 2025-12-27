import type { Action, Column } from '@/components/common/DataTable';
import { DataTable } from '@/components/common/DataTable';
import { PageHeader } from '@/components/common/PageHeader';
import { PermissionGate } from '@/components/common/PermissionGate';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ModulePermission } from '@/config/modules.config';
import { Edit, Key, Shield, Trash2, Users } from 'lucide-react';
import { useState } from 'react';

interface Role {
  id: string;
  name: string;
  code: string;
  description: string;
  type: 'system' | 'custom';
  userCount: number;
  permissions: string[];
  isActive: boolean;
  createdAt: string;
}

// Mock data including custom roles
const mockRoles: Role[] = [
  {
    id: '1',
    name: 'Super Admin',
    code: 'super_admin',
    description: 'Full system access with all permissions',
    type: 'system',
    userCount: 2,
    permissions: Object.values(ModulePermission),
    isActive: true,
    createdAt: '2024-01-01',
  },
  {
    id: '2',
    name: 'College Admin',
    code: 'college_admin',
    description: 'College-level administrative access',
    type: 'system',
    userCount: 5,
    permissions: [
      ModulePermission.DASHBOARD_STUDENTS,
      ModulePermission.DASHBOARD_TEACHERS,
      ModulePermission.STUDENTS_VIEW,
      ModulePermission.STUDENTS_MANAGE,
      ModulePermission.ACADEMIC_VIEW,
      ModulePermission.ACADEMIC_MANAGE,
    ],
    isActive: true,
    createdAt: '2024-01-01',
  },
  {
    id: '3',
    name: 'Teacher',
    code: 'teacher',
    description: 'Teaching staff with class management access',
    type: 'system',
    userCount: 142,
    permissions: [
      ModulePermission.DASHBOARD_MY_CLASSES,
      ModulePermission.DASHBOARD_TOTAL_STUDENTS,
      ModulePermission.ATTENDANCE_VIEW,
      ModulePermission.ATTENDANCE_MANAGE,
      ModulePermission.ASSIGNMENTS_VIEW,
      ModulePermission.ASSIGNMENTS_MANAGE,
    ],
    isActive: true,
    createdAt: '2024-01-01',
  },
  {
    id: '4',
    name: 'Student',
    code: 'student',
    description: 'Student access to academic resources',
    type: 'system',
    userCount: 2543,
    permissions: [
      ModulePermission.DASHBOARD_ATTENDANCE,
      ModulePermission.DASHBOARD_ASSIGNMENTS,
      ModulePermission.ATTENDANCE_VIEW,
      ModulePermission.ASSIGNMENTS_VIEW,
    ],
    isActive: true,
    createdAt: '2024-01-01',
  },
  // Custom Roles
  {
    id: '5',
    name: 'Head of Department (HOD)',
    code: 'hod',
    description: 'Department head with extended academic permissions',
    type: 'custom',
    userCount: 8,
    permissions: [
      ModulePermission.DASHBOARD_MY_CLASSES,
      ModulePermission.DASHBOARD_TOTAL_STUDENTS,
      ModulePermission.DASHBOARD_TEACHERS,
      ModulePermission.ACADEMIC_VIEW,
      ModulePermission.ACADEMIC_MANAGE,
      ModulePermission.STUDENTS_VIEW,
      ModulePermission.ATTENDANCE_VIEW,
      ModulePermission.ATTENDANCE_MANAGE,
      ModulePermission.EXAMS_VIEW,
      ModulePermission.EXAMS_MANAGE,
      ModulePermission.ASSIGNMENTS_VIEW,
      ModulePermission.ASSIGNMENTS_MANAGE,
      ModulePermission.REPORTS_VIEW,
    ],
    isActive: true,
    createdAt: '2024-06-15',
  },
  {
    id: '6',
    name: 'Library Manager',
    code: 'library_manager',
    description: 'Manages library resources and operations',
    type: 'custom',
    userCount: 3,
    permissions: [
      ModulePermission.LIBRARY_VIEW,
      ModulePermission.LIBRARY_MANAGE,
      ModulePermission.STUDENTS_VIEW,
      ModulePermission.REPORTS_VIEW,
    ],
    isActive: true,
    createdAt: '2024-08-20',
  },
  {
    id: '7',
    name: 'Accounts Staff',
    code: 'accounts_staff',
    description: 'Handles fee collection and financial records',
    type: 'custom',
    userCount: 4,
    permissions: [
      ModulePermission.DASHBOARD_FEE_COLLECTION,
      ModulePermission.FEES_VIEW,
      ModulePermission.FEES_MANAGE,
      ModulePermission.STUDENTS_VIEW,
      ModulePermission.REPORTS_VIEW,
      ModulePermission.REPORTS_GENERATE,
    ],
    isActive: true,
    createdAt: '2024-09-10',
  },
  {
    id: '8',
    name: 'Exam Controller',
    code: 'exam_controller',
    description: 'Manages exams, marks, and grade sheets',
    type: 'custom',
    userCount: 2,
    permissions: [
      ModulePermission.DASHBOARD_PERFORMANCE,
      ModulePermission.EXAMS_VIEW,
      ModulePermission.EXAMS_MANAGE,
      ModulePermission.ACADEMIC_VIEW,
      ModulePermission.STUDENTS_VIEW,
      ModulePermission.REPORTS_VIEW,
      ModulePermission.REPORTS_GENERATE,
    ],
    isActive: true,
    createdAt: '2024-10-05',
  },
];

export default function RolesPage() {
  const [roles] = useState<Role[]>(mockRoles);
  const [isLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const handleAddRole = () => {
    console.log('Add role clicked');
  };

  const handleEdit = (role: Role) => {
    setSelectedRole(role);
    console.log('Edit role:', role);
  };

  const handleDelete = (role: Role) => {
    console.log('Delete role:', role);
  };

  const columns: Column<Role>[] = [
    {
      header: 'Role',
      accessor: 'name',
      cell: (value, row) => (
        <div className="flex items-center">
          <div className={`flex-shrink-0 h-10 w-10 ${row.type === 'system' ? 'bg-indigo-100' : 'bg-purple-100'
            } rounded-lg flex items-center justify-center`}>
            <Shield className={`h-5 w-5 ${row.type === 'system' ? 'text-indigo-600' : 'text-purple-600'
              }`} />
          </div>
          <div className="ml-3">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">{value}</span>
              <Badge
                variant="outline"
                className={
                  row.type === 'system'
                    ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                    : 'bg-purple-50 text-purple-700 border-purple-200'
                }
              >
                {row.type === 'system' ? 'System' : 'Custom'}
              </Badge>
            </div>
            <div className="text-sm text-gray-500">{row.code}</div>
          </div>
        </div>
      ),
    },
    {
      header: 'Description',
      accessor: 'description',
      cell: (value) => <div className="text-sm text-gray-700 max-w-md">{value}</div>,
    },
    {
      header: 'Users',
      accessor: 'userCount',
      cell: (value) => (
        <div className="flex items-center text-gray-700">
          <Users className="h-4 w-4 mr-2 text-gray-400" />
          <span className="font-semibold">{value.toLocaleString()}</span>
        </div>
      ),
    },
    {
      header: 'Permissions',
      accessor: (row) => row.permissions.length,
      cell: (value) => (
        <div className="flex items-center text-indigo-600">
          <Key className="h-4 w-4 mr-2" />
          <span className="font-semibold">{value} permissions</span>
        </div>
      ),
    },
    {
      header: 'Status',
      accessor: 'isActive',
      cell: (value) => (
        <Badge
          variant={value ? 'default' : 'secondary'}
          className={
            value
              ? 'bg-green-100 text-green-800 hover:bg-green-100'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-100'
          }
        >
          {value ? 'Active' : 'Inactive'}
        </Badge>
      ),
    },
  ];

  const actions: Action<Role>[] = [
    {
      label: 'View Permissions',
      icon: Key,
      onClick: handleEdit,
    },
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

  const systemRoles = roles.filter((r) => r.type === 'system');
  const customRoles = roles.filter((r) => r.type === 'custom');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="p-6 max-w-7xl mx-auto">

        <PageHeader
          title="Roles & Permissions"
          description="Manage system and custom roles with granular permissions"
          action={{
            label: 'Create Custom Role',
            onClick: handleAddRole,
            icon: Shield,
          }}
        />

        <div className="p-6 max-w-7xl mx-auto">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Roles</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{roles.length}</p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <Shield className="h-8 w-8 text-indigo-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">System Roles</p>
                  <p className="text-3xl font-bold text-indigo-600 mt-2">
                    {systemRoles.length}
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Custom Roles</p>
                  <p className="text-3xl font-bold text-purple-600 mt-2">
                    {customRoles.length}
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-3xl font-bold text-green-600 mt-2">
                    {roles.reduce((sum, r) => sum + r.userCount, 0).toLocaleString()}
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Tabs for System and Custom Roles */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Roles ({roles.length})</TabsTrigger>
              <TabsTrigger value="system">System Roles ({systemRoles.length})</TabsTrigger>
              <TabsTrigger value="custom">Custom Roles ({customRoles.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <PermissionGate permission={ModulePermission.CORE_VIEW}>
                <DataTable
                  data={roles}
                  columns={columns}
                  actions={actions}
                  isLoading={isLoading}
                  emptyMessage="No roles found"
                />
              </PermissionGate>
            </TabsContent>

            <TabsContent value="system">
              <DataTable
                data={systemRoles}
                columns={columns}
                actions={actions}
                isLoading={isLoading}
                emptyMessage="No system roles found"
              />
            </TabsContent>

            <TabsContent value="custom">
              <DataTable
                data={customRoles}
                columns={columns}
                actions={actions}
                isLoading={isLoading}
                emptyMessage="No custom roles found. Create a custom role to get started."
              />
            </TabsContent>
          </Tabs>

          {/* Permission Display Section */}
          {selectedRole && (
            <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {selectedRole.name} - Permissions ({selectedRole.permissions.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {selectedRole.permissions.map((permission) => (
                  <div
                    key={permission}
                    className="px-3 py-2 bg-indigo-50 text-indigo-700 text-sm rounded-md border border-indigo-200 flex items-center"
                  >
                    <Key className="h-3 w-3 mr-2" />
                    {permission}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
      );
}
