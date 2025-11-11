import React from 'react';
import {
  Theme,
  Grid,
  Column,
  // Link,
  // ProgressStep,
  // ProgressIndicator,
} from '@carbon/react';

import PageHeader from '../../components/PageHeader';
// import DATA from './Data.js';

// const ProgressStepNew = props => {
//   return (
//     <ProgressStep
//       style={{ marginBottom: '20px', minHeight: '0', width: '85%' }}
//       complete={props.props.complete}
//       current={props.props.current}
//       label={
//         <div style={{ marginBottom: '5px' }}>
//           {!props.props.link && (
//             <span style={{ color: 'white' }}>{props.props.title}</span>
//           )}
//           {props.props.link && (
//             <Link
//               style={{ color: 'white' }}
//               href={props.props.link}
//               target="_blank">
//               {props.props.title}
//             </Link>
//           )}
//         </div>
//       }
//       secondaryLabel={
//         <span style={{ color: 'silver' }}>{props.props.description}</span>
//       }
//     />
//   );
// };

class LandingPage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      folded: false,
    };
  }

  render() {
    return (
      <Theme
        className="offset"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/cover.png)`,
          backgroundPosition: 'right',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <PageHeader />
        <Grid>
          <Column lg={{ start: 4, end: 8 }} md={{ start: 2, end: 9 }} sm={4}>
            {/* <ProgressIndicator vertical currentIndex={1} className="news-area">
              {DATA.map((item, key) => (
                <React.Fragment key={key}>
                  <ProgressStepNew props={item} />
                </React.Fragment>
              ))}
            </ProgressIndicator> */}
          </Column>
        </Grid>
      </Theme>
    );
  }
}

export default LandingPage;
