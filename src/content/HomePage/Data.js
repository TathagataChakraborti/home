import React from 'react';
import { Link } from '@carbon/react';
import { LogoTwitter } from '@carbon/icons-react';

const DATA = [
  {
    title: (
      <>
        <span style={{ color: 'silver' }}>
          Recent and Upcoming Events | June 2023
        </span>
      </>
    ),
    description: null,
    link: null,
  },
  {
    title: 'Model Acquisition in the Modern Era',
    description: 'ICAPS 2023 Tutorial',
    link: 'https://icaps23.icaps-conference.org/program/tutorials/model',
    current: true,
  },
  {
    title:
      'How to React to Unsolvable Problems: On Model Space Reasoning and Large Language Models for Automated Planning',
    description:
      'Invited Talk at the ICRA 2023 Workshop on Robot Execution Failures and Failure Management Strategies',
    link: 'https://robot-failures.github.io/icra2023/schedule',
    complete: true,
  },
  {
    title: 'Planning with Mental Models: Explanations and Explainability',
    description:
      'Invited Talk at the ICRA 2023 Workshop on Explainable Robotics',
    link: 'https://nms.kcl.ac.uk/icra2023.explainablerobotics/#schedule',
    complete: true,
  },
  {
    title: 'Emergent Process Composition from Natural Language Inputs',
    description: 'BPM 2022 RPA Forum Keynote',
    link: 'https://bpm2022.uni-muenster.de/calls-and-dates/call-for-rpa-forum',
    complete: true,
  },
  {
    title: (
      <>
        <Link>
          @tchakra2
          <LogoTwitter />
        </Link>
      </>
    ),
    description: null,
    link: 'https://twitter.com/tchakra2',
  },
];

export default DATA;
