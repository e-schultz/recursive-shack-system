
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeSelector from '@/components/ThemeSelector';
import { ArrowLeft } from 'lucide-react';
import GlitchText from '@/components/GlitchText';
import SectionDivider from '@/components/SectionDivider';

const SourceArchive = () => {
  const { currentTheme } = useTheme();
  
  const sources = [
    {
      id: 'bbs-memories',
      title: 'BBS Memories and Early Internet Days',
      date: 'April 2025',
      content: (
        <>
          <p>For reasons, I want to recreate classic dial up BBS software Memories.</p>
          
          <p>I used Renegade, Oblivion, Telegaurd - a few others, but would always go back to Renegade. I'd use a hex editor on the exe to do customizations you couldn't do otherwise. Destructive editing for the win!</p>
          
          <p>The first real useful code I wrote was a utility for my BBS. Extract summaries from meta data at the top of txt files. I didn't want to zip them with a file_id.diz.</p>
          
          <p>"It's a text file, it's stupid to zip it just to add a description" said cranky grade school Evan. Or maybe grade 9. Ran my own from like gr7-gr11.</p>
          
          <p>Had my own personal rule of thumb I wouldn't post a text file (posted lots of tutorials / zines / info sec / l33t hacker stuff) unless I could Tl;Dr summary it. I also nuked my BBS often enough and had to import files. I got tired of retyping all of the summaries.</p>
          
          <p>I'm realizing that this is like the most ADHD/ASD Hyperfocus thing ever. I still do the same shit now in different ways - I'm a sucker for basically being a techno librarian.</p>
          
          <h3 className="mt-6 text-tech-cyan font-mono">Expanding My BBS Reach</h3>
          <p>Also figured out FidoNet and the furthest numbers I could connect to to still be local - area codes would not limit my desire to collect information. Was more into the message boards than BBS games. But I did love LORD and Usuper.</p>
          
          <p>Eventually I took the games off my own BBS - figured enough others served that need. Focused on the forums / txt files / sharing information.</p>
          
          <p>Some users complained - "but I'm here for the games" I'd give them a list of other quality BBSs that focused on those. Even as a young nerd I knew my niche and that you can't please everyone.</p>
          
          <h3 className="mt-6 text-tech-cyan font-mono">Balancing BBS and Internet</h3>
          <p>Once I got access to the internet - I would try and balance my time on the net vs keeping my BBS accessible. My parents wouldn't let me get a 3rd phone line.</p>
          
          <p>I'd try and get as much information/txt files as I could - and then make them available on my BBS for people who didn't have access to the net yet. I really enjoyed being a part of the BBS community and would support others, help out, and be a part of their forums as well.</p>
          
          <p>I miss those days.</p>
        </>
      )
    },
    {
      id: 'stutter-tech',
      title: 'My Life with a Stutter and Finding My Voice in Tech',
      date: 'March 2025',
      content: (
        <>
          <p className="italic text-tech-grey">server: Can I get your name for the order?<br />
          me: Eh . eh…. eh…… Eh…….. Evan<br />
          server: Took you a minute there, did you forget your name?<br />
          me: 🤬 on the inside, while 😁 on the outside* Nawh, I stutter - and my own name is one of the words I consistently trip up on.</p>
          
          <h3 className="mt-6 text-tech-cyan font-mono">Daily Struggles with Stuttering</h3>
          <p>Sometimes I'll respond: "It's Evan" instead of "Evan". Blending the "s" sound into the starting sound of my name helps avoid getting stuck on the "Eh" sound in my name. This did lead to a period of time of people referring to me as "It's Evan" in high school.</p>
          
          <p>I avoided watching The Kings Speech for a few years, when I did get around to watching it - I could feel the anxiety he was having so much. Glad I watched it, and think they did a good job with it - but a few things was like ugh, I could feel the tension in my chest building.</p>
          
          <p>I've also had a few phone calls / video calls where people have asked:</p>
          
          <p className="italic text-tech-grey">"are you still there?"<br />
          "I think the connection is bad"<br />
          "you cut out there for a second"</p>
          
          <p>...and it's just me stuttering.</p>
          
          <p>I've also had people tell me that the slight pause I have before responding to things, have made me appear that I am being "wise and thoughtful" ...but also, often me stuttering and getting stuck on a word. Sooo, yeah ;)</p>
          
          <p>Thankfully I did have access to good speech therapy in school. After I had a teacher try and put me into special ed because I couldn't read outloud, I could read - just not outloud. Did quite a bit in grade school, and a little bit in high school.</p>
          
          <h3 className="mt-6 text-tech-cyan font-mono">Finding My Voice Online</h3>
          <p>One of the ways it's impacted me in a positive way I think - is when I discovered online communities like BBS's, news groups, forums, etc. Being able to express myself by writing and not worry about getting teased over getting stuck on a word, or how I spoke.</p>
          
          <p>I wasn't the awkward kid who could barely say his own name, I was some kid behind a h4ndl3 on a forum being helpful and chatty and a wealth of information. Going online, it's like I turned into the more helpful, friendly version of myself that I wish I could be in person.</p>
          
          <h3 className="mt-6 text-tech-cyan font-mono">Building My Own BBS Community</h3>
          <p>Getting involved with my local BBS scene when I was in grade school was like opening up a whole new world for me. I eventually opened up my own BBS. The last version of it was called "ep0ch" - in the 705 area code, until I moved cities - then was in the 905 area code.</p>
          
          <p>Initially - I had all of the common BBS games - L.O.R.D, Usurper, BBS Hacker, etc that almost every other BBS in the area had. Eventually I decided I wanted to run a different kind of BBS than the others, and removed all of the games.</p>
          
          <p>Shifted the focus to the forums, and the file area - but instead of being a 'warez board' - I had just started to get access to the internet, and I'd go through news groups, gopher, collect 'hacker zines' like 2600, phreak, etc.</p>
        </>
      )
    },
    {
      id: 'cognitive-assist',
      title: 'I as a Cognitive Assist: Taming the Neurodivergent Firehose',
      date: 'May 2025',
      content: (
        <>
          <p>One of the first moments I saw real value in AI wasn't in writing code or generating content—it was in making sense of my own brain.</p>
          
          <p>For context: I'm hyperverbal autistic with ADHD. That means:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>When I have something to say, it comes out fast. One word becomes ten, ten become a hundred.</li>
            <li>There's a lot of it. Like, a lot a lot.</li>
            <li>It's full of valuable insights—but not all of it is relevant to the audience.</li>
          </ul>
          
          <p>And hyperverbal doesn't just mean talking—it's my entire thought process. Internally, my brain is constantly composing, refining, and expanding on ideas at breakneck speed.</p>
          
          <h3 className="mt-6 text-tech-cyan font-mono">❓ So what does this look like in practice?</h3>
          
          <p>Think about it in terms of Speed, Volume, and Signal vs. Noise:</p>
          
          <ul className="list-disc pl-6 mb-6">
            <li>💥 <strong>Speed:</strong> Thoughts erupt faster than I can channel them.</li>
            <li>📚 <strong>Volume:</strong> Imagine a library exploding… daily.</li>
            <li>🎯 <strong>Signal vs. Noise:</strong> There's gold in there—but good luck mining it in real-time.</li>
          </ul>
          
          <p>Sometimes my enthusiasm is a distraction for others.</p>
          
          <p>In no time, I would have a wall of text filling the screen and dominating the slack channel, and then I would get a slack message from my manager</p>
          
          <p className="italic text-tech-grey">🧔‍♂️ "… Evan, watch the information spray."</p>
          
          <p>I had just information vomited, and the entire channel was the splash zone - I needed to figure out a way to harness this into insights and not intimidation</p>
          
          <h3 className="mt-6 text-tech-cyan font-mono">🛟 My Survival Workflow (Born Out of Necessity)</h3>
          
          <p>Over time, I developed a process—not to stop the firehose, but to tame it into something useful.</p>
          
          <ol className="list-decimal pl-6 mb-6">
            <li>Dump everything into a note. No filters. Let the firehose run.</li>
            <li>Edit relentlessly. Who is my audience? What format is best? What is essential?</li>
            <li>Refine & repurpose. One info dump can turn into a Slack message, an email, a blog, a presentation—an encyclopedia lives on the editing room floor.</li>
          </ol>
          
          <h3 className="mt-6 text-tech-cyan font-mono">🥅 The Catch?</h3>
          
          <p>Each step adds to my cognitive load.</p>
          
          <ul className="list-disc pl-6 mb-6">
            <li>The initial brain dump? Exhausting.</li>
            <li>Editing? Also exhausting.</li>
            <li>Editing often triggers more brain dumps. (Neurodivergent folks, you get it.)</li>
          </ul>
          
          <p>By the end, I've spent more energy managing my thoughts than acting on them.</p>
          
          <h3 className="mt-6 text-tech-cyan font-mono">🤖 Where AI Comes In</h3>
          
          <p>Instead of drowning in my own words, I use LLMs to:</p>
          
          <ul className="list-disc pl-6 mb-6">
            <li>✅ Summarize my chaotic thoughts—pull key themes, filter noise, and surface insights I didn't even realize were in there.</li>
            <li>✅ Reshape communication—what works in Slack won't land the same in an email, and what makes sense in my head needs structure for others.</li>
            <li>✅ Break overwhelming ideas into manageable steps—so my own brain doesn't burn me out.</li>
          </ul>
          
          <p>I hate the "ADHD/Autism is a superpower" framing—it overlooks the reality of the struggle. But I will say this:</p>
          
          <p>AI helps me manage one of my biggest cognitive challenges. And that's worth exploring.</p>
        </>
      )
    },
    {
      id: 'first-programming',
      title: 'My First Useful Programming Project',
      date: 'April 2023',
      content: (
        <>
          <p>The first real useful code I wrote was a utility for my BBS. Extract summaries from meta data at the top of txt files. I didn't want to zip them with a file_id.diz.</p>
          
          <p>"It's a text file, it's stupid to zip it just to add a description" said cranky grade school Evan. Or maybe grade 9. Ran my own from like gr7-gr11.</p>
          
          <p>Had my own personal rule of thumb I wouldn't post a text file (posted lots of tutorials / zines / info sec / l33t hacker stuff) unless I could Tl;Dr summary it. I also nuked my BBS often enough and had to import files. I got tired of retyping all of the summaries.</p>
          
          <p>I knew that zip files had a file_id.diz in them - that could be used to extract the summary of what was in a zip file to auto-populate it in the forums. I thought it was silly to zip up a text file to add file_id.diz though.</p>
          
          <p>I was learning how to program at the time, and thought: What if I could put the summary in the text file, and just read it from that? So I wrote a little program that would extract text between two strings at the top of a file:</p>
          
          <pre className="bg-tech-dark p-4 rounded-md my-6 overflow-x-auto">
            <code>{"-file_id.diz-\nsummary\n-file_id.diz-"}</code>
          </pre>
          
          <p>Pretty much an opening tag and closing tag, I was in like grade 7 or something at the time. In retrospect - the program is super simple, but at the time - I didn't even know how to open a file to read the contents of it.</p>
          
          <p>I just had some example source code, and some code/examples from the SWAG archive that I dug through to try and figure things out. It ended up working, and doing the job I needed it to do.</p>
          
          <p>And that was the first "useful" program that I wrote - I had written stuff before that, but this was the first one that did something for me, to make my life easier - and I was damn proud of it.</p>
          
          <p>So that's how and why I got into tech/programming.</p>
        </>
      )
    }
  ];

  return (
    <div className={`glitch-container min-h-screen ${currentTheme.name}`}>
      <ThemeSelector />
      
      <header className="container max-w-4xl pt-10 pb-6">
        <Link to="/" className="inline-flex items-center text-tech-cyan hover:text-tech-yellow transition-colors mb-6">
          <ArrowLeft size={18} className="mr-2" />
          <span>Back to main article</span>
        </Link>
        
        <h1 className="mb-4">
          <GlitchText text="Source Archives" as="span" />
        </h1>
        <p className="text-muted-foreground">
          Original writings that inspired sections of "Shacks, Not Cathedrals"
        </p>
      </header>
      
      <main className="container max-w-3xl py-6">
        {sources.map((source, index) => (
          <React.Fragment key={source.id}>
            <section id={source.id} className="mb-16">
              <h2 className="text-tech-cyan mb-2">{source.title}</h2>
              <p className="font-mono text-tech-yellow text-sm mb-6">{source.date}</p>
              
              <div className="prose prose-invert prose-lg max-w-none">
                {source.content}
              </div>
            </section>
            {index < sources.length - 1 && <SectionDivider />}
          </React.Fragment>
        ))}
      </main>
      
      <footer className="container max-w-3xl border-t border-tech-grey mt-24 pt-6 pb-12 text-center text-muted-foreground">
        <p className="font-mono text-sm">
          Archives via FLOAT &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default SourceArchive;
