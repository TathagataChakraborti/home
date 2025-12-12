const DATA = [
  {
    id: 1,
    active: true,
    name: 'Optimality checks for observability platforms',
    description:
      'This project aims to add plan quality metrics -- e.g., optimality, validity, and soundness -- to observability platforms throught the use of classical solvers.',
    links: [],
    tags: ['agentic', 'planning', 'nlp', 'bpm'],
  },
  {
    id: 2,
    active: true,
    name: 'Macros for modern agents',
    description:
      'Macros create helpful abstractions in markov decision processes. Can this be adopted for modern agentic systems, especially "code agents"?',
    links: [],
    image: '',
    tags: ['agentic', 'planning', 'nlp'],
  },
  {
    id: 3,
    active: true,
    name: 'Long running agents',
    description:
      'Unlock agents with higher levels of agentic expression by adopting concepts from decades of work in the agents community into modern agentic systems.',
    links: [],
    image: 'long-running',
    tags: ['agentic', 'planning', 'nlp'],
  },
  {
    id: 4,
    active: true,
    name: 'Refraction for schema validated tool calling',
    description:
      'A low-cost (no LLMs!), low-latency, domain-agnostic, data-agnostic, model-agnostic approach towards validation and repair for a sequence of tool calls, based on classical AI planning techniques.',
    links: [
      {
        url: 'https://github.com/AgentToolkit/agent-lifecycle-toolkit',
        type: 'code',
      },
      {
        url:
          'https://agenttoolkit.github.io/agent-lifecycle-toolkit/concepts/components/refraction/#refraction',
        type: 'website',
      },
      {
        url: 'https://www.youtube.com/watch?v=3Jh87xKMoVc',
        type: 'video',
      },
    ],
    image: 'refraction',
    tags: ['agentic', 'planning', 'nlp'],
  },
  {
    id: 5,
    active: true,
    name: 'Automated jq-filters',
    description:
      'Context engineering using forward looking basis schemas to filter large JSON responses from tool calling into task specific projections.',
    links: [],
    image: 'remembear',
    tags: ['agentic', 'planning', 'nlp'],
  },
  {
    id: 6,
    active: true,
    name: 'Evaluating planning capacity of LLMs',
    description:
      'An interface for ablation studies of the planning performance of agentic systems, especially for evaluating tool calling capabilities in the presence of tightly coupled catalogs, memory usage, and process and behavioral constraints',
    links: [],
    image: 'metis',
    tags: ['agentic', 'planning'],
  },
  {
    id: 7,
    active: true,
    name: 'NL2Flow: A PDDL Interface to Flow Construction',
    description:
      'A series of illustrative compilations for planning components used in IBM products over the last 5 years, including Watson Assistant, Watson Orchestrate, App Connect, and others.',
    links: [
      {
        url: 'https://github.com/TathagataChakraborti/nl2flow',
        type: 'code',
      },
    ],
    tags: ['agentic', 'planning', 'nlp', 'bpm'],
  },
  {
    id: 8,
    active: true,
    name: 'Model Acquisition Interface',
    description:
      'An interface for offline analysis of agentic traces -- an observability platform that can do process mining.',
    links: [],
    image: 'metheus',
    tags: ['agentic', 'planning', 'nlp', 'bpm'],
  },
  {
    id: 9,
    active: false,
    name: 'Operator recommendation for process builders',
    description:
      'A real-time API recommender system for agent builders, powered by an automated planner, that scales to hundreds of tools within seconds.',
    links: [
      {
        url: 'https://openreview.net/pdf?id=I2yuXzj7EY',
        type: 'paper',
      },
      {
        url: 'https://www.youtube.com/watch?v=o75mNgXIwSs',
        type: 'video',
      },
    ],
    image: 'pbanba',
    tags: ['planning', 'nlp', 'bpm'],
  },
  {
    id: 10,
    active: false,
    name: 'IBM Watson Orchestrate',
    description: 'All your AI agents in an open solution. Fully orchestrated.',
    links: [
      {
        url: 'https://www.ibm.com/products/watsonx-orchestrate',
        type: 'website',
      },
    ],
    image: 'wo',
    tags: ['agentic', 'planning', 'nlp', 'bpm'],
  },
  {
    id: 11,
    active: false,
    name: 'IBM AppConnect',
    description: 'Rapidly connect apps and data to automate your business.',
    links: [
      {
        url: 'https://www.ibm.com/products/app-connect',
        type: 'website',
      },
      {
        url: 'https://dl.acm.org/doi/abs/10.1145/3581641.3584088',
        type: 'paper',
      },
      {
        url: 'https://ojs.aaai.org/index.php/AAAI/article/view/21712',
        type: 'paper',
      },
    ],
    image: 'gofa',
    tags: ['planning', 'nlp', 'bpm'],
  },
  {
    id: 12,
    active: false,
    name: 'MAcq: The Model Acquisition Toolkit',
    description:
      'This library is a collection of tools for planning-like action model acquisition from state trace data.',
    links: [
      {
        url: 'https://arxiv.org/abs/2206.06530',
        type: 'paper',
      },
      {
        url: 'https://github.com/AI-Planning/macq',
        type: 'code',
      },
      {
        url: 'https://macq.planning.domains/',
        type: 'website',
      },
    ],
    image: 'macq',
    tags: ['planning', 'bpm'],
  },
  {
    id: 13,
    active: false,
    name: 'Process Automation',
    description:
      'Algorithmic advances for business process optimization through a composition of automated planning and natural language processing.',
    links: [
      {
        url: 'https://link.springer.com/chapter/10.1007/978-3-031-16168-1_8',
        type: 'paper',
      },
      {
        url: 'https://ai4bpm.com',
        type: 'website',
      },
      {
        url: 'https://tathagatachakraborti.github.io/bpm-planning-tutorial',
        type: 'website',
      },
      {
        url: 'https://arxiv.org/abs/2312.11828',
        type: 'paper',
      },
      {
        url: 'https://arxiv.org/abs/2011.10707',
        type: 'paper',
      },
    ],
    image: 'process',
    tags: ['bpm', 'nlp', 'planning'],
  },
  {
    id: 14,
    active: false,
    name: 'Project Boothbot',
    description:
      'An automated website + chatbot generational tool for organizations attending technical events like AI conferences.',
    image: 'boothbot',
    tags: ['agentic', 'nlp', 'bpm'],
  },
  {
    id: 15,
    active: false,
    name: 'Model space reasoning',
    description:
      'Minimal model perturbations to reasoning problems to figure out causes for unsolvability of a task, and using the same for feedback for demonstration learning.',
    links: [
      {
        url: 'https://ieeexplore.ieee.org/abstract/document/10870986',
        type: 'paper',
      },
      {
        url: 'https://dl.acm.org/doi/10.1609/aaai.v38i18.29984',
        type: 'paper',
      },
    ],
    image: 'maxi',
    tags: ['humanai', 'planning', 'xai', 'hri'],
  },
  {
    id: 16,
    active: false,
    name: 'Interactive plan exploration',
    description:
      'A series of projects exploring interactive exploration of a set of plans through the means of landmark-based disambiguation and natural language to LTL logic.',
    links: [
      {
        url: 'https://github.com/IBM/nl2ltl',
        type: 'code',
      },
      {
        url: 'https://icaps23.icaps-conference.org/demos/papers/6374_paper.pdf',
        type: 'paper',
      },
      {
        url: 'https://github.com/IBM/lemming',
        type: 'code',
      },
      {
        url: 'https://icaps23.icaps-conference.org/demos/papers/692_paper.pdf',
        type: 'paper',
      },
    ],
    image: 'lemming',
    tags: ['planning', 'nlp', 'bpm'],
  },
  {
    id: 17,
    active: false,
    name: 'Toby: A survey visualization tool',
    description:
      'A visualization tool for data from survey papers, for readers to explore on the browser. It accepts as input a formatted spreadsheet and produces several views in terms of a hierarchy of concepts, document concept similarity, and citation network.',
    links: [
      {
        url: 'https://github.com/TathagataChakraborti/survey-visualizer',
        type: 'code',
      },
      {
        url: 'https://arxiv.org/abs/2306.10051',
        type: 'paper',
      },
    ],
    image: 'toby',
    tags: ['bpm', 'nlp'],
  },
  {
    id: 18,
    active: false,
    name: 'COVID-19 India Data',
    description:
      'AI-assisted document and image extraction techniques to automate the extraction of data in structured (SQL) form from the state-level (India) daily health bulletins.',
    links: [
      {
        url: 'https://arxiv.org/abs/2110.02311',
        type: 'paper',
      },
      {
        url: 'https://github.com/IBM/covid19-india-data',
        type: 'code',
      },
      {
        url: 'https://india-covid-19-data.mybluemix.net',
        type: 'website',
      },
    ],
    image: 'covid',
    tags: ['nlp', 'support'],
  },
  {
    id: 19,
    active: false,
    name: 'Project CLAI',
    description:
      'Command Line Artificial Intelligence was an open-sourced project aimed to bring the power of AI to the command line. To this day, it remains the most extensively instrumented version of the terminal, with multiple spinoff projects.',
    links: [
      {
        url: 'https://arxiv.org/abs/2002.00762',
        type: 'paper',
      },
      {
        url: 'https://arxiv.org/abs/2103.02523',
        type: 'paper',
      },
      {
        url: 'https://github.com/IBM/clai',
        type: 'code',
      },
      {
        url: 'https://dl.acm.org/doi/10.5555/3297863.3297870',
        type: 'paper',
      },
    ],
    image: 'clai',
    tags: ['nlp', 'support', 'ai4code'],
  },
  {
    id: 20,
    active: false,
    name: 'Declarative specification of process components',
    description:
      'A series of projects exploring the application of declarative specification for components in a dialogue or process management system.',
    links: [
      {
        url: 'https://tathagatachakraborti.github.io/bpm-planning-tutorial',
        type: 'website',
      },
      {
        url: 'https://ojs.aaai.org/index.php/ICAPS/article/view/6744',
        type: 'paper',
      },
      {
        url: 'https://arxiv.org/abs/2001.02619',
        type: 'paper',
      },
      {
        url: 'https://arxiv.org/abs/1910.08137',
        type: 'paper',
      },
    ],
    image: 'd3',
    tags: ['planning', 'bpm', 'support', 'nlp'],
  },
  {
    id: 21,
    active: false,
    name: 'Automated support for human planners',
    description:
      'A series of projects exploring the application of automated planning for supporting human planners, in a variety of domains including disaster response, crew scheduling on the ISS, and intelligent tutoring systems.',
    links: [
      {
        url:
          'https://www.tandfonline.com/doi/abs/10.1080/07370024.2020.1726751?journalCode=hhci20',
        type: 'paper',
      },
      {
        url: 'https://yochan-lab.github.io/papers/files/papers/CAP.pdf',
        type: 'paper',
      },
      {
        url: 'https://yochan-lab.github.io/papers/files/papers/iPass.pdf',
        type: 'paper',
      },
      {
        url: 'https://yochan-lab.github.io/papers/files/papers/ma-radar.pdf',
        type: 'paper',
      },
    ],
    image: 'radar',
    tags: ['planning', 'humanai', 'support', 'vamhri'],
  },
  {
    id: 22,
    active: false,
    name: 'Augmented interfaces for human-robot interaction',
    description:
      'Exploration of mixed-reality (and a little bit of EEG singals) to facilitate proximal human-robot interactions, specifically projection of intentions into the future.',
    links: [
      {
        url: 'https://vamhri.com',
        type: 'website',
      },
      {
        url: 'https://ieeexplore.ieee.org/document/8593830',
        type: 'paper',
      },
      {
        url: 'https://arxiv.org/abs/1703.08930',
        type: 'paper',
      },
    ],
    image: 'projections',
    tags: ['humanai', 'planning', 'xai', 'vamhri'],
  },
  {
    id: 23,
    active: false,
    name: 'cARs',
    description:
      'A fun little project, extending the notion of intention projection of robots in mixed-reality into cars.',
    links: [
      {
        url:
          'https://yochan-lab.github.io/papers/files/papers/vam-hri-cars.pdf',
        type: 'paper',
      },
    ],
    image: 'cars',
    tags: ['humanai', 'planning', 'xai', 'vamhri'],
  },
  {
    id: 24,
    active: false,
    name: 'Embodied agents in smart enviroments',
    description:
      'Applications of automated planning for orchestration of robots and actuated sensors in smart environments.',
    links: [
      {
        url: 'https://journals.sagepub.com/doi/10.3233/AIC-180609',
        type: 'paper',
      },
      {
        url: 'https://arxiv.org/abs/1706.01133',
        type: 'paper',
      },
    ],
    image: 'sid',
    tags: ['agentic', 'planning', 'vamhri'],
  },
  {
    id: 25,
    active: false,
    name: 'Crowdsourced planning',
    description:
      'Early days of automated planning as a means of decision support, applied to a domain to tour planning on a crowdsourcing platform.',
    links: [
      {
        url: 'https://hcjournal.org/index.php/jhc/article/view/52',
        type: 'paper',
      },
    ],
    image: 'aimix',
    tags: ['planning', 'support', 'humanai'],
  },
  {
    id: 26,
    active: false,
    name: 'Human-Aware Planning',
    description:
      'Foundational contributions to human-aware planning and explainable AI, particularly through the formalization of the model reconciliation process in quantifiable form in human-robot interactions.',
    links: [
      {
        url: 'https://explainableplanning.com',
        type: 'website',
      },
      {
        url:
          'https://www.sciencedirect.com/science/article/abs/pii/S0004370224001176',
        type: 'paper',
      },
      {
        url:
          'https://www.sciencedirect.com/science/article/pii/S0004370221001090',
        type: 'paper',
      },
      {
        url: 'https://haxp-icaps.web.app',
        type: 'website',
      },
    ],
    image: 'balancing',
    tags: ['planning', 'humanai', 'hri'],
  },
];

export default DATA;
