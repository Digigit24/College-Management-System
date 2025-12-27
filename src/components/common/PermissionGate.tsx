import React from 'react';
import { usePermissions } from '@/hooks/usePermissions';
import { ModulePermission } from '@/config/modules.config';

interface PermissionGateProps {
  permission: ModulePermission | ModulePermission[];
  fallback?: React.ReactNode;
  children: React.ReactNode;
  requireAll?: boolean; // If true, requires all permissions; if false, requires any
}

/**
 * Component that only renders children if user has required permission(s)
 */
export const PermissionGate: React.FC<PermissionGateProps> = ({
  permission,
  fallback = null,
  children,
  requireAll = false,
}) => {
  const { hasPermission, hasAnyPermission, hasAllPermissions } = usePermissions();

  const hasAccess = (() => {
    if (Array.isArray(permission)) {
      return requireAll
        ? hasAllPermissions(permission)
        : hasAnyPermission(permission);
    }
    return hasPermission(permission);
  })();

  if (!hasAccess) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

/**
 * Component that shows user's current permissions
 * Useful for debugging and showing users what they have access to
 */
export const PermissionDisplay: React.FC = () => {
  const { permissions } = usePermissions();

  if (permissions.length === 0) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-800 text-sm">No permissions assigned</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Your Permissions
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {permissions.map((permission) => (
          <div
            key={permission}
            className="px-3 py-2 bg-indigo-50 text-indigo-700 text-sm rounded-md border border-indigo-200"
          >
            {permission}
          </div>
        ))}
      </div>
    </div>
  );
};
