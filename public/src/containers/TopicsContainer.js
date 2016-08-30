import { connect } from 'react-redux';

import React, { Component } from 'react';

import * as actions from '../actions';

import Topics from '../components/Topics';

import reduxUndo from '../managers/reduxundo';

const reducerKey = 'topics';

const mapStateToProps = (state) => {
  return state.topics;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateTitle : (id, title) => {
      dispatch(actions.updateTopicTitle(id, title));
    },

    onUpdateFontSize : (id, fontSize) => {
      dispatch(actions.updateTopicFontSize(id, fontSize));
    },

    onUpdateFillColor : (id, fillColor) => {
      dispatch(actions.updateTopicFillColor(id, fillColor));
    },
    
    onUpdateShapeClass: (id, shapeClass) => {
      dispatch(actions.updateTopicShapeClass(id, shapeClass));
    },
    
    onUpdateLabel: (id, labelText) => {
      dispatch(actions.updateTopicLabel(id, labelText));
    },
    
    onAddChildTopic : (id, childId) => {
      dispatch(actions.addChildTopic(id, childId));
    },
    
    onRemoveSelfTopic : (id) => {
      dispatch(actions.removeSelfTopic(id));
    }
  }
};


const TopicsContainer = connect(mapStateToProps, reduxUndo(mapDispatchToProps, reducerKey))(Topics);

export default TopicsContainer;