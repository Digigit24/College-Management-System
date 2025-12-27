import React from 'react';
import { Clock, MapPin } from 'lucide-react';

interface ClassSession {
  id: string;
  subject: string;
  class: string;
  section: string;
  time: string;
  room: string;
  status: 'upcoming' | 'ongoing' | 'completed';
}

const mockClasses: ClassSession[] = [
  {
    id: '1',
    subject: 'Mathematics',
    class: '10',
    section: 'A',
    time: '9:00 AM - 9:45 AM',
    room: 'Room 201',
    status: 'completed',
  },
  {
    id: '2',
    subject: 'Physics',
    class: '10',
    section: 'B',
    time: '10:00 AM - 10:45 AM',
    room: 'Lab 1',
    status: 'ongoing',
  },
  {
    id: '3',
    subject: 'Chemistry',
    class: '11',
    section: 'A',
    time: '11:00 AM - 11:45 AM',
    room: 'Lab 2',
    status: 'upcoming',
  },
  {
    id: '4',
    subject: 'English',
    class: '9',
    section: 'C',
    time: '1:00 PM - 1:45 PM',
    room: 'Room 105',
    status: 'upcoming',
  },
];

export const ClassSchedule: React.FC = () => {
  const getStatusColor = (status: ClassSession['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-gray-100 text-gray-600';
      case 'ongoing':
        return 'bg-green-100 text-green-700';
      case 'upcoming':
        return 'bg-blue-100 text-blue-700';
    }
  };

  const getStatusText = (status: ClassSession['status']) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'ongoing':
        return 'Ongoing';
      case 'upcoming':
        return 'Upcoming';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Classes</h3>
      <div className="space-y-3">
        {mockClasses.map((session) => (
          <div
            key={session.id}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold text-gray-900">
                  {session.subject}
                </h4>
                <span
                  className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                    session.status
                  )}`}
                >
                  {getStatusText(session.status)}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                Class {session.class}-{session.section}
              </p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {session.time}
                </div>
                <div className="flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {session.room}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
