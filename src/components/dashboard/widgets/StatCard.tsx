import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: LucideIcon;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  change,
  trend = 'neutral',
  icon: Icon,
}) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : null;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {subtitle && (
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          )}
          {change && (
            <div className={`flex items-center mt-2 ${getTrendColor()}`}>
              {TrendIcon && <TrendIcon className="h-4 w-4 mr-1" />}
              <span className="text-sm font-medium">{change}</span>
            </div>
          )}
        </div>
        {Icon && (
          <div className="p-3 bg-indigo-50 rounded-lg">
            <Icon className="h-6 w-6 text-indigo-600" />
          </div>
        )}
      </div>
    </div>
  );
};
