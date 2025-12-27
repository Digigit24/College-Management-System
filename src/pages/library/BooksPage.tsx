import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Search, Edit, BookOpen } from 'lucide-react';

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const books = [
    {
      id: '1',
      title: 'Advanced Mathematics',
      author: 'John Smith',
      isbn: '978-0-123456-78-9',
      category: 'Mathematics',
      totalCopies: 10,
      availableCopies: 7,
      status: 'available',
    },
    {
      id: '2',
      title: 'Physics Fundamentals',
      author: 'Jane Doe',
      isbn: '978-0-987654-32-1',
      category: 'Physics',
      totalCopies: 8,
      availableCopies: 0,
      status: 'unavailable',
    },
    {
      id: '3',
      title: 'World History',
      author: 'Mike Wilson',
      isbn: '978-0-456789-01-2',
      category: 'History',
      totalCopies: 12,
      availableCopies: 5,
      status: 'available',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Library Books</h1>
          <p className="text-muted-foreground mt-1">Manage library book collection</p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Book
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Book Catalog</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search books..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>ISBN</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Available/Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {books.map((book) => (
                <TableRow key={book.id}>
                  <TableCell className="font-medium">{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell className="font-mono text-xs">{book.isbn}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{book.category}</Badge>
                  </TableCell>
                  <TableCell>
                    {book.availableCopies} / {book.totalCopies}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={book.status === 'available' ? 'success' : 'secondary'}
                    >
                      {book.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <BookOpen className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
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
