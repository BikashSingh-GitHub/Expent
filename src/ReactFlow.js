import React, { useState } from 'react';
import ReactFlowRenderer, { useZoomPanHelper } from 'react-flow-renderer';
import Controls from './Controls';
import Background from './Background';

const initialElements = [
  { id: '1', type: 'input', data: { label: 'Start' }, position: { x: 100, y: 100 } },
  { id: '2', type: 'default', data: { label: 'Requirement Selection' }, position: { x: 300, y: 100 } },
  { id: '3', type: 'default', data: { label: 'Questionnaire' }, position: { x: 500, y: 100 } },
  { id: '4', type: 'default', data: { label: 'Collaborator Feedback 1' }, position: { x: 700, y: 100 } },
  { id: '5', type: 'default', data: { label: 'Collaborator Feedback 2' }, position: { x: 900, y: 100 } },
  { id: '6', type: 'default', data: { label: 'Collaborator Feedback 3' }, position: { x: 1100, y: 100 } },
  { id: 'e1-2', source: '1', target: '2', type: 'step' },
  { id: 'e2-3', source: '2', target: '3', type: 'step' },
  { id: 'e3-4', source: '3', target: '4', type: 'step' },
  { id: 'e4-5', source: '4', target: '5', type: 'step' },
  { id: 'e5-6', source: '5', target: '6', type: 'step' },
];

function ReactFlow() {
  const [elements, setElements] = useState(initialElements);
  const { fitView } = useZoomPanHelper();

  const onElementsRemove = (elementsToRemove) => {
    setElements((els) => els.filter((el) => !elementsToRemove.some((toRemove) => toRemove.id === el.id)));
  };

  return (
    <ReactFlowRenderer elements={elements} onElementsRemove={onElementsRemove} snapToGrid={true}>
      <Controls />
      <Background />
      <button onClick={fitView}>Fit view</button>
    </ReactFlowRenderer>
  );
}

export default ReactFlow;
