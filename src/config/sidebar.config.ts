import {
  LayoutDashboard,
  Building2,
  Calendar,
  Settings,
  Users,
  Shield,
  GraduationCap,
  BookOpen,
  ClipboardList,
  UserCheck,
  PenTool,
  DollarSign,
  Library,
  Briefcase,
  MessageSquare,
  FileText,
  Package,
  FileCheck,
  User,
  BookMarked,
  CalendarDays,
  Award,
  Receipt,
  BookOpenCheck,
  UserPlus,
  ClockIcon,
  Wallet,
  type LucideIcon,
} from 'lucide-react';
import type { UserType } from '@/types';

export interface SidebarItem {
  name: string;
  href: string;
  icon: LucideIcon;
  roles: UserType[];
}

export interface SidebarGroup {
  group: string;
  icon: LucideIcon;
  roles: UserType[];
  items: SidebarItem[];
}

export const sidebarConfig: SidebarGroup[] = [
  {
    group: 'Dashboard',
    icon: LayoutDashboard,
    roles: ['super_admin', 'college_admin', 'teacher', 'student', 'parent'],
    items: [
      {
        name: 'Dashboard',
        href: '/dashboard',
        icon: LayoutDashboard,
        roles: ['super_admin', 'college_admin', 'teacher', 'student', 'parent'],
      },
    ],
  },
  {
    group: 'Core',
    icon: Building2,
    roles: ['super_admin', 'college_admin'],
    items: [
      {
        name: 'Colleges',
        href: '/core/colleges',
        icon: Building2,
        roles: ['super_admin'],
      },
      {
        name: 'Academic Years',
        href: '/core/academic-years',
        icon: Calendar,
        roles: ['super_admin', 'college_admin'],
      },
      {
        name: 'Sessions',
        href: '/core/sessions',
        icon: CalendarDays,
        roles: ['super_admin', 'college_admin'],
      },
      {
        name: 'Holidays',
        href: '/core/holidays',
        icon: Calendar,
        roles: ['super_admin', 'college_admin'],
      },
      {
        name: 'Settings',
        href: '/core/settings',
        icon: Settings,
        roles: ['super_admin', 'college_admin'],
      },
    ],
  },
  {
    group: 'Accounts',
    icon: Users,
    roles: ['super_admin', 'college_admin'],
    items: [
      {
        name: 'Users',
        href: '/accounts/users',
        icon: Users,
        roles: ['super_admin', 'college_admin'],
      },
      {
        name: 'Roles',
        href: '/accounts/roles',
        icon: Shield,
        roles: ['super_admin', 'college_admin'],
      },
      {
        name: 'Departments',
        href: '/accounts/departments',
        icon: Building2,
        roles: ['super_admin', 'college_admin'],
      },
      {
        name: 'Profiles',
        href: '/accounts/profiles',
        icon: User,
        roles: ['super_admin', 'college_admin'],
      },
    ],
  },
  {
    group: 'Academic',
    icon: GraduationCap,
    roles: ['super_admin', 'college_admin', 'teacher'],
    items: [
      {
        name: 'Classes',
        href: '/academic/classes',
        icon: GraduationCap,
        roles: ['super_admin', 'college_admin'],
      },
      {
        name: 'Subjects',
        href: '/academic/subjects',
        icon: BookOpen,
        roles: ['super_admin', 'college_admin', 'teacher'],
      },
      {
        name: 'Timetables',
        href: '/academic/timetables',
        icon: Calendar,
        roles: ['super_admin', 'college_admin', 'teacher'],
      },
      {
        name: 'Faculties',
        href: '/academic/faculties',
        icon: Users,
        roles: ['super_admin', 'college_admin'],
      },
      {
        name: 'Class Teachers',
        href: '/academic/class-teachers',
        icon: UserPlus,
        roles: ['super_admin', 'college_admin'],
      },
    ],
  },
  {
    group: 'Students',
    icon: Users,
    roles: ['super_admin', 'college_admin', 'teacher'],
    items: [
      {
        name: 'All Students',
        href: '/students/list',
        icon: Users,
        roles: ['super_admin', 'college_admin', 'teacher'],
      },
      {
        name: 'Student Categories',
        href: '/students/categories',
        icon: ClipboardList,
        roles: ['super_admin', 'college_admin'],
      },
      {
        name: 'Documents',
        href: '/students/documents',
        icon: FileText,
        roles: ['super_admin', 'college_admin'],
      },
      {
        name: 'Medical Records',
        href: '/students/medical',
        icon: FileCheck,
        roles: ['super_admin', 'college_admin'],
      },
    ],
  },
  {
    group: 'Attendance',
    icon: UserCheck,
    roles: ['super_admin', 'college_admin', 'teacher', 'student'],
    items: [
      {
        name: 'Student Attendance',
        href: '/attendance/students',
        icon: UserCheck,
        roles: ['super_admin', 'college_admin', 'teacher', 'student'],
      },
      {
        name: 'Staff Attendance',
        href: '/attendance/staff',
        icon: ClockIcon,
        roles: ['super_admin', 'college_admin'],
      },
    ],
  },
  {
    group: 'Examinations',
    icon: PenTool,
    roles: ['super_admin', 'college_admin', 'teacher', 'student'],
    items: [
      {
        name: 'Exams',
        href: '/exams/exams',
        icon: PenTool,
        roles: ['super_admin', 'college_admin', 'teacher'],
      },
      {
        name: 'Create Test',
        href: '/exams/create',
        icon: FileCheck,
        roles: ['teacher'],
      },
      {
        name: 'Exam Types',
        href: '/exams/types',
        icon: ClipboardList,
        roles: ['super_admin', 'college_admin'],
      },
      {
        name: 'Exam Schedules',
        href: '/exams/schedules',
        icon: Calendar,
        roles: ['super_admin', 'college_admin', 'teacher', 'student'],
      },
      {
        name: 'Marks Entry',
        href: '/exams/marks',
        icon: Award,
        roles: ['super_admin', 'college_admin', 'teacher'],
      },
      {
        name: 'Grade Sheets',
        href: '/exams/grades',
        icon: FileText,
        roles: ['super_admin', 'college_admin', 'teacher', 'student'],
      },
    ],
  },
  {
    group: 'Fees',
    icon: DollarSign,
    roles: ['super_admin', 'college_admin', 'student', 'parent'],
    items: [
      {
        name: 'Fee Masters',
        href: '/fees/masters',
        icon: DollarSign,
        roles: ['super_admin', 'college_admin'],
      },
      {
        name: 'Fee Collections',
        href: '/fees/collections',
        icon: Wallet,
        roles: ['super_admin', 'college_admin'],
      },
      {
        name: 'Discounts',
        href: '/fees/discounts',
        icon: Receipt,
        roles: ['super_admin', 'college_admin'],
      },
      {
        name: 'My Fees',
        href: '/fees/my-fees',
        icon: DollarSign,
        roles: ['student', 'parent'],
      },
    ],
  },
  {
    group: 'Library',
    icon: Library,
    roles: ['super_admin', 'college_admin', 'teacher', 'student'],
    items: [
      {
        name: 'Books',
        href: '/library/books',
        icon: BookOpenCheck,
        roles: ['super_admin', 'college_admin', 'teacher', 'student'],
      },
      {
        name: 'Issue Books',
        href: '/library/issue',
        icon: BookMarked,
        roles: ['super_admin', 'college_admin'],
      },
      {
        name: 'Return Books',
        href: '/library/return',
        icon: BookOpen,
        roles: ['super_admin', 'college_admin'],
      },
      {
        name: 'My Books',
        href: '/library/my-books',
        icon: BookMarked,
        roles: ['student', 'teacher'],
      },
    ],
  },
  {
    group: 'HR',
    icon: Briefcase,
    roles: ['super_admin', 'college_admin', 'teacher'],
    items: [
      {
        name: 'Leave Applications',
        href: '/hr/leave',
        icon: ClockIcon,
        roles: ['super_admin', 'college_admin', 'teacher'],
      },
      {
        name: 'Payroll',
        href: '/hr/payroll',
        icon: Wallet,
        roles: ['super_admin', 'college_admin'],
      },
    ],
  },
  {
    group: 'Assignments',
    icon: FileCheck,
    roles: ['super_admin', 'college_admin', 'teacher', 'student'],
    items: [
      {
        name: 'Create Assignment',
        href: '/assignments/create',
        icon: FileCheck,
        roles: ['teacher'],
      },
      {
        name: 'All Assignments',
        href: '/assignments/list',
        icon: ClipboardList,
        roles: ['super_admin', 'college_admin', 'teacher', 'student'],
      },
      {
        name: 'Submissions',
        href: '/assignments/submissions',
        icon: FileText,
        roles: ['teacher'],
      },
      {
        name: 'My Assignments',
        href: '/assignments/my-assignments',
        icon: FileCheck,
        roles: ['student'],
      },
    ],
  },
  {
    group: 'Communication',
    icon: MessageSquare,
    roles: ['super_admin', 'college_admin', 'teacher', 'student', 'parent'],
    items: [
      {
        name: 'Notices',
        href: '/communication/notices',
        icon: MessageSquare,
        roles: ['super_admin', 'college_admin', 'teacher', 'student', 'parent'],
      },
      {
        name: 'Messages',
        href: '/communication/messages',
        icon: MessageSquare,
        roles: ['super_admin', 'college_admin', 'teacher', 'student', 'parent'],
      },
    ],
  },
  {
    group: 'Teacher Portal',
    icon: GraduationCap,
    roles: ['teacher'],
    items: [
      {
        name: 'Mark Attendance',
        href: '/teacher/attendance',
        icon: UserCheck,
        roles: ['teacher'],
      },
      {
        name: 'My Students',
        href: '/teacher/students',
        icon: Users,
        roles: ['teacher'],
      },
      {
        name: 'My Subjects',
        href: '/teacher/subjects',
        icon: BookOpen,
        roles: ['teacher'],
      },
    ],
  },
  {
    group: 'Reports',
    icon: FileText,
    roles: ['super_admin', 'college_admin', 'teacher'],
    items: [
      {
        name: 'Generated Reports',
        href: '/reports/generated',
        icon: FileText,
        roles: ['super_admin', 'college_admin', 'teacher'],
      },
    ],
  },
  {
    group: 'Store',
    icon: Package,
    roles: ['super_admin', 'college_admin'],
    items: [
      {
        name: 'Store Items',
        href: '/store/items',
        icon: Package,
        roles: ['super_admin', 'college_admin'],
      },
      {
        name: 'Print Queue',
        href: '/store/print-queue',
        icon: FileText,
        roles: ['super_admin', 'college_admin'],
      },
    ],
  },
];

export const getFilteredSidebarGroups = (userType: UserType): SidebarGroup[] => {
  return sidebarConfig
    .filter((group) => group.roles.includes(userType))
    .map((group) => ({
      ...group,
      items: group.items.filter((item) => item.roles.includes(userType)),
    }))
    .filter((group) => group.items.length > 0);
};

export const getPortalTitle = (userType: UserType): string => {
  const titles: Record<UserType, string> = {
    super_admin: 'Admin Panel',
    college_admin: 'Admin Panel',
    teacher: 'Teacher Portal',
    student: 'Student Portal',
    parent: 'Parent Portal',
  };

  return titles[userType] || 'Portal';
};
