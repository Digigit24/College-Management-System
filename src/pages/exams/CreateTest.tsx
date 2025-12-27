import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Trash2, Save, Send } from 'lucide-react';
import type { Question, QuestionType } from '@/types';

export default function CreateTest() {
  const [examDetails, setExamDetails] = useState({
    name: '',
    subject: '',
    class: '',
    section: '',
    maxMarks: '',
    allowedTime: '',
    printCount: '',
  });

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Partial<Question>>({
    type: 'multiple_choice',
    question: '',
    marks: 1,
    options: ['', '', '', ''],
  });

  const addQuestion = () => {
    if (!currentQuestion.question || !currentQuestion.marks) {
      alert('Please fill in question details');
      return;
    }

    const newQuestion: Question = {
      id: Date.now().toString(),
      type: currentQuestion.type as QuestionType,
      question: currentQuestion.question,
      marks: currentQuestion.marks,
      options: currentQuestion.options,
      correctAnswer: currentQuestion.correctAnswer,
      answer: currentQuestion.answer,
    };

    setQuestions([...questions, newQuestion]);
    setCurrentQuestion({
      type: 'multiple_choice',
      question: '',
      marks: 1,
      options: ['', '', '', ''],
    });
  };

  const removeQuestion = (id: string) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleSaveDraft = () => {
    console.log('Saving as draft:', { examDetails, questions });
    alert('Test saved as draft!');
  };

  const handleSubmitToPrint = () => {
    if (!examDetails.name || !examDetails.subject || questions.length === 0) {
      alert('Please fill in all required fields and add at least one question');
      return;
    }

    console.log('Submitting to print store:', { examDetails, questions });
    alert('Test submitted to print store successfully!');
  };

  const totalMarks = questions.reduce((sum, q) => sum + q.marks, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create Test / Examination</h1>
        <p className="text-muted-foreground mt-1">
          Design your test paper with various question types
        </p>
      </div>

      {/* Exam Details */}
      <Card>
        <CardHeader>
          <CardTitle>Exam Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Exam Name *</Label>
              <Input
                id="name"
                placeholder="e.g., Mid-Term Mathematics Exam"
                value={examDetails.name}
                onChange={(e) =>
                  setExamDetails({ ...examDetails, name: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject *</Label>
              <Select
                id="subject"
                value={examDetails.subject}
                onChange={(e) =>
                  setExamDetails({ ...examDetails, subject: e.target.value })
                }
              >
                <option value="">Select Subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="English">English</option>
                <option value="History">History</option>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="class">Class *</Label>
              <Select
                id="class"
                value={examDetails.class}
                onChange={(e) =>
                  setExamDetails({ ...examDetails, class: e.target.value })
                }
              >
                <option value="">Select Class</option>
                <option value="10A">10A</option>
                <option value="10B">10B</option>
                <option value="11A">11A</option>
                <option value="11B">11B</option>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="section">Section</Label>
              <Input
                id="section"
                placeholder="e.g., A"
                value={examDetails.section}
                onChange={(e) =>
                  setExamDetails({ ...examDetails, section: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="maxMarks">Maximum Marks</Label>
              <Input
                id="maxMarks"
                type="number"
                placeholder="100"
                value={examDetails.maxMarks}
                onChange={(e) =>
                  setExamDetails({ ...examDetails, maxMarks: e.target.value })
                }
              />
              {totalMarks > 0 && (
                <p className="text-xs text-muted-foreground">
                  Current total: {totalMarks} marks
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="allowedTime">Allowed Time (minutes)</Label>
              <Input
                id="allowedTime"
                type="number"
                placeholder="90"
                value={examDetails.allowedTime}
                onChange={(e) =>
                  setExamDetails({ ...examDetails, allowedTime: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="printCount">Number of Copies to Print</Label>
              <Input
                id="printCount"
                type="number"
                placeholder="50"
                value={examDetails.printCount}
                onChange={(e) =>
                  setExamDetails({ ...examDetails, printCount: e.target.value })
                }
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add Question */}
      <Card>
        <CardHeader>
          <CardTitle>Add Question</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="questionType">Question Type</Label>
              <Select
                id="questionType"
                value={currentQuestion.type}
                onChange={(e) =>
                  setCurrentQuestion({
                    ...currentQuestion,
                    type: e.target.value as QuestionType,
                  })
                }
              >
                <option value="multiple_choice">Multiple Choice</option>
                <option value="true_false">True/False</option>
                <option value="short_answer">Short Answer</option>
                <option value="long_answer">Long Answer</option>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="marks">Marks</Label>
              <Input
                id="marks"
                type="number"
                min="1"
                value={currentQuestion.marks}
                onChange={(e) =>
                  setCurrentQuestion({
                    ...currentQuestion,
                    marks: parseInt(e.target.value),
                  })
                }
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="question">Question *</Label>
            <Textarea
              id="question"
              placeholder="Enter your question here..."
              value={currentQuestion.question}
              onChange={(e) =>
                setCurrentQuestion({
                  ...currentQuestion,
                  question: e.target.value,
                })
              }
              rows={3}
            />
          </div>

          {currentQuestion.type === 'multiple_choice' && (
            <div className="space-y-2">
              <Label>Options</Label>
              {currentQuestion.options?.map((option, index) => (
                <Input
                  key={index}
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) => {
                    const newOptions = [...(currentQuestion.options || [])];
                    newOptions[index] = e.target.value;
                    setCurrentQuestion({
                      ...currentQuestion,
                      options: newOptions,
                    });
                  }}
                />
              ))}
              <div className="space-y-2">
                <Label htmlFor="correctAnswer">Correct Answer (Option number)</Label>
                <Input
                  id="correctAnswer"
                  type="number"
                  min="1"
                  max="4"
                  placeholder="1, 2, 3, or 4"
                  onChange={(e) =>
                    setCurrentQuestion({
                      ...currentQuestion,
                      correctAnswer: parseInt(e.target.value),
                    })
                  }
                />
              </div>
            </div>
          )}

          {currentQuestion.type === 'true_false' && (
            <div className="space-y-2">
              <Label htmlFor="tfAnswer">Correct Answer</Label>
              <Select
                id="tfAnswer"
                onChange={(e) =>
                  setCurrentQuestion({
                    ...currentQuestion,
                    correctAnswer: e.target.value,
                  })
                }
              >
                <option value="">Select Answer</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </Select>
            </div>
          )}

          <Button onClick={addQuestion} className="w-full">
            <Plus className="w-4 h-4 mr-2" />
            Add Question
          </Button>
        </CardContent>
      </Card>

      {/* Questions List */}
      {questions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Questions ({questions.length})</span>
              <Badge variant="secondary">{totalMarks} marks total</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {questions.map((question, index) => (
              <div
                key={question.id}
                className="p-4 border rounded-lg space-y-2 hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">Q{index + 1}</Badge>
                      <Badge>{question.type.replace('_', ' ')}</Badge>
                      <Badge variant="secondary">{question.marks} marks</Badge>
                    </div>
                    <p className="font-medium">{question.question}</p>
                    {question.options && (
                      <div className="mt-2 ml-4 space-y-1 text-sm text-muted-foreground">
                        {question.options.map((opt, i) => (
                          <p key={i}>
                            {i + 1}. {opt}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeQuestion(question.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Actions */}
      <div className="flex gap-3 justify-end">
        <Button variant="outline" onClick={handleSaveDraft}>
          <Save className="w-4 h-4 mr-2" />
          Save as Draft
        </Button>
        <Button onClick={handleSubmitToPrint}>
          <Send className="w-4 h-4 mr-2" />
          Submit to Print Store
        </Button>
      </div>
    </div>
  );
}
