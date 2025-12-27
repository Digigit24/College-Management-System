import { useAuthStore } from '@/store/authStore';
import AdminDashboard from '@/components/dashboard/AdminDashboard';
import TeacherDashboard from '@/components/dashboard/TeacherDashboard';
import StudentDashboard from '@/components/dashboard/StudentDashboard';

export default function Dashboard() {
  const user = useAuthStore((state) => state.user);

  if (!user) return null;

  // Render dashboard based on user role
  switch (user.user_type) {
    case 'super_admin':
    case 'college_admin':
      return <AdminDashboard />;

    case 'teacher':
      return <TeacherDashboard />;

    case 'student':
      return <StudentDashboard />;

    case 'parent':
      // Parent dashboard can show their child's information
      return <StudentDashboard />;

    default:
      return <AdminDashboard />;
  }
}
