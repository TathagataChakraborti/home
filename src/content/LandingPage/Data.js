import React from 'react';
import { Link } from 'carbon-components-react';
import { LogoTwitter32 } from '@carbon/icons-react';

const DATA = [
  {
    title: (
      <>
        <span style={{ color: 'silver' }}>
          Recent and Upcoming Events | March 21
        </span>
      </>
    ),
    description: null,
    link: null,
  },
  {
    title: 'Emergent Process Composition from Natural Language Inputs',
    description: 'BPM 2022 RPA Forum Keynote',
    link: 'https://bpm2022.uni-muenster.de/calls-and-dates/call-for-rpa-forum',
  },
  {
    title: 'Automated Planning and Business Process Management',
    description: 'BPM 2021 Tutorial',
    link: 'http://ibm.biz/bpm-2021-tutorial',
  },
  {
    title: 'Explainability of Sequential Decision-Making Models',
    description: 'XAI Bootscamp at RBCDSAI',
    link: 'https://rbcdsai.iitm.ac.in/events/rbcdsai-dai-bootcamp/',
  },
  {
    title: 'Designing Goal-Oriented Conversational Agents',
    description: (
      <>
        <span style={{ color: 'silver' }}>Industry Talk at ICAPS 2021</span>
      </>
    ),
    link: 'https://icaps21.icaps-conference.org/Schedule/index.html',
  },
  {
    title: 'A Crash Course in Designing Interpretable Agent Behavior',
    description: (
      <>
        <span style={{ color: 'silver' }}>
          Invited Talk at SSIR-HRI
          <br />
          (HRI) 2021
        </span>
      </>
    ),
    link: 'https://sites.google.com/view/realworldhri-workshop/home',
  },
  {
    title:
      'How Symbolic AI and ML can Combine for the Design of Conversational Agents at Scale',
    description: (
      <>
        <span style={{ color: 'silver' }}>
          Invited Talk at DEEP-DIAL
          <br />
          (AAAI) 2021
        </span>
      </>
    ),
    link: 'https://sites.google.com/view/deep-dial2021/',
  },
  {
    title: (
      <>
        <Link>
          @tchakra2
          <LogoTwitter32 />
        </Link>
      </>
    ),
    description: null,
    link: 'https://twitter.com/tchakra2',
  },
];

export default DATA;
