import { useMemo } from 'react';
import { useAuthStore } from '../store/authStore';
import { ModulePermission } from '../config/modules.config';
import { getUserPermissions, hasPermission, hasAnyPermission, hasAllPermissions } from '../utils/permissions';

/**
 * Hook to get user permissions
 */
export function usePermissions() {
  const { user } = useAuthStore();

  const permissions = useMemo(() => getUserPermissions(user), [user]);

  return {
    permissions,
    hasPermission: (permission: ModulePermission) => hasPermission(user, permission),
    hasAnyPermission: (permissionList: ModulePermission[]) => hasAnyPermission(user, permissionList),
    hasAllPermissions: (permissionList: ModulePermission[]) => hasAllPermissions(user, permissionList),
  };
}

/**
 * Hook to check a specific permission
 */
export function useHasPermission(permission: ModulePermission): boolean {
  const { user } = useAuthStore();
  return useMemo(() => hasPermission(user, permission), [user, permission]);
}

/**
 * Hook to check multiple permissions (any)
 */
export function useHasAnyPermission(permissions: ModulePermission[]): boolean {
  const { user } = useAuthStore();
  return useMemo(() => hasAnyPermission(user, permissions), [user, permissions]);
}

/**
 * Hook to check multiple permissions (all)
 */
export function useHasAllPermissions(permissions: ModulePermission[]): boolean {
  const { user } = useAuthStore();
  return useMemo(() => hasAllPermissions(user, permissions), [user, permissions]);
}
