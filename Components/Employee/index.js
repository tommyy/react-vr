import React from 'react';
import { View, Text, Image, Box, VrButton, Animated } from 'react-vr';

export default class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rotation: new Animated.Value(0),
        };
        this.animate = this.animate.bind(this);
    }

    animate() {
        const { rotation } = this.state;
        const rotateTo = rotation._value > 0 ? 0 : 180;

        Animated.spring(
        rotation,
        {
            toValue: rotateTo,
            friction: 10
        }
        ).start();
    }

    render() {
        const { rotation } = this.state;
        const { name, title, image } = this.props;
        return (
        <VrButton style={{ ...this.props.style }} onClick={() => this.animate()}>
            <Animated.View style={{
                transform: [{ rotateX: 0 }, { rotateY: rotation }]
            }}>

                <Box
                dimWidth={4}
                dimDepth={4}
                dimHeight={4}
                lit={true}
                style={{
                    color: '#ddd'
                }}
                >
                    {/* Front */}
                    <Image
                    source={{ uri: image }}
                    style={{
                        position: 'absolute',
                        width: 4,
                        height: 4,
                        layoutOrigin: [0.5, 0.5],
                        transform: [{ rotateX: 180 }, { rotateZ: 180 }, { translateZ: 2.01 }]
                    }}
                    >
                        <Text
                        style={{
                            fontSize: 0.3,
                            textAlign: 'center',
                            padding: 0.15,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            position: 'absolute',
                            backgroundColor: 'rgba(0, 0, 0, .5)',
                            textAlignVertical: 'center'
                        }}
                        >{name}</Text>
                    </Image>

                    {/* Back */}
                    <Text
                    style={{
                        width: 4,
                        height: 4,
                        layoutOrigin: [0.5, 0.5],
                        fontSize: 0.3,
                        textAlign: 'center',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        top: 0,
                        transform: [{ translateZ: 2.01 }],
                        position: 'absolute',
                        backgroundColor: 'rgba(0, 0, 0, .5)',
                        textAlignVertical: 'center'
                    }}
                    >{title}</Text>
                </Box>

            </Animated.View>
        </VrButton>
        )
    }
}