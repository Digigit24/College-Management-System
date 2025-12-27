import React from 'react';
import { UserPlus, FileText, Calendar, DollarSign, BookOpen, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuickAction {
  id: string;
  title: string;
  icon: React.FC<{ className?: string }>;
  href: string;
  color: string;
}

const quickActions: QuickAction[] = [
  {
    id: 'add-student',
    title: 'Add Student',
    icon: UserPlus,
    href: '/students/admission',
    color: 'bg-blue-50 text-blue-600 hover:bg-blue-100',
  },
  {
    id: 'create-announcement',
    title: 'Announcement',
    icon: Bell,
    href: '/communication/announcements',
    color: 'bg-purple-50 text-purple-600 hover:bg-purple-100',
  },
  {
    id: 'mark-attendance',
    title: 'Attendance',
    icon: Calendar,
    href: '/attendance',
    color: 'bg-green-50 text-green-600 hover:bg-green-100',
  },
  {
    id: 'collect-fee',
    title: 'Collect Fee',
    icon: DollarSign,
    href: '/fees/collection',
    color: 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100',
  },
  {
    id: 'create-exam',
    title: 'Create Exam',
    icon: FileText,
    href: '/exams/create',
    color: 'bg-red-50 text-red-600 hover:bg-red-100',
  },
  {
    id: 'library',
    title: 'Library',
    icon: BookOpen,
    href: '/library/books',
    color: 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100',
  },
];

export const QuickActions: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.id}
              to={action.href}
              className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors ${action.color}`}
            >
              <Icon className="h-6 w-6 mb-2" />
              <span className="text-sm font-medium text-center">{action.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
