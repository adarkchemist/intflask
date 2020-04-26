import React, { useState, useCallback } from 'react';
import { useWindowSize } from '../hooks/window';
import { useStateToDom, SET_MAPPING } from '../stateToDomContext';

export function withPosition(Component) {
  return ({ children, ...props }) => {
    const windowSize = useWindowSize();
    const { dispatch } = useStateToDom();
    const { element: slateElement } = props;
    const [position, setPosition] = useState({
      global: null,
      relative: null,
    });
    const divWrapperRef = useCallback(
      (node) => {
        if (node == null) {
          return;
        }
        const nodeRect = node.getBoundingClientRect();
        const parentNodeRect = node.offsetParent.getBoundingClientRect();
        const newPosition = {
          global: {
            x: nodeRect.x,
            y: nodeRect.y,
            width: nodeRect.width,
            height: nodeRect.height,
            top: nodeRect.top,
            right: nodeRect.right,
            bottom: nodeRect.bottom,
            left: nodeRect.left,
          },
          relative: {
            x: nodeRect.x - parentNodeRect.x,
            y: nodeRect.y - parentNodeRect.y,
            width: nodeRect.width - parentNodeRect.width,
            height: nodeRect.height - parentNodeRect.height,
            top: nodeRect.top - parentNodeRect.top,
            right: nodeRect.right - parentNodeRect.right,
            bottom: nodeRect.bottom - parentNodeRect.bottom,
            left: nodeRect.left - parentNodeRect.left,
          },
        };
        console.log('Got element DOM, dispatched SET_MAPPING');
        setPosition(newPosition);
        dispatch({ type: SET_MAPPING, key: slateElement, value: newPosition });
      },
      [windowSize, slateElement],
    );

    return (
      <div ref={divWrapperRef}>
        <Component {...props} position={position}>
          {children}
        </Component>
      </div>
    );
  };
}