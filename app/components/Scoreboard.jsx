import React, { PropTypes } from 'react';
import styles from 'css/components/scoreboard';

const Scoreboard = ({topics}) => {
  const topicListItems = topics.map((topic, key) => {
    return (
    <li className={styles.item} key={key}>
      <span className={styles.topic}>{topic.text}</span>
      <span className={styles.count}>{topic.count}</span>
    </li>);
  });
  return (
    <div className={styles.scoreboard}>
      <h3 className={styles.header}>Vote count</h3>
      <ul className={styles.list}>
        {topicListItems}
      </ul>
    </div>
  );
};

Scoreboard.propTypes = {
  topics: PropTypes.array.isRequired
};

export default Scoreboard;
