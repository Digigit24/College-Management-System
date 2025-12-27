import React, { useMemo } from 'react';
import { useAuthStore } from '../../store/authStore';
import { getUserPermissions } from '../../utils/permissions';
import { getModulesForPermissions, DashboardModule } from '../../config/modules.config';
import {
  StatCard,
  ActivityCard,
  QuickActions,
  ClassSchedule,
  AssignmentList,
  NoticeBoard,
  PerformanceChart,
  TaskList,
} from './widgets';

export const UnifiedDashboard: React.FC = () => {
  const { user } = useAuthStore();

  // Get user permissions and filter modules
  const modules = useMemo(() => {
    const permissions = getUserPermissions(user);
    return getModulesForPermissions(permissions);
  }, [user]);

  // Render appropriate widget based on component type
  const renderWidget = (module: DashboardModule) => {
    const { component, props, icon } = module;

    switch (component) {
      case 'StatCard':
        return <StatCard {...props} icon={icon} />;
      case 'ActivityCard':
        return <ActivityCard />;
      case 'QuickActions':
        return <QuickActions />;
      case 'ClassSchedule':
        return <ClassSchedule />;
      case 'AssignmentList':
        return <AssignmentList />;
      case 'NoticeBoard':
        return <NoticeBoard />;
      case 'PerformanceChart':
        return <PerformanceChart />;
      case 'TaskList':
        return <TaskList />;
      default:
        return null;
    }
  };

  // Get grid span classes
  const getGridSpan = (module: DashboardModule) => {
    const { gridSpan } = module;
    const classes: string[] = [];

    if (gridSpan?.sm) {
      classes.push(`col-span-${gridSpan.sm}`);
    }
    if (gridSpan?.md) {
      classes.push(`md:col-span-${gridSpan.md}`);
    }
    if (gridSpan?.lg) {
      classes.push(`lg:col-span-${gridSpan.lg}`);
    }

    return classes.join(' ') || 'col-span-1';
  };

  // Get portal title based on user type
  const getPortalTitle = () => {
    if (!user) return 'Dashboard';

    switch (user.user_type) {
      case 'super_admin':
      case 'college_admin':
        return 'Admin Dashboard';
      case 'teacher':
        return 'Teacher Dashboard';
      case 'student':
        return 'Student Dashboard';
      case 'parent':
        return 'Parent Dashboard';
      default:
        return 'Dashboard';
    }
  };

  const getWelcomeMessage = () => {
    if (!user) return 'Welcome';
    return `Welcome back, ${user.full_name}`;
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Please log in to view the dashboard</p>
      </div>
    );
  }

  if (modules.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-gray-500 mb-2">No modules available</p>
        <p className="text-sm text-gray-400">Please contact your administrator for access</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{getPortalTitle()}</h1>
        <p className="text-gray-600 mt-1">{getWelcomeMessage()}</p>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module) => (
          <div key={module.id} className={getGridSpan(module)}>
            {renderWidget(module)}
          </div>
        ))}
      </div>
    </div>
  );
};
