import React from 'react';
import { Bell, Pin } from 'lucide-react';

interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  isPinned: boolean;
  category: 'academic' | 'event' | 'holiday' | 'general';
}

const mockNotices: Notice[] = [
  {
    id: '1',
    title: 'Mid-Term Exam Schedule Released',
    content: 'The mid-term examination schedule has been published. Please check the notice board.',
    date: '2024-01-22',
    isPinned: true,
    category: 'academic',
  },
  {
    id: '2',
    title: 'Annual Sports Day',
    content: 'Annual sports day will be held on February 15th. All students must participate.',
    date: '2024-01-20',
    isPinned: true,
    category: 'event',
  },
  {
    id: '3',
    title: 'Republic Day Holiday',
    content: 'College will remain closed on January 26th for Republic Day.',
    date: '2024-01-18',
    isPinned: false,
    category: 'holiday',
  },
  {
    id: '4',
    title: 'Library Timings Extended',
    content: 'Library will now be open until 8 PM on weekdays.',
    date: '2024-01-15',
    isPinned: false,
    category: 'general',
  },
];

export const NoticeBoard: React.FC = () => {
  const getCategoryColor = (category: Notice['category']) => {
    switch (category) {
      case 'academic':
        return 'bg-blue-50 text-blue-700';
      case 'event':
        return 'bg-purple-50 text-purple-700';
      case 'holiday':
        return 'bg-green-50 text-green-700';
      case 'general':
        return 'bg-gray-50 text-gray-700';
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Recent Notices</h3>
        <Bell className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-3">
        {mockNotices.map((notice) => (
          <div
            key={notice.id}
            className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-start space-x-2 flex-1">
                {notice.isPinned && (
                  <Pin className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900">
                    {notice.title}
                  </h4>
                </div>
              </div>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(
                  notice.category
                )}`}
              >
                {notice.category}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{notice.content}</p>
            <p className="text-xs text-gray-500">{formatDate(notice.date)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
