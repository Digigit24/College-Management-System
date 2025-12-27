import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { Calendar, Clock } from 'lucide-react';

export default function TimetablesPage() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const periods = ['9:00-10:00', '10:00-11:00', '11:00-12:00', '12:00-1:00', '2:00-3:00', '3:00-4:00'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
      <div className="p-6 max-w-7xl mx-auto">
        <PageHeader
          title="Timetables"
          description="Manage class schedules and timetables"
          action={{ label: 'Create Timetable', onClick: () => {}, icon: Calendar }}
        />
        
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-800">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300">Time</th>
                  {days.map(day => (
                    <th key={day} className="px-4 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                {periods.map((period, i) => (
                  <tr key={period} className="hover:bg-indigo-50/50 dark:hover:bg-slate-700/50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-gray-400" />
                      {period}
                    </td>
                    {days.map((day, j) => (
                      <td key={day} className="px-4 py-3 text-center text-sm">
                        {(i + j) % 3 === 0 ? (
                          <div className="bg-indigo-100 dark:bg-indigo-900 rounded p-2">
                            <div className="font-semibold text-indigo-900 dark:text-indigo-300 text-xs">Math</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Room 201</div>
                          </div>
                        ) : null}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
