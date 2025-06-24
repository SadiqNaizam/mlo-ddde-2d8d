import React, { useState, useMemo } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FacultyProfileCard from '@/components/FacultyProfileCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Search } from 'lucide-react';

const allFaculty = [
  { id: 1, name: "Dr. Alistair Finch", title: "Head of AI Research", department: "Artificial Intelligence", imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop" },
  { id: 2, name: "Prof. Evelyn Reed", title: "Professor of Machine Learning", department: "Artificial Intelligence", imageUrl: "https://images.unsplash.com/photo-1580894732444-c14251645d8a?q=80&w=580&auto=format&fit=crop" },
  { id: 3, name: "Dr. Julian Cross", title: "Director of CS Graduate Studies", department: "Computer Science & Engineering", imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=387&auto=format&fit=crop" },
  { id: 4, name: "Dr. Sofia Reyes", title: "Professor of Quantum Computing", department: "Quantum Physics", imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=871&auto=format&fit=crop" },
  { id: 5, name: "Prof. Kenji Tanaka", title: "Lead, Bio-Integrated Systems", department: "Bioengineering & Biotechnology", imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=580&auto=format&fit=crop" },
  { id: 6, name: "Dr. Isabella Rossi", title: "Lead Researcher, Nanomaterials", department: "Materials Science", imageUrl: "https://images.unsplash.com/photo-1542740348-39501838c754?q=80&w=387&auto=format&fit=crop" },
  { id: 7, name: "Dr. Marcus Thorne", title: "Associate Professor, Algorithms", department: "Computer Science & Engineering", imageUrl: "https://images.unsplash.com/photo-1627843563095-f6e94676cfe0?q=80&w=387&auto=format&fit=crop" },
  { id: 8, name: "Dr. Lena Petrova", title: "Asst. Professor, Chemical Synthesis", department: "Chemical Engineering", imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop" },
  { id: 9, name: "Dr. Anya Sharma", title: "Professor of NLP", department: "Artificial Intelligence", imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop" },
  { id: 10, name: "Prof. David Chen", title: "Chair of Bioengineering", department: "Bioengineering & Biotechnology", imageUrl: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=387&auto=format&fit=crop" },
  { id: 11, name: "Dr. Omar Badri", title: "Researcher, Quantum Entanglement", department: "Quantum Physics", imageUrl: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=387&auto=format&fit=crop" },
  { id: 12, name: "Prof. Chloe Bennett", title: "Head of Polymer Science", department: "Materials Science", imageUrl: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=634&auto=format&fit=crop" },
];

const departments = [
  "All Departments",
  "Artificial Intelligence",
  "Computer Science & Engineering",
  "Quantum Physics",
  "Bioengineering & Biotechnology",
  "Materials Science",
  "Chemical Engineering",
];

const FacultyDirectory = () => {
  console.log("Faculty Directory page loaded");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All Departments");

  const filteredFaculty = useMemo(() => {
    return allFaculty.filter(faculty => {
      const matchesDept = selectedDept === "All Departments" || faculty.department === selectedDept;
      const matchesSearch = faculty.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesDept && matchesSearch;
    });
  }, [searchTerm, selectedDept]);
  
  // NOTE: Full pagination logic is not implemented for this example.
  // This just demonstrates the UI.
  const handleProfileClick = (id: string | number) => {
    // In a real app, this would navigate to `/faculty-directory/${id}`
    alert(`Navigating to profile for faculty member with ID: ${id}. This feature is not yet implemented.`);
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <section className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary">Our Esteemed Faculty</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Meet the brilliant minds and visionary leaders at the forefront of technological innovation and academic excellence.
            </p>
          </section>

          <section className="mt-12 md:mt-16">
            <div className="bg-card border rounded-lg p-4 md:p-6 flex flex-col md:flex-row gap-4 items-center sticky top-20 z-30 backdrop-blur-sm bg-background/80">
              <div className="relative w-full md:flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by faculty name..."
                  className="w-full pl-10 h-12 text-base"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Search by faculty name"
                />
              </div>
              <Select value={selectedDept} onValueChange={setSelectedDept}>
                <SelectTrigger className="w-full md:w-[300px] h-12 text-base" aria-label="Filter by department">
                  <SelectValue placeholder="Filter by Department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map(dept => (
                    <SelectItem key={dept} value={dept} className="text-base">{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </section>

          <section className="mt-12">
            {filteredFaculty.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredFaculty.map(faculty => (
                  <FacultyProfileCard
                    key={faculty.id}
                    id={faculty.id}
                    name={faculty.name}
                    title={faculty.title}
                    department={faculty.department}
                    imageUrl={faculty.imageUrl}
                    onClick={handleProfileClick}
                  />
                ))}
              </div>
            ) : (
                <div className="text-center py-16">
                    <p className="text-lg text-muted-foreground">No faculty members match your criteria.</p>
                </div>
            )}
          </section>

          {filteredFaculty.length > 0 && (
            <section className="mt-16">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </section>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FacultyDirectory;