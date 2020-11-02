import React from 'react'
import Particles from 'react-particles-js'
import { BackgroundContainer } from './BackgroundElements.js'

const index = () => {
    return (
        <BackgroundContainer>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 4,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "speed": 1,
                            "out_mode": "out"
                        },
                        "shape": {
                            "type": [
                                "image",
                                "circle"
                            ],
                            "image": [
                                {
                                    "src": require('../../images/mascot-icon/Berbicara.png'),
                                    "height": 20,
                                    "width": 23
                                },
                                {
                                    "src": require('../../images/mascot-icon/Oke.png'),
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": require('../../images/mascot-icon/Sedih.png'),
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": require('../../images/mascot-icon/PokerFace.png'),
                                    "height": 20,
                                    "width": 20
                                },
                                {
                                    "src": require('../../images/mascot-icon/Senyum.png'),
                                    "height": 20,
                                    "width": 20
                                }
                            ]
                        },
                        "color": {
                            "value": "#33c9ff"
                        },
                        "size": {
                            "value": 30,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 4,
                                "size_min": 10,
                                "sync": false
                            }
                        }
                    },
                    "retina_detect": false
                }} />
        </BackgroundContainer>
    )
}

export default index
