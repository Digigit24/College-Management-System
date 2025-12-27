import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';

export default function ExamSchedules() {
  const schedule = [
    {
      date: '2026-01-15',
      exams: [
        { time: '09:00 AM', subject: 'Mathematics', class: '10A', room: 'Hall 1', duration: '3 hours' },
        { time: '02:00 PM', subject: 'English', class: '10B', room: 'Hall 2', duration: '2 hours' },
      ],
    },
    {
      date: '2026-01-16',
      exams: [
        { time: '09:00 AM', subject: 'Physics', class: '11A', room: 'Lab 1', duration: '3 hours' },
        { time: '02:00 PM', subject: 'Chemistry', class: '11B', room: 'Lab 2', duration: '3 hours' },
      ],
    },
    {
      date: '2026-01-17',
      exams: [
        { time: '09:00 AM', subject: 'History', class: '10A', room: 'Hall 1', duration: '2 hours' },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Exam Schedules</h1>
        <p className="text-muted-foreground mt-1">
          View upcoming examination timetable
        </p>
      </div>

      <div className="space-y-4">
        {schedule.map((day, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(day.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {day.exams.map((exam, examIndex) => (
                  <div
                    key={examIndex}
                    className="flex items-center gap-4 p-4 bg-accent rounded-lg"
                  >
                    <div className="flex items-center gap-2 min-w-[100px]">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{exam.time}</span>
                    </div>
                    <div className="flex-1 grid grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Subject</p>
                        <p className="font-medium">{exam.subject}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Class</p>
                        <p className="font-medium">{exam.class}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Room</p>
                        <p className="font-medium">{exam.room}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <Badge variant="outline">{exam.duration}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
