import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Box,
    PointLight,
} from 'react-vr';
import Employee from "./Components/Employee";
import data from './data';
const CIRCLE_RADIUS = 17;

export default class react_vr_test extends React.Component {
    render() {
        // Lay out each employee in a 360 degrees layout, and rotate each box to face the camera.
        const increase = Math.PI * 2 / data.length;
        let angle = 0;
        return (
        <View>
            <Pano source={{uri:'./static_assets/chess-world.jpg'}}/>
            {data.map((employee, index) => {
                const x = CIRCLE_RADIUS * Math.cos(angle);
                const z = CIRCLE_RADIUS * Math.sin(angle);
                const rotation = Math.atan2(x, z) * (180 / Math.PI);
                angle += increase;

                return (
                    <Employee
                    key={index}
                    style={{
                        opacity: 1,
                        layoutOrigin: [0.5, 0.5],
                        transform: [{ translate: [x, -2.5, z] }, { rotateY: rotation }]
                    }}
                    {...employee}
                    />
                )
            })}
            <PointLight
                style={{
                    position: 'absolute',
                    transform: [{ translate: [0, 5, 0] }]
                }}
            />
        </View>
        );
    }
};

AppRegistry.registerComponent('react_vr_test', () => react_vr_test);
