import React from 'react';
import { CheckCircle2, Circle, Clock } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  completed: boolean;
}

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Grade Assignments - Class 10-A',
    description: 'Mathematics assignments need to be graded',
    priority: 'high',
    dueDate: '2024-01-24',
    completed: false,
  },
  {
    id: '2',
    title: 'Prepare Lesson Plan',
    description: 'Chemistry lesson plan for next week',
    priority: 'medium',
    dueDate: '2024-01-26',
    completed: false,
  },
  {
    id: '3',
    title: 'Update Attendance Records',
    description: 'Update attendance for this week',
    priority: 'high',
    dueDate: '2024-01-23',
    completed: false,
  },
  {
    id: '4',
    title: 'Submit Monthly Report',
    description: 'Submit monthly progress report to principal',
    priority: 'medium',
    dueDate: '2024-01-30',
    completed: true,
  },
];

export const TaskList: React.FC = () => {
  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'low':
        return 'bg-green-100 text-green-700';
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const pendingTasks = mockTasks.filter(task => !task.completed);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Pending Tasks</h3>
        <span className="text-sm text-gray-500">{pendingTasks.length} tasks</span>
      </div>
      <div className="space-y-3">
        {pendingTasks.map((task) => (
          <div
            key={task.id}
            className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors"
          >
            <div className="flex items-start space-x-3">
              <div className="mt-0.5">
                {task.completed ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <Circle className="h-5 w-5 text-gray-400" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-1">
                  <h4 className="text-sm font-semibold text-gray-900">
                    {task.title}
                  </h4>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(
                      task.priority
                    )}`}
                  >
                    {task.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  Due: {formatDate(task.dueDate)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
