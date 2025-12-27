import React from 'react';
import { PageHeader } from '@/components/common/PageHeader';
import { Settings, Bell, Shield, Palette, Database } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
      <div className="p-6 max-w-7xl mx-auto">
        <PageHeader
          title="Settings"
          description="Configure system settings and preferences"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <div className="flex items-center mb-4">
              <Settings className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">General Settings</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Configure basic system preferences</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <div className="flex items-center mb-4">
              <Bell className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Manage notification preferences</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Security</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Security and access control settings</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <div className="flex items-center mb-4">
              <Database className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Database</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Database backup and maintenance</p>
          </div>
        </div>
      </div>
    </div>
  );
}
