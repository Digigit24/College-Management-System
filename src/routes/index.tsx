import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import MainLayout from '@/components/layout/MainLayout';

// Lazy load pages
const Login = lazy(() => import('@/pages/Login'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));

// Exams
const ExamsPage = lazy(() => import('@/pages/exams/ExamsPage'));
const CreateTest = lazy(() => import('@/pages/exams/CreateTest'));
const ExamSchedules = lazy(() => import('@/pages/exams/ExamSchedules'));
const MarksEntry = lazy(() => import('@/pages/exams/MarksEntry'));

// Attendance
const StudentAttendance = lazy(() => import('@/pages/attendance/StudentAttendance'));

// Students
const StudentsList = lazy(() => import('@/pages/students/StudentsList'));

// Assignments
const CreateAssignment = lazy(() => import('@/pages/assignments/CreateAssignment'));

// Library
const BooksPage = lazy(() => import('@/pages/library/BooksPage'));

// Fees
const FeeCollections = lazy(() => import('@/pages/fees/FeeCollections'));

// Communication
const NoticesPage = lazy(() => import('@/pages/communication/NoticesPage'));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

// Placeholder component for pages not yet implemented
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="space-y-6">
    <div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-muted-foreground mt-1">This page is under development</p>
    </div>
    <div className="bg-accent/50 border-2 border-dashed rounded-lg p-12 text-center">
      <p className="text-lg text-muted-foreground">Coming Soon</p>
    </div>
  </div>
);

const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <Dashboard />
          </Suspense>
        ),
      },
      // Core
      {
        path: 'core/colleges',
        element: <PlaceholderPage title="Colleges" />,
      },
      {
        path: 'core/academic-years',
        element: <PlaceholderPage title="Academic Years" />,
      },
      {
        path: 'core/sessions',
        element: <PlaceholderPage title="Sessions" />,
      },
      {
        path: 'core/holidays',
        element: <PlaceholderPage title="Holidays" />,
      },
      {
        path: 'core/settings',
        element: <PlaceholderPage title="Settings" />,
      },
      // Accounts
      {
        path: 'accounts/users',
        element: <PlaceholderPage title="Users" />,
      },
      {
        path: 'accounts/roles',
        element: <PlaceholderPage title="Roles" />,
      },
      {
        path: 'accounts/departments',
        element: <PlaceholderPage title="Departments" />,
      },
      {
        path: 'accounts/profiles',
        element: <PlaceholderPage title="Profiles" />,
      },
      // Academic
      {
        path: 'academic/classes',
        element: <PlaceholderPage title="Classes" />,
      },
      {
        path: 'academic/subjects',
        element: <PlaceholderPage title="Subjects" />,
      },
      {
        path: 'academic/timetables',
        element: <PlaceholderPage title="Timetables" />,
      },
      {
        path: 'academic/faculties',
        element: <PlaceholderPage title="Faculties" />,
      },
      {
        path: 'academic/class-teachers',
        element: <PlaceholderPage title="Class Teachers" />,
      },
      // Students
      {
        path: 'students/list',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <StudentsList />
          </Suspense>
        ),
      },
      {
        path: 'students/categories',
        element: <PlaceholderPage title="Student Categories" />,
      },
      {
        path: 'students/documents',
        element: <PlaceholderPage title="Documents" />,
      },
      {
        path: 'students/medical',
        element: <PlaceholderPage title="Medical Records" />,
      },
      // Attendance
      {
        path: 'attendance/students',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <StudentAttendance />
          </Suspense>
        ),
      },
      {
        path: 'attendance/staff',
        element: <PlaceholderPage title="Staff Attendance" />,
      },
      // Exams
      {
        path: 'exams/exams',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ExamsPage />
          </Suspense>
        ),
      },
      {
        path: 'exams/create',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <CreateTest />
          </Suspense>
        ),
      },
      {
        path: 'exams/types',
        element: <PlaceholderPage title="Exam Types" />,
      },
      {
        path: 'exams/schedules',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <ExamSchedules />
          </Suspense>
        ),
      },
      {
        path: 'exams/marks',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <MarksEntry />
          </Suspense>
        ),
      },
      {
        path: 'exams/grades',
        element: <PlaceholderPage title="Grade Sheets" />,
      },
      // Fees
      {
        path: 'fees/masters',
        element: <PlaceholderPage title="Fee Masters" />,
      },
      {
        path: 'fees/collections',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <FeeCollections />
          </Suspense>
        ),
      },
      {
        path: 'fees/discounts',
        element: <PlaceholderPage title="Discounts" />,
      },
      {
        path: 'fees/my-fees',
        element: <PlaceholderPage title="My Fees" />,
      },
      // Library
      {
        path: 'library/books',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <BooksPage />
          </Suspense>
        ),
      },
      {
        path: 'library/issue',
        element: <PlaceholderPage title="Issue Books" />,
      },
      {
        path: 'library/return',
        element: <PlaceholderPage title="Return Books" />,
      },
      {
        path: 'library/my-books',
        element: <PlaceholderPage title="My Books" />,
      },
      // HR
      {
        path: 'hr/leave',
        element: <PlaceholderPage title="Leave Applications" />,
      },
      {
        path: 'hr/payroll',
        element: <PlaceholderPage title="Payroll" />,
      },
      // Assignments
      {
        path: 'assignments/create',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <CreateAssignment />
          </Suspense>
        ),
      },
      {
        path: 'assignments/list',
        element: <PlaceholderPage title="All Assignments" />,
      },
      {
        path: 'assignments/submissions',
        element: <PlaceholderPage title="Submissions" />,
      },
      {
        path: 'assignments/my-assignments',
        element: <PlaceholderPage title="My Assignments" />,
      },
      // Communication
      {
        path: 'communication/notices',
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <NoticesPage />
          </Suspense>
        ),
      },
      {
        path: 'communication/messages',
        element: <PlaceholderPage title="Messages" />,
      },
      // Teacher Portal
      {
        path: 'teacher/attendance',
        element: <PlaceholderPage title="Mark Attendance" />,
      },
      {
        path: 'teacher/students',
        element: <PlaceholderPage title="My Students" />,
      },
      {
        path: 'teacher/subjects',
        element: <PlaceholderPage title="My Subjects" />,
      },
      // Reports
      {
        path: 'reports/generated',
        element: <PlaceholderPage title="Generated Reports" />,
      },
      // Store
      {
        path: 'store/items',
        element: <PlaceholderPage title="Store Items" />,
      },
      {
        path: 'store/print-queue',
        element: <PlaceholderPage title="Print Queue" />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/dashboard" replace />,
  },
]);

export default router;
