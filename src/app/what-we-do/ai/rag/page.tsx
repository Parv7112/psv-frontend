import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { Accordion } from "@/components/marketing/Accordion";
import { TestimonialCarousel } from "@/components/marketing/TestimonialCarousel";
import { StatRow } from "@/components/marketing/StatRow";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  CheckCircle2,
  Clock,
  Database,
  FileSearch,
  FileText,
  GitBranch,
  Key,
  Layers,
  Lock,
  MessageSquare,
  Search,
  Server,
  Settings,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function RagPage() {
  const benefits = [
    {
      icon: <Brain className="h-6 w-6 text-indigo-600" />,
      title: "Accurate Answers",
      desc: "Ground AI responses in your actual data to reduce hallucinations and provide verifiable, source-backed answers.",
    },
    {
      icon: <Lock className="h-6 w-6 text-sky-600" />,
      title: "Data Privacy",
      desc: "Keep sensitive information secure within your infrastructure. RAG works with your private data without exposing it to external models.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-emerald-600" />,
      title: "Always Up-to-Date",
      desc: "Unlike static training data, RAG retrieves from your current knowledge base, ensuring responses reflect the latest information.",
    },
  ];

  const services = [
    {
      icon: <Database className="h-6 w-6 text-indigo-600" />,
      title: "Document Ingestion & Processing",
      desc: "Extract and structure content from PDFs, Word docs, spreadsheets, and databases with intelligent chunking and metadata extraction.",
    },
    {
      icon: <Search className="h-6 w-6 text-violet-600" />,
      title: "Vector Search & Retrieval",
      desc: "Build semantic search systems using embeddings and vector databases for fast, relevant document retrieval.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-amber-600" />,
      title: "Q&A Systems",
      desc: "Create conversational interfaces that answer questions based on your documents with citations and source references.",
    },
    {
      icon: <Shield className="h-6 w-6 text-rose-600" />,
      title: "Access Control & Security",
      desc: "Implement role-based access, data filtering, and secure retrieval to ensure users only see authorized information.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-sky-600" />,
      title: "Evaluation & Monitoring",
      desc: "Measure answer quality, track retrieval accuracy, and continuously improve system performance with analytics.",
    },
    {
      icon: <Layers className="h-6 w-6 text-emerald-600" />,
      title: "Hybrid Search",
      desc: "Combine semantic search with keyword matching and filters for optimal retrieval across diverse content types.",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Document Ingestion",
      desc: "Your documents are processed, chunked, and converted into embeddings that capture semantic meaning.",
      icon: <FileText className="h-6 w-6 text-indigo-600" />,
    },
    {
      step: "2",
      title: "Vector Storage",
      desc: "Embeddings are stored in a vector database optimized for fast similarity search across millions of documents.",
      icon: <Database className="h-6 w-6 text-sky-600" />,
    },
    {
      step: "3",
      title: "Query & Retrieval",
      desc: "User questions are embedded and matched against your knowledge base to find the most relevant content.",
      icon: <Search className="h-6 w-6 text-violet-600" />,
    },
    {
      step: "4",
      title: "Answer Generation",
      desc: "Retrieved context is sent to an LLM to generate accurate, grounded responses with source citations.",
      icon: <MessageSquare className="h-6 w-6 text-emerald-600" />,
    },
  ];

  const useCases = [
    {
      title: "Internal Knowledge Base",
      desc: "Enable employees to search and get answers from company documentation, policies, and procedures.",
      icon: <BookOpen className="h-5 w-5 text-indigo-600" />,
    },
    {
      title: "Customer Support",
      desc: "Provide instant, accurate answers to customer questions based on product docs and support articles.",
      icon: <MessageSquare className="h-5 w-5 text-sky-600" />,
    },
    {
      title: "Legal & Compliance",
      desc: "Search through contracts, regulations, and legal documents with precise citation and context.",
      icon: <FileText className="h-5 w-5 text-amber-600" />,
    },
    {
      title: "Research & Analysis",
      desc: "Query research papers, reports, and datasets to extract insights and synthesize information.",
      icon: <FileSearch className="h-5 w-5 text-violet-600" />,
    },
    {
      title: "Technical Documentation",
      desc: "Help developers find API references, code examples, and troubleshooting guides quickly.",
      icon: <Server className="h-5 w-5 text-slate-600" />,
    },
    {
      title: "Sales Enablement",
      desc: "Give sales teams instant access to product specs, case studies, and competitive intelligence.",
      icon: <Target className="h-5 w-5 text-emerald-600" />,
    },
  ];

  const ragVsTraditional = [
    {
      aspect: "Data Freshness",
      traditional: "Static, requires retraining",
      rag: "Always current, updates in real-time",
      ragBetter: true,
    },
    {
      aspect: "Cost",
      traditional: "High training costs",
      rag: "Lower operational costs",
      ragBetter: true,
    },
    {
      aspect: "Accuracy",
      traditional: "Prone to hallucinations",
      rag: "Grounded in source documents",
      ragBetter: true,
    },
    {
      aspect: "Transparency",
      traditional: "Black box responses",
      rag: "Source citations included",
      ragBetter: true,
    },
  ];

  const keyFeatures = [
    {
      icon: <FileText className="h-5 w-5 text-indigo-600" />,
      title: "Multi-Format Support",
      desc: "Process PDFs, Word docs, HTML, Markdown, spreadsheets, and structured data sources.",
    },
    {
      icon: <GitBranch className="h-5 w-5 text-sky-600" />,
      title: "Smart Chunking",
      desc: "Intelligent document splitting that preserves context and optimizes retrieval accuracy.",
    },
    {
      icon: <Key className="h-5 w-5 text-violet-600" />,
      title: "Metadata Filtering",
      desc: "Filter by date, author, category, or custom fields to narrow search scope and improve relevance.",
    },
    {
      icon: <Zap className="h-5 w-5 text-amber-600" />,
      title: "Fast Retrieval",
      desc: "Sub-second search across millions of documents with optimized vector indexing.",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-600" />,
      title: "Source Citations",
      desc: "Every answer includes references to source documents for verification and trust.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-rose-600" />,
      title: "Quality Metrics",
      desc: "Track retrieval precision, answer relevance, and user satisfaction with built-in analytics.",
    },
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", desc: "Medical literature & patient records" },
    { name: "Legal", icon: "⚖️", desc: "Contract search & case law" },
    { name: "Finance", icon: "💰", desc: "Research reports & compliance docs" },
    { name: "Technology", icon: "💻", desc: "Technical documentation & APIs" },
    { name: "Education", icon: "📚", desc: "Learning materials & research" },
    { name: "Retail", icon: "🛍️", desc: "Product catalogs & support" },
  ];

  const technologies = [
    "OpenAI",
    "Anthropic",
    "LangChain",
    "LlamaIndex",
    "Pinecone",
    "Weaviate",
    "Qdrant",
    "ChromaDB",
    "Elasticsearch",
    "PostgreSQL (pgvector)",
    "Hugging Face",
    "Cohere",
  ];

  const caseStudies = [
    {
      title: "Enterprise Knowledge Search",
      company: "Tech Company",
      result: "90% faster information retrieval",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop",
      tag: "RAG",
      challenge: "Employees spent hours searching through scattered documentation",
      solution: "Built RAG system indexing 10,000+ documents across multiple sources",
      metrics: { speed: "90%", accuracy: "95%", adoption: "85%" },
    },
    {
      title: "Legal Document Q&A",
      company: "Law Firm",
      result: "70% reduction in research time",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
      tag: "Document Search",
      challenge: "Lawyers needed quick access to relevant case law and precedents",
      solution: "Deployed RAG with legal-specific embeddings and citation tracking",
      metrics: { time: "70%", precision: "98%", satisfaction: "92%" },
    },
    {
      title: "Customer Support Assistant",
      company: "SaaS Platform",
      result: "60% fewer support tickets",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop",
      tag: "Q&A System",
      challenge: "Support team overwhelmed with repetitive questions",
      solution: "Created RAG-powered chatbot with product documentation",
      metrics: { tickets: "60%", resolution: "80%", rating: "4.8/5" },
    },
  ];

  const implementationSteps = [
    {
      phase: "Phase 1",
      title: "Discovery & Planning",
      duration: "1-2 weeks",
      items: [
        "Assess document sources and formats",
        "Define use cases and success metrics",
        "Choose vector database and LLM",
        "Design system architecture",
      ],
    },
    {
      phase: "Phase 2",
      title: "Data Pipeline Development",
      duration: "2-3 weeks",
      items: [
        "Build document ingestion pipeline",
        "Implement chunking strategy",
        "Generate and store embeddings",
        "Set up metadata and filtering",
      ],
    },
    {
      phase: "Phase 3",
      title: "Retrieval & Generation",
      duration: "2-3 weeks",
      items: [
        "Implement semantic search",
        "Integrate with LLM for generation",
        "Add source citation logic",
        "Build user interface",
      ],
    },
    {
      phase: "Phase 4",
      title: "Testing & Optimization",
      duration: "1-2 weeks",
      items: [
        "Evaluate answer quality",
        "Optimize retrieval parameters",
        "Add monitoring and logging",
        "Deploy to production",
      ],
    },
  ];

  const pricingFactors = [
    {
      icon: <Database className="h-5 w-5 text-indigo-600" />,
      title: "Document Volume",
      desc: "Number of documents and total data size affects storage and processing costs.",
    },
    {
      icon: <Users className="h-5 w-5 text-sky-600" />,
      title: "Query Volume",
      desc: "Expected number of searches per month impacts infrastructure requirements.",
    },
    {
      icon: <Settings className="h-5 w-5 text-violet-600" />,
      title: "Complexity",
      desc: "Custom features, integrations, and access controls add development time.",
    },
    {
      icon: <Server className="h-5 w-5 text-emerald-600" />,
      title: "Infrastructure",
      desc: "Cloud vs. on-premise deployment affects hosting and maintenance costs.",
    },
  ];

  const blogPosts = [
    {
      tag: "RAG",
      title: "What is RAG and Why Does It Matter?",
      desc: "A comprehensive guide to Retrieval-Augmented Generation and how it improves AI accuracy.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      author: "Parv Garg",
      date: "1 Mar 2024",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
      readTime: "8 min read",
    },
    {
      tag: "Vector Search",
      title: "Choosing the Right Vector Database for RAG",
      desc: "Compare popular vector databases and learn which one fits your use case and scale.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      author: "Parv Garg",
      date: "27 Feb 2024",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
      readTime: "10 min read",
    },
    {
      tag: "Best Practices",
      title: "Reducing Hallucinations in RAG Systems",
      desc: "Proven techniques to improve answer accuracy and build trust in your AI applications.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      author: "Parv Garg",
      date: "24 Feb 2024",
      authorAvatar: "https://i.pravatar.cc/150?img=12",
      readTime: "7 min read",
    },
  ];

  const faqs = [
    {
      question: "What is RAG (Retrieval-Augmented Generation)?",
      answer:
        "RAG is an AI technique that combines information retrieval with text generation. Instead of relying solely on a language model's training data, RAG retrieves relevant documents from your knowledge base and uses them to generate accurate, grounded responses. This reduces hallucinations and ensures answers are based on your actual data.",
    },
    {
      question: "How is RAG different from fine-tuning?",
      answer:
        "Fine-tuning updates a model's weights with your data, which is expensive and can become outdated. RAG retrieves current information at query time, making it more flexible, cost-effective, and always up-to-date. RAG also provides source citations, making answers verifiable and trustworthy.",
    },
    {
      question: "What types of documents can RAG work with?",
      answer:
        "RAG can process virtually any text-based content: PDFs, Word documents, HTML pages, Markdown files, spreadsheets, databases, emails, and more. We build custom ingestion pipelines to handle your specific document formats and structures.",
    },
    {
      question: "Can RAG work with unstructured and large-scale enterprise data?",
      answer:
        "Yes. RAG is specifically designed for unstructured data like documents, reports, and knowledge bases. We implement chunking strategies, metadata extraction, and vector indexing to handle millions of documents efficiently while maintaining fast retrieval and high accuracy.",
    },
    {
      question: "What industries commonly use RAG technology?",
      answer:
        "RAG is widely used across industries including legal (contract search), healthcare (medical literature), finance (research reports), technology (documentation), customer support (knowledge bases), and education (learning materials). Any organization with large document repositories can benefit from RAG.",
    },
  ];

  const relatedServices = [
    { label: "RAG Development", href: "/what-we-do/ai/rag" },
    { label: "AI Chatbots", href: "/what-we-do/ai/chatbots" },
    { label: "AI Agents", href: "/what-we-do/ai/agents" },
    { label: "AI Consulting", href: "/what-we-do/ai/consulting" },
    { label: "AI Automation", href: "/what-we-do/ai/automation" },
    { label: "Machine Learning", href: "/what-we-do/ai" },
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
              <Sparkles className="h-4 w-4 text-blue-600" />
              RAG Development Services
            </div>
            <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              RAG Development
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-slate-600">
              Build intelligent search and Q&A systems over your documents with Retrieval-Augmented Generation. Get accurate, source-backed answers from your private data.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink href="/lets-talk" variant="primary" className="px-8 py-4 text-base">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </ButtonLink>
              <ButtonLink href="/our-work" variant="secondary" className="px-8 py-4 text-base">
                View Examples
              </ButtonLink>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=800&fit=crop"
                alt="RAG Development"
                width={600}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Search className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">95%</div>
                  <div className="text-sm text-slate-600">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <StatRow />

      {/* Why Choose RAG */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Benefits"
          title="Why businesses choose RAG Development?"
          description="Transform how your organization accesses and uses knowledge with intelligent retrieval."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition-all hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 transition-transform group-hover:scale-110">
                {b.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{b.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How RAG Works */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="How It Works"
          title="How RAG Works"
          description="Understanding the RAG pipeline from documents to answers."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step) => (
            <div
              key={step.step}
              className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50">
                {step.icon}
              </div>
              <div className="mt-4 text-sm font-semibold text-slate-500">Step {step.step}</div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RAG Services */}
      <section className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-slate-50 to-white p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Our Services"
          title="RAG Development Services We Provide"
          description="End-to-end RAG solutions from data ingestion to production deployment."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition-all hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 transition-transform group-hover:scale-110">
                {s.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RAG vs Traditional AI */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Comparison"
          title="RAG vs Traditional AI"
          description="See how RAG compares to traditional language models."
        />
        <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Aspect</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Traditional AI</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">RAG</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ragVsTraditional.map((row) => (
                  <tr key={row.aspect} className="hover:bg-slate-50/50">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{row.aspect}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{row.traditional}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-slate-900">{row.rag}</span>
                        {row.ragBetter && <CheckCircle2 className="h-4 w-4 text-emerald-600" />}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Common Use Cases */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Use Cases"
          title="Common RAG Use Cases"
          description="Real-world applications of RAG across industries."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50">
                {uc.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{uc.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{uc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Features"
          title="Powerful RAG Features"
          description="Everything you need for production-grade retrieval systems."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {keyFeatures.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50">
                {f.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-slate-50 to-white p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Industries"
          title="Industries We Serve"
          description="RAG solutions tailored to your industry needs."
        />
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-slate-200/70 bg-white p-6 text-center shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition-all hover:shadow-lg"
            >
              <span className="text-4xl">{industry.icon}</span>
              <div>
                <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600">
                  {industry.name}
                </div>
                <div className="mt-1 text-xs text-slate-500">{industry.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Success Stories"
          title="Real Results from RAG Development"
          description="See how we've helped businesses unlock their knowledge."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="group overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur-sm">
                    {study.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{study.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{study.company}</p>
                <div className="mt-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  <span className="text-sm font-semibold text-emerald-600">{study.result}</span>
                </div>
                <div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Challenge</div>
                  <p className="text-sm text-slate-600">{study.challenge}</p>
                  <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Solution</div>
                  <p className="text-sm text-slate-600">{study.solution}</p>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4">
                  {Object.entries(study.metrics).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-lg font-bold text-slate-900">{value}</div>
                      <div className="text-xs text-slate-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="rounded-3xl border border-slate-200/70 bg-slate-50/80 p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Timeline"
          title="RAG Implementation Timeline"
          description="Our phased approach to building production-ready RAG systems."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {implementationSteps.map((phase, idx) => (
            <div key={phase.phase} className="relative">
              <div className="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]">
                <div className="text-sm font-semibold text-blue-600">{phase.phase}</div>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{phase.title}</h3>
                <div className="mt-2 text-sm text-slate-500">{phase.duration}</div>
                <ul className="mt-4 space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {idx < implementationSteps.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                  <ArrowRight className="h-6 w-6 text-slate-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Pricing"
          title="What Affects RAG Development Cost?"
          description="Key factors that influence project scope and pricing."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingFactors.map((factor) => (
            <div
              key={factor.title}
              className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-[0_1px_2px_rgba(2,6,23,0.06)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50">
                {factor.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{factor.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{factor.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
        <SectionHeading
          eyebrow="Tech Stack"
          title="RAG Technologies & Tools"
          description="We work with leading RAG and vector search technologies."
        />
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-xl border border-slate-200/70 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Clients Say"
          description="Hear from businesses we've helped with RAG solutions."
        />
        <div className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
          <TestimonialCarousel />
        </div>
      </section>

      {/* Blog Posts */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Insights"
          title="Latest RAG Insights"
          description="Learn about RAG technology and best practices."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-[0_1px_2px_rgba(2,6,23,0.06)] transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {post.tag}
                  </span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 line-clamp-2">{post.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 line-clamp-2">{post.desc}</p>
                <div className="mt-4 flex items-center gap-3">
                  <Image
                    src={post.authorAvatar}
                    alt={post.author}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-slate-900">{post.author}</div>
                    <div className="text-xs text-slate-500">{post.date}</div>
                  </div>
                </div>
                <Link
                  href="/blog"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          description="Everything you need to know about RAG development."
        />
        <div className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_1px_2px_rgba(2,6,23,0.06)] sm:p-12">
          <Accordion items={faqs} defaultOpenIndex={0} variant="minimal" />
        </div>
      </section>

      {/* Related Services */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Related Services</h2>
        <div className="flex flex-wrap gap-3">
          {relatedServices.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-full border border-slate-200/70 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-blue-600 to-indigo-600 p-8 shadow-[0_10px_30px_rgba(2,6,23,0.06)] sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Discover how we can help your business grow
            </h2>
            <p className="mt-4 text-lg leading-8 text-blue-100">
              Connect with our Experts and Elevate your business performance with our AI Development services.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Briefcase, label: "4+ Years Of Experience" },
                { icon: Users, label: "4+ Skilled Professionals" },
                { icon: Target, label: "10+ Global Clientele Served" },
                { icon: BarChart3, label: "20+ Projects Delivered" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <stat.icon className="h-6 w-6 text-white" />
                  <span className="text-sm font-semibold text-white">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/20 bg-white p-8 shadow-2xl">
            <h3 className="text-lg font-semibold text-slate-900">
              Let's listen to what you've got and we are here to provide you a solution.
            </h3>
            <div className="mt-6">
              <ContactForm source="rag-development" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
