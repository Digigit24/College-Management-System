import React from 'react';
import { Clock, UserPlus, FileText, DollarSign, AlertCircle } from 'lucide-react';

interface Activity {
  id: number;
  type: 'enrollment' | 'fee' | 'announcement' | 'alert';
  title: string;
  description: string;
  time: string;
}

const mockActivities: Activity[] = [
  {
    id: 1,
    type: 'enrollment',
    title: 'New Student Enrolled',
    description: 'John Doe enrolled in Class 10-A',
    time: '10 minutes ago',
  },
  {
    id: 2,
    type: 'fee',
    title: 'Fee Payment Received',
    description: 'Payment of ₹25,000 received from Jane Smith',
    time: '1 hour ago',
  },
  {
    id: 3,
    type: 'announcement',
    title: 'New Announcement',
    description: 'Mid-term exam schedule published',
    time: '2 hours ago',
  },
  {
    id: 4,
    type: 'alert',
    title: 'Low Attendance Alert',
    description: 'Class 9-B attendance below 80%',
    time: '3 hours ago',
  },
];

const getActivityIcon = (type: Activity['type']) => {
  switch (type) {
    case 'enrollment':
      return UserPlus;
    case 'fee':
      return DollarSign;
    case 'announcement':
      return FileText;
    case 'alert':
      return AlertCircle;
  }
};

const getActivityColor = (type: Activity['type']) => {
  switch (type) {
    case 'enrollment':
      return 'bg-green-50 text-green-600';
    case 'fee':
      return 'bg-blue-50 text-blue-600';
    case 'announcement':
      return 'bg-purple-50 text-purple-600';
    case 'alert':
      return 'bg-red-50 text-red-600';
  }
};

export const ActivityCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h3>
      <div className="space-y-4">
        {mockActivities.map((activity) => {
          const Icon = getActivityIcon(activity.type);
          const colorClass = getActivityColor(activity.type);

          return (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${colorClass}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <div className="flex items-center mt-1 text-xs text-gray-500">
                  <Clock className="h-3 w-3 mr-1" />
                  {activity.time}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
