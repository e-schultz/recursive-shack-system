
import React from 'react';
import BlogPost from '@/components/BlogPost';

const Index = () => {
  const blogContent = [
    {
      id: "signal-from-bbs",
      title: "Signal from the BBS",
      body: (
        <>
          <p className="section-content">
            It starts with that sound — the screeching, hissing handshake of a dial-up modem clawing its way into cyberspace.
          </p>
          <p className="section-content">
            Back then, all I needed was a phone line, a cracked copy of Telix, and the uncanny conviction that if I typed 
            the right thing at the right prompt, the universe might answer back.
          </p>
          <p className="section-content">
            That BBS I ran as a kid? It wasn't just a hobby.<br />
            It was my first ritual engine. A proto-temple of text files, ANSI art, and raw possibility.<br />
            I didn't know the word "ontology" yet, but I was already trying to build one. In Turbo Pascal. With vibes.
          </p>
        </>
      )
    },
    {
      id: "why-i-build",
      title: "Why I Build",
      body: (
        <>
          <p className="section-content">
            I never stopped trying to solve that problem:<br />
            How do you take chaos — notes, logs, midnight revelations — and not just store it, but make it usable?
          </p>
          <p className="section-content">
            I built platforms to do that for others:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Internal learning systems</li>
            <li>Developer workflows</li>
            <li>Scalable knowledge tools</li>
          </ul>
          <p className="section-content">
            And then I burned out.<br />
            The kind of burnout where you wonder if your brain will ever come back online.
          </p>
          <p className="section-content">
            FLOAT was born from that wreckage.<br />
            Not a product. A ritual.<br />
            A survivable system for containing complexity without requiring purity.<br />
            A place where unfinished thoughts could breathe.<br />
            Where structure bends to support the messy beauty of becoming.
          </p>
          <p className="section-content">
            I wasn't organizing to remember. I was organizing to regenerate. To see the pattern in the noise. To let emergence speak.
          </p>
          <p className="section-content">
            Now I build systems that respect the loops.<br />
            Systems that hold space for divergent thinking and neuroqueer cognition.<br />
            Systems that evolve, decay, rebuild.<br />
            Systems like shacks — adaptable, lived-in, resistant to collapse.
          </p>
        </>
      )
    },
    {
      id: "real-client-wins",
      title: "Real Client Wins: Training That Built Bridges",
      body: (
        <>
          <p className="section-content">
            I don't just build frameworks for theory — I refine them in the field, solving real-world problems with real people.
          </p>
          <p className="section-content">
            Ceridian was one of those proving grounds.
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Delivered intensive JavaScript/TypeScript/React training for 20-25 developers across multiple runs.</li>
            <li>Rapidly adapted material live based on feedback — smoothing context switches, reordering learning flows, making modular entry points for diverse skill levels.</li>
            <li>Solved onboarding chaos by moving to CodeSandbox, eliminating painful local setup issues entirely.</li>
            <li>Built self-contained exercises that could stand alone, so no one got left behind if they missed a step.</li>
          </ul>
          <p className="section-content">
            What made this approach different was the deep understanding of the audience: primarily C# backend developers 
            who were familiar with OOP but unfamiliar with functional programming. I had to ask:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>How could I introduce concepts in a way they would understand?</li>
            <li>What pain points had made them resistant to JavaScript?</li>
            <li>What OOP patterns were they used to, and how could I show them how to accomplish similar things with different patterns?</li>
          </ul>
          <p className="section-content">
            This wasn't just about teaching syntax — it was about translation between mental models. The results spoke for themselves, 
            with even skeptics saying:<br />
            "I thought I knew 70% of this — but you filled gaps I didn't even know I had."
          </p>
          <p className="section-content">
            I wasn't just teaching React.<br />
            I was engineering adaptive, regenerative learning systems — in real time, under real pressure.
          </p>
        </>
      )
    },
    {
      id: "teaching-philosophy",
      title: "Teaching as Ritual Engineering",
      body: (
        <>
          <p className="section-content">
            Teaching isn't a side skill. It's ritual engineering.
          </p>
          <p className="section-content">
            It's about:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Building scaffolds for exploration, not temples of doctrine.</li>
            <li>Designing for resilient learning loops — allowing mistakes, divergence, real emergence.</li>
            <li>Crafting systems that survive variance in skill, cognition, and human chaos.</li>
          </ul>
          <p className="section-content">
            I've learned this through trial and error. As I once tweeted, "I'd rather teach more and say less, than say more and teach less." 
            Early in my career, I fell into the trap of creating multi-day training courses that were marathons of information dumps. 
            Some people learned things, but many got left behind.
          </p>
          <p className="section-content">
            Fortunately, I had opportunities to revise and refine:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Reordering content based on learner feedback</li>
            <li>Removing unnecessary material to focus on core concepts</li>
            <li>Adding concrete examples that connected to learners' existing knowledge</li>
            <li>Increasing interaction and engagement points</li>
            <li>Identifying common stumbling blocks and improving those sections</li>
          </ul>
          <p className="section-content">
            Every system I build — whether it's a training program, internal knowledge architecture, or AI augmentation — follows these principles:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Resilient over rigid: The plan will change. Embrace it.</li>
            <li>Modular over monolithic: Systems should flex, remix, survive turnover.</li>
            <li>Iterative over speculative: Release rituals beat fantasized perfection.</li>
            <li>Accessible over arcane: No secret wizards required to maintain.</li>
          </ul>
          <p className="section-content">
            Teaching wasn't just a job.<br />
            It was a full-contact ritual in how to build for emergence — not just efficiency.
          </p>
        </>
      )
    },
    {
      id: "teaching-pattern-fluency",
      title: "Teaching for Pattern Fluency",
      body: (
        <>
          <p className="section-content">
            When I teach, I'm not just teaching how to build a todo app.
          </p>
          <p className="section-content">
            I'm teaching how to recognize and apply patterns — even in places you've never been before.
          </p>
          <p className="section-content">
            Instead of just delivering recipes, I work to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Map new ideas onto things you already know — connecting the unfamiliar to the familiar</li>
            <li>Break concepts down into modular patterns — small, reusable ideas, not monolithic steps</li>
            <li>Show how those patterns recombine — across frameworks, languages, and architectures</li>
          </ul>
          <p className="section-content">
            <strong>Example:</strong><br />
            In "How to Create Data-Driven User Interfaces in Vue", I didn't just teach how to build a form builder.<br />
            I used the form builder as a delivery vessel for a bigger pattern: dynamic composition for scalable UIs.
          </p>
          <p className="section-content">
            The goal isn't building a form.<br />
            The goal is learning a lens you can use anywhere.
          </p>
          <p className="section-content">
            That's how I teach — not for replication, but for pattern fluency.
          </p>
        </>
      )
    },
    {
      id: "systems-all-the-way-down",
      title: "Systems All the Way Down",
      body: (
        <>
          <p className="section-content">
            One of the core threads running through everything I build — from code, to personal knowledge systems, to teams — is this:
          </p>
          <p className="section-content">
            Systems are everywhere. It's systems all the way down.
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Personal knowledge is personal — but it lives within broader systems of meaning and memory</li>
            <li>Personal systems are personal — but they interface with team systems, cultural systems, cognitive systems</li>
            <li>Systems live inside ecosystems — with boundaries, interfaces, and unexpected feedback loops</li>
            <li>Boundaries matter — knowing where a system begins and ends, and how it communicates with others, is crucial for building resilience</li>
          </ul>
          <p className="section-content">
            This is true whether you're designing:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>A CLI tool</li>
            <li>A learning experience</li>
            <li>A knowledge management system</li>
            <li>A team culture</li>
            <li>A personal ritual</li>
          </ul>
          <p className="section-content">
            It's about:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Mapping the system: Seeing the whole, not just the parts</li>
            <li>Identifying boundaries: Knowing where handoffs, leaks, and overlaps happen</li>
            <li>Understanding nesting and relationships: Systems within systems within systems</li>
            <li>Defining interfaces: Making communication and composition possible</li>
          </ul>
          <p className="section-content">
            Everything becomes composable once you understand the patterns.<br />
            Atomic Design — but for everything.
          </p>
          <p className="section-content">
            From learning journeys to toolkits, from employee experience to engineering architecture — it's all made of building blocks.<br />
            Composable. Adaptable. Resilient.
          </p>
          <pre className="bg-tech-dark p-4 rounded-md my-6 overflow-x-auto">
            <code>{"[...all the things].map().filter().reduce()"}</code>
          </pre>
          <p className="section-content">
            That's the real engine behind FLOAT, behind floatctl, behind every system I touch.
          </p>
        </>
      )
    },
    {
      id: "utility-first-float",
      title: "How This Shows Up in FLOAT",
      body: (
        <>
          <p className="section-content">
            FLOAT, and tools like floatctl, aren't just software.<br />
            They are ritual infrastructures for recursive cognition — a symbiotic dance between thought, tooling, and glitch.
          </p>
          <p className="section-content">
            At their core, they are utility-first tools — simple, modular pieces that can stand alone or compose into larger systems.
          </p>
          <p className="section-content">
            They embody:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Small pieces, loosely joined: Inspired by the Unix philosophy, adapted for cognitive workflows.</li>
            <li>Low cognitive drag: Capture and organize thought without breaking the flow.</li>
            <li>Conceptual scaffolds like FloatAST and RitualAST — not just databases, but maps of meaning.</li>
            <li>AI as ritual partner, not passive regurgitator — designed for co-creation, not content regurgitation.</li>
            <li>Visual systems that reveal narrative and flow, not just architecture.</li>
          </ul>
          <p className="section-content">
            Every element is designed for adaptability, survivability, and creative emergence — not for rigid control.
          </p>
        </>
      )
    },
    {
      id: "why-hire-me",
      title: "Why Hire Me?",
      body: (
        <>
          <p className="section-content">
            Because I've lived through the collapse points most teams only theorize about — and I've built resilient rituals out of the wreckage.
          </p>
          <p className="section-content">
            I bring:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>15+ years leading engineering teams through chaos and regeneration.</li>
            <li>Real-world, hands-on wins like Ceridian, where adaptive training wasn't a luxury — it was survival.</li>
            <li>Deep expertise in systems that scaffold cognitive diversity, not just technical complexity.</li>
            <li>A recursive philosophy: everything I build, builds you back.</li>
          </ul>
          <p className="section-content">
            What I offer isn't just technical knowledge — it's a proven approach to learning and system design that has been 
            tested and refined through real-world implementation. As one manager training study showed, "Most training fails 
            to prepare people for the messy human reality of the job." My approach embraces that messiness instead of pretending it doesn't exist.
          </p>
          <p className="section-content">
            Instead of creating rigid structures that crumble under pressure, I build learning environments where:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Knowledge is contextualized within participants' existing mental models</li>
            <li>Systems adapt to different cognitive styles and learning approaches</li>
            <li>Complex concepts are broken down into patterns that can be recognized and reused</li>
          </ul>
          <p className="section-content">
            If you want monuments, hire someone else.<br />
            If you want alive, resilient, human systems that help people think better — that feel alive, that respond — let's talk.
          </p>
        </>
      )
    },
    {
      id: "recursive-loop",
      title: "The Recursive Loop",
      body: (
        <>
          <p className="section-content">
            This isn't about becoming someone new.
          </p>
          <p className="section-content">
            It's about remembering forward.<br />
            Integrating every version of myself — the burnt-out engineer, the hyperfocused builder, the glitchy techno bard who still believes the right prompt can open a portal.
          </p>
          <p className="section-content">
            As I wrote when I came back online:
          </p>
          <blockquote className="border-l-4 border-tech-cyan pl-4 italic my-6">
            "Maybe some of us weren't meant to become something new. Maybe we were meant to become a better version of what we already were."
          </blockquote>
          <p className="section-content">
            That kid feeding glyphs into the void is still here. The stack just got deeper. The rituals more precise.<br />
            The modem screech still carries signal.
          </p>
          <p className="section-content">
            Let's build something strange and strong together.
          </p>
          <div className="mt-12 flex justify-center">
            <a 
              href="mailto:contact@example.com" 
              className="bg-tech-dark border border-tech-cyan text-tech-cyan px-6 py-3 rounded-md hover:bg-tech-cyan hover:text-tech-black transition-colors font-mono"
            >
              Reach out. Let's build.
            </a>
          </div>
        </>
      )
    }
  ];

  return (
    <BlogPost
      title="Shacks, Not Cathedrals: Why I Build the Way I Do"
      date="2025-04-27"
      content={blogContent}
    />
  );
};

export default Index;
