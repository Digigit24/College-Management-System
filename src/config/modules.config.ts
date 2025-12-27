import {
  Users,
  GraduationCap,
  BookOpen,
  Calendar,
  DollarSign,
  TrendingUp,
  ClipboardList,
  Bell,
  Award,
  FileText,
  CheckSquare,
  Clock,
  BarChart3,
} from 'lucide-react';

// Icon type
type IconType = React.ComponentType<{ className?: string }>;

// Module permissions enum
export enum ModulePermission {
  // Dashboard modules
  DASHBOARD_STATS = 'dashboard.stats',
  DASHBOARD_STUDENTS = 'dashboard.students',
  DASHBOARD_TEACHERS = 'dashboard.teachers',
  DASHBOARD_CLASSES = 'dashboard.classes',
  DASHBOARD_ATTENDANCE = 'dashboard.attendance',
  DASHBOARD_FEE_COLLECTION = 'dashboard.fee_collection',
  DASHBOARD_PERFORMANCE = 'dashboard.performance',
  DASHBOARD_ACTIVITIES = 'dashboard.activities',
  DASHBOARD_QUICK_ACTIONS = 'dashboard.quick_actions',
  DASHBOARD_TODAY_CLASSES = 'dashboard.today_classes',
  DASHBOARD_ASSIGNMENTS = 'dashboard.assignments',
  DASHBOARD_NOTICES = 'dashboard.notices',
  DASHBOARD_ACADEMIC_PERFORMANCE = 'dashboard.academic_performance',
  DASHBOARD_PENDING_TASKS = 'dashboard.pending_tasks',
  DASHBOARD_FEE_STATUS = 'dashboard.fee_status',
  DASHBOARD_MY_CLASSES = 'dashboard.my_classes',
  DASHBOARD_TOTAL_STUDENTS = 'dashboard.total_students',
  DASHBOARD_PENDING_ASSIGNMENTS = 'dashboard.pending_assignments',

  // Core modules
  CORE_VIEW = 'core.view',
  CORE_MANAGE = 'core.manage',

  // Student modules
  STUDENTS_VIEW = 'students.view',
  STUDENTS_MANAGE = 'students.manage',

  // Academic modules
  ACADEMIC_VIEW = 'academic.view',
  ACADEMIC_MANAGE = 'academic.manage',

  // Attendance modules
  ATTENDANCE_VIEW = 'attendance.view',
  ATTENDANCE_MANAGE = 'attendance.manage',

  // Exams modules
  EXAMS_VIEW = 'exams.view',
  EXAMS_MANAGE = 'exams.manage',

  // Fees modules
  FEES_VIEW = 'fees.view',
  FEES_MANAGE = 'fees.manage',

  // Library modules
  LIBRARY_VIEW = 'library.view',
  LIBRARY_MANAGE = 'library.manage',

  // HR modules
  HR_VIEW = 'hr.view',
  HR_MANAGE = 'hr.manage',

  // Assignments modules
  ASSIGNMENTS_VIEW = 'assignments.view',
  ASSIGNMENTS_MANAGE = 'assignments.manage',

  // Communication modules
  COMMUNICATION_VIEW = 'communication.view',
  COMMUNICATION_MANAGE = 'communication.manage',

  // Reports modules
  REPORTS_VIEW = 'reports.view',
  REPORTS_GENERATE = 'reports.generate',
}

// Dashboard module type
export interface DashboardModule {
  id: string;
  name: string;
  permission: ModulePermission;
  component: 'StatCard' | 'ActivityCard' | 'QuickActions' | 'ClassSchedule' | 'AssignmentList' | 'NoticeBoard' | 'PerformanceChart' | 'TaskList';
  icon?: IconType;
  props?: Record<string, any>;
  gridSpan?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
}

// Dashboard configuration for different module types
export const dashboardModules: DashboardModule[] = [
  // Admin modules
  {
    id: 'stats_students',
    name: 'Total Students',
    permission: ModulePermission.DASHBOARD_STUDENTS,
    component: 'StatCard',
    icon: Users,
    props: {
      title: 'Total Students',
      value: '2,543',
      change: '+12.5%',
      trend: 'up' as const,
    },
    gridSpan: { sm: 1, md: 1, lg: 1 }
  },
  {
    id: 'stats_teachers',
    name: 'Total Teachers',
    permission: ModulePermission.DASHBOARD_TEACHERS,
    component: 'StatCard',
    icon: GraduationCap,
    props: {
      title: 'Total Teachers',
      value: '142',
      change: '+3.2%',
      trend: 'up' as const,
    },
    gridSpan: { sm: 1, md: 1, lg: 1 }
  },
  {
    id: 'stats_classes',
    name: 'Active Classes',
    permission: ModulePermission.DASHBOARD_CLASSES,
    component: 'StatCard',
    icon: BookOpen,
    props: {
      title: 'Active Classes',
      value: '48',
      change: '+2',
      trend: 'up' as const,
    },
    gridSpan: { sm: 1, md: 1, lg: 1 }
  },
  {
    id: 'stats_fee_collection',
    name: 'Fee Collection',
    permission: ModulePermission.DASHBOARD_FEE_COLLECTION,
    component: 'StatCard',
    icon: DollarSign,
    props: {
      title: 'Fee Collection',
      value: '₹45.2L',
      change: '+8.1%',
      trend: 'up' as const,
    },
    gridSpan: { sm: 1, md: 1, lg: 1 }
  },
  {
    id: 'stats_attendance',
    name: 'Today\'s Attendance',
    permission: ModulePermission.DASHBOARD_ATTENDANCE,
    component: 'StatCard',
    icon: Calendar,
    props: {
      title: 'Today\'s Attendance',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up' as const,
    },
    gridSpan: { sm: 1, md: 1, lg: 1 }
  },
  {
    id: 'stats_performance',
    name: 'Overall Performance',
    permission: ModulePermission.DASHBOARD_PERFORMANCE,
    component: 'StatCard',
    icon: TrendingUp,
    props: {
      title: 'Overall Performance',
      value: '87.5%',
      change: '+1.5%',
      trend: 'up' as const,
    },
    gridSpan: { sm: 1, md: 1, lg: 1 }
  },
  {
    id: 'recent_activities',
    name: 'Recent Activities',
    permission: ModulePermission.DASHBOARD_ACTIVITIES,
    component: 'ActivityCard',
    gridSpan: { sm: 1, md: 2, lg: 2 }
  },
  {
    id: 'quick_actions',
    name: 'Quick Actions',
    permission: ModulePermission.DASHBOARD_QUICK_ACTIONS,
    component: 'QuickActions',
    gridSpan: { sm: 1, md: 1, lg: 1 }
  },

  // Student modules
  {
    id: 'student_attendance',
    name: 'My Attendance',
    permission: ModulePermission.DASHBOARD_ATTENDANCE,
    component: 'StatCard',
    icon: Calendar,
    props: {
      title: 'My Attendance',
      value: '92%',
      subtitle: '138 of 150 days',
      trend: 'up' as const,
    },
    gridSpan: { sm: 1, md: 1, lg: 1 }
  },
  {
    id: 'student_subjects',
    name: 'Enrolled Subjects',
    permission: ModulePermission.DASHBOARD_ACADEMIC_PERFORMANCE,
    component: 'StatCard',
    icon: BookOpen,
    props: {
      title: 'Enrolled Subjects',
      value: '8',
      subtitle: 'Active courses',
    },
    gridSpan: { sm: 1, md: 1, lg: 1 }
  },
  {
    id: 'student_pending_tasks',
    name: 'Pending Tasks',
    permission: ModulePermission.DASHBOARD_PENDING_TASKS,
    component: 'StatCard',
    icon: CheckSquare,
    props: {
      title: 'Pending Tasks',
      value: '5',
      subtitle: '2 assignments, 3 quizzes',
      trend: 'neutral' as const,
    },
    gridSpan: { sm: 1, md: 1, lg: 1 }
  },
  {
    id: 'student_fee_status',
    name: 'Fee Status',
    permission: ModulePermission.DASHBOARD_FEE_STATUS,
    component: 'StatCard',
    icon: DollarSign,
    props: {
      title: 'Fee Status',
      value: 'Paid',
      subtitle: 'Next due: Jan 2025',
      trend: 'up' as const,
    },
    gridSpan: { sm: 1, md: 1, lg: 1 }
  },
  {
    id: 'today_classes',
    name: 'Today\'s Classes',
    permission: ModulePermission.DASHBOARD_TODAY_CLASSES,
    component: 'ClassSchedule',
    gridSpan: { sm: 1, md: 2, lg: 2 }
  },
  {
    id: 'assignments',
    name: 'Assignments',
    permission: ModulePermission.DASHBOARD_ASSIGNMENTS,
    component: 'AssignmentList',
    gridSpan: { sm: 1, md: 1, lg: 1 }
  },
  {
    id: 'notices',
    name: 'Recent Notices',
    permission: ModulePermission.DASHBOARD_NOTICES,
    component: 'NoticeBoard',
    gridSpan: { sm: 1, md: 1, lg: 1 }
  },
  {
    id: 'academic_performance',
    name: 'Academic Performance',
    permission: ModulePermission.DASHBOARD_ACADEMIC_PERFORMANCE,
    component: 'PerformanceChart',
    gridSpan: { sm: 1, md: 2, lg: 2 }
  },

  // Teacher modules
  {
    id: 'teacher_my_classes',
    name: 'My Classes',
    permission: ModulePermission.DASHBOARD_MY_CLASSES,
    component: 'StatCard',
    icon: BookOpen,
    props: {
      title: 'My Classes',
      value: '6',
      subtitle: 'Active classes',
    },
    gridSpan: { sm: 1, md: 1, lg: 1 }
  },
  {
    id: 'teacher_total_students',
    name: 'Total Students',
    permission: ModulePermission.DASHBOARD_TOTAL_STUDENTS,
    component: 'StatCard',
    icon: Users,
    props: {
      title: 'Total Students',
      value: '180',
      subtitle: 'Across all classes',
    },
    gridSpan: { sm: 1, md: 1, lg: 1 }
  },
  {
    id: 'teacher_pending_assignments',
    name: 'Pending Assignments',
    permission: ModulePermission.DASHBOARD_PENDING_ASSIGNMENTS,
    component: 'StatCard',
    icon: ClipboardList,
    props: {
      title: 'Pending Assignments',
      value: '12',
      subtitle: 'To be graded',
      trend: 'neutral' as const,
    },
    gridSpan: { sm: 1, md: 1, lg: 1 }
  },
  {
    id: 'teacher_today_classes',
    name: 'Today\'s Classes',
    permission: ModulePermission.DASHBOARD_TODAY_CLASSES,
    component: 'StatCard',
    icon: Clock,
    props: {
      title: 'Today\'s Classes',
      value: '4',
      subtitle: '2 completed, 2 upcoming',
    },
    gridSpan: { sm: 1, md: 1, lg: 1 }
  },
  {
    id: 'teacher_class_schedule',
    name: 'Class Schedule',
    permission: ModulePermission.DASHBOARD_TODAY_CLASSES,
    component: 'ClassSchedule',
    gridSpan: { sm: 1, md: 2, lg: 2 }
  },
  {
    id: 'teacher_pending_tasks',
    name: 'Pending Tasks',
    permission: ModulePermission.DASHBOARD_PENDING_TASKS,
    component: 'TaskList',
    gridSpan: { sm: 1, md: 1, lg: 1 }
  },
];

// Default permissions for roles (can be overridden by backend)
export const defaultRolePermissions: Record<string, ModulePermission[]> = {
  super_admin: [
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
  college_admin: [
    ModulePermission.DASHBOARD_STUDENTS,
    ModulePermission.DASHBOARD_TEACHERS,
    ModulePermission.DASHBOARD_CLASSES,
    ModulePermission.DASHBOARD_FEE_COLLECTION,
    ModulePermission.DASHBOARD_ATTENDANCE,
    ModulePermission.DASHBOARD_PERFORMANCE,
    ModulePermission.DASHBOARD_ACTIVITIES,
    ModulePermission.DASHBOARD_QUICK_ACTIONS,
    ModulePermission.CORE_VIEW,
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
    ModulePermission.REPORTS_VIEW,
    ModulePermission.REPORTS_GENERATE,
  ],
  teacher: [
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
  student: [
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
  parent: [
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
};

// Helper function to get modules for user permissions
export function getModulesForPermissions(permissions: ModulePermission[]): DashboardModule[] {
  return dashboardModules.filter(module =>
    permissions.includes(module.permission)
  );
}

// Helper function to check if user has permission
export function hasPermission(userPermissions: ModulePermission[], requiredPermission: ModulePermission): boolean {
  return userPermissions.includes(requiredPermission);
}
