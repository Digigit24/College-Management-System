import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { getFilteredSidebarGroups, getPortalTitle } from '@/config/sidebar.config';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronRight, GraduationCap } from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();
  const user = useAuthStore((state) => state.user);
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['Dashboard']);

  if (!user) return null;

  const sidebarGroups = getFilteredSidebarGroups(user.user_type);
  const portalTitle = getPortalTitle(user.user_type);

  const toggleGroup = (groupName: string) => {
    setExpandedGroups((prev) =>
      prev.includes(groupName)
        ? prev.filter((g) => g !== groupName)
        : [...prev, groupName]
    );
  };

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <aside className="w-64 bg-card border-r border-border h-screen overflow-y-auto flex flex-col">
      {/* Logo and Title */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="bg-primary rounded-lg p-2">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg">{portalTitle}</h2>
            <p className="text-xs text-muted-foreground">ERP System</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {sidebarGroups.map((group) => {
          const isExpanded = expandedGroups.includes(group.group);
          const GroupIcon = group.icon;

          return (
            <div key={group.group} className="space-y-1">
              {/* Group Header */}
              <button
                onClick={() => toggleGroup(group.group)}
                className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
              >
                <div className="flex items-center gap-2">
                  <GroupIcon className="w-4 h-4" />
                  <span>{group.group}</span>
                </div>
                {isExpanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>

              {/* Group Items */}
              {isExpanded && (
                <div className="ml-4 space-y-1">
                  {group.items.map((item) => {
                    const ItemIcon = item.icon;
                    const active = isActive(item.href);

                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={cn(
                          'flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors',
                          active
                            ? 'bg-primary text-primary-foreground font-medium'
                            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                        )}
                      >
                        <ItemIcon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User Info */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-sm font-medium text-primary">
              {user.full_name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">{user.full_name}</p>
            <p className="text-xs text-muted-foreground truncate capitalize">
              {user.user_type.replace('_', ' ')}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
