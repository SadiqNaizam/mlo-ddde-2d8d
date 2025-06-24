import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PublicationListItem from '@/components/PublicationListItem';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Lightbulb, Rocket, Search } from 'lucide-react';

const mockPublications = [
  {
    id: 1,
    title: "A Novel Framework for Quantum-Resistant Cryptography",
    authors: ["Dr. Evelyn Reed", "Dr. Kenji Tanaka"],
    venue: "Journal of Cryptographic Engineering",
    date: "Oct 2023",
    url: "#",
  },
  {
    id: 2,
    title: "Generative Adversarial Networks for Synthetic Biological Data",
    authors: ["Dr. Aris Thorne", "Dr. Lena Petrova"],
    venue: "Nature Biotechnology",
    date: "Aug 2023",
    url: "#",
  },
  {
    id: 3,
    title: "Scalable Machine Learning on Decentralized Systems",
    authors: ["Prof. Alan Grant", "Dr. Ian Malcolm"],
    venue: "Proceedings of the International Conference on Machine Learning (ICML)",
    date: "Jul 2023",
    url: "#",
  },
    {
    id: 4,
    title: "Metamaterials with Tunable Acoustic Properties",
    authors: ["Dr. Sofia Al-Jamil", "Dr. Carter Finch"],
    venue: "Advanced Materials",
    date: "May 2023",
    url: "#",
  },
];

const mockPatents = [
    { id: 'p1', title: 'Dynamic Self-Healing Polymer Composition', number: 'US 11,234,567 B2', description: 'A revolutionary material capable of repairing micro-fractures autonomously, extending component lifespan in aerospace applications.'},
    { id: 'p2', title: 'Low-Latency Neural Network Inference Chip', number: 'US 11,198,765 B2', description: 'A specialized silicon architecture that drastically reduces power consumption for on-device AI model execution.' },
    { id: 'p3', title: 'CRISPR-based Gene-editing Delivery System', number: 'US 11,054,321 B2', description: 'A novel vector for targeted and efficient delivery of gene-editing payloads in therapeutic contexts.'}
]

const ResearchInnovationHub = () => {
  console.log('Research & Innovation Hub Page loaded');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPublications = mockPublications.filter(pub =>
    pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.authors.join(', ').toLowerCase().includes(searchTerm.toLowerCase()) ||
    pub.venue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container py-12 md:py-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary">
              Research & Innovation Hub
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground font-body max-w-3xl mx-auto">
              Explore the frontiers of science and technology. Discover our latest breakthroughs, influential publications, and the vibrant startup ecosystem we cultivate.
            </p>
          </div>

          <Tabs defaultValue="publications" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-muted/80 h-12 p-1">
              <TabsTrigger value="publications" className="h-full text-base font-medium">
                <FileText className="w-5 h-5 mr-2" />
                Publications
              </TabsTrigger>
              <TabsTrigger value="patents" className="h-full text-base font-medium">
                <Lightbulb className="w-5 h-5 mr-2" />
                Patents
              </TabsTrigger>
              <TabsTrigger value="startup-center" className="h-full text-base font-medium">
                <Rocket className="w-5 h-5 mr-2" />
                Startup Center
              </TabsTrigger>
            </TabsList>

            <TabsContent value="publications" className="py-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Recent Publications</CardTitle>
                  <CardDescription>
                    Browse a curated list of our faculty's most impactful research papers.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search publications by title, author, or venue..."
                      className="pl-10 h-12 text-base"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="border-t">
                    {filteredPublications.length > 0 ? (
                      filteredPublications.map(pub => <PublicationListItem key={pub.id} {...pub} />)
                    ) : (
                      <div className="text-center py-12">
                          <p className="text-lg font-medium text-muted-foreground">No publications found for "{searchTerm}".</p>
                          <p className="text-sm text-muted-foreground/80 mt-2">Try a different search term.</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="patents" className="py-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-heading text-2xl">Granted Patents</CardTitle>
                        <CardDescription>
                            A selection of patents awarded for inventions developed at our institution.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {mockPatents.map(patent => (
                             <div key={patent.id} className="p-4 border rounded-lg bg-accent/50">
                                <h3 className="font-heading text-lg font-semibold text-primary">{patent.title}</h3>
                                <p className="text-sm font-semibold text-muted-foreground mt-1">{patent.number}</p>
                                <p className="text-base text-foreground/90 mt-2 font-body">{patent.description}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>

            <TabsContent value="startup-center" className="py-8">
                <Card className="overflow-hidden">
                    <div className="bg-primary/10 p-8">
                        <div className="flex items-center gap-4">
                            <Rocket className="h-12 w-12 text-primary" />
                            <div>
                                <CardTitle className="font-heading text-3xl text-primary">Aethelred Startup Nexus</CardTitle>
                                <CardDescription className="text-lg text-primary/80">
                                From Lab to Launchpad
                                </CardDescription>
                            </div>
                        </div>
                    </div>
                    <CardContent className="p-8">
                        <p className="text-base text-muted-foreground font-body leading-relaxed">
                            The Aethelred Startup Nexus is our dedicated incubator, designed to transform groundbreaking research into market-defining companies. We provide our entrepreneurs with mentorship from industry veterans, access to seed funding, state-of-the-art lab space, and a direct line to a global network of investors and partners. Our mission is to foster a culture of innovation where ambitious ideas are not just born, but built to scale.
                        </p>
                        <div className="mt-8">
                            <h4 className="font-heading text-xl font-semibold mb-4">Featured Ventures</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 bg-accent/50 rounded-lg border">
                                    <h5 className="font-heading font-semibold text-foreground">QuantumLeap AI</h5>
                                    <p className="text-sm text-muted-foreground font-body">Developing next-generation AI-powered drug discovery platforms.</p>
                                </div>
                                 <div className="p-4 bg-accent/50 rounded-lg border">
                                    <h5 className="font-heading font-semibold text-foreground">Helios Materials</h5>
                                    <p className="text-sm text-muted-foreground font-body">Manufacturing self-healing composites for sustainable infrastructure.</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResearchInnovationHub;