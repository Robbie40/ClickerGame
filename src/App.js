import React from 'react';
import './App.css';
import Resource from './components/Resource';
import items from './items'

function App() {

  const [itemsInfo, setItemsInfo] = React.useState(items);

  var styles;

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

    itemsInfo.forEach(function (arrayItem) {
      if (arrayItem.name === 'Dark Age') {
        if (arrayItem.numOfResource >= 1) {
          setItemsInfo(prevItems => {
            return prevItems.map((item) => {
              if (item.requiredAge === 'Dark Age') {
                if (item.hasRequiredWood === true && item.hasRequiredStone === true && item.hasRequiredFood === true && item.hasRequiredPopulation === true) {
                  return {...item, on: item.on = true};
                }
                else {
                  return {...item, on: item.on = false};
                }
              }
              else {
                return item;
              }
            })
          })
        }
        else {
          setItemsInfo(prevItems => {
            return prevItems.map((item) => {
              if (item.requiredAge === 'Dark Age') {
                return {...item, on: item.on = false};
              }
              else {
                return item;
              }
            })
          })
        }
      }
      else if (arrayItem.name === 'Feudal Age') {
        if (arrayItem.numOfResource >= 1) {
          setItemsInfo(prevItems => {
            return prevItems.map((item) => {
              if (item.requiredAge === 'Feudal Age') {
                if (item.hasRequiredWood === true && item.hasRequiredStone === true && item.hasRequiredFood === true && item.hasRequiredPopulation === true) {
                  return {...item, on: item.on = true};
                }
                else {
                  return {...item, on: item.on = false};
                }
              }
              else {
                return item;
              }
            })
          })
        }
        else {
          setItemsInfo(prevItems => {
            return prevItems.map((item) => {
              if (item.requiredAge === 'Feudal Age') {
                return {...item, on: item.on = false};
              }
              else {
                return item;
              }
            })
          })
        }
      }
      else if (arrayItem.name === 'Castle Age') {
        if (arrayItem.numOfResource >= 1) {
          setItemsInfo(prevItems => {
            return prevItems.map((item) => {
              if (item.requiredAge === 'Castle Age') {
                if (item.hasRequiredWood === true && item.hasRequiredStone === true && item.hasRequiredFood === true && item.hasRequiredPopulation === true) {
                  return {...item, on: item.on = true};
                }
                else {
                  return {...item, on: item.on = false};
                }
              }
              else {
                return item;
              }
            })
          })
        }
        else {
          setItemsInfo(prevItems => {
            return prevItems.map((item) => {
              if (item.requiredAge === 'Castle Age') {
                return {...item, on: item.on = false};
              }
              else {
                return item;
              }
            })
          })
        }
      }
      else if (arrayItem.name === 'Imperial Age') {
        if (arrayItem.numOfResource >= 1) {
          setItemsInfo(prevItems => {
            return prevItems.map((item) => {
              if (item.requiredAge === 'Imperial Age') {
                if (item.hasRequiredWood === true && item.hasRequiredStone === true && item.hasRequiredFood === true && item.hasRequiredPopulation === true) {
                  return {...item, on: item.on = true};
                }
                else {
                  return {...item, on: item.on = false};
                }
              }
              else {
                return item;
              }
            })
          })
        }
        else {
          setItemsInfo(prevItems => {
            return prevItems.map((item) => {
              if (item.requiredAge === 'Imperial Age') {
                return {...item, on: item.on = false};
              }
              else {
                return item;
              }
            })
          })
        }
      }
    })

    setItemsInfo(prevItems => {
      return prevItems.map((item) => {
        if ((item.name === 'Dark Age' || item.name === 'Feudal Age' || item.name === 'Castle Age' || item.name === 'Imperial Age') && item.numOfResource >= 1) {
          return {...item, on: item.on = true};
        }
        else {
          return item;
        }
      })
    })
  }

  function handleClick(name, on, numOfResource, requiredWood, requiredStone, requiredFood, requiredPopulation) {
    setItemsInfo(prevItems => {
      return prevItems.map((item) => {
        return item.name === name && item.on === true ? {...item, numOfResource: item.numOfResource + 1} : item
      })
    })

    setItemsInfo(prevItems => {
        return prevItems.map((item) => {
          if ((name === 'Feudal Age' || name === 'Castle Age' || name === 'Imperial Age') && numOfResource >=1) {
            return item;
          }
          else if (item.name === 'Wood' && on === true) {
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
        if (name === 'populationPlusFive' && item.name === 'Population') {
          return {...item, numOfResource: item.numOfResource + 5};
        }
        else if (name === 'populationPlusTen' && item.name === 'Population') {
          return {...item, numOfResource: item.numOfResource + 10};
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
      requiredAge={itemInfo.requiredAge}
      requirements={itemInfo.requirements}
      handleClick={handleClick} 
      toggle={toggle}
      itemTimer={itemTimer}
      checkRequirements={checkRequirements}/>
  ))

  const ageElements = itemElements.slice(0, 4)
  const resourceElements = itemElements.slice(4, 8);  
  const buildingElements1 = itemElements.slice(8, 12);
  const buildingElements2 = itemElements.slice(12, 16);
  const unitElements = itemElements.slice(16, 20);

  return (
    <div className="App">
      <div className='itemsCont'>
        <div style={styles} className='items'>
          {ageElements}
        </div>
        <h1 className='header'>Resources</h1>
        <div className='items'>
          {resourceElements}
        </div>
        <h1 className='header'>Buildings</h1>
        <div className='items'>
          {buildingElements1}
        </div>
        <div className='items' id='buildingsLineTwo'>
          {buildingElements2}
        </div>
        <h1 className='header'>Units</h1>
        <div className='items'>
          {unitElements}
        </div>
      </div>
    </div>
  );
}

export default App;
