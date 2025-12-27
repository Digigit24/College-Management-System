import React from 'react';
import { TrendingUp } from 'lucide-react';

interface SubjectPerformance {
  subject: string;
  marks: number;
  maxMarks: number;
  percentage: number;
}

const mockPerformance: SubjectPerformance[] = [
  { subject: 'Mathematics', marks: 85, maxMarks: 100, percentage: 85 },
  { subject: 'Physics', marks: 78, maxMarks: 100, percentage: 78 },
  { subject: 'Chemistry', marks: 92, maxMarks: 100, percentage: 92 },
  { subject: 'English', marks: 88, maxMarks: 100, percentage: 88 },
  { subject: 'Computer Sc.', marks: 95, maxMarks: 100, percentage: 95 },
];

export const PerformanceChart: React.FC = () => {
  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-green-500';
    if (percentage >= 75) return 'bg-blue-500';
    if (percentage >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getPerformanceLabel = (percentage: number) => {
    if (percentage >= 90) return 'Excellent';
    if (percentage >= 75) return 'Good';
    if (percentage >= 60) return 'Average';
    return 'Needs Improvement';
  };

  const totalMarks = mockPerformance.reduce((sum, item) => sum + item.marks, 0);
  const totalMaxMarks = mockPerformance.reduce((sum, item) => sum + item.maxMarks, 0);
  const overallPercentage = Math.round((totalMarks / totalMaxMarks) * 100);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Academic Performance</h3>
        <TrendingUp className="h-5 w-5 text-green-500" />
      </div>

      <div className="mb-6 p-4 bg-indigo-50 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Overall Performance</p>
            <p className="text-2xl font-bold text-indigo-600">{overallPercentage}%</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Total Marks</p>
            <p className="text-lg font-semibold text-gray-900">
              {totalMarks}/{totalMaxMarks}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {mockPerformance.map((item) => (
          <div key={item.subject}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{item.subject}</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  {item.marks}/{item.maxMarks}
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  {item.percentage}%
                </span>
              </div>
            </div>
            <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full rounded-full transition-all ${getPerformanceColor(
                  item.percentage
                )}`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {getPerformanceLabel(item.percentage)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
