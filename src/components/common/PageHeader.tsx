import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
    icon?: React.ComponentType<{ className?: string }>;
  };
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  action,
  children,
}) => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-6 sticky top-16 z-10 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {description && (
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          )}
        </div>
        {action && (
          <Button
            onClick={action.onClick}
            className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl transition-all"
          >
            {action.icon ? <action.icon className="w-4 h-4 mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
            {action.label}
          </Button>
        )}
        {children}
      </div>
    </div>
  );
};
