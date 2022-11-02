import React, { useEffect, useState } from 'react'
//import axios from 'axios';
import Modeler from 'bpmn-js/lib/Modeler';
import { BpmnPropertiesPanelModule, BpmnPropertiesProviderModule } from 'bpmn-js-properties-panel';

import scheme from './resources/initial.js'


//CSS
import './App.scss';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import 'bpmn-js-properties-panel/dist/assets/properties-panel.css';



//-----------------------------------------------------------------------------------------------------------\\


const App = () => {

  
  const [ modeler, setModeler ] = useState();

  useEffect( () => {
    initModeler()
  }, []);

  const initModeler = () => {

    const modeler = new Modeler({
  
      container: '.canvas',
      propertiesPanel: {
        parent: '.properties-panel'
      },
      additionalModules: [
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule
      ],
      keyboard: {
        bindTo: window
      },
  
    });
  
    setModeler(modeler)
  
  }

  const openDiagram = async () => {

  /*
    const diagramUrl = 'https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn';
  
    await axios(diagramUrl)
      .then( async res => {
        await modeler.importXML(res.data);
        console.log({xml: res.data, type: typeof res.data, typeXml: typeof bpmnXML, bp: bpmnXML});
      })
  */
    await modeler.importXML(scheme());
  };

  return (
    <div className='bpms'>
      <div className="toolbar">
        <div 
          className="toolbar__button"
          onClick={ () => openDiagram() }
          >
          Открыть диаграмму
        </div>
      </div>
      <div className="canvas-container">
        <div className='canvas' />
        <div className='properties-panel' />        
      </div>
    </div>
  );
}

export default App;
