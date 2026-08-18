import React, { useState } from 'react';
import { 
  Code2, 
  Check, 
  Copy, 
  Sparkles, 
  Zap, 
  Search, 
  Eye, 
  Layers, 
  Database,
  ArrowRight
} from 'lucide-react';

export default function DomParserVisualizer() {
  const [selectedTarget, setSelectedTarget] = useState('linkedin');
  const [highlightedSelector, setHighlightedSelector] = useState(null);
  const [copied, setCopied] = useState(false);

  const mockData = {
    linkedin: {
      title: "LinkedIn Job Details DOM",
      htmlSnippet: `<div class="job-details-v2" data-job-id="40192831">
  <h1 class="top-card-layout__title">Staff Distributed Scraping Engineer</h1>
  <a class="top-card-layout__company" href="/company/stripe">Stripe Inc.</a>
  <span class="top-card-layout__location font-mono">San Francisco, CA (Hybrid)</span>
  <div class="salary-container border-sky-100">$210,000 - $260,000 / yr</div>
  <ul class="description__skills-list">
    <li>Go</li><li>Kubernetes</li><li>Akamai Bypass</li>
  </ul>
</div>`,
      parsedJson: {
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        "title": "Staff Distributed Scraping Engineer",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Stripe Inc.",
          "sameAs": "https://www.linkedin.com/company/stripe"
        },
        "jobLocation": {
          "@type": "Place",
          "address": "San Francisco, CA (Hybrid)"
        },
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "$210,000 - $260,000 / yr"
        },
        "skills": ["Go", "Kubernetes", "Akamai Bypass"],
        "scrapepulse_status": "PARSED_AND_NORMALIZED"
      }
    },
    indeed: {
      title: "Indeed Job Card DOM",
      htmlSnippet: `<div class="jobsearch-SerpJobCard" id="jk_882910a">
  <h2 class="jobTitle"><span>Principal ML Infrastructure Architect</span></h2>
  <div class="companyName">Databricks Global</div>
  <div class="companyLocation">Remote / New York, NY</div>
  <div class="attribute_snippet">$195,000 - $235,000 a year</div>
</div>`,
      parsedJson: {
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        "title": "Principal ML Infrastructure Architect",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Databricks Global"
        },
        "jobLocation": {
          "@type": "Place",
          "address": "Remote / New York, NY"
        },
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "$195,000 - $235,000 a year"
        },
        "scrapepulse_status": "PARSED_AND_NORMALIZED"
      }
    },
    glassdoor: {
      title: "Glassdoor Salary Box DOM",
      htmlSnippet: `<div class="SalaryRow_salaryRow__1w1a">
  <div class="SalaryRow_jobTitle__2d3x">Senior Site Reliability Engineer</div>
  <div class="SalaryRow_employerName__3f4y">Meta AI Research</div>
  <div class="SalaryRow_payPeriod__4g5z">$185,000 Base Pay</div>
</div>`,
      parsedJson: {
        "@context": "https://schema.org/",
        "@type": "JobPosting",
        "title": "Senior Site Reliability Engineer",
        "hiringOrganization": {
          "@type": "Organization",
          "name": "Meta AI Research"
        },
        "baseSalary": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "$185,000 Base Pay"
        },
        "scrapepulse_status": "PARSED_AND_NORMALIZED"
      }
    }
  };

  const current = mockData[selectedTarget];

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(current.parsedJson, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="dom-parser" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sky-100 border border-sky-200 text-sky-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Code2 className="w-4 h-4 text-sky-600" />
            <span>Automated AI DOM Selector Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Unstructured DOM to <span className="gradient-text-hero">Schema.org JSON</span>
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-slate-600">
            Never update broken CSS selectors again. ScrapePulse automatically extracts normalized job posting schemas regardless of DOM obfuscation.
          </p>
        </div>

        {/* Target Switcher */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-sky-200 shadow-sm">
            <button
              onClick={() => setSelectedTarget('linkedin')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                selectedTarget === 'linkedin' ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              LinkedIn DOM Parser
            </button>
            <button
              onClick={() => setSelectedTarget('indeed')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                selectedTarget === 'indeed' ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Indeed Card Parser
            </button>
            <button
              onClick={() => setSelectedTarget('glassdoor')}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                selectedTarget === 'glassdoor' ? 'bg-sky-500 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Glassdoor Salary Box
            </button>
          </div>
        </div>

        {/* Split Screen Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Box: Obfuscated HTML DOM Tree */}
          <div className="bento-card rounded-3xl p-6 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-sky-600" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Raw Input DOM Tree</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                  HTML5 Input
                </span>
              </div>
              
              <div className="p-4 bg-slate-900 rounded-2xl font-mono text-xs text-sky-300 overflow-x-auto leading-relaxed border border-slate-800 shadow-inner">
                <pre>
                  <code>{current.htmlSnippet}</code>
                </pre>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Selector Obfuscation: <strong className="text-emerald-600 font-bold">Auto-Resolved</strong></span>
              <span className="flex items-center gap-1 text-sky-600 font-bold">
                Dynamic Parsing <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Right Box: Clean Schema.org JSON Output */}
          <div className="rounded-3xl bg-[#090e1a] border border-slate-800 shadow-2xl p-6 flex flex-col justify-between text-left">
            <div>
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
                    Schema.org Output JSON
                  </span>
                </div>
                
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono rounded-lg border border-slate-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Schema</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 bg-[#0c1322] rounded-2xl font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed border border-slate-800/80 shadow-inner">
                <pre>
                  <code>{JSON.stringify(current.parsedJson, null, 2)}</code>
                </pre>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Parser Status: <strong className="text-emerald-400">100% Valid Schema.org</strong></span>
              <span className="text-sky-400">Extraction Time: 12ms</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
