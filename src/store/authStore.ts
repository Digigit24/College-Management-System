import { create } from 'zustand';
import type { AuthState, User } from '@/types';
import { ModulePermission } from '@/config/modules.config';

// Mock users for different roles with permissions
// In production, permissions would come from the backend API
const mockUsers: Record<string, User> = {
  'admin@college.com': {
    id: 1,
    user_type: 'super_admin',
    full_name: 'John Administrator',
    email: 'admin@college.com',
    college_id: 1,
    college_name: 'Springfield College',
    phone: '+1234567890',
    // Permissions are optional - if not provided, default role permissions will be used
    // Backend would provide this array based on custom role configuration
    permissions: [
      ModulePermission.DASHBOARD_STUDENTS,
      ModulePermission.DASHBOARD_TEACHERS,
      ModulePermission.DASHBOARD_CLASSES,
      ModulePermission.DASHBOARD_FEE_COLLECTION,
      ModulePermission.DASHBOARD_ATTENDANCE,
      ModulePermission.DASHBOARD_PERFORMANCE,
      ModulePermission.DASHBOARD_ACTIVITIES,
      ModulePermission.DASHBOARD_QUICK_ACTIONS,
      ModulePermission.CORE_VIEW,
      ModulePermission.CORE_MANAGE,
      ModulePermission.STUDENTS_VIEW,
      ModulePermission.STUDENTS_MANAGE,
      ModulePermission.ACADEMIC_VIEW,
      ModulePermission.ACADEMIC_MANAGE,
      ModulePermission.ATTENDANCE_VIEW,
      ModulePermission.ATTENDANCE_MANAGE,
      ModulePermission.EXAMS_VIEW,
      ModulePermission.EXAMS_MANAGE,
      ModulePermission.FEES_VIEW,
      ModulePermission.FEES_MANAGE,
      ModulePermission.LIBRARY_VIEW,
      ModulePermission.LIBRARY_MANAGE,
      ModulePermission.HR_VIEW,
      ModulePermission.HR_MANAGE,
      ModulePermission.ASSIGNMENTS_VIEW,
      ModulePermission.ASSIGNMENTS_MANAGE,
      ModulePermission.COMMUNICATION_VIEW,
      ModulePermission.COMMUNICATION_MANAGE,
      ModulePermission.REPORTS_VIEW,
      ModulePermission.REPORTS_GENERATE,
    ],
  },
  'teacher@college.com': {
    id: 2,
    user_type: 'teacher',
    full_name: 'Sarah Johnson',
    email: 'teacher@college.com',
    college_id: 1,
    college_name: 'Springfield College',
    department: 'Mathematics',
    employee_id: 'EMP001',
    subjects: ['Mathematics', 'Physics'],
    classes: ['10A', '10B', '11A'],
    phone: '+1234567891',
    // Teacher permissions from backend
    permissions: [
      ModulePermission.DASHBOARD_MY_CLASSES,
      ModulePermission.DASHBOARD_TOTAL_STUDENTS,
      ModulePermission.DASHBOARD_PENDING_ASSIGNMENTS,
      ModulePermission.DASHBOARD_TODAY_CLASSES,
      ModulePermission.DASHBOARD_PENDING_TASKS,
      ModulePermission.ATTENDANCE_VIEW,
      ModulePermission.ATTENDANCE_MANAGE,
      ModulePermission.ASSIGNMENTS_VIEW,
      ModulePermission.ASSIGNMENTS_MANAGE,
      ModulePermission.EXAMS_VIEW,
      ModulePermission.ACADEMIC_VIEW,
      ModulePermission.STUDENTS_VIEW,
      ModulePermission.COMMUNICATION_VIEW,
    ],
  },
  'student@college.com': {
    id: 3,
    user_type: 'student',
    full_name: 'Mike Williams',
    email: 'student@college.com',
    college_id: 1,
    college_name: 'Springfield College',
    student_id: 'STU001',
    class: '10A',
    section: 'A',
    roll_number: '001',
    phone: '+1234567892',
    // Student permissions from backend
    permissions: [
      ModulePermission.DASHBOARD_ATTENDANCE,
      ModulePermission.DASHBOARD_ACADEMIC_PERFORMANCE,
      ModulePermission.DASHBOARD_PENDING_TASKS,
      ModulePermission.DASHBOARD_FEE_STATUS,
      ModulePermission.DASHBOARD_TODAY_CLASSES,
      ModulePermission.DASHBOARD_ASSIGNMENTS,
      ModulePermission.DASHBOARD_NOTICES,
      ModulePermission.ATTENDANCE_VIEW,
      ModulePermission.ASSIGNMENTS_VIEW,
      ModulePermission.EXAMS_VIEW,
      ModulePermission.FEES_VIEW,
      ModulePermission.LIBRARY_VIEW,
      ModulePermission.COMMUNICATION_VIEW,
    ],
  },
  'parent@college.com': {
    id: 4,
    user_type: 'parent',
    full_name: 'Robert Williams',
    email: 'parent@college.com',
    college_id: 1,
    college_name: 'Springfield College',
    phone: '+1234567893',
    // Parent permissions from backend
    permissions: [
      ModulePermission.DASHBOARD_ATTENDANCE,
      ModulePermission.DASHBOARD_ACADEMIC_PERFORMANCE,
      ModulePermission.DASHBOARD_PENDING_TASKS,
      ModulePermission.DASHBOARD_FEE_STATUS,
      ModulePermission.DASHBOARD_TODAY_CLASSES,
      ModulePermission.DASHBOARD_NOTICES,
      ModulePermission.ATTENDANCE_VIEW,
      ModulePermission.EXAMS_VIEW,
      ModulePermission.FEES_VIEW,
      ModulePermission.COMMUNICATION_VIEW,
    ],
  },
};

export const useAuthStore = create<AuthState>((set) => {
  // Check if user is already logged in (from localStorage)
  const storedUser = localStorage.getItem('user');
  const storedToken = localStorage.getItem('token');

  return {
    user: storedUser ? JSON.parse(storedUser) : null,
    token: storedToken,
    isAuthenticated: !!storedToken,

    login: async (email: string, password: string) => {
      // Mock authentication - in real app, this would be an API call
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = mockUsers[email.toLowerCase()];

          if (user && password === 'password') {
            const token = 'mock-jwt-token-' + Date.now();

            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);

            set({
              user,
              token,
              isAuthenticated: true,
            });

            resolve();
          } else {
            reject(new Error('Invalid credentials'));
          }
        }, 500);
      });
    },

    logout: () => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');

      set({
        user: null,
        token: null,
        isAuthenticated: false,
      });
    },

    setUser: (user: User) => {
      localStorage.setItem('user', JSON.stringify(user));
      set({ user });
    },
  };
});
