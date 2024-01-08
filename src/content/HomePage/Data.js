import React from 'react';
import { Link } from '@carbon/react';
import { LogoTwitter } from '@carbon/icons-react';

const DATA = [
  {
    title: (
      <>
        <span style={{ color: 'silver' }}>
          Recent and Upcoming Events | January 2024
        </span>
      </>
    ),
    description: null,
    link: null,
  },
  {
    title:
      'Interactive Plan Selection using Linear Temporal Logic, Disjunctive Action Landmarks, and Natural Language Instruction',
    description: 'AAAI 2024 Demo',
    link: null,
    current: true,
  },
  {
    title:
      'Can LLMs Fix Issues with Reasoning Models? Towards More Likely Models for AI Planning',
    description: 'AAAI 2024 Main Track',
    link: null,
    current: true,
  },
  {
    title: 'Explanations when no solutions can be found',
    description:
      'Invited Talk at the HRI 2024 Workshop on Explainability for Human-Robot Collaboration',
    link: null,
    current: true,
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
