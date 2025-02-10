import React from "react";

export default function Resource(props) {

    var imgSource = '';

    const styles = {
        backgroundColor: props.on || props.name === 'Wood' || props.name === 'Stone' || props.name === 'Food' || props.name === 'Population' ? '#E3E3E3' : '#7D7D7D',
        boxShadow: props.name === 'Stone' || props.name === 'Food' || props.name === 'Population' ? 'none' : '5px 5px 5px black',
        height: props.name === 'Dark Age' || props.name === 'Feudal Age' || props.name === 'Castle Age' || props.name === 'Imperial Age' ? '75px' : '', 
        justifyContent: props.name === 'Dark Age' || props.name === 'Feudal Age' || props.name === 'Castle Age' || props.name === 'Imperial Age' ? 'center' : 'space-around'
    }

    const styles2 = {
        display: props.name === 'Dark Age' || props.name === 'Feudal Age' || props.name === 'Castle Age' || props.name === 'Imperial Age' ? 'none' : 'block' 
    }

    const styles3 = {
        display: (props.name === 'Dark Age' || props.name === 'Feudal Age' || props.name === 'Castle Age' || props.name === 'Imperial Age') && props.numOfResource >=1 ? 'block' : 'none'
    }

    React.useEffect(() => {
        //Sawmill becomes available when the required number of wood has been reached
        //Becomes unavailable when the number of wood goes below the required number

        if (props.name === 'Wood') {
            props.toggle('Wood', props.numOfResource);
            props.checkRequirements();
        }

        if (props.name === 'Stone') {
            props.toggle('Stone', props.numOfResource);
            props.checkRequirements();
        }

        if (props.name === 'Food') {
            props.toggle('Food', props.numOfResource);
            props.checkRequirements();
        }

        if (props.name === 'Population') {
            props.toggle('Population', props.numOfResource);
            props.checkRequirements();
        }

        //First row of buildings

        if (props.name === 'Sawmill' && props.numOfResource >= 1) {
            var timer = 5000 - (props.numOfResource * 100);
            if (timer <= 1000) {
                timer = 1000 - (props.numOfResource * 20);
            }
            const interval = setInterval(() => {
                props.itemTimer('Wood');
            }, timer)
            return () => clearInterval(interval);
        }
        //Stone becomes available once a stone mine has been built
        if (props.name === 'Stone Mine' && props.numOfResource >= 1) {
            var timer = 5000 - (props.numOfResource * 100);
            if (timer <= 1000) {
                timer = 1000 - (props.numOfResource * 20);
            }
            const interval = setInterval(() => {
                props.itemTimer('Stone');
            }, timer)
            return () => clearInterval(interval);
        }

        if (props.name === 'Field' && props.numOfResource >= 1) {
            var timer = 5000 - (props.numOfResource * 100);
            if (timer <= 1000) {
                timer = 1000 - (props.numOfResource * 20);
            }
            const interval = setInterval(() => {
                props.itemTimer('Food');
            }, timer)
            return () => clearInterval(interval);
        }

        if (props.name === 'House' && props.numOfResource >= 1) {
                props.itemTimer('populationPlusFive');
        }

        //Second row of buildings

        if (props.name === 'Big House' && props.numOfResource >= 1) {
            props.itemTimer('populationPlusTen');
        }

        if (props.name === 'Tree Planters' && props.numOfResource >= 1) {
            var timer = 5000 - (props.numOfResource * 100);
            if (timer <= 1000) {
                timer = 1000 - (props.numOfResource * 20);
            }
            const interval = setInterval(() => {
                props.itemTimer('Wood');
            }, timer)
            return () => clearInterval(interval);
        }

        if (props.name === 'Minecart' && props.numOfResource >= 1) {
            var timer = 5000 - (props.numOfResource * 100);
            if (timer <= 1000) {
                timer = 1000 - (props.numOfResource * 20);
            }
            const interval = setInterval(() => {
                props.itemTimer('Stone');
            }, timer)
            return () => clearInterval(interval);
        }

        if (props.name === 'Pig Farm' && props.numOfResource >= 1) {
            var timer = 5000 - (props.numOfResource * 100);
            if (timer <= 1000) {
                timer = 1000 - (props.numOfResource * 20);
            }
            const interval = setInterval(() => {
                props.itemTimer('Food');
            }, timer)
            return () => clearInterval(interval);
        }

    }, [props.numOfResource])

    if (props.name != 'Dark Age' && props.name != 'Feudal Age' && props.name != 'Castle Age' && props.name != 'Imperial Age') {
        imgSource = require('../images/' + props.name + '.png');
    }
    

    return (
            <div style={styles} id="resource" onClick={()=>props.handleClick(props.name, props.on, props.numOfResource, props.requiredWood, props.requiredStone, props.requiredFood, props.requiredPopulation)}>
                <h3 style={styles3}>Acquired</h3>
                <img style={styles2} src={imgSource}></img>
                <h1>{props.name}</h1>
                <h1 style={styles2}>{props.numOfResource}</h1>
                <h3 className="requirestoolTip">Requires: {props.requirements}</h3>
            </div>
    ) 
}
