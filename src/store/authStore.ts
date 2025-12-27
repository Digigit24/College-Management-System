import { create } from 'zustand';
import type { AuthState, User } from '@/types';

// Mock users for different roles
const mockUsers: Record<string, User> = {
  'admin@college.com': {
    id: 1,
    user_type: 'super_admin',
    full_name: 'John Administrator',
    email: 'admin@college.com',
    college_id: 1,
    college_name: 'Springfield College',
    phone: '+1234567890',
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
  },
  'parent@college.com': {
    id: 4,
    user_type: 'parent',
    full_name: 'Robert Williams',
    email: 'parent@college.com',
    college_id: 1,
    college_name: 'Springfield College',
    phone: '+1234567893',
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
