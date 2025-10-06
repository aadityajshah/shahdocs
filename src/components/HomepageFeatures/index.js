import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'How-To\'s',
    Svg: require('@site/static/img/howto.svg').default,
    description: (
      <>
        I'll post how-to's of things I've actually done, and documented. 
      </>
    ),
  },
  {
    title: 'Reviews',
    Svg: require('@site/static/img/review.svg').default,
    description: (
      <>
        I'll have some indepth reviews of products, services, food, restaurants, 
        and what have you; from my objective point of view. 
      </>
    ),
  },
  {
    title: 'Thoughts/Ideas/Ramblings',
    Svg: require('@site/static/img/ideas.svg').default,
    description: (
      <>
        I'll share my ideas, thoughts, inner ramblings with you. Maybe we have
        some like minded ideas? Maybe I'll open your eyes to something you haven't considered. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
