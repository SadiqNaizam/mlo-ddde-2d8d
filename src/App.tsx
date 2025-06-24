import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import AcademicsDepartmentsPage from "./pages/AcademicsDepartmentsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import FacultyDirectory from "./pages/FacultyDirectory";
import Homepage from "./pages/Homepage";
import ResearchInnovationHub from "./pages/ResearchInnovationHub";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


const App = () => (
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
        <Routes>


          <Route path="/" element={<Homepage />} />
          <Route path="/academics-departments" element={<AcademicsDepartmentsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/faculty-directory" element={<FacultyDirectory />} />
          <Route path="/research-innovation-hub" element={<ResearchInnovationHub />} />
          {/* catch-all */}
          <Route path="*" element={<NotFound />} />


        </Routes>
    </BrowserRouter>
    </TooltipProvider>
</QueryClientProvider>
);

export default App;
