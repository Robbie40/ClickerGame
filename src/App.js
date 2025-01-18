import React from 'react';
import './App.css';
import Resource from './components/Resource';
import items from './items'

function App() {

  const [itemsInfo, setItemsInfo] = React.useState(items);

  function toggle(name, numOfResource) {
    setItemsInfo(prevItems => {
        return prevItems.map((item) => {
            if (item.name === 'Stone' || item.name === 'Food' || item.name === 'Population') {
              return {...item, hasRequiredWood: item.hasRequiredWood = false};
            }
            else if (name === 'Wood' && numOfResource >= item.requiredWood) {
              return {...item, hasRequiredWood: item.hasRequiredWood = true};
            }
            else if (name === 'Wood' && numOfResource < item.requiredWood) {
              return {...item, hasRequiredWood: item.hasRequiredWood = false};
            }
            else if (name === 'Stone' && numOfResource >= item.requiredStone) {
              return {...item, hasRequiredStone: item.hasRequiredStone = true};
            }
            else if (name === 'Stone' && numOfResource < item.requiredStone) {
              return {...item, hasRequiredStone: item.hasRequiredStone = false};
            }
            else if (name === 'Food' && numOfResource >= item.requiredFood) {
              return {...item, hasRequiredFood: item.hasRequiredFood = true};
            }
            else if (name === 'Food' && numOfResource < item.requiredFood) {
              return {...item, hasRequiredFood: item.hasRequiredFood = false};
            }
            else if (name === 'Population' && numOfResource >= item.requiredPopulation) {
              return {...item, hasRequiredPopulation: item.hasRequiredPopulation = true};
            }
            else if (name === 'Population' && numOfResource < item.requiredPopulation) {
              return {...item, hasRequiredPopulation: item.hasRequiredPopulation = false};
            }
            else {
              return item;
          }
        })
    }) 
  }

  function checkRequirements() {
    setItemsInfo(prevItems => {
      return prevItems.map((item) => {
        if (item.hasRequiredWood === true && item.hasRequiredStone === true && item.hasRequiredFood === true && item.hasRequiredPopulation === true) {
          return {...item, on: item.on = true};
        }
        else {
          return {...item, on: item.on = false};
        }
      })
    })
  }

  function handleClick(name, on, requiredWood, requiredStone, requiredFood, requiredPopulation) {
    setItemsInfo(prevItems => {
      return prevItems.map((item) => {
        return item.name === name && item.on === true ? {...item, numOfResource: item.numOfResource + 1} : item
      })
    })

    setItemsInfo(prevItems => {
        return prevItems.map((item) => {
          if (item.name === 'Wood' && on === true) {
            return {...item, numOfResource: item.numOfResource - requiredWood};
          }
          else if (item.name === 'Stone' && on === true) {
            return {...item, numOfResource: item.numOfResource - requiredStone};
          }
          else if (item.name === 'Food' && on === true) {
            return {...item, numOfResource: item.numOfResource - requiredFood};
          }
          else if (item.name === 'Population' && on === true) {
            return {...item, numOfResource: item.numOfResource - requiredPopulation};
          }
          else {
            return item;
          }
        })
      })
  } 

  function itemTimer(name) {
    setItemsInfo(prevItems => {
      return prevItems.map((item) => {
        if (name === 'Population' && item.name === 'Population') {
          return {...item, numOfResource: item.numOfResource + 5};
        }
        else if (item.name === name) {
          return {...item, numOfResource: item.numOfResource + 1};
        }
        else {
          return item;
        }
      })
    })
  }

  const itemElements = itemsInfo.map(itemInfo => (
    <Resource 
      name={itemInfo.name} 
      on={itemInfo.on}
      numOfResource={itemInfo.numOfResource}
      requiredWood={itemInfo.requiredWood}
      requiredStone={itemInfo.requiredStone}
      requiredFood={itemInfo.requiredFood}
      requiredPopulation={itemInfo.requiredPopulation}
      requirements={itemInfo.requirements}
      handleClick={handleClick} 
      toggle={toggle}
      itemTimer={itemTimer}
      checkRequirements={checkRequirements}/>
  ))

  const resourceElements = itemElements.slice(0, 4);  
  const buildingElements = itemElements.slice(4, 8);
  const unitElements = itemElements.slice(8,12);

  return (
    <div className="App">
      <div className='itemsCont'>
        <h1>Resources</h1>
        <div className='items'>
          {resourceElements}
        </div>
        <h1>Buildings</h1>
        <div className='items'>
          {buildingElements}
        </div>
        <h1>Units</h1>
        <div className='items'>
          {unitElements}
        </div>
      </div>
    </div>
  );
}

export default App;
