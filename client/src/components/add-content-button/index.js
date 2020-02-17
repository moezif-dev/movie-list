import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContent, deleteContent } from '../../store/actions/contentActions';

import './css/add-content-button.scss';

const AddContentButton = (props) => {
  const allContent = useSelector( state => state.content.allContent );
  const dispatch = useDispatch();

  const { media } = props;
  const dispatchAddContent = (newContent) => dispatch(addContent(newContent));
  const dispatchDeleteContent = (content) => dispatch(deleteContent(content));


  const isContent = allContent.find( c => c.imdbID === media.imdbID ) || false;

  const clickHandler = content => event => {
    event.preventDefault();
    if (isContent) {
      dispatchDeleteContent(content.imdbID);
    } else {
      dispatchAddContent(content);
    }
  };

  return (
    <button 
      className="add-content button primary"
      onClick={ clickHandler(media) }
    >
      { isContent ? 
        <Fragment><i className='fas fa-minus'></i>Delete from My Content</Fragment> : 
        <Fragment><i className='fas fa-plus'></i>Add to My Content</Fragment>
      }
    </button>
  )
};

export default AddContentButton;