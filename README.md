# Multi-Role ERP/School Management System

A comprehensive, modern school management system built with React 18, TypeScript, and Tailwind CSS. This application features role-based access control for Admins, Teachers, Students, and Parents.

## Features

### Role-Based Dashboards
- **Admin Dashboard**: Overview of students, teachers, fees, attendance, and performance metrics
- **Teacher Dashboard**: Class schedules, pending tasks, student management
- **Student Dashboard**: Attendance, assignments, grades, and notices
- **Parent Portal**: View child's academic performance and updates

### Core Modules

#### 1. Examinations Module ⭐
- **Create Test**: Design exams with multiple question types (Multiple Choice, True/False, Short Answer, Long Answer)
- **Print Queue**: Submit test papers to print store with copy count
- **Exam Management**: Schedule exams, manage exam types
- **Marks Entry**: Grade students with automatic percentage and grade calculation
- **Grade Sheets**: View and export student results

#### 2. Attendance Management
- Mark daily student attendance with status tracking (Present, Absent, Late, Half Day)
- Staff attendance tracking
- Real-time statistics and reports

#### 3. Student Management
- Complete student records with personal details
- Student categories and classifications
- Document management
- Medical records tracking

#### 4. Academic Module
- Class and section management
- Subject allocation
- Timetable scheduling
- Faculty assignments
- Class teacher assignments

#### 5. Fee Management
- Fee masters and structures
- Payment collection tracking
- Fee discounts
- Student-specific fee view

#### 6. Library Management
- Book catalog with search functionality
- Issue and return tracking
- Student borrowing history
- Availability status

#### 7. Assignments
- Create assignments with attachments
- Due date tracking
- Submission management
- Grade submissions

#### 8. Communication
- Notice board for announcements
- Messaging system
- Parent-teacher communication

#### 9. HR Module
- Leave application management
- Payroll processing
- Staff records

#### 10. Reports & Analytics
- Generate comprehensive reports
- Export to PDF/Excel
- Performance analytics

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Custom Tailwind-based components)
- **Routing**: React Router v6
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Authentication**: JWT-based with role-based access control

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── layout/          # Layout components (Sidebar, Header, MainLayout)
│   ├── common/          # Reusable components
│   └── dashboard/       # Role-specific dashboard components
├── pages/
│   ├── core/            # Core settings and configuration
│   ├── accounts/        # User management
│   ├── academic/        # Academic module pages
│   ├── students/        # Student management
│   ├── attendance/      # Attendance tracking
│   ├── exams/           # Examination module
│   ├── fees/            # Fee management
│   ├── library/         # Library module
│   ├── hr/              # HR management
│   ├── communication/   # Notices and messaging
│   ├── reports/         # Reports and analytics
│   ├── store/           # Inventory management
│   ├── teacher/         # Teacher-specific pages
│   ├── student/         # Student-specific pages
│   └── assignments/     # Assignment management
├── config/
│   └── sidebar.config.ts  # Role-based sidebar configuration
├── routes/
│   ├── index.tsx        # Route definitions
│   └── ProtectedRoute.tsx  # Authentication guard
├── hooks/               # Custom React hooks
├── store/               # Zustand state management
├── types/               # TypeScript type definitions
└── lib/                 # Utility functions
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd College-Management-System
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Demo Credentials

The application includes mock authentication for testing different user roles:

| Role | Email | Password |
|------|-------|----------|
| Super Admin | admin@college.com | password |
| Teacher | teacher@college.com | password |
| Student | student@college.com | password |
| Parent | parent@college.com | password |

## Key Features Implemented

### 1. Role-Based Access Control
- Dynamic sidebar based on user role
- Protected routes with authentication
- Role-specific dashboards
- Filtered menu items per user type

### 2. Examination System
- **Test Creation**: Comprehensive test builder with multiple question types
- **Question Types**: Multiple Choice, True/False, Short Answer, Long Answer
- **Print Integration**: Submit tests to print store with copy count
- **Marks Entry**: Automated grading system
- **Grade Calculation**: Automatic percentage and grade assignment

### 3. Modern UI/UX
- Responsive design (mobile, tablet, desktop)
- Dark mode support (via Tailwind)
- Consistent design system
- Loading states and error handling

### 4. Data Management
- Mock data for all modules
- Local storage for authentication
- Real-time state updates
- Form validation

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Customization

### Adding New Roles
Edit `src/types/index.ts` to add new user types and update `src/config/sidebar.config.ts` to configure menu access.

### Adding New Pages
1. Create page component in appropriate `src/pages/` directory
2. Add route in `src/routes/index.tsx`
3. Add menu item in `src/config/sidebar.config.ts`

### Styling
- Global styles: `src/index.css`
- Theme colors: Tailwind CSS variables in `src/index.css`
- Component styles: Tailwind utility classes

## Important Notes

- This is a frontend-only demo with mock data
- No actual backend API integration (yet)
- Authentication is simulated with localStorage
- All data is temporary and resets on logout

## Future Enhancements

- Backend API integration
- Real database connectivity
- File upload functionality
- Real-time notifications
- Advanced reporting with charts
- Email/SMS integration
- Payment gateway integration
- Mobile app version

## License

MIT License

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
