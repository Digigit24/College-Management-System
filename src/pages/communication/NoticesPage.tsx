import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Bell } from 'lucide-react';

export default function NoticesPage() {
  const notices = [
    {
      id: '1',
      title: 'Parent-Teacher Meeting',
      content: 'Parent-teacher meeting scheduled for December 30, 2025. All parents are requested to attend.',
      date: '2025-12-27',
      type: 'important',
      author: 'Admin',
    },
    {
      id: '2',
      title: 'Sports Day Announcement',
      content: 'Annual sports day will be held on January 5, 2026. Students should report by 8:00 AM.',
      date: '2025-12-26',
      type: 'event',
      author: 'Sports Coordinator',
    },
    {
      id: '3',
      title: 'Library Books Return Reminder',
      content: 'All library books must be returned by December 28, 2025. Late fees will apply after the due date.',
      date: '2025-12-25',
      type: 'reminder',
      author: 'Librarian',
    },
    {
      id: '4',
      title: 'Holiday Notice',
      content: 'School will remain closed on January 1, 2026 for New Year celebration.',
      date: '2025-12-20',
      type: 'holiday',
      author: 'Admin',
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'important':
        return 'destructive';
      case 'event':
        return 'default';
      case 'reminder':
        return 'warning';
      case 'holiday':
        return 'success';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Notices & Announcements</h1>
          <p className="text-muted-foreground mt-1">View all school notices and updates</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create Notice
        </Button>
      </div>

      <div className="grid gap-4">
        {notices.map((notice) => (
          <Card key={notice.id} className="hover:bg-accent/50 transition-colors">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Bell className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{notice.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant={getTypeColor(notice.type)}>{notice.type}</Badge>
                      <span className="text-sm text-muted-foreground">
                        Posted by {notice.author} on{' '}
                        {new Date(notice.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{notice.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
