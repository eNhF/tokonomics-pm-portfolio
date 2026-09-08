import {
  ArrowDownRight,
  ArrowRight,
  BarChart3,
  BookOpen,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleAlert,
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
            <small>Product case file · v7.0.1</small>
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
          <SectionLabel>AI technical product case study</SectionLabel>
          <h1>
            Optimize the <em>successful task</em>, not just the prompt.
          </h1>
          <p className="hero-deck">
            Tokonomics is a controlled-beta VS Code extension exploring whether
            local context optimization can make AI coding workflows more
            efficient—without quietly reducing task quality.
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
              <dd>VS Code extension</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>Controlled beta</dd>
            </div>
          </dl>
        </div>

        <aside className="decision-card" aria-label="Key product decision">
          <div className="decision-card-head">
            <span>Evidence review / 001</span>
            <FlaskConical size={18} aria-hidden="true" />
          </div>
          <p className="decision-question">
            “Can a compelling token-reduction result support a product claim?”
          </p>
          <div className="metric-route">
            <div>
              <strong>83.9%</strong>
              <span>static retrieval reduction</span>
            </div>
            <ChevronRight size={20} aria-hidden="true" />
            <div>
              <strong>16.85%</strong>
              <span>pilot context reduction</span>
            </div>
            <ChevronRight size={20} aria-hidden="true" />
            <div className="metric-danger">
              <strong>−21.43 pp</strong>
              <span>task-success change</span>
            </div>
          </div>
          <div className="decision-verdict">
            <CircleAlert size={20} aria-hidden="true" />
            <span>
              <small>Product decision</small>
              Savings claim rejected pending quality-safe evidence.
            </span>
          </div>
          <p className="microcopy">
            Pilot: 14 repository tasks. Directional evidence, not a production claim.
          </p>
        </aside>
      </section>

      <div className="signal-strip" aria-label="Case study principles">
        <span><ShieldCheck size={16} /> Local-first</span>
        <span><Scale size={16} /> Quality-gated</span>
        <span><BarChart3 size={16} /> Evidence-led</span>
        <span><LockKeyhole size={16} /> Privacy-conscious</span>
        <span><Compass size={16} /> Outcome-oriented</span>
      </div>

      <section className="section case-section" id="case">
        <div className="section-intro">
          <div>
            <SectionLabel>01 / The product case</SectionLabel>
            <h2>A real constraint. A deliberately narrow promise.</h2>
          </div>
          <p>
            AI coding assistants repeatedly send large, overlapping context.
            The cost is not always a visible invoice: it can appear as quota
            pressure, a full context window, slower iteration, or reduced
            confidence in what the model has seen.
          </p>
        </div>

        <div className="problem-grid">
          <article className="problem-lead">
            <span className="card-index">PRODUCT THESIS</span>
            <h3>Efficiency only matters when the task still succeeds.</h3>
            <p>
              Tokonomics sits between developer intent and AI context assembly.
              It aims to send the smallest sufficient context, preserve the
              information needed for the job, and show what happened in language
              a developer can trust.
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
            <h3>Metered usage</h3>
            <p>Reduce avoidable input where usage is billed directly—only after quality parity is demonstrated.</p>
          </article>
          <article>
            <Route size={22} aria-hidden="true" />
            <h3>Quota-limited plans</h3>
            <p>Extend productive sessions before rate, request, or context limits interrupt a workflow.</p>
          </article>
          <article>
            <BrainCircuit size={22} aria-hidden="true" />
            <h3>Fixed-seat plans</h3>
            <p>Improve context headroom, responsiveness, and successful turns—not claim imaginary invoice savings.</p>
          </article>
        </div>
      </section>

      <section className="section product-section" id="product">
        <div className="section-intro light-intro">
          <div>
            <SectionLabel>02 / Product experience</SectionLabel>
            <h2>Power under the hood. Restraint in the interface.</h2>
          </div>
          <p>
            The extension keeps the user-facing contract small: choose the
            optimization posture, use the native-feeling chat surface or
            <code>@tokonomics</code>, and inspect an honest dashboard.
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
              <span><small>02</small>Context selection</span>
            </div>
            <div className="workflow-line"><span>quality gate</span></div>
            <div className="workflow-node">
              <ShieldCheck size={21} />
              <span><small>03</small>Preserve or restore</span>
            </div>
            <div className="workflow-line"><span>transparent</span></div>
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
              <li><Check size={17} /> Optimization mode</li>
              <li><Check size={17} /> Preferred model/provider</li>
              <li><Check size={17} /> Privacy & telemetry</li>
              <li><Check size={17} /> Automatic vs explicit routing</li>
            </ul>
            <p>Advanced behavior stays governed by safe defaults, not a wall of configuration.</p>
          </div>
        </div>

        <div className="principles-grid">
          <article>
            <span>01</span>
            <h3>Loss aversion over compression ambition</h3>
            <p>If sufficient context cannot be proven, preserve the original input.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Explain outcomes, not machinery</h3>
            <p>Show tokens, confidence, and status without exposing proprietary implementation detail.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Progressive evidence</h3>
            <p>Separate local benchmarks, model pilots, controlled beta data, and production-grade claims.</p>
          </article>
        </div>
      </section>

      <section className="section evidence-section" id="evidence">
        <div className="section-intro">
          <div>
            <SectionLabel>03 / Evidence, not theatre</SectionLabel>
            <h2>The benchmark was useful because it disproved the claim.</h2>
          </div>
          <p>
            Local tests suggested large retrieval savings. The paired task pilot
            showed that context reduction alone was a misleading success metric.
            The result changed the product decision, the roadmap, and the metric tree.
          </p>
        </div>

        <div className="evidence-board">
          <div className="chart-card">
            <div className="card-heading">
              <div>
                <span>Task-success pilot</span>
                <h3>Quality moved in the wrong direction</h3>
              </div>
              <span className="pilot-badge">n = 14</span>
            </div>
            <div className="bar-chart" aria-label="Baseline completed 14 of 14 tasks and optimized completed 11 of 14 tasks">
              <div className="bar-row">
                <span>Baseline</span>
                <div className="bar-track"><i style={{ width: '100%' }} /></div>
                <strong>14/14</strong>
              </div>
              <div className="bar-row optimized-row">
                <span>Optimized</span>
                <div className="bar-track"><i style={{ width: '78.57%' }} /></div>
                <strong>11/14</strong>
              </div>
            </div>
            <div className="chart-note">
              <CircleAlert size={19} />
              <p><strong>Three failures were context-insufficient.</strong> That is a product-safety signal, not acceptable variance.</p>
            </div>
          </div>

          <div className="ledger-card">
            <span className="card-index">EVIDENCE LEDGER</span>
            <dl>
              <div>
                <dt>Static whole-file reduction</dt>
                <dd>0.2–0.3% <span className="status neutral">measured</span></dd>
              </div>
              <div>
                <dt>Retrieval vs five-file bundle</dt>
                <dd>76.5–83.9% <span className="status neutral">measured</span></dd>
              </div>
              <div>
                <dt>Model-pilot context reduction</dt>
                <dd>16.85% <span className="status neutral">directional</span></dd>
              </div>
              <div>
                <dt>Quality-safe dollar saving</dt>
                <dd>$0 proven <span className="status warning">withheld</span></dd>
              </div>
            </dl>
            <p>Different measurements answer different questions. None are silently blended into a headline.</p>
          </div>
        </div>

        <div className="evidence-callout">
          <FileCheck2 size={28} aria-hidden="true" />
          <div>
            <span>What changed</span>
            <h3>The north star became successful tasks per constrained resource.</h3>
          </div>
          <p>
            Token reduction is now a supporting metric. Quality parity, fallback
            reliability, and evidence maturity are release gates.
          </p>
        </div>
      </section>

      <section className="section decisions-section" id="decisions">
        <div className="section-intro light-intro">
          <div>
            <SectionLabel>04 / Decision trail</SectionLabel>
            <h2>One project. Four consequential product decisions.</h2>
          </div>
          <p>
            The portfolio emphasizes judgment under uncertainty: how the problem
            was framed, what was built, how the claim was challenged, and why an
            apparently strong result was not shipped as a promise.
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
            <SectionLabel>Launch gate</SectionLabel>
            <h2>What must be true before Tokonomics earns a savings claim?</h2>
          </div>
          <ul>
            <li><span>01</span><p><strong>Quality parity</strong> on representative, blinded development tasks.</p></li>
            <li><span>02</span><p><strong>Repeatable efficiency</strong> across task types, repositories, and provider economics.</p></li>
            <li><span>03</span><p><strong>Safe fallback behavior</strong> when the system cannot establish context sufficiency.</p></li>
            <li><span>04</span><p><strong>User trust evidence</strong> from a controlled beta—not assumptions presented as discovery.</p></li>
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
              a compelling result when quality evidence did not hold.
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
          <span>Tokonomics <small>Product portfolio</small></span>
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
