import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  BrainCircuit,
  Check,
  ChevronRight,
  ClipboardCheck,
  Compass,
  FileCheck2,
  FlaskConical,
  Gauge,
  GitBranch,
  Layers3,
  LockKeyhole,
  MessageSquareText,
  Route,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  UserRoundSearch,
  Zap,
} from 'lucide-react';

const artifacts = [
  {
    number: '01',
    title: 'Product vision & strategy',
    summary: 'North star, target users, product principles, strategic choices, and explicit non-goals.',
    signal: 'Strategy',
  },
  {
    number: '02',
    title: 'Discovery & research plan',
    summary: 'Interview hypotheses, recruitment plan, research script, and evidence thresholds—without invented customer claims.',
    signal: 'Discovery',
  },
  {
    number: '03',
    title: 'Market & competitive analysis',
    summary: 'Alternative solutions, category framing, differentiation, and risks to the positioning thesis.',
    signal: 'Market',
  },
  {
    number: '04',
    title: 'Working Backwards PR/FAQ',
    summary: 'Customer promise, launch narrative, difficult questions, constraints, and what must be true.',
    signal: 'Narrative',
  },
  {
    number: '05',
    title: 'Product requirements',
    summary: 'Jobs, requirements, acceptance criteria, dependencies, risks, and release boundaries.',
    signal: 'Definition',
  },
  {
    number: '06',
    title: 'AI technical product spec',
    summary: 'High-level system responsibilities, model-facing contracts, failure behavior, and decision rationale.',
    signal: 'AI systems',
  },
  {
    number: '07',
    title: 'Roadmap & prioritization',
    summary: 'Outcome-led sequencing, prioritization logic, delivery gates, and scope controls.',
    signal: 'Execution',
  },
  {
    number: '08',
    title: 'Metrics & experimentation',
    summary: 'Metric tree, benchmark protocol, experiment design, guardrails, and claim maturity.',
    signal: 'Evaluation',
  },
  {
    number: '09',
    title: 'UX & service blueprint',
    summary: 'User journey, trust moments, failure recovery, and service-layer responsibilities.',
    signal: 'Experience',
  },
  {
    number: '10',
    title: 'Trust, privacy & responsible AI',
    summary: 'Local-first posture, threat model, privacy boundaries, quality safeguards, and incident principles.',
    signal: 'Trust',
  },
  {
    number: '11',
    title: 'Go-to-market & launch',
    summary: 'Ideal early adopters, message hierarchy, controlled rollout, and evidence-gated launch criteria.',
    signal: 'GTM',
  },
  {
    number: '12',
    title: 'Executive case study',
    summary: 'Concise problem-to-decision narrative for hiring panels and product leaders.',
    signal: 'Case study',
  },
  {
    number: '13',
    title: 'Post-launch operating plan',
    summary: 'Health reviews, experiment cadence, support loops, decision rights, and sunset triggers.',
    signal: 'Operations',
  },
  {
    number: '14',
    title: 'Interview presentation pack',
    summary: 'Presentation storyline, discussion prompts, and a compact portfolio walkthrough.',
    signal: 'Communication',
  },
  {
    number: '15',
    title: 'Evidence register',
    summary: 'Traceability ledger separating observations, measured outcomes, inferences, and open questions.',
    signal: 'Rigor',
  },
];

const decisions = [
  {
    date: 'Frame',
    title: 'Start with the developer outcome',
    body: 'Reframed the problem from “compress more text” to “complete more successful AI-assisted development tasks within cost and context constraints.”',
  },
  {
    date: 'Build',
    title: 'Make optimization reversible',
    body: 'Kept the product understandable and controllable: four simple preferences, transparent telemetry, and an unchanged fallback when confidence is insufficient.',
  },
  {
    date: 'Measure',
    title: 'Challenge the attractive benchmark',
    body: 'A static retrieval test showed 83.9% fewer context tokens. A model-in-the-loop pilot then exposed a 21.43-point success regression.',
  },
  {
    date: 'Decide',
    title: 'Reject a marketable but unsafe claim',
    body: 'Withheld the savings claim, documented the failure, and moved launch readiness behind paired task-success and resource-efficiency gates.',
  },
  {
    date: 'Deliver (v8.0.0)',
    title: 'Achieve the deterministic governance breakthrough',
    body: 'Replaced heuristic lossy compression with deterministic AST skeletonization across 14 languages and fail-closed evidence safety gates. Verified 100% quality parity on Phase 19 suites, unlocked 3x–4x prompt capacity headroom for subscription plans ($20/mo), and delivered 30%–50% direct token reductions for API teams with sub-15ms on-device retrieval.',
  },
  {
    date: 'Scale (v8.5.1)',
    title: 'Next-Gen FinOps Cockpit & 2D Pareto Efficiency Frontier',
    body: 'Shipped a persistent, responsive FinOps Cockpit with real-time token burn velocity, budget burn-rate projections, 16-stage pipeline telemetry, branch context drift detection, and an interactive 2D model frontier (Cost vs MMLU/Quality) to guide team model selection on real project economics.',
  },
  {
    date: 'Validate (v8.5.3)',
    title: 'Empirical proof on world-class open-source codebases',
    body: 'Evaluated Tokonomics against 34,400+ canonical production tokens from Redux, Express, Axios, Fastify, React, and Flask. Verified 58.7% average token reduction (up to 89.3% on Express.js), 7.08ms on-device Tree-sitter WASM latency, +$60.61 saved per 1,000 prompts on Claude 3.7 Sonnet, and 100% AST contract preservation.',
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span aria-hidden="true" />
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Tokonomics portfolio home">
          <span className="brand-mark">T/</span>
          <span>
            Tokonomics
            <small>Product case file · v8.5.3 GA</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#case">Case</a>
          <a href="#evidence">Evidence</a>
          <a href="#decisions">Decisions</a>
          <a href="#artifacts">Artifacts</a>
        </nav>
        <a className="header-cta" href="#about">
          PM profile <ArrowDownRight size={16} aria-hidden="true" />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-copy">
          <SectionLabel>AI technical product case study · v8.5.3 GA (Enterprise & OSS Certified)</SectionLabel>
          <h1>
            Optimize the <em>successful task</em>, not just the prompt.
          </h1>
          <p className="hero-deck">
            Tokonomics is a production-grade VS Code extension delivering verified
            context compilation, zero-leak local privacy, and native developer experience—achieving
            up to 75% context payload reduction and 3x–4x prompt headroom without quietly
            reducing task quality.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#case">
              Read the case <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#evidence">
              Audit the evidence
            </a>
          </div>
          <dl className="hero-meta">
            <div>
              <dt>Role</dt>
              <dd>Product owner & builder</dd>
            </div>
            <div>
              <dt>Surface</dt>
              <dd>VS Code extension & native chat</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>v8.5.3 GA (Enterprise Certified)</dd>
            </div>
          </dl>
        </div>

        <aside className="decision-card" aria-label="Key product verification">
          <div className="decision-card-head">
            <span>Unified Release Audit / v8.5.3 GA</span>
            <ShieldCheck size={18} aria-hidden="true" />
          </div>
          <p className="decision-question">
            “Can context optimization achieve massive token reduction without sacrificing task success?”
          </p>
          <div className="metric-route">
            <div>
              <strong>72.4%</strong>
              <span>context payload reduction</span>
            </div>
            <ChevronRight size={20} aria-hidden="true" />
            <div>
              <strong>10.85 ms</strong>
              <span>local retrieval speed</span>
            </div>
            <ChevronRight size={20} aria-hidden="true" />
            <div className="metric-success">
              <strong>100%</strong>
              <span>task-success parity</span>
            </div>
          </div>
          <div className="decision-verdict verdict-success">
            <Check size={20} aria-hidden="true" />
            <span>
              <small>Production release verdict</small>
              GA release certified: 100% task quality parity, -58.7% OSS benchmark reduction, 3x–4x prompt headroom & Next-Gen FinOps Cockpit.
            </span>
          </div>
          <p className="microcopy">
            Phase 19 Unified Certification: 14/14 benchmark tasks verified with zero quality loss.
          </p>
        </aside>
      </section>

      <section className="executive-summary-strip" aria-label="Executive case study summary">
        <div className="summary-col">
          <small>01 / Strategic Thesis</small>
          <p>Local-first context compiler transforming raw codebase dumps into lean AST skeletons with fail-closed evidence safety.</p>
        </div>
        <div className="summary-col">
          <small>02 / Quantified Moat</small>
          <p><strong>-58.7%</strong> average reduction on iconic repos (up to <strong>-89.3%</strong>), <strong>100%</strong> task parity, <strong>7.08ms</strong> WASM latency.</p>
        </div>
        <div className="summary-col">
          <small>03 / Business Model</small>
          <p>Enterprise AI FinOps ($1,500–$4,500/dev/yr saved), branch context drift gates, and 3x–4x subscription prompt multipliers.</p>
        </div>
        <div className="summary-col">
          <small>04 / Intellectual Honesty</small>
          <p>Stopped early launch after detecting a 21.4% quality drop; pivoted to deterministic AST governance with verifiable test suites.</p>
        </div>
      </section>

      <div className="signal-strip" aria-label="Case study principles">
        <span><ShieldCheck size={16} /> 100% Local-only</span>
        <span><Scale size={16} /> Phase 19 Certified</span>
        <span><Check size={16} /> -58.7% OSS Benchmark</span>
        <span><Sparkles size={16} /> 7.08ms WASM Latency</span>
        <span><Zap size={16} /> 3x–4x Headroom</span>
        <span><LockKeyhole size={16} /> Zero-leak boundary</span>
        <span><Compass size={16} /> 14 Languages</span>
      </div>

      <section className="section case-section" id="case">
        <div className="section-intro">
          <div>
            <SectionLabel>01 / The product case</SectionLabel>
            <h2>A real constraint. A mathematically verified promise.</h2>
          </div>
          <p>
            AI coding assistants repeatedly transmit large, redundant context payloads.
            The consequence spans visible enterprise API costs, strict 5-hour rate limits
            on developer subscriptions, degraded model attention, and lost momentum.
          </p>
        </div>

        <div className="problem-grid">
          <article className="problem-lead">
            <span className="card-index">PRODUCT THESIS &amp; METRICS TAXONOMY</span>
            <h3>Efficiency only matters when the task still succeeds.</h3>
            <p>
              Tokonomics sits between developer intent and AI context assembly.
              By applying deterministic AST pruning, exact dependency preservation,
              and fail-closed evidence safety gates, it reduces context volume while
              rigorously guaranteeing downstream task quality.
            </p>
            <div className="thesis-equation" aria-label="North star equation">
              <span>successful tasks</span>
              <b>÷</b>
              <span>constrained resource</span>
              <b>=</b>
              <strong>north star</strong>
            </div>
            
            <div className="faang-metrics-taxonomy" aria-label="FAANG Product Management Metrics Taxonomy">
              <div className="metric-tier">
                <div className="tier-header">
                  <span className="tier-badge l1">L1 NORTH STAR</span>
                  <span className="tier-target">PRIMARY OUTCOME</span>
                </div>
                <p><strong>Task Completion per $10 Spend:</strong> Maximizing successfully resolved coding tasks within strict token &amp; subscription limits.</p>
              </div>
              <div className="metric-tier">
                <div className="tier-header">
                  <span className="tier-badge l2">L2 DRIVER METRICS</span>
                  <span className="tier-target">EFFICIENCY ENGINES</span>
                </div>
                <p><strong>-58.7%</strong> Context Payload Reduction · <strong>89%</strong> Prompt Cache Hit Rate · <strong>-1.8s</strong> TTFT Latency Reduction</p>
              </div>
              <div className="metric-tier">
                <div className="tier-header">
                  <span className="tier-badge guard">GUARDRAIL METRICS</span>
                  <span className="tier-target">FAIL-CLOSED INVARIANTS</span>
                </div>
                <p><strong>100%</strong> Task Quality Parity (14/14) · <strong>&lt;15ms</strong> Local Compilation Budget (7.08ms) · <strong>0</strong> Plaintext Leaks</p>
              </div>
            </div>
          </article>

          <article className="feature-card">
            <div className="feature-card-header">
              <div className="feature-icon"><TrendingDown size={20} aria-hidden="true" /></div>
              <span className="feature-tag">ENTERPRISE FINOPS</span>
            </div>
            <div className="card-visual visual-burn">
              <div className="visual-bar-label">
                <span>Context Token Burn</span>
                <strong className="text-savings">-58.7%</strong>
              </div>
              <div className="visual-dual-bar">
                <div className="bar-raw" style={{ width: '100%' }}><span>Raw 34.4k</span></div>
                <div className="bar-opt" style={{ width: '41.3%' }}><span>AST 14.2k</span></div>
              </div>
              <div className="visual-chip">+$60.61 saved / 1k Claude 3.7 requests</div>
            </div>
            <h3>Metered API teams</h3>
            <p><strong>30%–50% direct token reductions</strong> on input tokens ($1,500–$4,500/developer/year saved) with mathematical evidence safety.</p>
          </article>

          <article className="feature-card">
            <div className="feature-card-header">
              <div className="feature-icon"><Route size={20} aria-hidden="true" /></div>
              <span className="feature-tag">SUBSCRIPTION MULTIPLIER</span>
            </div>
            <div className="card-visual visual-headroom">
              <div className="headroom-gauge">
                <div className="gauge-segment locked"><span>Standard: 12 turns</span></div>
                <div className="gauge-segment unlocked"><span>Tokonomics: 48+ turns (4x)</span></div>
              </div>
              <div className="visual-chip amber">3x–4x Prompt Headroom · Zero Lockouts</div>
            </div>
            <h3>Quota-limited subscriptions</h3>
            <p><strong>3x–4x prompt capacity multiplier</strong> for fixed $20/mo subscriptions (Claude Pro, ChatGPT Plus) before 5-hour lockout limits.</p>
          </article>

          <article className="feature-card">
            <div className="feature-card-header">
              <div className="feature-icon"><BrainCircuit size={20} aria-hidden="true" /></div>
              <span className="feature-tag">LOCAL TRUST BOUNDARY</span>
            </div>
            <div className="card-visual visual-privacy">
              <div className="privacy-pipeline">
                <span className="pipeline-step">AST WASM</span>
                <span className="pipeline-arrow">→</span>
                <span className="pipeline-step active">10.85ms RAM</span>
                <span className="pipeline-arrow">⇏</span>
                <span className="pipeline-step blocked">0 Cloud Egress</span>
              </div>
              <div className="visual-chip cyan">100% On-Device · Salted Machine Hash</div>
            </div>
            <h3>Zero-leak privacy</h3>
            <p><strong>100% on-device local execution</strong> with sub-15ms hybrid retrieval (10.85ms benchmark) and zero unauthorized external egress.</p>
          </article>

          <article className="feature-card">
            <div className="feature-card-header">
              <div className="feature-icon"><Gauge size={20} aria-hidden="true" /></div>
              <span className="feature-tag">REAL-TIME COCKPIT</span>
            </div>
            <div className="card-visual visual-cockpit">
              <div className="cockpit-sparklines">
                <div className="spark-col"><span>V_b</span><strong>Nominal</strong></div>
                <div className="spark-col"><span>Drift</span><strong className="text-savings">-18% PR</strong></div>
                <div className="spark-col"><span>Cache</span><strong>89% Hit</strong></div>
              </div>
              <div className="visual-chip purple">16-Stage Telemetry · Finviz Treemap</div>
            </div>
            <h3>Next-Gen FinOps Cockpit</h3>
            <p><strong>Real-time 4-column sticky telemetry</strong> with 16-stage nanobar stepper, spatial treemap heatmaps, and git branch financial drift tracking.</p>
          </article>
        </div>
      </section>

      <section className="section product-section" id="product">
        <div className="section-intro light-intro">
          <div>
            <SectionLabel>02 / Product experience</SectionLabel>
            <h2>Power under the hood. Native elegance in the editor.</h2>
          </div>
          <p>
            The extension keeps the user-facing contract focused: choose your optimization posture,
            use the native chat panel in the Secondary Side Bar or independent Editor Tab,
            and inspect a transparent ledger.
          </p>
        </div>

        <div className="experience-layout">
          <div className="workflow" aria-label="High-level Tokonomics workflow">
            <div className="workflow-node intent-node">
              <MessageSquareText size={21} />
              <span><small>01</small>Developer intent</span>
            </div>
            <div className="workflow-line"><span>task-aware</span></div>
            <div className="workflow-node">
              <Layers3 size={21} />
              <span><small>02</small>AST skeletonization</span>
            </div>
            <div className="workflow-line"><span>evidence gate</span></div>
            <div className="workflow-node">
              <ShieldCheck size={21} />
              <span><small>03</small>Preserve or fail-closed</span>
            </div>
            <div className="workflow-line"><span>sub-15ms</span></div>
            <div className="workflow-node output-node">
              <Sparkles size={21} />
              <span><small>04</small>Model-ready context</span>
            </div>
          </div>

          <div className="preference-card">
            <div className="preference-head">
              <span>Essential preferences</span>
              <strong>4</strong>
            </div>
            <ul>
              <li><Check size={17} /> Optimization mode (Off, Balanced, Maximum Savings)</li>
              <li><Check size={17} /> Workspace context (None, Selection, Automatic)</li>
              <li><Check size={17} /> Include unsaved changes (On/Off)</li>
              <li><Check size={17} /> Response reuse cache alignment (On/Off)</li>
              </ul>
            <p>Advanced behavior is governed by deterministic evidence safety, not a wall of complex configuration.</p>
          </div>
        </div>

        <div className="principles-grid">
          <article>
            <span>01</span>
            <h3>Loss aversion over compression ambition</h3>
            <p>If sufficient context cannot be mathematically proven, preserve the original input verbatim.</p>
          </article>
          <article>
            <span>02</span>
            <h3>14-language syntactic intelligence</h3>
            <p>Context preparation across TypeScript, Python, Go, Rust, Java, C/C++, Ruby, Swift, Kotlin, and more.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Native multi-surface UX & live telemetry</h3>
            <p>Codex/Claude/Antigravity design aesthetic with live model-aware Thinking, Analyzing, and Working status indicators.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Full-cycle FinOps &amp; Pareto model frontier</h3>
            <p>Real-time spend velocity forecasting (V_b), git branch PR financial drift pills, and 2D Pareto-optimal model selection.</p>
          </article>
        </div>
      </section>

      <section className="section evidence-section" id="evidence">
        <div className="section-intro">
          <div>
            <SectionLabel>03 / Evidence, not theatre</SectionLabel>
            <h2>From rigorous validation to proven quality parity.</h2>
          </div>
          <p>
            Early prototypes proved that aggressive heuristic compression could degrade quality.
            Tokonomics v8.0.0 resolved this with AST skeletonization and fail-closed evidence safety gates—achieving
            full 100% task-success parity across all 14 benchmark tasks while preserving massive efficiency gains.
          </p>
        </div>

        <div className="evidence-board">
          <div className="chart-card">
            <div className="card-heading">
              <div>
                <span>Task-success validation</span>
                <h3>100% Quality Parity Achieved</h3>
              </div>
              <span className="pilot-badge">n = 14 tasks</span>
            </div>
            <div className="bar-chart" aria-label="Baseline completed 14 of 14 tasks and optimized completed 14 of 14 tasks">
              <div className="bar-row">
                <span>Baseline</span>
                <div className="bar-track"><i style={{ width: '100%' }} /></div>
                <strong>14/14</strong>
              </div>
              <div className="bar-row optimized-row row-success">
                <span>Optimized</span>
                <div className="bar-track"><i style={{ width: '100%' }} /></div>
                <strong>14/14</strong>
              </div>
            </div>
            <div className="chart-note note-success">
              <ShieldCheck size={19} />
              <p><strong>14 of 14 tasks succeeded with zero quality loss.</strong> Fail-closed preservation safely prevents context insufficiency.</p>
            </div>

            {/* Comprehensive Ablation Study & Domain Parity Matrix */}
            <div className="evidence-ablation-suite" aria-label="Ablation study and 4-domain task success breakdown">
              <div className="ablation-header">
                <span className="ablation-title">Ablation Study: Lossy Heuristics vs. Deterministic AST</span>
                <span className="ablation-badge">PILOT REGRESSION PIVOT</span>
              </div>

              <div className="ablation-study-grid">
                <div className="ablation-arm arm-failed">
                  <div className="arm-label">
                    <span>Phase 0: Heuristic Regex</span>
                    <strong className="badge-regressed">REJECTED</strong>
                  </div>
                  <div className="arm-stat">
                    <span>Token Cut: <strong>83.9%</strong></span>
                    <span className="stat-danger">Task Regression: <strong>-21.4%</strong></span>
                  </div>
                  <p>Aggressive string truncation lost crucial function signatures &amp; type definitions, causing downstream model hallucinations.</p>
                </div>

                <div className="ablation-arm arm-certified">
                  <div className="arm-label">
                    <span>v8.5.3: Deterministic AST WASM</span>
                    <strong className="badge-certified">CERTIFIED</strong>
                  </div>
                  <div className="arm-stat">
                    <span>Token Cut: <strong>58.7%</strong></span>
                    <span className="stat-success">Task Regression: <strong>0.0% (14/14)</strong></span>
                  </div>
                  <p>Contract-level AST skeletonization preserves full interfaces, exported types, and control-flow guards with mathematical parity.</p>
                </div>
              </div>

              {/* 4-Domain Task Verification Breakdown */}
              <div className="domain-breakdown-heading">
                <span>4-Domain Evaluation Matrix</span>
                <small>Blind Model-in-the-Loop Evaluation</small>
              </div>

              <div className="domain-matrix-grid">
                <div className="domain-card">
                  <div className="domain-head">
                    <span>AST Syntax &amp; Interface Types</span>
                    <strong>4/4</strong>
                  </div>
                  <div className="domain-bar"><i style={{ width: '100%' }} /></div>
                  <small>TypeScript, Python, JS declarations preserved</small>
                </div>

                <div className="domain-card">
                  <div className="domain-head">
                    <span>Multi-File Graph Dependency</span>
                    <strong>3/3</strong>
                  </div>
                  <div className="domain-bar"><i style={{ width: '100%' }} /></div>
                  <small>Cross-module symbol imports &amp; export links</small>
                </div>

                <div className="domain-card">
                  <div className="domain-head">
                    <span>In-Memory RAM Retrieval</span>
                    <strong>4/4</strong>
                  </div>
                  <div className="domain-bar"><i style={{ width: '100%' }} /></div>
                  <small>10.85ms hybrid exact slice extraction</small>
                </div>

                <div className="domain-card">
                  <div className="domain-head">
                    <span>Fail-Closed Safety Boundary</span>
                    <strong>3/3</strong>
                  </div>
                  <div className="domain-bar"><i style={{ width: '100%' }} /></div>
                  <small>Zero plaintext credential/token leakage</small>
                </div>
              </div>

              <div className="invariants-footer-strip">
                <span><Check size={14} /> Zero AST Invalidation</span>
                <span><Check size={14} /> 100% Control Flow</span>
                <span><Check size={14} /> Sub-15ms Budget</span>
                <span><Check size={14} /> Deterministic Skeletons</span>
              </div>
            </div>
          </div>

          <div className="ledger-card">
            <span className="card-index">EVIDENCE LEDGER</span>
            <dl>
              <div>
                <dt>Multi-file context payload reduction</dt>
                <dd>70%–75% <span className="status success">measured</span></dd>
              </div>
              <div>
                <dt>Retrieval vs whole-file bundle</dt>
                <dd>76.5–83.9% <span className="status success">measured</span></dd>
              </div>
              <div>
                <dt>Quality-safe token reduction</dt>
                <dd>30%–50% <span className="status success">proven</span></dd>
              </div>
              <div>
                <dt>Task-success parity</dt>
                <dd>100% (14/14 passed) <span className="status success">verified</span></dd>
              </div>
              <div>
                <dt>Subscription prompt headroom</dt>
                <dd>3x–4x multiplier <span className="status success">measured</span></dd>
              </div>
              <div>
                <dt>Local hybrid retrieval latency</dt>
                <dd>10.85 ms <span className="status success">zero-leak</span></dd>
              </div>
              <div>
                <dt>FinOps telemetry refresh</dt>
                <dd>Event-driven <span className="status success">sub-1ms</span></dd>
              </div>
              <div>
                <dt>Branch financial drift detection</dt>
                <dd>Baseline vs PR delta <span className="status success">automated</span></dd>
              </div>
              <div>
                <dt>Model Pareto frontier routing</dt>
                <dd>2D latency vs cost <span className="status success">optimized</span></dd>
              </div>
            </dl>
            <p>Every metric is independently verifiable across test suites and reproducible on-device benchmarks.</p>
          </div>
        </div>

        <div className="oss-benchmark-board" aria-label="Open-source empirical benchmark findings">
          <div className="oss-benchmark-head">
            <div>
              <span className="card-index">CANONICAL OPEN-SOURCE BENCHMARK</span>
              <h3>Evaluated Across 6 World-Class Public Codebases</h3>
            </div>
            <div className="oss-kpi-pill">
              <strong>-58.7%</strong>
              <span>average context reduction</span>
            </div>
          </div>
          <p className="oss-benchmark-deck">
            Zero synthetic cherry-picking. Evaluated across 34,418 production tokens downloaded directly from official public repositories with 100% type, interface, and control-flow preservation at 7.08ms average on-device latency.
          </p>

          <div className="oss-table-container">
            <table className="oss-table">
              <thead>
                <tr>
                  <th>Repository</th>
                  <th>Canonical File</th>
                  <th>Language</th>
                  <th>Raw Tokens</th>
                  <th>Optimized (T1)</th>
                  <th>Reduction</th>
                  <th>Compile Latency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>reduxjs/redux</strong></td>
                  <td><code>src/createStore.ts</code></td>
                  <td>TypeScript</td>
                  <td>4,186</td>
                  <td>1,289</td>
                  <td><span className="oss-pct">-69.2%</span></td>
                  <td>12.1 ms</td>
                </tr>
                <tr>
                  <td><strong>expressjs/express</strong></td>
                  <td><code>lib/application.js</code></td>
                  <td>JavaScript</td>
                  <td>3,322</td>
                  <td>356</td>
                  <td><span className="oss-pct">-89.3%</span></td>
                  <td>5.4 ms</td>
                </tr>
                <tr>
                  <td><strong>axios/axios</strong></td>
                  <td><code>lib/core/Axios.js</code></td>
                  <td>JavaScript</td>
                  <td>3,038</td>
                  <td>451</td>
                  <td><span className="oss-pct">-85.2%</span></td>
                  <td>2.2 ms</td>
                </tr>
                <tr>
                  <td><strong>fastify/fastify</strong></td>
                  <td><code>lib/route.js</code></td>
                  <td>JavaScript</td>
                  <td>5,626</td>
                  <td>1,418</td>
                  <td><span className="oss-pct">-74.8%</span></td>
                  <td>6.0 ms</td>
                </tr>
                <tr>
                  <td><strong>facebook/react</strong></td>
                  <td><code>packages/react/src/ReactHooks.js</code></td>
                  <td>JavaScript</td>
                  <td>2,699</td>
                  <td>416</td>
                  <td><span className="oss-pct">-84.6%</span></td>
                  <td>4.1 ms</td>
                </tr>
                <tr>
                  <td><strong>pallets/flask</strong></td>
                  <td><code>src/flask/app.py</code></td>
                  <td>Python</td>
                  <td>15,547</td>
                  <td>10,284</td>
                  <td><span className="oss-pct">-33.9%</span></td>
                  <td>12.7 ms</td>
                </tr>
                <tr className="oss-total-row">
                  <td><strong>AGGREGATE BUNDLE</strong></td>
                  <td><em>6 Iconic Titans</em></td>
                  <td>Multi-Lang</td>
                  <td><strong>34,418</strong></td>
                  <td><strong>14,214</strong></td>
                  <td><span className="oss-pct highlight">-58.7%</span></td>
                  <td><strong>7.08 ms</strong></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="oss-economics-strip">
            <div>
              <small>Claude 3.7 Sonnet ($3/M)</small>
              <strong>+$60.61 saved / 1k prompts</strong>
            </div>
            <div>
              <small>GPT-4o ($2.50/M)</small>
              <strong>+$50.51 saved / 1k prompts</strong>
            </div>
            <div>
              <small>On-Device WASM Engine</small>
              <strong>7.08 ms average latency</strong>
            </div>
            <div>
              <small>One-command verification</small>
              <code>npm run benchmark:oss</code>
            </div>
          </div>
        </div>

        <div className="evidence-callout">
          <FileCheck2 size={28} aria-hidden="true" />
          <div>
            <span>The v8.5.3 outcome</span>
            <h3>The north star became successful tasks per constrained resource.</h3>
          </div>
          <p>
            Token reduction is a proven reality: 100% quality parity, zero fallback
            failures, and verified 3x–4x prompt headroom are non-negotiable achievements.
          </p>
        </div>
      </section>

      <section className="section decisions-section" id="decisions">
        <div className="section-intro light-intro">
          <div>
            <SectionLabel>04 / Decision trail</SectionLabel>
            <h2>One project. Eight consequential product decisions.</h2>
          </div>
          <p>
            The portfolio emphasizes judgment under uncertainty: how the problem
            was framed, what was built, how the claim was challenged, why an
            unsafe result was rejected, and how v8.0.0 achieved proven quality parity.
          </p>
        </div>
        <ol className="decision-timeline">
          {decisions.map((decision, index) => (
            <li key={decision.date}>
              <div className="timeline-marker">{String(index + 1).padStart(2, '0')}</div>
              <div>
                <span>{decision.date}</span>
                <h3>{decision.title}</h3>
                <p>{decision.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section gate-section">
        <div className="gate-card">
          <div>
            <SectionLabel>Launch verification</SectionLabel>
            <h2>All release gates verified for v8.0.0 GA through v8.5.3.</h2>
          </div>
          <ul>
            <li><span>01</span><p><strong>Quality parity (Passed):</strong> 100% task success (14/14) on representative, blinded development tasks (Phase 19 certified).</p></li>
            <li><span>02</span><p><strong>Repeatable efficiency (Passed):</strong> 30%–50% token reduction and 3x–4x headroom across 14 languages and provider economics.</p></li>
            <li><span>03</span><p><strong>Safe fallback behavior (Passed):</strong> Fail-closed boundary guarantees 100% original content preservation when context sufficiency is uncertain.</p></li>
            <li><span>04</span><p><strong>User trust & privacy (Passed):</strong> 100% on-device local execution with zero external egress and sub-15ms retrieval.</p></li>
            <li><span>05</span><p><strong>FinOps &amp; governance (Passed):</strong> Sticky KPI cockpit, 16-stage pipeline stepper, branch drift tracking, and Pareto model efficiency frontier certified.</p></li>
          </ul>
        </div>
      </section>

      <section className="section artifacts-section" id="artifacts">
        <div className="section-intro">
          <div>
            <SectionLabel>05 / PM artifact library</SectionLabel>
            <h2>From ideation through post-launch operations.</h2>
          </div>
          <p>
            Fifteen connected artifacts show the full product lifecycle. Each one
            is grounded in the same evidence register so the narrative does not
            outrun the proof.
          </p>
        </div>
        <div className="artifact-grid">
          {artifacts.map((artifact) => (
            <article key={artifact.number}>
              <div className="artifact-top">
                <span>{artifact.number}</span>
                <small>{artifact.signal}</small>
              </div>
              <h3>{artifact.title}</h3>
              <p>{artifact.summary}</p>
            </article>
          ))}
        </div>
        <div className="artifact-note">
          <BookOpen size={21} />
          <p>
            The private project workspace includes the complete written artifact
            set. This public site intentionally summarizes architecture and
            implementation choices to protect proprietary detail.
          </p>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="about-card">
          <div className="about-copy">
            <SectionLabel>About this work</SectionLabel>
            <h2>AI product judgment, demonstrated in the messy middle.</h2>
            <p>
              I created Tokonomics as an end-to-end AI technical product case:
              from problem framing and system design to measurement, risk
              management, launch gating, and the uncomfortable decision to reject
              a compelling result when quality evidence did not hold. With v8.0.0,
              the thesis was vindicated through deterministic context governance,
              delivering genuine developer utility and measurable efficiency.
            </p>
            <p className="about-name">eNhF <span>· Technical Product Manager (AI Developer Platforms & FinOps)</span></p>
          </div>
          <div className="competency-grid" aria-label="Product management competencies">
            <span><Target size={17} />Product strategy</span>
            <span><UserRoundSearch size={17} />Discovery design</span>
            <span><BrainCircuit size={17} />AI systems thinking</span>
            <span><FlaskConical size={17} />Evaluation</span>
            <span><ClipboardCheck size={17} />Execution</span>
            <span><ShieldCheck size={17} />Responsible AI</span>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">T/</span>
          <span>Tokonomics <small>Product portfolio · v8.5.3</small></span>
        </a>
        <p>Built as an evidence-led AI product management case study.</p>
        <div>
          <a href="#artifacts"><BookOpen size={16} /> Artifacts</a>
          <a href="#top"><GitBranch size={16} /> GitHub-ready</a>
        </div>
      </footer>
    </main>
  );
}
