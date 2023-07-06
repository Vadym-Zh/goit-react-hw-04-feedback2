import PropTypes from 'prop-types';

import {
  // FeedbackList,
  FeedbackItem,
  FeedbackBtn,
} from './FeedbackOptions.styled';

export function FeedbackOptions({ options, increment }) {
  // <FeedbackList>
  //
  // </FeedbackList>;

  return options.map(label => (
    <FeedbackItem key={label}>
      <FeedbackBtn key={label} type="button" name={label} onClick={increment}>
        {label[0].toUpperCase() + label.slice(1)}
      </FeedbackBtn>
    </FeedbackItem>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  increment: PropTypes.func.isRequired,
};
