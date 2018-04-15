const TOOLS_BROWSE_FOLDER = '/tools';
const TOOL_FOLDER = '/tool';

export const designPhases = {
  market: {
    id: 'card1',
    link: `${TOOLS_BROWSE_FOLDER}/market`,
    title: 'Identify Market Problems',
    image: 'http://localhost:1250/assets/market-problems.png',
    backgroundSize: '90px 175px',
    backgroundPosition: 'right top',
    preHeader: 'Design Phase',
    categories: {
      define: {
        id: 'cat1',
        link: `${TOOLS_BROWSE_FOLDER}/market/define`,
        title: 'Define Your Market',
        tools: [
          'em',
          'unst',
        ],
      },
      analyze: {
        id: 'cat2',
        link: `${TOOLS_BROWSE_FOLDER}/market/analyze`,
        title: 'Analyze Problems',
        tools: [
          'rsc',
          'rflw',
          'csrt',
        ],
      },
      psych: {
        id: 'cat3',
        link: `${TOOLS_BROWSE_FOLDER}/market/psych`,
        title: 'Understand User Psychology',
        tools: [
          'dirh',
          'rflw',
          'csrt',
          'cll',
          'pe',
        ],
      },
      feedback: {
        id: 'cat4',
        link: `${TOOLS_BROWSE_FOLDER}/market/feedback`,
        title: 'Get Feedback & Opinions',
        tools: [
          'dirh',
          'csrt',
        ],
      },
      env: {
        id: 'cat5',
        link: `${TOOLS_BROWSE_FOLDER}/market/env`,
        title: 'Define Your Market Environment',
        tools: [
          'sere',
        ],
      },
    },
  },
  brainstorming: {
    id: 'card2',
    link: `${TOOLS_BROWSE_FOLDER}/brainstorming`,
    title: 'Brainstorming',
    categories: {
      ideation: {
        id: 'cat6',
        link: `${TOOLS_BROWSE_FOLDER}/brainstorming/ideation`,
        title: 'Start the Ideation Process',
        tools: [
          'cra',
          'bci',
        ],
      },
      develop: {
        id: 'cat7',
        link: `${TOOLS_BROWSE_FOLDER}/brainstorming/develop`,
        title: 'Develop Ideas',
        tools: [
          'mac',
        ],
      },
    },
  },
  discuss: {
    id: 'card3',
    link: `${TOOLS_BROWSE_FOLDER}/discuss`,
    title: 'Discussion',
    categories: {
      new: {
        id: 'cat8',
        link: `${TOOLS_BROWSE_FOLDER}/discuss/new`,
        title: 'Find New Ideas And Opportunities',
        tools: [
          'act',
          'sth',
        ],
      },
      evaluate: {
        id: 'cat10',
        link: `${TOOLS_BROWSE_FOLDER}/discuss/evaluate`,
        title: 'Evaluate Ideas Reduce Business Risk',
        tools: [
          'ev',
          'sth',
          'act',
        ],
      },
    },
  },
  project: {
    id: 'card4',
    link: `${TOOLS_BROWSE_FOLDER}/project`,
    title: 'Project Planning',
    categories: {
      identify: {
        id: 'cat11',
        link: `${TOOLS_BROWSE_FOLDER}/project/identify`,
        title: 'Identify Project Problems/Risks',
        tools: [
          'ev',
        ],
      },
      prioritization: {
        id: 'cat12',
        link: `${TOOLS_BROWSE_FOLDER}/project/prioritization`,
        title: 'Prioritization',
        tools: [
          'kano',
        ],
      },
    },
  },
  team: {
    id: 'card5',
    link: `${TOOLS_BROWSE_FOLDER}/team`,
    title: 'Team Building',
    categories: {
      teamwork: {
        id: 'cat13',
        link: `${TOOLS_BROWSE_FOLDER}/team/teamwork`,
        title: 'Reinforce Teamwork',
        tools: [
          'cnnb',
        ],
      },
      culture: {
        id: 'cat14',
        link: `${TOOLS_BROWSE_FOLDER}/team/culture`,
        title: 'Create Team Culture',
        tools: [
          'tmb',
        ],
      },
    },
  },
};

export const tools = {
  em: {
    link: `${TOOL_FOLDER}/em`,
    title: 'Extremes and Mainstreams',
    description: 'When trying to create a solution for a broad market, it is important to understand unusual/extreme users in addition to your mainstream users. This tool is a useful method to understand your extreme users and how they differ from the mainstream. When you study extreme users, you will be exposed to use cases and problem solving opportunities you may never have thought about, and will also uncover important insights about your mainstream users by contrast.',
    image: '',
    beforeYouStart: 'When trying to create a solution for a broad market, it is important to understand unusual/extreme users in addition to your mainstream users. This tool is a useful method to understand your extreme users and how they differ from the mainstream. When you study extreme users, you will be exposed to use cases and problem solving opportunities you may never have thought about, and will also uncover important insights about your mainstream users by contrast.',
    backgroundSize: '',
    backgroundPosition: '',
    preHeader: 'Tool',
    steps: [
      {
        id: 'geafeagv',
        content: 'Write down the different groups of people that use your product or service. Define extreme and mainstream audiences, and define their approximate size by percentage of your total users. Extreme users may be small groups who use your product or service in an unusual way, may be considered ‘power users’, or may otherwise have characteristics that are not part of your mainstream audience.',
        type: 'text',
        stepNo: 1,
      },
      {
        id: 'geag3qg4sh',
        content: '<img src="http://localhost:1250/assets/tools/em-image1.png">',
        type: 'image',
      },
      {
        id: 'gearnrsnrs',
        content: 'Next, define [REF] a persona for each of these audiences. If you are working in teams, you can divide the audiences between them.',
        type: 'text',
        stepNo: 2,
      },
      {
        id: 'nsnrs3255',
        content: 'Start preliminary research by asking sales people, looking at statistics, etc., in order to begin to define your personas.',
        type: 'text',
        stepNo: 3,
      },
      {
        id: 'jdntd3255',
        content: 'When you have a basic definition for your extreme and mainstream users, the next step is to understand the difference between each audience as well as what they have in common. The best way to do this is through interviews. Prepare an interview or questionnaire [REF. Interview Tool] for at least one user in each audience segment.',
        type: 'text',
        stepNo: 4,
      },
      {
        id: 'bsh43hsns',
        content: 'List each discrete audience observation on its own sticky note for use in the next step. Try to list 50 or more for each audience, and add a user number and observation number to each note to keep track of observation sources. eg. "User3 #5, likes the way tasks are organized in the system".',
        type: 'text',
        stepNo: 5,
      },
      {
        id: 'begbe35hs',
        content: 'When all interviews have been carried out, hold a meeting to discuss and analyze findings. Because the purpose of this meeting is essentially to organize information and to reveal important insights, you may optionally use the [REF. Affinity Diagramming] tool to meaningfully cluster observations and show differences between groups (create columns for each audience segment). This is usually only necessary if you have gathered a lot of data that is difficult to sift through. If not using an Affinity Diagram: use the meeting to define key differences and similarities between your extreme and mainstream audiences.',
        type: 'text',
        stepNo: 6,
      },
      {
        id: 'ksesb326',
        content: 'These answers can be useful beyond your department. Make sure you think about how the answers might affect your organization in terms of marketing, sales, products, price points, advertising, work culture, interior design, communications, etc. You can also expand use of the data you’ve gathered by using discussion tools such as [REF. Six Thinking Hats] to brainstorm new ideas and solve any problems you’ve uncovered.',
        type: 'text',
        stepNo: 7,
      },
    ],
    required: [
      {
        id: 'shs46436',
        image: '',
        label: 'Hello',
      },
      {
        id: 'hrshrs46',
        image: '',
        label: 'Item2',
      },
      {
        id: 'lageab326',
        image: '',
        label: 'Item3',
      },
    ],
  },
  unst: {
    link: `${TOOL_FOLDER}/unst`,
    title: 'Universe of Study',
    preHeader: 'Tool',
  },
  pe: {
    link: `${TOOL_FOLDER}/pe`,
    title: 'Personas',
    preHeader: 'Tool',
  },
  dirh: {
    link: `${TOOL_FOLDER}/dirh`,
    title: 'Dialogue Research',
    preHeader: 'Tool',
  },
  rsc: {
    link: `${TOOL_FOLDER}/rsc`,
    title: 'Restructure the Challenge',
    preHeader: 'Tool',
  },
  rflw: {
    link: `${TOOL_FOLDER}/rflw`,
    title: 'Resource Flow',
    preHeader: 'Tool',
  },
  csrt: {
    link: `${TOOL_FOLDER}/csrt`,
    title: 'Card Sort',
    preHeader: 'Tool',
  },
  cll: {
    link: `${TOOL_FOLDER}/cll`,
    title: 'Collage',
    preHeader: 'Tool',
  },
  sere: {
    link: `${TOOL_FOLDER}/sere`,
    title: 'Secondary Research',
    preHeader: 'Tool',
  },
  cra: {
    link: `${TOOL_FOLDER}/cra`,
    title: 'Wild Associations',
    preHeader: 'Tool',
  },
  bci: {
    link: `${TOOL_FOLDER}/bci`,
    title: 'Chinese Portrait',
    preHeader: 'Tool',
  },
  mac: {
    link: `${TOOL_FOLDER}/mac`,
    title: 'Challenges',
    preHeader: 'Tool',
  },
  act: {
    link: `${TOOL_FOLDER}/act`,
    title: 'Roles',
    preHeader: 'Tool',
  },
  sth: {
    link: `${TOOL_FOLDER}/sth`,
    title: 'Six Thinking Hats',
    preHeader: 'Tool',
  },
  ev: {
    link: `${TOOL_FOLDER}/ev`,
    title: 'Evalutaion Board',
    preHeader: 'Tool',
  },
  kano: {
    link: `${TOOL_FOLDER}/kano`,
    title: 'KANO Analysis',
    preHeader: 'Tool',
  },
  cnnb: {
    link: `${TOOL_FOLDER}/cnnb`,
    title: 'Cannibal',
    preHeader: 'Tool',
  },
  tmb: {
    link: `${TOOL_FOLDER}/tmb`,
    title: 'Skills & Resources',
    preHeader: 'Tool',
  },
};
