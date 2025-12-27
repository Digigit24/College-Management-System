import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  marks?: string;
}

const mockAssignments: Assignment[] = [
  {
    id: '1',
    title: 'Chapter 5 Exercises',
    subject: 'Mathematics',
    dueDate: '2024-01-25',
    status: 'pending',
  },
  {
    id: '2',
    title: 'Essay on Climate Change',
    subject: 'English',
    dueDate: '2024-01-28',
    status: 'pending',
  },
  {
    id: '3',
    title: 'Lab Report - Acids and Bases',
    subject: 'Chemistry',
    dueDate: '2024-01-20',
    status: 'submitted',
  },
  {
    id: '4',
    title: 'Physics Problem Set',
    subject: 'Physics',
    dueDate: '2024-01-15',
    status: 'graded',
    marks: '18/20',
  },
];

export const AssignmentList: React.FC = () => {
  const getStatusColor = (status: Assignment['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'submitted':
        return 'bg-blue-100 text-blue-700';
      case 'graded':
        return 'bg-green-100 text-green-700';
    }
  };

  const getStatusText = (status: Assignment['status']) => {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'submitted':
        return 'Submitted';
      case 'graded':
        return 'Graded';
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffTime = date.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return 'Overdue';
    if (diffDays === 0) return 'Due today';
    if (diffDays === 1) return 'Due tomorrow';
    return `Due in ${diffDays} days`;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Assignments</h3>
      <div className="space-y-3">
        {mockAssignments.map((assignment) => (
          <div
            key={assignment.id}
            className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-sm font-semibold text-gray-900">
                {assignment.title}
              </h4>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                  assignment.status
                )}`}
              >
                {getStatusText(assignment.status)}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{assignment.subject}</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {formatDate(assignment.dueDate)}
              </div>
              {assignment.marks && (
                <span className="font-medium text-green-600">
                  {assignment.marks}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
