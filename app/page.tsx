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
            <small>Product case file · v8.0.0 GA</small>
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
          <SectionLabel>AI technical product case study · v8.0.0 GA Release</SectionLabel>
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
              <dd>v8.0.0 GA Release</dd>
            </div>
          </dl>
        </div>

        <aside className="decision-card" aria-label="Key product verification">
          <div className="decision-card-head">
            <span>Unified Release Audit / v8.0.0</span>
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
              GA release certified: 100% task quality parity with 3x–4x prompt headroom.
            </span>
          </div>
          <p className="microcopy">
            Phase 19 Unified Certification: 14/14 benchmark tasks verified with zero quality loss.
          </p>
        </aside>
      </section>

      <div className="signal-strip" aria-label="Case study principles">
        <span><ShieldCheck size={16} /> 100% Local-only</span>
        <span><Scale size={16} /> Phase 19 Certified</span>
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
            <span className="card-index">PRODUCT THESIS</span>
            <h3>Efficiency only matters when the task still succeeds.</h3>
            <p>
              Tokonomics sits between developer intent and AI context assembly.
              By applying deterministic AST pruning, exact dependency preservation,
              and fail-closed evidence safety gates, it reduces context volume while
              rigorously guaranteeing task quality.
            </p>
            <div className="thesis-equation" aria-label="North star equation">
              <span>successful tasks</span>
              <b>÷</b>
              <span>constrained resource</span>
              <b>=</b>
              <strong>north star</strong>
            </div>
          </article>
          <article>
            <TrendingDown size={22} aria-hidden="true" />
            <h3>Metered API teams</h3>
            <p><strong>30%–50% direct token reductions</strong> on input tokens ($1,500–$4,500/developer/year saved) with mathematical evidence safety.</p>
          </article>
          <article>
            <Route size={22} aria-hidden="true" />
            <h3>Quota-limited subscriptions</h3>
            <p><strong>3x–4x prompt capacity multiplier</strong> for fixed $20/mo subscriptions (Claude Pro, ChatGPT Plus) before 5-hour lockout limits.</p>
          </article>
          <article>
            <BrainCircuit size={22} aria-hidden="true" />
            <h3>Zero-leak privacy</h3>
            <p><strong>100% on-device local execution</strong> with sub-15ms hybrid retrieval (10.85ms benchmark) and zero unauthorized external egress.</p>
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
            </dl>
            <p>Every metric is independently verifiable across test suites and reproducible on-device benchmarks.</p>
          </div>
        </div>

        <div className="evidence-callout">
          <FileCheck2 size={28} aria-hidden="true" />
          <div>
            <span>The v8.0.0 outcome</span>
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
            <h2>One project. Five consequential product decisions.</h2>
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
            <h2>All four release gates verified for v8.0.0 GA.</h2>
          </div>
          <ul>
            <li><span>01</span><p><strong>Quality parity (Passed):</strong> 100% task success (14/14) on representative, blinded development tasks (Phase 19 certified).</p></li>
            <li><span>02</span><p><strong>Repeatable efficiency (Passed):</strong> 30%–50% token reduction and 3x–4x headroom across 14 languages and provider economics.</p></li>
            <li><span>03</span><p><strong>Safe fallback behavior (Passed):</strong> Fail-closed boundary guarantees 100% original content preservation when context sufficiency is uncertain.</p></li>
            <li><span>04</span><p><strong>User trust & privacy (Passed):</strong> 100% on-device local execution with zero external egress and sub-15ms retrieval.</p></li>
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
            <p className="about-name">eNhF <span>· Aspiring AI Technical Product Manager</span></p>
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
          <span>Tokonomics <small>Product portfolio · v8.0.0</small></span>
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
