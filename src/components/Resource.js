import React from "react";

export default function Resource(props) {

    const styles = {
        backgroundColor: props.on || props.name === 'Wood' || props.name === 'Stone' || props.name === 'Food' || props.name === 'Population' ? '#E3E3E3' : '#7D7D7D',
        boxShadow: props.name === 'Stone' || props.name === 'Food' || props.name === 'Population' ? 'none' : '5px 5px 5px black'
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

        if (props.name === 'Sawmill' && props.numOfResource >= 1) {
            const timer = 5000 - (props.numOfResource * 10);
            const interval = setInterval(() => {
                props.itemTimer('Wood');
            }, timer)
            return () => clearInterval(interval);
        }
        //Stone becomes available once a stone mine has been built
        if (props.name === 'Stone Mine' && props.numOfResource >= 1) {
            const timer = 5000 - (props.numOfResource * 10);
            const interval = setInterval(() => {
                props.itemTimer('Stone');
            }, timer)
            return () => clearInterval(interval);
        }

        if (props.name === 'Field' && props.numOfResource >= 1) {
            const timer = 5000 - (props.numOfResource * 10);
            const interval = setInterval(() => {
                props.itemTimer('Food');
            }, timer)
            return () => clearInterval(interval);
        }

        if (props.name === 'House' && props.numOfResource >= 1) {
                props.itemTimer('Population');
        }

        

    }, [props.numOfResource])


    return (
            <div style={styles} id="resource" onClick={()=>props.handleClick(props.name, props.on, props.requiredWood, props.requiredStone, props.requiredFood, props.requiredPopulation)}>
                <img src={require('../images/' + props.name + '.png')}></img>
                <h1>{props.name}</h1>
                <h1>{props.numOfResource}</h1>
                <h3 className="requirestoolTip">Requires: {props.requirements}</h3>
            </div>
    ) 
}
