export type UserType = 'super_admin' | 'college_admin' | 'teacher' | 'student' | 'parent';

export interface User {
  id: number;
  user_type: UserType;
  full_name: string;
  email: string;
  college_id: number;
  college_name?: string;
  department?: string;
  phone?: string;
  avatar?: string;
  permissions?: string[]; // Module permissions from backend
  // Teacher specific
  employee_id?: string;
  subjects?: string[];
  classes?: string[];
  // Student specific
  student_id?: string;
  class?: string;
  section?: string;
  roll_number?: string;
  parent_id?: number;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User) => void;
}

// Question types for exam creation
export type QuestionType = 'multiple_choice' | 'true_false' | 'short_answer' | 'long_answer';

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  marks: number;
  options?: string[]; // For multiple choice
  correctAnswer?: string | number; // For multiple choice and true/false
  answer?: string; // For short and long answer (sample answer)
}

export interface Exam {
  id: string;
  name: string;
  subject: string;
  class: string;
  section: string;
  maxMarks: number;
  allowedTime: number; // in minutes
  printCount: number;
  questions: Question[];
  createdBy: string;
  createdAt: string;
  status: 'draft' | 'submitted' | 'printed' | 'completed';
}

// Other common types
export interface Student {
  id: string;
  name: string;
  email: string;
  class: string;
  section: string;
  rollNumber: string;
  dob: string;
  phone: string;
  parentName: string;
  parentPhone: string;
  address: string;
  status: 'active' | 'inactive';
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  employeeId: string;
  department: string;
  subjects: string[];
  phone: string;
  joiningDate: string;
  status: 'active' | 'inactive';
}

export interface Attendance {
  id: string;
  studentId: string;
  date: string;
  status: 'present' | 'absent' | 'late' | 'half_day';
  remarks?: string;
}

export interface Fee {
  id: string;
  studentId: string;
  feeType: string;
  amount: number;
  dueDate: string;
  paidDate?: string;
  status: 'pending' | 'paid' | 'overdue' | 'partial';
  paidAmount?: number;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  totalCopies: number;
  availableCopies: number;
  status: 'available' | 'unavailable';
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  subject: string;
  class: string;
  section: string;
  dueDate: string;
  totalMarks: number;
  attachments?: string[];
  createdBy: string;
  createdAt: string;
  status: 'active' | 'closed';
}
