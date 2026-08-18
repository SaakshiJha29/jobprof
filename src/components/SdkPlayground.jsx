import React, { useState } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  Code2, 
  Cpu, 
  Sliders, 
  Zap, 
  Layers,
  Sparkles
} from 'lucide-react';

export default function SdkPlayground() {
  const [activeLang, setActiveLang] = useState('python'); // 'python' | 'node' | 'curl' | 'go' | 'rust'
  const [stealth, setStealth] = useState(true);
  const [geoTarget, setGeoTarget] = useState('us');
  const [solveCaptcha, setSolveCaptcha] = useState(true);
  const [webhook, setWebhook] = useState(false);
  const [copied, setCopied] = useState(false);

  const getCodeSnippet = () => {
    const geoStr = geoTarget === 'us' ? 'us-east' : geoTarget === 'eu' ? 'eu-central' : 'ap-south';

    if (activeLang === 'python') {
      return `import requests

url = "https://api.scrapepulse.com/v1/ingest"
headers = {
    "Authorization": "Bearer sp_live_key_9921401a",
    "Content-Type": "application/json"
}
payload = {
    "target": "linkedin",
    "url": "https://www.linkedin.com/jobs/view/40192831",
    "stealth_ja3": ${stealth ? "True" : "False"},
    "geo_region": "${geoStr}",
    "auto_captcha": ${solveCaptcha ? "True" : "False"},
    "webhook_sink": ${webhook ? '"https://api.yourdomain.com/hooks"' : "None"}
}

response = requests.post(url, json=payload, headers=headers)
print("Scraped Job Payload:", response.json())`;
    } else if (activeLang === 'node') {
      return `const axios = require('axios');

async function scrapeJobBoard() {
  const response = await axios.post('https://api.scrapepulse.com/v1/ingest', {
    target: 'indeed',
    query: 'Staff Distributed Systems Engineer',
    stealth_ja3: ${stealth},
    geo_region: '${geoStr}',
    auto_captcha: ${solveCaptcha},
    webhook_sink: ${webhook ? '"https://api.yourdomain.com/hooks"' : 'null'}
  }, {
    headers: {
      'Authorization': 'Bearer sp_live_key_9921401a'
    }
  });

  console.log('Ingested Schema:', response.data);
}

scrapeJobBoard();`;
    } else if (activeLang === 'curl') {
      return `curl -X POST https://api.scrapepulse.com/v1/ingest \\
  -H "Authorization: Bearer sp_live_key_9921401a" \\
  -H "Content-Type: application/json" \\
  -d '{
    "target": "linkedin",
    "stealth_ja3": ${stealth},
    "geo_region": "${geoStr}",
    "auto_captcha": ${solveCaptcha}
  }'`;
    } else if (activeLang === 'go') {
      return `package main

import (
    "bytes"
    "fmt"
    "io"
    "net/http"
)

func main() {
    jsonPayload := []byte(\`{
        "target": "linkedin",
        "stealth_ja3": ${stealth},
        "geo_region": "${geoStr}"
    }\`)

    req, _ := http.NewRequest("POST", "https://api.scrapepulse.com/v1/ingest", bytes.NewBuffer(jsonPayload))
    req.Header.Set("Authorization", "Bearer sp_live_key_9921401a")
    req.Header.Set("Content-Type", "application/json")

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil { panic(err) }
    defer resp.Body.Close()

    body, _ := io.ReadAll(resp.Body)
    fmt.Println(string(body))
}`;
    } else {
      // Rust
      return `use reqwest::header::{AUTHORIZATION, CONTENT_TYPE};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    let res = client.post("https://api.scrapepulse.com/v1/ingest")
        .header(AUTHORIZATION, "Bearer sp_live_key_9921401a")
        .header(CONTENT_TYPE, "application/json")
        .body(r#"{
            "target": "indeed",
            "stealth_ja3": ${stealth},
            "geo_region": "${geoStr}"
        }"#)
        .send()
        .await?;

    println!("Status: {}", res.status());
    Ok(())
}`;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getCodeSnippet());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="sdk-playground" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sky-950 border border-sky-800 text-sky-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Cpu className="w-4 h-4 text-sky-400" />
            <span>Multi-Language Developer SDKs</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Production-Ready <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">API Generators</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-base sm:text-lg">
            Integrate ScrapePulse into your existing stack with native SDK code snippets in Python, Node.js, Go, Rust, and cURL.
          </p>
        </div>

        {/* Playground Card Container */}
        <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl p-6 lg:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls Column */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              {/* Language Selector Tabs */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">
                  Select Language / SDK
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {[
                    { id: 'python', label: 'Python' },
                    { id: 'node', label: 'Node.js' },
                    { id: 'curl', label: 'cURL' },
                    { id: 'go', label: 'Go' },
                    { id: 'rust', label: 'Rust' }
                  ].map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => setActiveLang(lang.id)}
                      className={`py-2 px-3 text-xs font-mono font-bold rounded-xl border transition-all ${
                        activeLang === lang.id
                          ? 'bg-sky-500 text-white border-sky-400 shadow-md shadow-sky-500/20'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Parameter Toggles */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                
                {/* Stealth JA3 */}
                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-2xl border border-slate-800">
                  <div>
                    <span className="text-xs font-bold text-white block">Stealth TLS/JA3 Handshake</span>
                    <span className="text-[11px] text-slate-400">Emulate Chrome 122 TLS fingerprint</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={stealth}
                    onChange={(e) => setStealth(e.target.checked)}
                    className="w-5 h-5 accent-sky-500 rounded cursor-pointer"
                  />
                </div>

                {/* Geo Targeting */}
                <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800">
                  <span className="text-xs font-bold text-white block mb-2">Residential Proxy Region</span>
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                    <button
                      onClick={() => setGeoTarget('us')}
                      className={`py-1.5 rounded-lg border ${geoTarget === 'us' ? 'bg-sky-600 border-sky-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                    >
                      US-East
                    </button>
                    <button
                      onClick={() => setGeoTarget('eu')}
                      className={`py-1.5 rounded-lg border ${geoTarget === 'eu' ? 'bg-sky-600 border-sky-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                    >
                      EU-Central
                    </button>
                    <button
                      onClick={() => setGeoTarget('asia')}
                      className={`py-1.5 rounded-lg border ${geoTarget === 'asia' ? 'bg-sky-600 border-sky-400 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'}`}
                    >
                      AP-South
                    </button>
                  </div>
                </div>

                {/* Auto Captcha */}
                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-2xl border border-slate-800">
                  <div>
                    <span className="text-xs font-bold text-white block">Auto CAPTCHA Solver</span>
                    <span className="text-[11px] text-slate-400">Automatic Turnstile fallback</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={solveCaptcha}
                    onChange={(e) => setSolveCaptcha(e.target.checked)}
                    className="w-5 h-5 accent-sky-500 rounded cursor-pointer"
                  />
                </div>

                {/* Webhook Sink */}
                <div className="flex items-center justify-between p-3 bg-slate-900 rounded-2xl border border-slate-800">
                  <div>
                    <span className="text-xs font-bold text-white block">Streaming Webhook Sink</span>
                    <span className="text-[11px] text-slate-400">Direct HTTP POST push</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={webhook}
                    onChange={(e) => setWebhook(e.target.checked)}
                    className="w-5 h-5 accent-sky-500 rounded cursor-pointer"
                  />
                </div>

              </div>

            </div>

            {/* Right Code Display Column */}
            <div className="lg:col-span-7 rounded-2xl bg-[#080d1a] border border-slate-800 overflow-hidden text-left shadow-2xl">
              
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d1527] border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  scrapepulse_{activeLang}_snippet
                </span>

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
                      <span>Copy SDK Snippet</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-5 font-mono text-xs sm:text-sm text-sky-300 overflow-x-auto min-h-[320px] leading-relaxed">
                <pre>
                  <code>{getCodeSnippet()}</code>
                </pre>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
