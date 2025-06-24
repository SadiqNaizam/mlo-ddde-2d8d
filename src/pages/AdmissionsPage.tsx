import React from 'react';
import { Link } from 'react-router-dom';

// Import Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import shadcn/ui Components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

// Import Icons
import { FileText, ClipboardCheck, Calendar, DollarSign, ArrowRight } from 'lucide-react';

const AdmissionsPage = () => {
  console.log('AdmissionsPage loaded');

  const faqItems = [
    {
      question: "Is prior research experience a mandatory requirement?",
      answer: "While not strictly mandatory, a demonstrated history of research, such as publications or significant project contributions, is highly valued and strengthens your application considerably. We look for a deep-seated passion for inquiry and innovation."
    },
    {
      question: "What is the typical acceptance rate for your programs?",
      answer: "Our acceptance rate is highly competitive, reflecting the caliber of our institution and the talent we attract. It typically stands between 4-6% annually, varying slightly by department."
    },
    {
      question: "Are international students eligible for the student stipend program?",
      answer: "Yes, all admitted Ph.D. students, regardless of nationality, are fully funded through our comprehensive stipend program, which includes tuition, fees, health insurance, and a generous living allowance."
    },
    {
      question: "Can I apply to more than one department?",
      answer: "Applicants may only apply to one graduate program per admissions cycle. We encourage you to thoroughly research our departments and apply to the one that best aligns with your academic and research goals."
    }
  ];

  return (
    <div className="bg-background text-foreground font-body">
      <Header />

      <main>
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Admissions & Aid
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Join an elite cohort of researchers and innovators. We seek to attract the most brilliant minds from around the globe to solve the world's most challenging problems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content: Application Process & Criteria */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center gap-3">
                    <ClipboardCheck className="h-6 w-6 text-primary" />
                    Application Process
                  </CardTitle>
                  <CardDescription>
                    Our application process is designed to be thorough and holistic, ensuring we identify candidates with exceptional potential.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
                    <li>
                      <span className="font-semibold text-foreground">Submit Online Application:</span> Complete the graduate application form and submit the non-refundable application fee.
                    </li>
                    <li>
                      <span className="font-semibold text-foreground">Upload Required Documents:</span> Provide academic transcripts, statement of purpose, curriculum vitae, and three letters of recommendation.
                    </li>
                    <li>
                      <span className="font-semibold text-foreground">Departmental Review:</span> Our faculty committee meticulously reviews each application, assessing academic fit and research alignment.
                    </li>
                    <li>
                      <span className="font-semibold text-foreground">Admissions Interview:</span> Shortlisted candidates will be invited for a virtual interview with faculty members.
                    </li>
                    <li>
                      <span className="font-semibold text-foreground">Receive Decision:</span> Final admissions decisions are communicated via the application portal.
                    </li>
                  </ol>
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <section>
                <h2 className="font-heading text-3xl font-bold mt-12 mb-6 text-center lg:text-left">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger className="font-heading text-lg text-left">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </div>

            {/* Sidebar: Dates, Stipend, CTA */}
            <div className="lg:col-span-1 space-y-8">
              <Card className="border-border sticky top-24">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center gap-3">
                    <Calendar className="h-6 w-6 text-primary" />
                    Key Dates
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">Applications Open:</span>
                    <span className="text-muted-foreground">September 1, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">Application Deadline:</span>
                    <span className="text-muted-foreground">January 15, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-foreground">Decisions Released:</span>
                    <span className="text-muted-foreground">March 31, 2025</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl flex items-center gap-3">
                    <DollarSign className="h-6 w-6 text-primary" />
                    Generous Student Stipend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We believe financial constraints should never hinder discovery. All admitted Ph.D. students receive a comprehensive funding package.
                  </p>
                  <div className="text-center bg-primary/10 text-primary py-3 px-4 rounded-md">
                    <p className="font-bold text-2xl">$50,000 USD</p>
                    <p className="text-sm">Annual Living Stipend + Full Tuition</p>
                  </div>
                </CardContent>
              </Card>
              
              <Button asChild size="lg" className="w-full text-lg py-7">
                <a href="https://application.example.edu" target="_blank" rel="noopener noreferrer">
                  Begin Your Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdmissionsPage;