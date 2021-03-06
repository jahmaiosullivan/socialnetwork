import React, { PropTypes } from 'react';
import TopicItem from 'components/TopicItem';
import styles from 'css/components/main-section';

const MainSection = ({onIncrement, onDecrement, onDestroy, topics}) => {
  const topicItems = topics.map((topic, key) => {
    return (
      <TopicItem index={key}
        id={topic.id}
        key={key}
        text={topic.text}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDestroy={onDestroy} />);
    });

  return (
    <div className={styles.main-section}>
      <h3 className={styles.header}>Vote for your favorite hack day idea</h3>
      <ul className={styles.list}>{topicItems}</ul>
    </div>
  );
};

MainSection.propTypes = {
  topics: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired
};

export default MainSection;
