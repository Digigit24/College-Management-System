import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, DollarSign, Download } from 'lucide-react';

export default function FeeCollections() {
  const [searchTerm, setSearchTerm] = useState('');

  const collections = [
    {
      id: '1',
      studentName: 'John Doe',
      rollNumber: '001',
      feeType: 'Tuition Fee',
      amount: 5000,
      paidAmount: 5000,
      dueDate: '2025-12-31',
      paidDate: '2025-12-20',
      status: 'paid',
    },
    {
      id: '2',
      studentName: 'Jane Smith',
      rollNumber: '002',
      feeType: 'Tuition Fee',
      amount: 5000,
      paidAmount: 2500,
      dueDate: '2025-12-31',
      paidDate: null,
      status: 'partial',
    },
    {
      id: '3',
      studentName: 'Mike Wilson',
      rollNumber: '003',
      feeType: 'Exam Fee',
      amount: 1000,
      paidAmount: 0,
      dueDate: '2025-12-15',
      paidDate: null,
      status: 'overdue',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'success';
      case 'partial':
        return 'warning';
      case 'overdue':
        return 'destructive';
      case 'pending':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const totalCollected = collections.reduce((sum, c) => sum + c.paidAmount, 0);
  const totalPending = collections.reduce((sum, c) => sum + (c.amount - c.paidAmount), 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Fee Collections</h1>
        <p className="text-muted-foreground mt-1">Track student fee payments</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Collected</p>
                <p className="text-2xl font-bold text-green-600">${totalCollected}</p>
              </div>
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Pending</p>
                <p className="text-2xl font-bold text-orange-600">${totalPending}</p>
              </div>
              <DollarSign className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Collection Rate</p>
                <p className="text-2xl font-bold">
                  {((totalCollected / (totalCollected + totalPending)) * 100).toFixed(1)}%
                </p>
              </div>
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Fee Records</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Roll No.</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Fee Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Paid</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {collections.map((fee) => (
                <TableRow key={fee.id}>
                  <TableCell>{fee.rollNumber}</TableCell>
                  <TableCell className="font-medium">{fee.studentName}</TableCell>
                  <TableCell>{fee.feeType}</TableCell>
                  <TableCell>${fee.amount}</TableCell>
                  <TableCell>${fee.paidAmount}</TableCell>
                  <TableCell>{new Date(fee.dueDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(fee.status)}>{fee.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      Collect
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
