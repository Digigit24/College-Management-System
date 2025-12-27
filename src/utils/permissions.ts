import { ModulePermission, defaultRolePermissions } from '../config/modules.config';
import type { User, UserType } from '../types';

/**
 * Get user permissions from user object or default role permissions
 */
export function getUserPermissions(user: User | null): ModulePermission[] {
  if (!user) return [];

  // If backend provides permissions, use those
  if (user.permissions && user.permissions.length > 0) {
    return user.permissions as ModulePermission[];
  }

  // Otherwise, fall back to default role permissions
  return defaultRolePermissions[user.user_type] || [];
}

/**
 * Check if user has a specific permission
 */
export function hasPermission(user: User | null, permission: ModulePermission): boolean {
  const userPermissions = getUserPermissions(user);
  return userPermissions.includes(permission);
}

/**
 * Check if user has any of the given permissions
 */
export function hasAnyPermission(user: User | null, permissions: ModulePermission[]): boolean {
  const userPermissions = getUserPermissions(user);
  return permissions.some(permission => userPermissions.includes(permission));
}

/**
 * Check if user has all of the given permissions
 */
export function hasAllPermissions(user: User | null, permissions: ModulePermission[]): boolean {
  const userPermissions = getUserPermissions(user);
  return permissions.every(permission => userPermissions.includes(permission));
}

/**
 * Filter items based on user permissions
 */
export function filterByPermission<T extends { permission?: ModulePermission | ModulePermission[] }>(
  items: T[],
  user: User | null
): T[] {
  const userPermissions = getUserPermissions(user);

  return items.filter(item => {
    if (!item.permission) return true;

    if (Array.isArray(item.permission)) {
      // Item requires any of the permissions
      return item.permission.some(p => userPermissions.includes(p));
    }

    // Item requires specific permission
    return userPermissions.includes(item.permission);
  });
}
