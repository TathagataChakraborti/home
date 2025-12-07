const TAGS = {
  agentic: 'Agentic',
  humanai: 'Human-AI',
  planning: 'Planning',
  nlp: 'NLP',
  xai: 'XAI',
  bpm: 'BPM',
  ai4code: 'AI4Code',
  hri: 'HRI',
  vamhri: 'VAM-HRI',
  support: 'Support',
  advml: 'Adv ML',
};

const DATA = [
  {
    id: 20253,
    title: 'How Good Are LLMs at Processing Tool Outputs?',
    authors:
      'Kiran Kate and Yara Rizk and Poulami Ghosh and Ashu Gulati and Tathagata Chakraborti and Zidane Wright and Mayank Agarwal',
    abstract:
      "Most realistic task automation problems require large language models (LLMs) to call tools, which often return complex JSON responses. These responses must be further processed to derive the information necessary for task completion. The ability of LLMs to do so is under-studied. In this paper, we study the tool response processing task and LLMs' abilities to process structured (JSON) responses. We created a dataset for this task, and evaluated 15 open and closed weight models using multiple prompting approaches. Our results show that JSON processing remains a difficult task even for frontier models across multiple prompting strategies. The optimal response processing strategy depends on both the nature and size of the tool outputs, as well as the complexity of the required reasoning. Variations in processing approaches can lead to performance differences ranging from 3% to 50%.",
    venue: 'Technical Report',
    year: '2025',
    link: 'https://arxiv.org/abs/2510.15955',
    video: null,
    tags: ['agentic', 'nlp', 'bpm'],
  },
  {
    id: 20252,
    title:
      'Enabling Robots to Identify Missing Steps in Robot Tasks for Guided Learning from Demonstration',
    authors:
      'Maximilian Diehl and Tathagata Chakraborti and Karinne Ramirez-Amaro',
    abstract:
      'Learning from Demonstration (LfD) systems are commonly used to teach robots new tasks by generating a set of skills from user-provided demonstrations. These skills can then be sequenced by planning algorithms to execute complex tasks. However, LfD systems typically require a full demonstration of the entire task, even when parts of it are already known to the robot. This limitation comes from the system’s inability to recognize which sub-tasks are already familiar, leading to a repetitive and burdensome demonstration process for users. In this paper, we introduce a new method for guided demonstrations that reduces this burden, by helping the robot to identify which parts of the task it already knows, considering the overall task goal and the robot’s existing skills. In particular, through a combinatorial search, the method finds the smallest necessary change in the initial task conditions that allows the robot to solve the task with its current knowledge. This state is referred to as the "excuse state." The human demonstrator is then only required to teach how to reach the excuse state (missing sub-task), rather than demonstrating the entire task. Empirical results and a pilot user study show that our method reduces demonstration time by 61% and decreases the size of demonstrations by 72%.',
    venue: 'IEEE/SICE xxxx International Symposium on System Integration',
    year: '2025',
    link: 'https://ieeexplore.ieee.org/abstract/document/10870986',
    video: null,
    tags: ['planning', 'humanai', 'hri', 'xai'],
  },
  {
    id: 20251,
    title: 'A Human-in-the-loop API Sequencing Tool Powered by AI Planning',
    authors:
      'Jungkoo Kang and Tathagata Chakraborti and Junkyu Lee and Michael Katz and Shirin Sohrabi and Gaodan Fang and Punleuk Oum and Prabhat Reddy and Diego del Rio and Debashish Saha and Gegi Thomas and Benjamin Herta and Jim A Laredo and Alina Rotarescu and Alice Zhang and Suzette Samoojh',
    abstract:
      'In this demo, we present a real-time API recommender system powered by an automated planner. Our tool generates multiple API recommendations for over 600 APIs within a bound of 5 seconds. By inputting a partial list of APIs, our tool dynamically fills in missing components to create a more functional or complete workflow. While this task has been historically perceived as solely a data-driven endeavor, we demonstrate how a planner can be harnessed to utilize both association information and structural dependencies between different APIs. As part of the demonstration, we also report on data gathered from the initial deployment of the tool.',
    venue: 'ICAPS xxxx Demonstration',
    year: '2025',
    link: 'https://openreview.net/pdf?id=I2yuXzj7EY',
    video: null,
    tags: ['agentic', 'planning', 'humanai', 'bpm'],
  },
  {
    id: 20243,
    title:
      'Planning with mental models – Balancing explanations and explicability',
    authors:
      'Sarath Sreedharan, Tathagata Chakraborti, Christian Muise, and Subbarao Kambhampati',
    abstract:
      'Human-aware planning involves generating plans that are explicable, i.e. conform to user expectations, as well as providing explanations when such plans cannot be found. In this paper, we bring these two concepts together and show how an agent can achieve a trade-off between these two competing characteristics of a plan. To achieve this, we conceive a first-of-its-kind planner MEGA that can reason about the possibility of explaining a plan in the plan generation process itself. We will also explore how solutions to such problems can be expressed as “self-explaining plans” – and show how this representation allows us to leverage classical planning compilations of epistemic planning to reason about this trade-off at plan generation time without having to incur the computational burden of having to search in the space of differences between the agent model and the mental model of the human in the loop in order to come up with the optimal trade-off. We will illustrate these concepts in two well-known planning domains, as well as with a robot in a typical search and reconnaissance task. Human factor studies in the latter highlight the usefulness of the proposed approach.',
    venue: 'Artificial Intelligence Journal',
    year: '2024',
    link:
      'https://www.sciencedirect.com/science/article/abs/pii/S0004370224001176',
    video: null,
    tags: ['planning', 'humanai', 'xai', 'hri'],
  },
  {
    id: 20242,
    title:
      'Interactive Plan Selection using Linear Temporal Logic, Disjunctive Action Landmarks, and Natural Language Instruction',
    authors:
      'Tathagata Chakraborti, Jungkoo Kang, Francesco Fuggitti, Michael Katz, and Shirin Sohrabi',
    abstract:
      'We present Lemming – a visualization tool for the interactive selection of plans for a given problem, allowing the user to efficiently whittle down the set of plans and select their plan(s) of choice. We demonstrate four different user experiences for this process, three of them based on the principle of using disjunctive action landmarks as guidance to cut down the set of choice points for the user, and one on the use of linear temporal logic (LTL) to impart additional constraints into the plan set using natural language (NL) instruction.',
    venue: 'AAAI xxxx Demonstration',
    year: '2024',
    link: null,
    video: 'https://youtu.be/LnUJwA027O0',
    tags: ['planning', 'nlp', 'humanai', 'bpm'],
  },
  {
    id: 20241,
    title:
      'Can LLMs Fix Issues with Reasoning Models? Towards More Likely Models for AI Planning',
    authors:
      'Turgay Caglar, Sirine Belhaj, Tathagata Chakraborti, Michael Katz, and Sarath Sreedharan',
    abstract:
      'This is the first work to look at the application of large language models (LLMs) for the purpose of model space edits in automated planning tasks. To set the stage for this union, we explore two different flavors of model space problems that have been studied in the AI planning literature and explore the effect of an LLM on those tasks. We empirically demonstrate how the performance of an LLM contrasts with combinatorial search (CS) – an approach that has been traditionally used to solve model space tasks in planning, both with the LLM in the role of a standalone model space reasoner as well as in the role of a statistical signal in concert with the CS approach as part of a two-stage process. Our experiments show promising results suggesting further forays of LLMs into the exciting world of model space reasoning for planning tasks in the future.',
    venue: 'AAAI xxxx',
    year: '2024',
    link: null,
    tags: ['nlp', 'planning'],
  },
  {
    id: 20237,
    title: 'Guided Demonstrations Using Automated Excuse Generation',
    authors:
      'Maximilian Diehl, Tathagata Chakraborti, and Karinne Ramirez-Amaro',
    abstract:
      "Teaching task-level directives to robots via demonstration is a popular tool to expand the robot's capabilities to interact with its environment. While current learning from demonstration systems primarily focuses on abstracting the task-level knowledge to the robot, these systems lack the ability to understand which part of the task can be already solved given the robot's prior knowledge. Therefore, instead of only requiring demonstrations of the missing pieces, these systems will require a demonstration of the complete task, which is cumbersome, repetitive, and can discourage people from helping the robot by performing the demonstrations. Therefore, we propose to use the notion of \"excuses\" to identify the smallest change in the robot state that makes a task, currently not solvable by the robot, solvable -- as a means to solicit more targeted demonstrations from a human. These excuses are generated automatically using combinatorial search over possible changes that can be made to the robot's state and choosing the minimum changes that make it solvable. These excuses then serve as guidance for the demonstrator who can use it to decide what to demonstrate to the robot in order to make this requested change possible, thereby making the original task solvable for the robot without having to demonstrate it in its entirety. By working with symbolic state descriptions, the excuses can be directly communicated and intuitively understood by a human demonstrator. We show empirically and in a user study that the use of excuses reduces the demonstration time by 54% and leads to a 74% reduction in demonstration size.",
    venue: 'Technical Report',
    year: '2023',
    link: 'https://arxiv.org/abs/2311.18355',
    tags: ['humanai', 'xai', 'planning', 'hri', 'vamhri'],
  },
  {
    id: 20236,
    title:
      'TESS: A Multi-intent Parser for Conversational Multi-Agent Systems with Decentralized Natural Language Understanding Models',
    authors: 'Burak Aksar, Yara Rizk, and Tathagata Chakraborti',
    abstract:
      'Chatbots have become one of the main pathways for the delivery of business automation tools. Multi-agent systems offer a framework for designing chatbots at scale, making it easier to support complex conversations that span across multiple domains as well as enabling developers to maintain and expand their capabilities incrementally over time. However, multi-agent systems complicate the natural language understanding (NLU) of user intents, especially when they rely on decentralized NLU models: some utterances (termed single intent) may invoke a single agent while others (termed multi-intent) may explicitly invoke multiple agents. Without correctly parsing multi-intent inputs, decentralized NLU approaches will not achieve high prediction accuracy. In this paper, we propose an efficient parsing and orchestration pipeline algorithm to service multi-intent utterances from the user in the context of a multi-agent system. Our proposed approach achieved comparable performance to competitive deep learning models on three different datasets while being up to 48 times faster.',
    venue: 'Technical Report',
    year: '2023',
    link: 'https://arxiv.org/abs/2312.11828',
    tags: ['agentic', 'nlp', 'bpm'],
  },
  {
    id: 20235,
    title:
      'AAAI 2023 Bridge Program on Artificial Intelligence and Business Process Management',
    authors:
      'Tathagata Chakraborti, Vatche Isahagian, Andrea Marrella, Chiara Di Francescomarino, Jung koo Kang, and Yara Rizk',
    abstract:
      'The AI4BPM Bridge at AAAI 2023 brings together academics and industry professionals working at the intersection of artificial intelligence and business process management under the same roof. The event will include invited talks, poster sessions, tutorials, student outreach, meet and mingle opportunities, hands-on system demonstrations, and much more!',
    venue: 'AAAI xxxx Bridge Program',
    year: '2023',
    link:
      'https://research.ibm.com/publications/aaai-2023-bridge-program-on-artificial-intelligence-and-business-process-management',
    video: 'https://ai4bpm.com',
    tags: ['planning', 'bpm'],
  },
  {
    id: 20234,
    title: 'Lemming: A Tool for Guided Plan Selection using Landmarks',
    authors:
      'Jungkoo Kang, Tathagata Chakraborti, Michael Katz, Shirin Sohrabi, and Francesco Fuggitti',
    abstract:
      'Lemming is a visualization tool for the selection of plans for a given problem, allowing the user to efficiently whittle down the set of plans and select their plan(s) of choice. We propose three different user experiences for this process, all based on the principle that using landmarks as guidance can help cut down the set of choice points for the user. The live demonstration at the conference will allow the audience to interact with the tool on different domains and problems.',
    venue: 'ICAPS xxxx Demonstration',
    year: '2023',
    link: null,
    tags: ['planning', 'humanai', 'nlp'],
  },
  {
    id: 20233,
    title: 'Towards More Likely Models for AI Planning',
    authors:
      'Turgay Caglar, Sirine Belhaj, Tathagata Chakraborti, Michael Katz, and Sarath Sreedharan',
    abstract:
      'This is the first work to look at the application of large language models (LLMs) for the purpose of model space edits in automated planning tasks. To set the stage for this sangam, we start by enumerating the different flavors of model space problems that have been studied so far in the AI planning literature and explore the effect of an LLM on those tasks with detailed illustrative examples. We also empirically demonstrate how the performance of an LLM contrasts with combinatorial search (CS) – an approach that has been traditionally used to solve model space tasks in planning, both with the LLM in the role of a standalone model space reasoner as well as in the role of a statistical modeling tool in concert with the CS approach as part of a two-stage process. Our experiments show promising results suggesting further forays of LLMs into the exciting world of model space reasoning for planning tasks in the future.',
    venue:
      'ICML xxxx Workshop on Knowledge and Logical Reasoning in the Era of Data-driven Learning',
    year: '2023',
    link: null,
    tags: ['nlp', 'planning'],
  },
  {
    id: 20231,
    title:
      'Virtual, Augmented, and Mixed Reality for Human-Robot Interaction: A Survey and Virtual Design Element Taxonomy',
    authors:
      'Michael Walker, Thao Phung, Tathagata Chakraborti, Tom Williams, and Daniel Szafir',
    abstract:
      'Virtual, Augmented, and Mixed Reality for Human-Robot Interaction (VAM-HRI) has been gaining considerable attention in research in recent years. However, the HRI community lacks a set of shared terminology and framework for characterizing aspects of mixed reality interfaces, presenting serious problems for future research. Therefore, it is important to have a common set of terms and concepts that can be used to precisely describe and organize the diverse array of work being done within the field. In this paper, we present a novel taxonomic framework for different types of VAM-HRI interfaces, composed of four main categories of virtual design elements (VDEs). We present and justify our taxonomy and explain how its elements have been developed over the last 30 years as well as the current directions VAM-HRI is headed in the coming decade.',
    venue: 'ACM Transactions on Human Robot Interaction',
    year: '2023',
    link: 'https://arxiv.org/abs/2202.11249',
    tags: ['hri', 'vamhri', 'humanai'],
  },
  {
    id: 20232,
    title:
      'Follow the Successful Herd: Towards Explanations for Improved Use and Mental Models of Natural Language Systems',
    authors:
      'Michelle Brachman, Qian Pan, Hyo Jin Do, Casey Dugan, Arunima Chaudhary, James M Johnson, Priyanshu Rai, Tathagata Chakraborti, Thomas Gschwind, and others',
    abstract:
      'While natural language systems continue improving, they are still imperfect. If a user has a better understanding of how a system works, they may be able to better accomplish their goals even in imperfect systems. We explored whether explanations can support effective authoring of natural language utterances and how those explanations impact users’ mental models in the context of a natural language system that generates small programs. Through an online study (n=252), we compared two main types of explanations: 1) system-focused, which provide information about how the system processes utterances and matches terms to a knowledge base, and 2) social, which provide information about how other users have successfully interacted with the system. Our results indicate that providing social suggestions of terms to add to an utterance helped users to repair and generate correct flows more than system-focused explanations or social recommendations of words to modify. We also found that participants commonly understood some mechanisms of the natural language system, such as the matching of terms to a knowledge base, but they often lacked other critical knowledge, such as how the system handled structuring and ordering. Based on these findings, we make design recommendations for supporting interactions with and understanding of natural language systems.',
    venue: 'IUI xxxx',
    year: '2023',
    link: 'https://dl.acm.org/doi/abs/10.1145/3581641.3584088',
    tags: ['xai', 'bpm', 'nlp', 'planning', 'support', 'ai4code', 'humanai'],
  },
  {
    id: 20231,
    title:
      'NL2LTL – A Python Package for Converting Natural Language (NL) Instructions to Linear Temporal Logic (LTL) Formulas',
    authors: 'Francesco Fuggitti and Tathagata Chakraborti',
    abstract:
      'This is a demonstration of our newly released Python package NL2LTL which leverages the latest in natural language understanding (NLU) and large language models (LLMs) to translate natural language instructions to linear temporal logic (LTL) formulas. This allows direct translation to formal languages that a reasoning system can use, while at the same time, allowing the end-user to provide inputs in natural language without having to understand any details of an underlying formal language. The package comes with support for a set of default LTL patterns, corresponding to popular DECLARE templates, but is also fully extensible to new formulas and user inputs. The package is open-source and is free to use for the AI community under the MIT license.',
    venue: 'AAAI xxxx Demonstration',
    year: '2023',
    link: null,
    tags: ['bpm', 'planning', 'humanai', 'nlp'],
  },
  {
    id: 20221,
    title:
      'From Natural Language to Workflows: Towards Emergent Intelligence in Robotic Process Automation',
    authors:
      'Tathagata Chakraborti, Yara Rizk, Vatche Isahagian, Burak Aksar, and Francesco Fuggitti',
    abstract:
      'RPA technologies allow the automation of repeated processes through indirect or direct instruction from the end-user. While declarative authoring techniques provide a powerful tool to scale up process complexity with RPA elements, often such techniques are difficult to use without expertise. In this work, we will explore systems (in the context of web service composition and goal-oriented conversational agents) that both consumers and developers can interact with, in natural language, to compose RPA elements that demonstrate emergent intelligence as a composition of smaller units of automation. We will also discuss the overhead in authoring such systems, and potential learning opportunities in reducing said overhead. Finally, we will explore issues of explainability for the developer and transparency of dynamic compositions for the consumer in dealing with such systems with aggregated automation.',
    venue: 'BPM xxxx RPA Forum',
    year: '2022',
    link: 'https://link.springer.com/chapter/10.1007/978-3-031-16168-1_8',
    tags: ['xai', 'bpm', 'nlp', 'planning', 'humanai'],
  },
  {
    id: 20222,
    title: 'MACQ: A Holistic View of Model Acquisition Techniques',
    authors:
      'Ethan Callanan, Rebecca De Venezia, Victoria Armstrong, Alison Paredes, Tathagata Chakraborti, and Christian Muise',
    abstract:
      'For over three decades, the planning community has explored countless methods for data-driven model acquisition. These range in sophistication (e.g., simple set operations to full-blown reformulations), methodology (e.g., logic-based vs. planing-based), and assumptions (e.g., fully vs. partially observable). With no fewer than 43 publications in the space, it can be overwhelming to understand what approach could or should be applied in a new setting. We present a holistic characterization of the action model acquisition space and further introduce a unifying framework for automated action model acquisition. We have re-implemented some of the landmark approaches in the area, and our characterization of all the techniques offers deep insight into the research opportunities that remain; i.e., those settings where no technique is capable of solving.',
    venue:
      'ICAPS xxxx Workshop on Knowledge Acquisition and Engineering (KEPS) and System Demonstration Track',
    year: '2022',
    link: 'https://arxiv.org/abs/2206.06530',
    tags: ['bpm', 'planning'],
  },
  {
    id: 20223,
    title: 'TOBY: A tool for exploration of data from academic survey papers',
    authors:
      'Tathagata Chakraborti, Jungkoo Kang, Christian Muise, Sarath Sreedhatan, Michael Walker, Daniel Szafir, and Tom Williams',
    abstract:
      'This paper describes TOBY, a novel visualization tool that helps a user explore the contents of an academic survey paper. The visualization consists of four components: a hierarchical view of taxonomic data in the survey, a document similarity view in the space of taxonomic classes, a network view of citations, and a new paper recommendation tool. In this paper, we will discuss these features in the context of three separate deployments of the tool.',
    venue: 'Technical Report',
    year: '2022',
    link: 'https://arxiv.org/abs/2306.10051',
    tags: ['xai', 'nlp', 'bpm', 'planning', 'vamhri', 'support', 'humanai'],
  },
  {
    id: 20221,
    title:
      'A Goal-driven Natural Language Interface for Creating Application Integration Workflows',
    authors:
      'Michelle Brachman, Christopher Bygrave, Tathagata Chakraborti, Arunima Chaudhary, Zhining Ding, Casey Dugan, David Gros, Thomas Gschwind, J Johnson, Jim Laredo, Christoph Miksovic Czasch, Qian Pan, Priyanshu Rai, Ramkumar Ramalingam, Paolo Scotton, Nagarjuna Surabathina, and Kartik Talamadupula',
    abstract:
      'Web applications and services are increasingly important in a distributed internet filled with diverse cloud services and applications, each of which enable the completion of narrowly defined tasks. Given the explosion in the scale and diversity of such services, their composition and integration for achieving complex user goals remains a challenging task for end-users and requires a lot of development effort when specified by hand. We present a demonstration of the Goal Oriented Flow Assistant (GOFA) system, which provides a natural language solution to generate workflows for application integration. Our tool is built on a three-step pipeline: it first uses Abstract Meaning Representation (AMR) to parse utterances; it then uses a knowledge graph to validate candidates; and finally uses an AI planner to compose the candidate flow. We provide a video demonstration of the deployed system as part of our submission.',
    venue: 'AAAI xxxx Demonstration',
    year: '2022',
    link: 'https://ojs.aaai.org/index.php/AAAI/article/view/21712',
    tags: ['agentic', 'bpm', 'nlp', 'planning', 'ai4code', 'humanai'],
    video: 'https://ibm.biz/gofa-aaai',
  },
  {
    id: 20216,
    title:
      'COVID-19 India Dataset: Parsing Detailed COVID-19 Data in Daily Health Bulletins from States in India',
    authors: 'Mayank Agarwal, Tathagata Chakraborti, and Sachin Grover',
    abstract:
      'While India remains one of the hotspots of the COVID-19 pandemic, data about the pandemic from the country has proved to be largely inaccessible for use at scale. Much of the data exists in an unstructured form on the web, and limited aspects of such data are available through public APIs maintained manually through volunteer efforts. This has proved to be difficult both in terms of ease of access to detailed data as well as with regards to the maintenance of manual data-keeping over time. This paper reports on a recently launched project aimed at automating the extraction of such data from public health bulletins with the help of a combination of classical PDF parsers as well as the state of the art ML-based documents extraction APIs. In this paper, we will describe the automated data-extraction technique, the nature of the generated data, and exciting avenues of ongoing work.',
    venue: 'NeurIPS xxxx Workshop on Machine Learning in Public Health',
    year: '2021',
    link: 'https://arxiv.org/abs/2110.02311',
    tags: ['support', 'nlp'],
  },
  {
    id: 20215,
    title: 'Planning for Automated Composition of Aggregated Assistants',
    authors:
      'Tathagata Chakraborti, Shubham Agarwal, Krissy Brimijoin, Prerna Agarwal, Yara Rizk, Dario Silva Moran, Scott Boag, and Yasaman Khazaeni',
    abstract:
      'An aggregated assistant is realized as an orchestrated set of individual capabilities called skills. In this demo, we will show how complex behaviors of such an assistant can be composed on the fly using automated planning.',
    venue: 'ICAPS xxxx Demonstration',
    year: '2021',
    link: 'https://icaps21.icaps-conference.org/demos/demos/389.pdf',
    tags: ['agentic', 'bpm', 'nlp', 'planning', 'humanai'],
    video: 'https://youtu.be/K7FPcl-IYgE',
  },
  {
    id: 20214,
    title: 'Applications of Automated Planning for Business Process Management',
    authors: 'Andrea Marrella and Tathagata Chakraborti',
    abstract:
      'This is a brief summary of the applications of automated planning in the field of Business Process Management (BPM); and accompanies a tutorial with the same theme at the 19th International Conference on Business Process Management (BPM 2021). We hope that this report is able to quickly onboard newcomers into this field with a broad overview of the associated challenges and opportunities, as well as provide established practitioners in the field some new food for thought in terms of the state-of-the-art and the evolving nature of these problems.',
    venue: 'Companion to Proceedings of BPM xxxx',
    year: '2021',
    link: null,
    tags: ['agentic', 'bpm', 'nlp', 'planning'],
  },
  {
    id: 20211,
    title:
      'NeurIPS 2020 NLC2CMD Competition: Translating Natural Language to Bash Commands',
    authors:
      'Mayank Agarwal, Tathagata Chakraborti, Quchen Fu, David Gros, Xi Victoria Lin, Jaron Maene, Kartik Talamadupula, Zhongwei Teng, Jules White',
    abstract:
      'The NLC2CMD Competition hosted at NeurIPS 2020 aimed to bring the power of natural language processing to the command line. Participants were tasked with building models that can transform descriptions of command line tasks in English to their Bash syntax. This is a report on the competition with details of the task, metrics, data, attempted solutions, and lessons learned.',
    venue: 'NeurIPS 2020 Post Proceedings',
    year: '2021',
    link: 'https://arxiv.org/abs/2103.02523',
    tags: ['support', 'nlp', 'ai4code'],
  },
  {
    id: 20212,
    title: 'Foundations of Explanations as Model Reconciliation',
    authors:
      'Sarath Sreedharan, Tathagata Chakraborti, and Subbarao Kambhampati',
    abstract:
      "Past work on plan explanations primarily involved the AI system explaining the correctness of its plan and the rationale for its decision in terms of its own model. Such soliloquy is wholly inadequate in most realistic scenarios where users have domain and task models that differ from that used by the AI system. We posit that the explanations are best studied in light of these differing models. In particular, we show how explanation can be seen as a “model reconciliation problem” (MRP), where the AI system in effect suggests changes to the user's mental model so as to make its plan be optimal with respect to that changed user model. We will study the properties of such explanations, present algorithms for automatically computing them, discuss relevant extensions to the basic framework, and evaluate the performance of the proposed algorithms both empirically and through controlled user studies.",
    venue: 'Artificial Intelligence Journal',
    year: '2021',
    link:
      'https://www.sciencedirect.com/science/article/abs/pii/S0004370221001090',
    tags: ['xai', 'planning', 'hri', 'humanai'],
  },
  {
    id: 20213,
    title: 'Towards End-to-End Business Process Automation',
    authors:
      'Yara Rizk, Tathagata Chakraborti, Vatche Isahagian, Yasaman Khazaeni',
    abstract:
      'In recent years, robotic process automation (RPA) emerged as a vehicle to digital transformation in enterprises. However, RPA still possesses many shortcomings that have prevented it from generalizing well to new domains while minimizing coding overhead and approaching end-to-end business process automation. Recent work has looked to utilize artificial intelligence technology to address RPA’s limitations. In this work, we discuss the different approaches to RPA collaboration which is essential to achieving end-to-end automation. From rule-based composition to offline composition using automated planning and online composition using multi-agent orchestration, we present existing approaches in the literature, analyze remaining challenges, and propose insights into future research directions.',
    venue: 'Robotic Process Automation',
    year: '2021',
    link:
      'https://www.degruyter.com/document/doi/10.1515/9783110676693-008/html',
    tags: ['agentic', 'bpm', 'nlp', 'planning'],
  },
  {
    id: 1,
    title:
      'The Emerging Landscape of Explainable AI Planning and Decision Making',
    authors:
      'Tathagata Chakraborti, Sarath Sreedharan, and Subbarao Kambhampati',
    abstract:
      'In this paper, we provide a comprehensive outline of the different threads of work in Explainable AI Planning (XAIP) that has emerged as a focus area in the last couple of years and contrast that with earlier efforts in the field in terms of techniques, target users, and delivery mechanisms. We hope that the survey will provide guidance to new researchers in automated planning towards the role of explanations in the effective design of human-in-the-loop systems, as well as provide the established researcher with some perspective on the evolution of the exciting world of explainable planning.',
    venue: 'IJCAI xxxx',
    year: '2020',
    link: 'https://www.ijcai.org/Proceedings/2020/669',
    tags: ['xai', 'planning', 'humanai'],
  },
  {
    id: 300,
    title:
      'A Bayesian Account of Measures of Interpretability in Human-AI Interaction',
    authors:
      'Sarath Sreedharan, Anagha Kulkarni, Tathagata Chakraborti, David Smith, and Subbarao Kambhampati',
    abstract:
      'Existing approaches for the design of interpretable agent behavior consider different measures of interpretability in isolation. In this paper we posit that, in the design and deployment of human-aware agents in the real world, notions of interpretability are just some among many considerations; and the techniques developed in isolation lack two key properties to be useful when considered together: they need to be able to 1) deal with their mutually competing properties; and 2) an open world where the human is not just there to interpret behavior in one specific form. To this end, we consider three well-known instances of interpretable behavior studied in existing literature -- namely, explicability, legibility, and predictability -- and propose a revised model where all these behaviors can be meaningfully modeled together. We will highlight interesting consequences of this unified model and motivate, through results of a user study, why this revision is necessary. ',
    venue: 'NeurIPS xxxx Workshop on Cooperative AI',
    year: '2020',
    link: null,
    tags: ['xai', 'planning', 'hri', 'humanai'],
  },
  {
    id: 33,
    title: 'Explainable Composition of Aggregated Assistants',
    authors:
      'Sarath Sreedharan, Tathagata Chakraborti, Yara Rizk, and Yasaman Khazaeni',
    abstract:
      'A new design of an AI assistant that has become increasingly popular is that of an "aggregated assistant" -- realized as an orchestrated composition of several individual skills or agents that can each perform atomic tasks. In this paper, we will talk about the role of planning in the automated composition of such assistants and explore how concepts in automated planning can help to establish transparency of the inner workings of the assistant to the end-user.',
    venue: 'ICAPS xxxx Workshop on Explainable AI Planning',
    year: '2020',
    link: 'https://arxiv.org/abs/2011.10707',
    tags: ['agentic', 'nlp', 'xai', 'planning', 'bpm', 'humanai'],
  },
  {
    id: 2,
    title:
      'D3WA+ -- A Case Study of XAIP in a Model Acquisition Task for Dialogue Planning',
    authors:
      'Sarath Sreedharan, Tathagata Chakraborti, Christian Muise, Yasaman Khazaeni, and Subbarao Kambhampati',
    abstract:
      'Recently, the D3WA system was proposed as a paradigm shift in how complex goal-oriented dialogue agents can be specified by taking a declarative view of design. However, it turns out actual users of the system have a hard time evolving their mental model and grasping the imperative consequences of declarative design. In this paper, we adopt ideas from existing works in the field of Explainable AI Planning (XAIP) to provide guidance to the dialogue designer during the model acquisition process. We will highlight in the course of this discussion how the setting presents unique challenges to the XAIP setting, including having to deal with the user persona of a domain modeler rather than the end-user of the system, and consequently having to deal with the unsolvability of models in addition to explaining generated plans.',
    venue: 'ICAPS xxxx',
    year: '2020',
    link: 'https://aaai.org/ojs/index.php/ICAPS/article/view/6744',
    tags: ['xai', 'bpm', 'nlp', 'planning', 'humanai'],
    award: 'ICAPS 2020 People’s Choice Best System Demonstration Award',
    video: 'https://www.youtube.com/watch?v=HMVMQnzMBsc',
  },
  {
    id: 28,
    title:
      'From Robotic Process Automation to Intelligent Process Automation: Emerging Trends',
    authors:
      'Tathagata Chakraborti, Vatche Ishakian, Rania Khalaf, Yasaman Khazaeni, Vinod Muthusamy, Yara Rizk, and Merve Unuvar',
    abstract:
      'In this survey, we study how recent advances in machine intelligence are disrupting the world of business processes. Over the last decade, there has been steady progress towards the automation of business processes under the umbrella of "robotic process automation" (RPA). However, we are currently at an inflection point in this evolution, as a new paradigm called "Intelligent Process Automation" (IPA) emerges, bringing machine learning (ML) and artificial intelligence (AI) technologies to bear in order to improve business process outcomes. The purpose of this paper is to provide a survey of this emerging theme and identify key open research challenges at the intersection of AI and business processes. We hope that this emerging theme will spark engaging conversations at the RPA Forum.',
    venue: 'BPM xxxx RPA Forum',
    year: '2020',
    link: 'https://arxiv.org/abs/2007.13257',
    tags: ['agentic', 'bpm', 'nlp', 'planning', 'humanai', 'xai'],
  },
  {
    id: 29,
    title:
      'D3BA: A Tool for Optimizing Business Processes Using Non-Deterministic Planning',
    authors:
      'Tathagata Chakraborti, Shubham Agarwal, Yasaman Khazaeni, Yara Rizk, and Vatche Isahagian',
    abstract:
      'This paper builds upon recent work in the declarative design of dialogue agents and proposes an exciting new tool -- D3BA -- Declarative Design for Digital Business Automation, built to optimize business processes using the power of AI planning. The tool provides a powerful framework to build, optimize, and maintain complex business processes and optimize them by composing with services that automate one or more subtasks. We illustrate salient features of this composition technique, compare with other philosophies of composition, and highlight exciting opportunities for research in this emerging field of business process automation.',
    venue: 'BPM xxxx Workshop on AI4BPM',
    year: '2020',
    link: 'https://arxiv.org/abs/2001.02619',
    tags: ['agentic', 'bpm', 'nlp', 'planning', 'humanai'],
  },
  {
    id: 3,
    title: 'Designing Environments Conducive to Interpretable Robot Behavior',
    authors:
      'Anagha Kulkarni, Sarath Sreedharan, Sarah Keren, Tathagata Chakraborti, David E. Smith, and Subbarao Kambhampati',
    abstract:
      "Designing robots capable of generating interpretable behavior is a prerequisite for achieving effective human-robot collaboration. This means that the robots need to be capable of generating behavior that aligns with human expectations and, when required, provide explanations to the humans in the loop. However, exhibiting such behavior in arbitrary environments could be quite expensive for robots, and in some cases, the robot may not even be able to exhibit the expected behavior. Given structured environments (like warehouses and restaurants), it may be possible to design the environment so as to boost the interpretability of the robot's behavior or to shape the human's expectations of the robot's behavior. In this paper, we investigate the opportunities and limitations of environment design as a tool to promote a type of interpretable behavior -- known in the literature as explicable behavior. We formulate a novel environment design framework that considers design over multiple tasks and over a time horizon. In addition, we explore the longitudinal aspect of explicable behavior and the trade-off that arises between the cost of design and the cost of generating explicable behavior over a time horizon.",
    venue: 'IROS xxxx',
    year: '2020',
    link: 'https://arxiv.org/abs/2007.00820',
    tags: ['xai', 'hri', 'planning', 'humanai'],
  },
  {
    id: 4,
    title: 'RADAR: Automated Task Planning for Proactive Decision Support',
    authors:
      'Sachin Grover and Sailik Sengupta and Tathagata Chakraborti and Aditya Prasad Mishra and Subbarao Kambhampati',
    abstract:
      'Proactive Decision Support aims at improving the decision making experience of human decision-makers by enhancing the quality of the decisions and the ease of making them. Given that AI techniques are efficient in searching over a potentially large solution space (of decision) and finding good solutions, it can be used for human-in-the-loop scenarios such as disaster response that demand naturalistic decision making. A human decision-maker, in such scenarios, may experience high-cognitive overload leading to a loss of situational awareness. In this paper, we propose the use of automated task-planning techniques coupled with design principles laid out in the Human-Computer Interaction (HCI) community for developing a proactive decision support system. To this extent, we highlight the capabilities of such a system RADAR and briefly, describe how automated planning techniques help us in providing the varying degrees of assistance. To evaluate the effectiveness of the different capabilities, we conduct ablation studies with human subjects on a synthetic environment for making an interactive plan of study. We found that planning techniques like plan validation and suggestions help to reduce planning time (objective metrics) and improves user satisfaction (subjective metrics) compared to expert human planners without any support.',
    venue: 'HCI Journal',
    year: '2020',
    link:
      'https://www.tandfonline.com/doi/abs/10.1080/07370024.2020.1726751?journalCode=hhci20',
    tags: ['xai', 'support', 'planning', 'humanai'],
  },
  {
    id: 32,
    title: 'Planning for Goal-Oriented Dialogue Systems',
    authors:
      'Christian Muise, Tathagata Chakraborti, Shubham Agarwal, Ondrej Bajgar, Arunima Chaudhary, Luis A. Lastras-Montano, Josef Ondrej, Miroslav Vodolan, and Charlie Wiecha',
    abstract:
      'Generating complex multi-turn goal-oriented dialogue agents is a difficult problem that has seen a considerable focus from many leaders in the tech industry, including IBM, Google, Amazon, and Microsoft. This is in large part due to the rapidly growing market demand for dialogue agents capable of goal-oriented behaviour. Due to the business process nature of these conversations, end-to-end machine learning systems are generally not a viable option, as the generated dialogue agents must be deployable and verifiable on behalf of the businesses authoring them. In this work, we propose a paradigm shift in the creation of goal-oriented complex dialogue systems that dramatically eliminates the need for a designer to manually specify a dialogue tree, which nearly all current systems have to resort to when the interaction pattern falls outside standard patterns such as slot filling. We propose a declarative representation of the dialogue agent to be processed by state-of-the-art planning technology. Our proposed approach covers all aspects of the process; from model solicitation to the execution of the generated plans/dialogue agents. Along the way, we introduce novel planning encodings for declarative dialogue synthesis, a variety of interfaces for working with the specification as a dialogue architect, and a robust executor for generalized contingent plans. We have created prototype implementations of all components, and in this paper, we further demonstrate the resulting system empirically. ',
    venue: 'Technical Report',
    year: '2020',
    link: 'https://arxiv.org/abs/1910.08137',
    tags: ['agentic', 'bpm', 'nlp', 'planning', 'humanai'],
  },
  {
    id: 5,
    title:
      'Expectation-Aware Planning: A General Framework for Synthesizing and Executing Self-Explaining Plans for Human-AI Interaction',
    authors:
      'Sarath Sreedharan, Tathagata Chakraborti, Christian Muise, and Subbarao Kambhampati',
    abstract:
      "In this work, we present a new planning formalism called Expectation-Aware planning for decision making with humans in the loop where the human's expectations about an agent may differ from the agent's own model. We show how this formulation allows agents to not only leverage existing strategies for handling model differences like explanations (Chakraborti et al. 2017) and explicability (Kulkarni et al. 2019), but can also exhibit novel behaviors that are generated through the combination of these different strategies. Our formulation also reveals a deep connection to existing approaches in epistemic planning. Specifically, we show how we can leverage classical planning compilations for epistemic planning to solve Expectation-Aware planning problems. To the best of our knowledge, the proposed formulation is the first complete solution to planning with diverging user expectations that is amenable to a classical planning compilation while successfully combining previous works on explanation and explicability. We empirically show how our approach provides a computational advantage over our earlier approaches that rely on search in the space of models.",
    venue: 'AAAI xxxx',
    year: '2020',
    link: 'https://aaai.org/ojs/index.php/AAAI/article/view/5634',
    tags: ['xai', 'planning', 'hri', 'humanai'],
  },
  {
    id: 30,
    title:
      'A Unified Conversational Assistant Framework for Business Process Automation',
    authors:
      'Yara Rizk, Abhisekh Bhandwalder, Scott Boag, Tathagata Chakraborti, Vatche Isahagian, Yasaman Khazaeni, Falk Pollock, and Merve Unuvar',
    abstract:
      "Business process automation is a booming multi-billion-dollar industry that promises to remove menial tasks from workers' plates -- through the introduction of autonomous agents -- and free up their time and brain power for more creative and engaging tasks. However, an essential component to the successful deployment of such autonomous agents is the ability of business users to monitor their performance and customize their execution. A simple and user-friendly interface with a low learning curve is necessary to increase the adoption of such agents in banking, insurance, retail and other domains. As a result, proactive chatbots will play a crucial role in the business automation space. Not only can they respond to users' queries and perform actions on their behalf but also initiate communication with the users to inform them of the system's behavior. This will provide business users a natural language interface to interact with, monitor and control autonomous agents. In this work, we present a multi-agent orchestration framework to develop such proactive chatbots by discussing the types of skills that can be composed into agents and how to orchestrate these agents. Two use cases on a travel preapproval business process and a loan application business process are adopted to qualitatively analyze the proposed framework based on four criteria: performance, coding overhead, scalability, and agent overlap.",
    venue: 'AAAI xxxx Workshop on Intelligent Process Automation',
    year: '2020',
    link: 'https://arxiv.org/abs/2001.03543',
    tags: ['agentic', 'bpm', 'nlp', 'planning', 'humanai'],
  },
  {
    id: 31,
    title: 'Project CLAI -- Bringing AI to the Command Line Interface',
    authors:
      'Mayank Agarwal, Jorge Barroso Carmona, Tathagata Chakraborti, Eli M. Dow, Kshitij P. Fadnis, Borja Godoy, Madhavan Pallan, and Kartik Talamadupula',
    abstract:
      "This whitepaper reports on Project CLAI (Command Line AI), which aims to bring the power of AI to the command line interface (CLI). The CLAI platform sets up the CLI as a new environment for AI researchers to conquer by surfacing the command line as a generic environment that researchers can interface to using a simple sense-act API, much like the traditional AI agent architecture. In this paper, we discuss the design and implementation of the platform in detail, through illustrative use cases of new end user interaction patterns enabled by this design, and through quantitative evaluation of the system footprint of a CLAI-enabled terminal. We also report on some early user feedback on CLAI's features from an internal survey.",
    venue: 'Technical Report',
    year: '2019',
    link: 'https://arxiv.org/abs/2002.00762',
    tags: ['support', 'nlp', 'ai4code', 'humanai'],
  },
  {
    id: 6,
    title: 'Balancing Explicability and Explanations in Human-Aware Planning',
    authors:
      'Tathagata Chakraborti, Sarath Sreedharan, and Subbarao Kambhampati',
    abstract:
      ' Human-aware planning involves generating plans that are explicable as well as providing explanations when such plans cannot be found. In this paper, we bring these two concepts together and show how an agent can achieve a trade-off between these two competing characteristics of a plan. In order to achieve this, we conceive a first of its kind planner MEGA that can augment the possibility of explaining a plan in the plan generation process itself. We situate our discussion in the context of recent work on explicable planning and explanation generation and illustrate these concepts in two well-known planning domains, as well as in a demonstration of a robot in a typical search and reconnaissance task. Human factor studies in the latter highlight the usefulness of the proposed approach. ',
    venue: 'IJCAI xxxx',
    year: '2019',
    link: 'https://www.ijcai.org/Proceedings/2019/185',
    tags: ['xai', 'hri', 'planning', 'humanai'],
  },
  {
    id: 8,
    title:
      'MTDeep: Boosting the Security of Deep Neural Nets Against Adversarial Attacks with Moving Target Defense',
    authors: 'Sailik Sengupta, Tathagata Chakraborti, and Subbarao Kambhampati',
    abstract:
      'Present attack methods can make state-of-the-art classification systems based on deep neural networks mis-classify every adversarially modified test example. The design of general defense strategies against a wide range of such attacks still remains a challenging problem. In this paper, we draw inspiration from the fields of cybersecurity and multi-agent systems and propose to leverage the concept of Moving Target Defense (MTD) in designing a meta-defense for ‘boosting’ the robustness of an ensemble of deep neural networks (DNNs) for visual classification tasks against such adversarial attacks. To classify an input image at test time, a constituent network is randomly selected based on a mixed policy. To obtain this policy, we formulate the interaction between a Defender (who hosts the classification networks) and their (Legitimate and Malicious) users as a Bayesian Stackelberg Game (BSG). We empirically show that our approach MTDeep, reduces misclassification on perturbed images for various datasets such as MNIST, FashionMNIST, and ImageNet while maintaining high classification accuracy on legitimate test images. We then demonstrate that our framework, being the first meta-defense technique, can be used in conjunction with any existing defense mechanism to provide more resilience against adversarial attacks that can be afforded by these defense mechanisms alone. Lastly, to quantify the increase in robustness of an ensemble-based classification system when we use MTDeep, we analyze the properties of a set of DNNs and introduce the concept of differential immunity that formalizes the notion of attack transferability.',
    venue: 'GameSec xxxx',
    year: '2019',
    link: 'https://link.springer.com/chapter/10.1007/978-3-030-32430-8_28',
    tags: ['advml'],
  },
  {
    id: 9,
    title: 'Explicable Planning as Minimizing Distance from Expected Behavior',
    authors:
      'Anagha Kulkarni, Yantian Zha, Tathagata Chakraborti, Satya Gautam Vadlamudi, Yu Zhang, and Subbarao Kambhampati',
    abstract:
      "In order to achieve effective human-AI collaboration, it is necessary for an AI agent to align its behavior with the human's expectations. When the agent generates a task plan without such considerations, it may often result in inexplicable behavior from the human's point of view. This may have serious implications for the human, from increased cognitive load to more serious concerns of safety around the physical agent. In this work, we present an approach to generate explicable behavior by minimizing the distance between the agent's plan and the plan expected by the human. To this end, we learn a mapping between plan distances (distances between expected and agent plans) and human's plan scoring scheme. The plan generation process uses this learned model as a heuristic. We demonstrate the effectiveness of our approach in a delivery robot domain.",
    venue: 'AAMAS xxxx Extended Abstract',
    year: '2019',
    link: 'https://dl.acm.org/doi/10.5555/3306127.3332015',
    tags: ['xai', 'hri', 'planning', 'humanai'],
  },
  {
    id: 12,
    title:
      'Planning and Visualization for a Smart Meeting Room Assistant -- A Case Study in the Cognitive Environments Laboratory at IBM T.J. Watson Research Center, Yorktown',
    authors:
      'Tathagata Chakraborti, Kshitij P. Fadnis, Kartik Talamadupula, Mishal Dholakia, Biplav Srivastava, Jeffrey O. Kephart, and Rachel K. E. Bellamy',
    abstract:
      'In this paper, we report on the planning and visualization capabilities of Mr.Jones – a proactive orchestrator and decision-support agent for a collaborative decision making setting embodied by a smart room. The duties of such an agent may range across interactive problem solving with other agents in the environment, developing automated summaries of meetings, visualization of the internal decision-making process, proactive data and resource management, and so on. Specifically, we focus on how the visualization of the planning and plan recognition processes forms a key component of the smart assistant, and establishes transparency in the decision-making process. We also highlight how these processes contribute to the proactive nature of the agent. We demonstrate some of these functionalities in a successful deployment of the system in the CEL – the Cognitive Environments Laboratory at IBM’s T.J. Watson Research Center (Yorktown, USA), and report on emerging deployments of the system that have turned into success stories.',
    venue: 'AI Communications',
    year: '2019',
    link: 'https://content.iospress.com/articles/ai-communications/aic180609',
    tags: ['agentic', 'xai', 'nlp', 'planning', 'support', 'humanai'],
  },
  {
    id: 13,
    title:
      'iPass: A Case Study of the Effectiveness of Automated Planning for Decision Support',
    authors:
      'Sachin Grover, Sailik Sengupta, Tathagata Chakraborti, Aditya Prasad Mishra, and Subbarao Kambhampati',
    abstract:
      'Researchers in the automated task planning community have proposed decision support systems that can assist humans in their decision-making process. Although some of these works explain the intricate details of building these systems, but their effectiveness is not supported by any human factor studies. One of the major challenge in designing these user studies, has been getting access to domain experts to verify the usefulness of the decision support system. In this paper, we borrow some of the key features of automated planning for decision support and situate them in a domain (for constructing a "plan of study" at Arizona State University) that graduate students can relate to. This allows us to perform a comprehensive study of key elements of decision support techniques using automated planning with domain experts (students) for a challenging task, thus helping us validate key elements of the decision support paradigm. We analyze the data gathered from these experiments to determine to what extent automated task planning technologies proposed in the existing literatur eare effective as decision support systems for human-in-the-loop decision making.',
    venue: 'NDM xxxx',
    year: '2019',
    link: 'https://yochan-lab.github.io/papers/files/papers/iPass.pdf',
    tags: ['xai', 'planning', 'support', 'humanai'],
  },
  {
    id: 14,
    title:
      'CAP: A Decision Support System for Crew Scheduling using Automated Planning',
    authors:
      'Aditya Prasad Mishra, Sailik Sengupta, Sarath Sreedharan, Tathagata Chakraborti, and Subbarao Kambhampati',
    abstract:
      "Task allocation or scheduling is known to be a difficult problem, especially in multi-agent settings. Thus, in order to solve these problems, a centralized entity that has a holistic view of (1) the entire task and (2) the capabilities of the individual agents is responsible for coming up with a schedule that needs to be followed. We look at a scenario where a centralized human entity (or planner) is given the task of preparing a day’s schedule for a set of astronauts located at the International Space Station (ISS). Given the complexity of each individual task and constraints relating to the individualagents, coming up with a good schedule, let alone an optimal one, is often difficult. In this poster, we introduce a software system CAP that acts both as an editing tool to help the human planner makes chedules and, powered by automated planning technology in artificial intelligence, can aid the human in (1) validating their plans, (2) getting suggestions about new ones and lastly, (3) asking for explanations whenever the automated planner's suggestion is inexplicable to the human in the loop.",
    venue: 'NDM xxxx',
    year: '2019',
    link: 'https://yochan-lab.github.io/papers/files/papers/CAP.pdf',
    tags: ['xai', 'planning', 'support', 'humanai'],
  },
  {
    id: 7,
    title:
      'Explicability? Legibility? Predictability? Transparency? Privacy? Security? The Emerging Landscape of Interpretable Agent Behavior',
    authors:
      'Tathagata Chakraborti, Anagha Kulkarni, Sarath Sreedharan, David E. Smith, and Subbarao Kambhampati',
    abstract:
      'There has been significant interest of late in generating behavior of agents that is interpretable to the human (observer) in the loop. However, the work in this area has typically lacked coherence on the topic, with proposed solutions for “explicable”, “legible”, “predictable” and “transparent” planning with overlapping, and sometimes conflicting, semantics all aimed at some notion of understanding what intentions the observer will ascribe to an agent by observing its behavior. This is also true for the recent works on “security” and “privacy” of plans which are also trying to answer the same question, but from the opposite point of view – i.e. when the agent is trying to hide instead of reveal its intentions. This paper attempts to provide a workable taxonomy of relevant concepts in this exciting and emerging field of inquiry.',
    venue: 'ICAPS xxxx',
    year: '2019',
    link: 'https://aaai.org/ojs/index.php/ICAPS/article/view/3463',
    tags: ['xai', 'planning', 'hri', 'humanai'],
  },
  {
    id: 33,
    title: '(How) Can AI Bots Lie?',
    authors: 'Tathagata Chakraborti and Subbarao Kambhampat',
    abstract:
      'Recent work on explanations for decision-making problems has viewed the explanation process as one of model reconciliation where an AI agent brings the human mental model (of its capabilities, beliefs, and goals) to the same page with regards to a task at hand. This formulation succinctly captures many possible types of explanations, as well as explicitly addresses the various properties – e.g. the social aspects, contrastiveness, and selectiveness – of explanations studied in social sciences among human-human interactions. However, it turns out that the same process can be hijacked into producing “alternative explanations” that are not true but still satisfy all these properties of a proper explanation. In AIES 2019, we discussed when such behavior may be appropriate but did not go into details of how exactly they can be generated. In this paper, we go into details of this curious feature of the model reconciliation process as a well-established framework for explanation generation of decision-making problems and formalize the relationship between explanations, lies, and persuasion in the model reconciliation framework.',
    venue: 'ICAPS xxxx Workshop on Explainable AI Planning',
    year: '2019',
    link: 'http://tchakra2.com/assets/files/lies.xaip2019.crv.pdf',
    tags: ['xai', 'planning', 'humanai'],
  },
  {
    id: 34,
    title: 'Design for Interpretability',
    authors:
      'Anagha Kulkarni, Sarath Sreedharan, Sarah Keren, Tathagata Chakraborti, David E. Smith, and Subbarao Kambhampati',
    abstract:
      "The interpretability of an AI agent's behavior is of utmost importance for effective human-AI interaction. To this end, there has been increasing interest in characterizing and generating interpretable behavior of the agent. An alternative approach to guarantee that the agent generates interpretable behavior would be to design the agent's environment such that uninterpretable behaviors are either prohibitively expensive or unavailable to the agent. To date, there has been work under the umbrella of goal or plan recognition design exploring this notion of environment redesign in some specific instances of interpretable of behavior. In this position paper, we scope the landscape of interpretable behavior and environment redesign in all its different flavors. Specifically, we focus on three specific types of interpretable behaviors -- explicability, legibility, and predictability -- and present a general framework for the problem of environment design that can be instantiated to achieve each of the three interpretable behaviors. We also discuss how specific instantiations of this framework correspond to prior works on environment design and identify exciting opportunities for future work.",
    venue: 'ICAPS xxxx Workshop on Explainable AI Planning',
    year: '2019',
    link: 'https://openreview.net/forum?id=rkxg4a3m9N',
    tags: ['xai', 'planning', 'hri', 'humanai'],
  },
  {
    id: 10,
    title: 'Plan Explanations as Model Reconciliation -- An Empirical Study',
    authors:
      'Tathagata Chakraborti, Sarath Sreedharan, Sachin Grover, and Subbarao Kambhampati',
    abstract:
      "Recent work in explanation generation for decision making agents has looked at how unexplained behavior of autonomous systems can be understood in terms of differences in the model of the system and the human's understanding of the same, and how the explanation process as a result of this mismatch can be then seen as a process of reconciliation of these models. Existing algorithms in such settings, while having been built on contrastive, selective and social properties of explanations as studied extensively in the psychology literature, have not, to the best of our knowledge, been evaluated in settings with actual humans in the loop. As such, the applicability of such explanations to human-AI and human-robot interactions remains suspect. In this paper, we set out to evaluate these explanation generation algorithms in a series of studies in a mock search and rescue scenario with an internal semi-autonomous robot and an external human commander. During that process, we hope to demonstrate to what extent the properties of these algorithms hold as they are evaluated by humans.",
    venue: 'HRI xxxx',
    year: '2019',
    link: 'https://ieeexplore.ieee.org/document/8673193',
    tags: ['xai', 'planning', 'hri', 'humanai'],
  },
  {
    id: 36,
    title:
      'Towards Understanding User Preferences for Explanation Types in Explanation as Model Reconciliation',
    authors:
      'Zahra Zahedi, Alberto Olmo, Tathagata Chakraborti, Sarath Sreedharan, and Subbarao Kambhampati',
    abstract:
      "Recent work has formalized the explanation process in the context of automated planning as one of model reconciliation - i.e. a process by which the planning agent can bring the explainee's (possibly faulty) model of a planning problem closer to its understanding of the ground truth until both agree that its plan is the best possible. The content of explanations can thus range from misunderstandings about the agent's beliefs (state), desires (goals) and capabilities (action model). Though existing literature has considered different kinds of these model differences to be equivalent, literature on the explanations in social sciences has suggested that explanations with similar logical properties may often be perceived differently by humans. In this brief report, we explore to what extent humans attribute importance to different kinds of model differences that have been traditionally considered equivalent in the model reconciliation setting. Our results suggest that people prefer the explanations which are related to the effects of actions.",
    venue: 'HRI xxxx Late Breaking Report',
    year: '2019',
    link: 'https://ieeexplore.ieee.org/document/8673097',
    tags: ['xai', 'planning', 'hri', 'humanai'],
  },
  {
    id: 37,
    title:
      'The Reality-Virtuality Interaction Cube: A Framework for Conceptualizing Mixed-Reality Interaction Design Elements for HRI',
    authors: 'Tom Williams, Daniel Szafir, and Tathagata Chakraborti',
    abstract:
      'There has recently been an explosion of work in the human-robot interaction (HRI) community on the use of mixed, augmented, and virtual reality. We present a novel conceptual framework to characterize and cluster work in this new area and identify gaps for future research. We begin by introducing the Plane of Interaction: a framework for characterizing interactive technologies in a 2D space informed by the Model-View-Controller design pattern. We then describe how Interactive Design Elements that contribute to the interactivity of a technology can be characterized within this space and present a taxonomy of mixed-reality interactive design elements. We then discuss how these elements may be rendered onto both reality- and virtuality-based environments using a variety of hardware devices and introduce the Reality-Virtuality Interaction Cube: a three-dimensional continuum representing the design space of interactive technologies formed by combining the Plane of Interaction with the Reality-Virtuality Continuum. Finally, we demonstrate the feasibility and utility of this framework by clustering and analyzing the set of papers presented at the 2018 VAM-HRI workshop.',
    venue: 'HRI xxxx Late Breaking Report',
    year: '2019',
    link: 'https://ieeexplore.ieee.org/document/8673071.',
    tags: ['hri', 'vamhri', 'humanai'],
  },
  {
    id: 38,
    title:
      'Virtual, Augmented and Mixed Reality for Human-Robot Interaction (VAM-HRI)',
    authors:
      'Tom Williams, Daniel Szafir, Tathagata Chakraborti, and Elizabeth Phillips',
    abstract:
      'The 3rd International Workshop on Virtual, Augmented, and Mixed Reality for Human-Robot Interactions (VAM-HRI) will bring together HRI, Robotics, and Mixed Reality researchers to address challenges in mixed reality interactions between humans and robots. Topics relevant to the workshop include development of robots that can interact with humans in mixed reality, use of virtual reality for developing interactive robots, the design of augmented reality interfaces that mediate communication between humans and robots, comparisons of the capabilities and perceptions of robots and virtual agents, and best design practices. VAM-HRI 2020 will follow on the success of VAM-HRI 2018 and 2019, and advance the cause of this nascent research community',
    venue: 'Companion to HRI xxxx Proceedings',
    year: '2019',
    link: 'https://dl.acm.org/doi/10.1145/3371382.3374850',
    tags: ['hri', 'planning', 'vamhri', 'humanai'],
  },
  {
    id: 39,
    title:
      'The 1st International Workshop on Virtual, Augmented, and Mixed Reality for Human-Robot Interaction',
    authors:
      'Tom Williams, Daniel Szafir, Tathagata Chakraborti, and Heni Ben Amor',
    abstract:
      'The 1st International Workshop on Virtual, Augmented, and Mixed Reality for Human-Robot Interaction (VAM-HRI) was held in 2018 in conjunction with the 13th International Conference on Human-Robot Interaction, and brought together researchers from the fields of Human-Robot Interaction (HRI), Robotics, Artificial Intelligence, and Virtual, Augmented, and Mixed Reality in order to identify challenges in mixed reality interactions between humans and robots. This inaugural workshop featured a keynote talk from Blair MacIntyre (Mozilla, Georgia Tech), a panel discussion, and twenty-nine papers presented as lightning talks and/or posters. In this report, we briefly survey the papers presented at the workshop and outline some potential directions for the community.',
    venue: 'AI Magazine',
    year: '2019',
    link: 'https://www.aaai.org/ojs/index.php/aimagazine/article/view/2822',
    tags: ['hri', 'vamhri', 'humanai'],
  },
  {
    id: 11,
    title: '(When) Can Bots Lie?',
    authors: 'Tathagata Chakraborti and Subbarao Kambhampat',
    abstract:
      'The ability of an AI agent to build mental models can open up pathways for manipulating and exploiting the human in the hopes of achieving some greater good. In fact, such behavior does not necessarily require any malicious intent but can rather be borne out of cooperative scenarios. It is also beyond the scope of misinterpretation of intents, as in the case of value alignment problems, and thus can be effectively engineered if desired (i.e. algorithms exist that can optimize such behavior not because models were misspecified but because they were misused). Such techniques pose several unresolved ethical and moral questions with regards to the design of autonomy. In this paper, we illustrate some of these issues in a teaming scenario and investigate how they are perceived by participants in a thought experiment. Finally, we end with a discussion on the moral implications of such behavior from the perspective of the doctor-patient relationship.',
    venue: 'AIES @ AAAI xxxx',
    year: '2019',
    link: 'https://dl.acm.org/doi/10.1145/3306618.3314281',
    tags: ['xai', 'planning', 'humanai'],
    award: 'ACM Technews AIES 2019 Highlight',
  },
  {
    id: 57,
    title: 'Foundations of Human-Aware Planning: A Tale of Three Models',
    authors: 'Tathagata Chakrabort',
    abstract:
      'A critical challenge in the design of AI systems that operate with humans in the loop is to be able to model the intentions and capabilities of the humans, as well as their beliefs and expectations of the AI system itself. This allows the AI system to be "human- aware" -- i.e. the human task model enables it to envisage desired roles of the human in joint action, while the human mental model allows it to anticipate how its own actions are perceived from the point of view of the human. In my research, I explore how these concepts of human-awareness manifest themselves in the scope of planning or sequential decision making with humans in the loop. To this end, I will show (1) how the AI agent can leverage the human task model to generate symbiotic behavior; and (2) how the introduction of the human mental model in the deliberative process of the AI agent allows it to generate explanations for a plan or resort to explicable plans when explanations are not desired. The latter is in addition to traditional notions of human-aware planning which typically use the human task model alone and thus enables a new suite of capabilities of a human-aware AI agent. Finally, I will explore how the AI agent can leverage emerging mixed-reality interfaces to realize effective channels of communication with the human in the loop.',
    venue: 'Ph.D. Dissertation',
    year: '2018',
    link: 'https://repository.asu.edu/items/51791',
    tags: ['xai', 'planning', 'hri', 'vamhri', 'support', 'humanai'],
  },
  {
    id: 44,
    title: 'Visualizations for an Explainable Planning Agent',
    authors:
      'Tathagata Chakraborti, Kshitij P. Fadnis, Kartik Talamadupula, Mishal Dholakia, Biplav Srivastava, Jeffrey O. Kephart, and Rachel K. E. Bellamy',
    abstract:
      ' In this demonstration, we report on the visualization capabilities of an Explainable AI Planning (XAIP) agent that can support human-in-the-loop decision-making. Imposing transparency and explainability requirements on such agents is crucial for establishing human trust and common ground with an end-to-end automated planning system. Visualizing the agent\'s internal decision making processes is a crucial step towards achieving this. This may include externalizing the "brain" of the agent: starting from its sensory inputs, to progressively higher order decisions made by it in order to drive its planning components. We demonstrate these functionalities in the context of a smart assistant in the Cognitive Environments Laboratory at IBM\'s T.J. Watson Research Center. ',
    venue: 'IJCAI xxxx Demo',
    year: '2018',
    link: 'https://www.ijcai.org/Proceedings/2018/849',
    tags: ['agentic', 'xai', 'planning', 'nlp', 'support', 'humanai'],
    award: 'ICAPS 2018 People’s Choice Best System Demonstration Award',
  },
  {
    id: 45,
    title:
      'User Interfaces and Scheduling and Planning: Workshop Summary and Proposed Challenges',
    authors:
      'Richard G. Freedman, Tathagata Chakraborti, Kartik Talamadupula, Daniele Magazzeni, and Jeremy D. Frank',
    abstract:
      'The User Interfaces and Scheduling and Planning (UISP) Workshop had its inaugural meeting at the 2017 International Conference on Automated Scheduling and Planning (ICAPS). The UISP community focuses on bridging the gap between automated planning and scheduling technologies and user interface (UI) technologies. Planning and scheduling systems need UIs, and UIs can be designed and built using planning and scheduling systems. The workshop participants included representatives from government organizations, industry, and academia with various insights and novel challenges. We summarize the discussions from the workshop aswell as outline challenges related to this area of research, introducing the now formally established field to the broader user experience and artificial intelligence communities.',
    venue: 'AAAI xxxx Spring Symposium',
    year: '2018',
    link:
      'https://www.aaai.org/ocs/index.php/SSS/SSS18/paper/viewFile/17520/15451',
    tags: ['xai', 'planning', 'support', 'humanai'],
  },
  {
    id: 15,
    title:
      'Model Uncertainity and Multiplicity in Explanation via Model Reconciliation',
    authors:
      'Sarath Sreedharan, Tathagata Chakraborti, and Subbarao Kambhampati',
    abstract:
      "Model reconciliation has been proposed as a way for an agent to explain its decisions to a human who may have a different understanding of the same planning problem by explaining its decisions in terms of these model differences. However, often the human's mental model (and hence the difference) is not known precisely and such explanations cannot be readily computed. In this paper, we show how the explanation generation process evolves in the presence of such model uncertainty or incompleteness by generating conformant explanations that are applicable to a set of possible models. We also show how such explanations can contain superfluous information and how such redundancies can be reduced using conditional explanations to iterate with the human to attain common ground. Finally, we will introduce an anytime version of this approach and empirically demonstrate the trade-offs involved in the different forms of explanations in terms of the computational overhead for the agent and the communication overhead for the human. We illustrate these concepts in three well-known planning domains as well as in a demonstration on a robot involved in a typical search and reconnaissance scenario with an external human supervisor.",
    venue: 'ICAPS xxxx',
    year: '2018',
    link: 'https://aaai.org/ocs/index.php/ICAPS/ICAPS18/paper/view/17783',
    tags: ['xai', 'planning', 'hri', 'humanai'],
  },
  {
    id: 40,
    title: 'Human-Aware Planning Revisited: A Tale of Three Models',
    authors:
      'Tathagata Chakraborti, Sarath Sreedharan, and Subbarao Kambhampat',
    abstract:
      "Human-aware planning requires an agent to be aware of the mental model of the humans, in addition to their physical or capability model. This not only allows an agent to envisage the desired roles of the human in a joint plan but also anticipate how its plan will be perceived by the latter. The human mental model becomes especially useful in the context of an explainable planning (XAIP) agent since an explanatory process cannot be a soliloquy, i.e. it must incorporate the human's beliefs and expectations of the planner. In this paper, we survey our recent efforts in this direction.",
    venue: 'IJCAI xxxx Workshop on Explainable AI',
    year: '2018',
    link: 'https://yochan-lab.github.io/papers/files/papers/three-models.pdf',
    tags: ['xai', 'planning', 'humanai'],
  },
  {
    id: 41,
    title: 'What Can Automated Planning do for Intelligent Tutoring Systems?',
    authors: 'Sachin Grover, Tathagata Chakraborti, and Subbarao Kambhampati',
    abstract:
      'In this paper, we build on the latest in automated planning techniques to develop a generalized framework for course-independent design of Intelligent Tutoring Systems (ITSs). This is meant to provide targeted and personalized assistance to students, in order to meet the demands of the increasing class size, as well as help instructors who can use higher level specifications to design courses without having to worry about building the course-specific tutoring assistance. Thus the aim of this paper is to demonstrate what automated planning can bring to the table for the design of course-independent ITS features. We will illustrate these capabilities in Dragoon, an ITS deployed at Arizona State University.',
    venue: 'ICAPS xxxx Scheduling and Planning Applications Workshop',
    year: '2018',
    link:
      'https://yochan-lab.github.io/papers/files/papers/automated-planning-intelligent.pdf',
    tags: ['xai', 'planning', 'support', 'humanai'],
  },
  {
    id: 42,
    title:
      'MA-RADAR -- A Mixed-Reality Interface for Collaborative Decision Making',
    authors: 'Sailik Sengupta, Tathagata Chakraborti, and Subbarao Kambhampati',
    abstract:
      'There has been a lot of recent interest in the planning community towards adapting automated planning techniques for the role of decision support for human decision makers in the loop. A unique challenge in such settings is the presence of multiple humans collaborating during the planning process which not only requires algorithmic advances to handle issues such as diverging mental models and the establishment of common ground, but also the development of user interfaces that can facilitate the distributed decision making process among the human planners. We posit that recent advances in augmented reality technology is uniquely positioned to serve this need. For example, a mixed-reality workspace can be ideal for curating information towards the particular needs (e.g. explanations) of the individual decision makers. In this paper, we report on ongoing work along these directions and showcase MA-RADAR, the multi-agent version of the decision support system RADAR.',
    venue: 'ICAPS xxxx Workshop on User Interfaces and Scheduling and Planning',
    year: '2018',
    link: 'https://yochan-lab.github.io/papers/files/papers/ma-radar.pdf',
    tags: ['xai', 'planning', 'support', 'vamhri', 'humanai'],
  },
  {
    id: 43,
    title:
      'v2v Communication for Augmenting Reality Enabled Smart HUDs to Increase Situational Awareness of Drivers',
    authors: 'Andrew Dudley, Tathagata Chakraborti, and Subbarao Kambhampati',
    abstract:
      'Inter-car communication has emerged in recent times as a viable solution towards reducing traffic hazards, with the recent US government mandate in favor of vehicle-to-vehicle communication highlighting the movement towards this direction in the automobile industry. However, questions remain as to how information from other cars can be effectively relayed to a driver, especially soas to not overload the driver with too much information. Meanwhile, a parallel thread of development in the space of Smart HUDshas shown the applicability of augmented reality to increase the situational awareness of drivers on the road. In this paper, we build on these threads of work and show how Smart HUDs can be an effective platform for projecting relevant information from surrounding vehicles in real time, and how an onboard AI componentcan avoid increased cognitive burden on the driver by determining when and what information to project based on its models of the driver and the surrounding environment.',
    venue: 'HRI xxxx VAM-HRI',
    year: '2018',
    link: 'https://yochan-lab.github.io/papers/files/papers/vam-hri-cars.pdf',
    tags: ['hri', 'planning', 'vamhri', 'humanai'],
  },
  {
    id: 46,
    title: 'Virtual, Augmented and Mixed Reality for Human-Robot Interaction',
    authors:
      'Tom Williams, Daniel Szafir, Tathagata Chakraborti, and Heni Ben Amor',
    abstract:
      'The 1st International Workshop on Virtual, Augmented, and Mixed Reality for Human-Robot Interactions (VAM-HRI) will bring together HRI, Robotics, Artificial Intelligence, and Mixed Reality researchers to identify challenges in mixed reality interactions between humans and robots. Topics relevant to the workshop include development of robots that can interact with humans in mixed reality, use of virtual reality for developing interactive robots, the design of new augmented reality interfaces that mediate communication between humans and robots, comparisons of the capabilities and perceptions of robots and virtual agents, and best practices for the design of such interactions. VAM-HRI is the first workshop of its kind at an academic AI or Robotics conference, and is intended to serve as a timely call to arms to the academic community in response to the growing promise of this emerging field.',
    venue: 'Companion to HRI xxxx Proceedings',
    year: '2018',
    link: 'https://dl.acm.org/doi/10.1145/3173386.3173561',
    tags: ['hri', 'vamhri', 'humanai'],
  },
  {
    id: 47,
    title:
      'An Investigation of Bounded Misclassification for Operational Security of Deep Neural Networks',
    authors:
      'Sailik Sengupta, Andrew Dudley, Tathagata Chakraborti, and Subbarao Kambhampati',
    abstract:
      'Deep Neural Networks are known to be prone to incomprehensible mistakes on the inputs they do misclassify. However, from the perspective of an end-to-end system built on top of a classifier, there may be additional layers of decision making that may actually be immune to particular kinds of misclassification. For example, if a drone ends up misclassifying a yellow school bus as something similar, such as a cab instead of, say, an enemy tank, then the underlying decision problem of ignoring this object as a possible target remains the same, and hence unaffected. In this brief abstract, we discuss this notion of robustness called "bounded misclassification" that is domain-specific and operational, and is specifically predicated on the overall functionalities of a particular application.',
    venue:
      'AAAI xxxx Workshop on Engineering Dependable and Secure Machine Learning Systems',
    year: '2018',
    link: 'http://rakaposhi.eas.asu.edu/paper_files/aaai_ws_bounded.pdf',
    tags: ['advml'],
  },
  {
    id: 16,
    title:
      'Projection-Aware Task Planning and Execution for Human-in-the-Loop Operation of Robots in a Mixed-Reality Workspace',
    authors:
      'Tathagata Chakraborti, Sarath Sreedharan, Anagha Kulkarni, and Subbarao Kambhampati',
    abstract:
      'Recent advances in mixed-reality technologies have renewed interest in alternative modes of communication for human-robot interaction. However, most of the work in this direction has been confined to tasks such as teleoperation, simulation or explication of individual actions of a robot. In this paper, we will discuss how the capability to project intentions affect the task planning capabilities of a robot. Specifically, we will start with a discussion on how projection actions can be used to reveal information regarding the future intentions of the robot at the time of task execution. We will then pose a new planning paradigm - projection-aware planning - whereby a robot can trade off its plan cost with its ability to reveal its intentions using its projection actions. We will demonstrate each of these scenarios with the help of a joint human-robot activity using the HoloLens.',
    venue: 'IROS xxxx',
    year: '2018',
    link: 'https://ieeexplore.ieee.org/document/8593830',
    tags: ['xai', 'planning', 'hri', 'vamhri', 'humanai'],
  },
  {
    id: 17,
    title:
      'Plan Explanations as Model Reconciliation: Moving Beyond Explanation as Soliloquy',
    authors:
      'Tathagata Chakraborti, Sarath Sreedharan, Yu Zhang, and Subbarao Kambhampati',
    abstract:
      ' When AI systems interact with humans in the loop, they are often called on to provide explanations for their plans and behavior. Past work on plan explanations primarily involved the AI system explaining the correctness of its plan and the rationale for its decision in terms of its own model. Such soliloquy is wholly inadequate in most realistic scenarios where the humans have domain and task models that differ significantly from that used by the AI system. We posit that the explanations are best studied in light of these differing models. In particular, we show how explanation can be seen as a "model reconciliation problem" (MRP), where the AI system in effect suggests changes to the human\'s model, so as to make its plan be optimal with respect to that changed human model. We will study the properties of such explanations, present algorithms for automatically computing them, and evaluate the performance of the algorithms.',
    venue: 'IJCAI xxxx',
    year: '2017',
    link: 'https://www.ijcai.org/Proceedings/2017/23',
    tags: ['xai', 'planning', 'humanai'],
  },
  {
    id: 18,
    title: 'Plan Explicability and Predictability for Robot Task Planning',
    authors:
      'Yu Zhang, Sarath Sreedharan, Anagha Kulkarni, Tathagata Chakraborti, Hankz Hankui Zhuo, and Subbarao Kambhampati',
    abstract:
      'Intelligent robots and machines are becoming pervasive in human populated environments. A desirable capability of these agents is to respond to goal-oriented commands by autonomously constructing task plans. However, such autonomy can add significant cognitive load and potentially introduce safety risks to humans when agents behave in unexpected ways. Hence, for such agents to be helpful, one important requirement is for them to synthesize plans that can be easily understood by humans. While there exists previous work that studied socially acceptable robots that interact with humans in “natural ways”, and work that investigated legible motion planning, there is no general solution for high level task planning. To address this issue, we introduce the notions of plan explicability and predictability. To compute these measures, first, we postulate that humans understand agent plans by associating abstract tasks with agent actions, which can be considered as a labeling process. We learn the labeling scheme of humans for agent plans from training examples using conditional random fields (CRFs). Then, we use the learned model to label a new plan to compute its explicability and predictability. These measures can be used by agents to proactively choose or directly synthesize plans that are more explicable and predictable to humans. We provide evaluations on a synthetic domain and with a physical robot to demonstrate the effectiveness of our approach.',
    venue: 'ICRA xxxx',
    year: '2017',
    link: 'https://ieeexplore.ieee.org/document/7989155',
    tags: ['xai', 'planning', 'hri', 'humanai'],
  },
  {
    id: 19,
    title:
      'UbuntuWorld 1.0 LTS -- A Platform for Automated Problem Solving & Troubleshooting in the Ubuntu OS',
    authors:
      'Tathagata Chakraborti, Kartik Talamadupula, Kshitij P. Fadnis, Murray Campbell, and Subbarao Kambhampati',
    abstract:
      "In this paper we present UbuntuWorld 1.0 LTS — a platform for developing automated technical support agents in the Ubuntu operating system. Specifically, we propose to use the Bash terminal as a simulator of the Ubuntu environment for a learning-based agent, and demonstrate the usefulness of adopting reinforcement learning (RL) techniques for basic problem solving and troubleshooting in this environment. We provide a plug-and-play interface to the simulator as a python package where different types of agents can be plugged in and evaluated, and provide pathways for integrating data from online support forums like Ask Ubuntu into an automated agent's learning process. Finally, we show that the use of this data significantly improves the agent's learning efficiency. We believe that this platform can be adopted as a real-world test bed for research on automated technical support.",
    venue: 'IAAI @ AAAI xxxx',
    year: '2017',
    link: 'https://dl.acm.org/doi/10.5555/3297863.3297870',
    tags: ['support', 'nlp', 'ai4code', 'support'],
  },
  {
    id: 20,
    title:
      'Herding the Crowd: Using Automated Planning for Better Crowdsourced Planning',
    authors:
      'Lydia Manikonda, Tathagata Chakraborti, Kartik Talamadupula, and Subbarao Kambhampati',
    abstract:
      'One subclass of human computation applications are those directed at tasks that involve planning (e.g. tour planning) and scheduling (e.g. conference scheduling). Interestingly, work on these systems shows that even primitive forms of automated oversight on the human contributors helps in significantly improving the effectiveness of the humans/crowd. In this paper, we argue that the automated oversight used in these systems can be viewed as a primitive automated planner, and that there are several opportunities for more sophisticated automated planning in effectively steering crowdsourced planning. Straightforward adaptation of current planning technology is however hampered by the mismatch between the capabilities of human workers and automated planners. We identify and partially address two important challenges that need to be overcome before such adaptation of planning technology can occur: (i) interpreting inputs of the human workers (and the requester) and (ii) steering or critiquing plans produced by the human workers, armed only with incomplete domain and preference models. To these ends, we describe the implementation of AI-MIX, a tour plan generation system that uses automated checks and alerts to improve the quality of plans created by human workers.',
    venue: 'Human Computation Journal',
    year: '2017',
    link: 'https://hcjournal.org/index.php/jhc/article/view/52',
    tags: ['support', 'planning', 'humanai'],
  },
  {
    id: 48,
    title: 'Mr.Jones -- Towards a Proactive Smart Room Orchestrator',
    authors:
      'Tathagata Chakraborti, Kartik Talamadupula, Mishal Dholakia, Biplav Srivastava, Jeffrey O. Kephert, and Rachel K.E. Bellamy',
    abstract:
      "In this paper, we report work in progress on the development of Mr. Jones -- a proactive orchestrator and decision support agent for a collaborative decision making setting embodied by a smart room. The duties of such an agent may range across interactive problem solving with other agents in the environment, developing automated summaries of meetings, visualization of the internal decision making process, proactive data and resource management, and so on. Specifically, we highlight the importance of integrating higher level symbolic reasoning and intent recognition in the design of such an agent, and outline pathways towards the realization of these capabilities. We will demonstrate some of these functionalities here in the context of automated orchestration of a meeting in the CEL -- the Cognitive Environments Laboratory at IBM's T.J. Watson Research Center.",
    venue: 'AAAI xxxx Fall Symposium',
    year: '2017',
    link: 'https://cdn.aaai.org/ocs/16029/16029-69893-1-PB.pdf',
    tags: ['support', 'planning', 'nlp', 'support', 'humanai'],
  },
  {
    id: 49,
    title:
      'RADAR -- A Proactive Decision Support System for Human-in-the-Loop Planning',
    authors:
      'Sailik Sengupta, Tathagata Chakraborti, Sarath Sreedharan, Satya Gautam Vadlamudi, and Subbarao Kambhampati',
    abstract:
      'Proactive Decision Support (PDS) aims at improving the decision making experience of human decision makers by enhancing both the quality of the decisions and the ease of making them. In this paper, we ask the question what role automated decision making technologies can play in the deliberative process of the human decision maker. Specifically, we focus on expert humans in the loop who now share a detailed, if not complete, model of the domain with the assistant, but may still be unable to compute plans due to cognitive overload. To this end, we propose a PDS framework RADAR based on research in the automated planning community that aids the human decision maker in constructing plans. We will situate our discussion on principles of interface design laid out in the literature on the degrees of automation and its effect on the collaborative decision making process. Also, at the heart of our design is the principle of naturalistic decision making which has been shown to be a necessary requirement of such systems, thus focusing more on providing suggestions rather than enforcing decisions and executing actions. We will demonstrate the different properties of such a system through examples in a fire-fighting domain, where human commanders are involved in building response strategies to mitigate a fire outbreak. The paper is written to serve both as a position paper by motivating requirements of an effective proactive decision support system, and also an emerging application of these ideas in the context of the role of an automated planner in human decision making, in a platform that can prove to bea valuable test bed for research on the same.',
    venue: 'AAAI xxxx Fall Symposium',
    year: '2017',
    link: '',
    tags: ['xai', 'planning', 'support', 'humanai'],
  },
  {
    id: 50,
    title:
      'Alternative Modes of Interaction in Proximal Human-in-the-Loop Operation of Robots',
    authors:
      'Tathagata Chakraborti, Sarath Sreedharan, Anagha Kulkarni, and Subbarao Kambhampati',
    abstract:
      "Ambiguity and noise in natural language instructions create a significant barrier towards adopting autonomous systems into safety critical workflows involving humans and machines. In this paper, we propose to build on recent advances in electrophysiological monitoring methods and augmented reality technologies, to develop alternative modes of communication between humans and robots involved in large-scale proximal collaborative tasks. We will first introduce augmented reality techniques for projecting a robot's intentions to its human teammate, who can interact with these cues to engage in real-time collaborative plan execution with the robot. We will then look at how electroencephalographic (EEG) feedback can be used to monitor human response to both discrete events, as well as longer term affective states while execution of a plan. These signals can be used by a learning agent, a.k.a an affective robot, to modify its policy. We will present an end-to-end system capable of demonstrating these modalities of interaction. We hope that the proposed system will inspire research in augmenting human-robot interactions with alternative forms of communications in the interests of safety, productivity, and fluency of teaming, particularly in engineered settings such as the factory floor or the assembly line in the manufacturing industry where the use of such wearables can be enforced.",
    venue: 'ICAPS xxxx Workshop on User Interfaces and Scheduling and Planning',
    year: '2017',
    link: 'https://arxiv.org/abs/1703.08930',
    tags: ['hri', 'planning', 'vamhri', 'humanai'],
    award: 'Microsoft Imagine Cup 2017 US Finalist',
  },
  {
    id: 51,
    title: 'AI Challenges in Human-Robot Cognitive Teaming',
    authors:
      'Tathagata Chakraborti, Subbarao Kambhampati, Matthias Scheutz, and Yu Zhang',
    abstract:
      'Among the many anticipated roles for robots in the future is that of being a human teammate. Aside from all the technological hurdles that have to be overcome with respect to hardware and control to make robots fit to work with humans, the added complication here is that humans have many conscious and subconscious expectations of their teammates - indeed, we argue that teaming is mostly a cognitive rather than physical coordination activity. This introduces new challenges for the AI and robotics community and requires fundamental changes to the traditional approach to the design of autonomy. With this in mind, we propose an update to the classical view of the intelligent agent architecture, highlighting the requirements for mental modeling of the human in the deliberative process of the autonomous agent. In this article, we outline briefly the recent efforts of ours, and others in the community, towards developing cognitive teammates along these guidelines.',
    venue: 'Technical Report',
    year: '2017',
    link: 'https://arxiv.org/abs/1707.04775',
    tags: ['xai', 'planning', 'hri', 'support', 'humanai'],
  },
  {
    id: 21,
    title:
      'Compliant Conditions for Polynomial Time Approximation of Operator Counts',
    authors:
      'Tathagata Chakraborti, Sarath Sreedharan, Sailik Sengupta, T. K. Satish Kumar, and Subbarao Kambhampati',
    abstract:
      'We develop a computationally simpler version of the operator count heuristic for a particular class of domains. The contribution of this abstract is thus three fold, we (1) propose an efficient closed form approximation to the operator count heuristic; (2) leverage compressed sensing techniques to obtain an integer approximation in polynomial time; and (3) discuss the relationship of the proposed formulation to existing heuristics and investigate properties of domains where such approaches are useful.',
    venue: 'SoCS xxxx',
    year: '2016',
    link: 'https://arxiv.org/abs/1605.07989',
    tags: ['planning'],
  },
  {
    id: 23,
    title: 'Planning with Resource Conflicts in Human-Robot Cohabitation',
    authors: 'Tathagata Chakraborti, Yu Zhang, and Subbarao Kambhampati',
    abstract:
      'In order to be acceptable members of future human-robot ecosystems, it is necessary for autonomous agents to be respectful of the intentions of humans cohabiting a workspace and account for conflicts on shared resources in the environment. In this paper we build an integrated system that demonstrates how maintaining predictive models of its human colleagues can inform the planning process of the robotic agent. We propose an Integer Programming based planner as a general formulation of this flavor of human-aware planning and show how the proposed formulation can be used to produce different behaviors of the robotic agent, showcasing compromise, opportunism or negotiation. Finally, we investigate how the proposed approach scales with the different parameters involved, and provide empirical evaluations to illustrate the pros and cons associated with the proposed style of planning.',
    venue: 'AAMAS xxxx',
    year: '2016',
    link: 'https://dl.acm.org/doi/abs/10.5555/2936924.2937081',
    tags: ['planning', 'hri', 'humanai'],
  },
  {
    id: 55,
    title: 'Planning for Symbiotic Action',
    authors: 'Tathagata Chakrabort',
    abstract:
      'The field of Artificial Intelligence (AI) has become extremely prominent in recent times, with the integration of different intelligent components into devices and services we use in everyday life. As the capabilities of such systems become more and more complex, one branch of AI that becomes relevant is that of automated planning or sequential decision making, in order for these components to participate in diverse long term tasks. A key aspect of such systems is increased interaction with humans. Challenges in Human-in-the-Loop Planning (HILP). Classical planning has traditionally emphasized on the efficiency or accuracy of the plan generation process. However, in real world applications, especially involving humans, planners must deal with typical challenges including uncertainty and partial knowledge, and issues involving priorities and authority. Technologies that become crucial in this context involve abilities to dynamically predict, anticipate and adapt to changing needs while making task plans. My research focuses on such aspects of "human-in-the-loop planning". Modalities of HILP - My Research Focus. I have looked at two specific ways in which automated planners may interact with humans. First I will describe how planners can enable different types of autonomous behavior of robots sharing their workspace with humans - i.e. interacting with human colleagues. Then I will look at possible roles of automated planners in platforms that involve collaboration with or among human planners. The aim of my thesis is to provide planning technologies for and motivate well-informed and principled design of complex symbiotic man-machine systems of the future.',
    venue: 'AAMAS xxxx Doctoral Consortium',
    year: '2016',
    link: 'https://dl.acm.org/doi/10.5555/2936924.2937243',
    tags: ['planning', 'hri', 'humanai'],
  },
  {
    id: 52,
    title:
      'An ROS-based Shared Communication Middleware for Plug & Play Modular Intelligent Design of Smart Systems',
    authors:
      'Tathagata Chakraborti, Siddharth Srivastava, Alessandro Pinto, and Subbarao Kambhampati',
    abstract:
      'Centralized architectures for systems such as smart offices and homes are rapidly becoming obsolete due to inherent inflexibility in their design and management. This is because such systems should not only be easily re-configurable with the addition of newer capabilities over time but should also have the ability to adapt to multiple points of failure. Fully harnessing the capabilities of these massively integrated systems requires higher level reasoning engines that allow them to plan for and achieve diverse long-term goals, rather than being limited to a few predefined tasks. In this paper, we propose a set of properties that will accommodate such capabilities, and develop a general architecture for integrating automated planning components into smart systems. We show how the reasoning capabilities are embedded in the design and operation of the system and demonstrate the same on a real-world implementation of a smart office.',
    venue: 'Technical Report',
    year: '2016',
    link: 'https://arxiv.org/abs/1706.01133',
    tags: ['agentic', 'planning', 'hri'],
  },
  {
    id: 53,
    title:
      'A Formal Framework for Studying Interaction in Human-Robot Societies',
    authors:
      'Tathagata Chakraborti, Kartik Talamadupula, Yu Zhang, and Subbarao Kambhampati',
    abstract:
      'As robots evolve into an integral part of the human ecosystem, humans and robots will be involved in a multitude of collaborative tasks that require complex coordination and cooperation. Indeed there has been extensive work in the robotics, planning as well as the human-robot interaction communities to understand and facilitate such seamless teaming. However, it has been argued that their increased participation as independent autonomous agents in hitherto human-habited environments has introduced many new challenges to the view of traditional human-robot teaming. When robots are deployed with independent and often self-sufficient tasks in a shared workspace, teams are often not formed explicitly and multiple teams cohabiting anenvironment interact more like colleagues rather than teammates. In this paper, we formalize these differences and analyze metrics to characterize autonomous behavior in such human-robot cohabitation settings.',
    venue: 'AAAI xxxx Workshop on Symbiotic Cognitive Systems',
    year: '2016',
    link:
      'https://www.aaai.org/ocs/index.php/WS/AAAIW16/paper/viewPDFInterstitial/12591/12447',
    tags: ['planning', 'hri', 'humanai'],
  },
  {
    id: 54,
    title:
      'A Game Theoretic Approach to Ad-hoc Coalitions in Human-Robot Societies',
    authors:
      'As robots evolve into fully autonomous agents, settings involving human-robot teams will evolve into human-robot societies, where multiple independent agents and teams, both humans and robots, co-exist and work in harmony. Given such a scenario, the question we ask is -- How can two or more such agents dynamically form coalitions or teams for mutual benefit with minimal prior coordination? In this work, we provide a game theoretic solution to address this problem. We will first look at a situation with full information, provide approximations to compute the extensive form game more efficiently, and then extend the formulation to accountfor scenarios when the human is not totally confident of its potential partner’s intentions. Finally we will look at possible extensions of the game, that can capture different aspects of decision making with respect to ad-hoc coalition formation in human-robot societies',
    abstract:
      'Tathagata Chakraborti, Venkata Vamsikrishna Meduri, Vivek Dondeti, and Subbarao Kambhampati.',
    venue:
      'AAAI xxxx Workshop on Multiagent Interaction without Prior Coordination',
    year: '2016',
    link: 'https://www.aaai.org/ocs/index.php/WS/AAAIW16/paper/view/12592',
    tags: ['planning', 'hri', 'humanai'],
  },
  {
    id: 24,
    title: 'Planning for Serendipity',
    authors:
      'Tathagata Chakraborti, Gordon Briggs, Kartik Talamadupula, Yu Zhang, Matthias Scheutz, David Smith, and Subbarao Kambhampati',
    abstract:
      'Recently there has been a lot of focus on human robot co-habitation issues that are often orthogonal to many aspects of human-robot teaming; e.g. on producing socially acceptable behaviors of robots and de-conflicting plans of robots and humans in shared environments. However, an interesting offshoot of these settings that has largely been overlooked is the problem of planning for serendipity - i.e. planning for stigmergic collaboration without explicit commitments on agents in co-habitation. In this paper we formalize this notion of planning for serendipity for the first time, and provide an Integer Programming based solution for this problem. Further, we illustrate the different modes of this planning technique on a typical Urban Search and Rescue scenario and show a real-life implementation of the ideas on the Nao Robot interacting with a human colleague.',
    venue: 'IROS xxxx',
    year: '2015',
    link: 'https://ieeexplore.ieee.org/document/7354125',
    tags: ['planning', 'hri', 'humanai'],
  },
  {
    id: 25,
    title:
      'A Human Factors Analysis of Proactive Assistance in Human-robot Teaming',
    authors:
      'Yu Zhang, Vignesh Narayanan, Tathagata Chakraborti, and Subbarao Kambhampati',
    abstract:
      'It has long been assumed that for effective human-robot teaming, it is desirable for assistive robots to infer the goals and intents of the humans, and take proactive actions to help them achieve their goals. However, there has not been any systematic evaluation of the accuracy of this claim. On the face of it, there are several ways a proactive robot assistant can in fact reduce the effectiveness of teaming. For example, it can increase the cognitive load of the human teammate by performing actions that are unanticipated by the human. In such cases, even though the teaming performance could be improved, it is unclear whether humans are willing to adapt to robot actions or are able to adapt in a timely manner. Furthermore, misinterpretations and delays in goal and intent recognition due to partial observations and limited communication can also reduce the performance. In this paper, our aim is to perform an analysis of human factors on the effectiveness of such proactive support in human-robot teaming. We perform our evaluation in a simulated Urban Search and Rescue (USAR) task, in which the efficacy of teaming is not only dependent on individual performance but also on teammates\' interactions with each other. In this task, the human teammate is remotely controlling a robot while working with an intelligent robot teammate "Mary". Our main result shows that the subjects generally preferred Mary with the ability to provide proactive support (compared to Mary without this ability). Our results also show that human cognitive load was increased with a proactive assistant (albeit not significantly) even though the subjects appeared to interact with it less.',
    venue: 'IROS xxxx',
    year: '2015',
    link: 'https://ieeexplore.ieee.org/document/7353878',
    tags: ['planning', 'hri', 'humanai'],
  },
  {
    id: 56,
    title: 'Planning with Humans in the Loop',
    authors: 'Tathagata Chakrabort',
    abstract:
      'Automated planners have traditionally looked at optimizing cost or duration of plans using complete domain information and user preferences, or improving efficiency of the planning process itself. However as artificial intelligence becomes more and more part of our daily lives, interactions between autonomous systems and humans throw up different challenges. With regards to automated planning, these not only involve reasoning with incomplete information and unknown preferences, but also the ability to account for different aspects of interacting with humans. In my doctoral work, I consider these issues in the context of planning for synergy inhuman-robot cohabitation and planning for collaborative systems involving human computation. In this brief abstract, I present the overarching goal of my research, the overall challenges addressed in my work till nowand the state of the current work in progress.',
    venue: 'ICAPS xxxx Doctoral Consortium',
    year: '2015',
    link:
      'http://icaps15.icaps-conference.org/dc/Tathagata_Chakraborti_abstract.pdf',
    tags: ['planning', 'hri', 'support', 'humanai'],
  },
  {
    id: 26,
    title:
      'AI-MIX: Using Automated Planning to Steer Human Workers Towards Better Crowdsourced Plans',
    authors:
      'Lydia Manikonda, Tathagata Chakraborti, Sushovan De, Kartik Talamadupula, and Subbarao Kambhampati',
    abstract:
      'One subclass of human computation applications are those directed at tasks that involve planning (e.g. tour planning) and scheduling (e.g. conference scheduling). Interestingly, work on these systems shows that even primitive forms of automated oversight on the human contributors helps in significantly improving the effectiveness of the humans/crowd. In this paper, we argue that the automated oversight used inthese systems can be viewed as a primitive automated planner, and that there are several opportunities for more sophisticated automated planning in effectively steering the crowd. Straightforward adaptation of current planning technology is however hampered by the mismatch between the capabilities of human workers and automated planners. We identify and partially address two important challenges that need to be overcome before such adaptation of planning technology can occur: (i) interpreting inputs of the human workers (and the requester) and (ii) steering or critiquing plans produced by the human workers, armed only within complete domain and preference models. To these ends, we describe the implementation of AI-MIX, a tour plan generation system that uses automated checks and alerts to improve the quality of plans created by human workers; and present a preliminary evaluation of the effectiveness of steering provided by automated planning.',
    venue: 'IAAI @ AAAI xxxx',
    year: '2014',
    link: 'http://www.aaai.org/ocs/index.php/IAAI/IAAI14/paper/view/8576',
    tags: ['planning', 'support', 'humanai'],
    award: 'ICAPS 2014 People’s Choice Best System Demonstration Award',
  },
  {
    id: 27,
    title:
      'Coordination in Human-Robot Teams Using Mental Modeling and Plan Recognition',
    authors:
      'Kartik Talamadupula, Gordon Briggs, Tathagata Chakraborti, Matthias Scheutz, and Subbarao Kambhampati',
    abstract:
      "Beliefs play an important role in human-robot teaming scenarios, where the robots must reason about other agents' intentions and beliefs in order to inform their own plan generation process, and to successfully coordinate plans with the other agents. In this paper, we cast the evolving and complex structure of beliefs, and inference over them, as a planning and plan recognition problem. We use agent beliefs and intentions modeled in terms of predicates in order to create an automated planning problem instance, which is then used along with a known and complete domain model in order to predict the plan of the agent whose beliefs are being modeled. Information extracted from this predicted plan is used to inform the planning process of the modeling agent, to enable coordination. We also look at an extension of this problem to a plan recognition problem. We conclude by presenting an evaluation of our technique through a case study implemented on a real robot.",
    venue: 'IROS xxxx',
    year: '2014',
    link: 'https://ieeexplore.ieee.org/abstract/document/6942970',
    tags: ['planning', 'humanai', 'hri'],
  },
];

export { DATA, TAGS };
