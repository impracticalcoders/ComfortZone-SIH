import React, {useEffect} from "react"
import {Animated} from "react-native"
import {transform} from "@babel/core";

export default function SlideUp() {
    const opacity = new Animated.Value(0);

    useEffect(() => {
        Animated
            .timing(position, {
                toValue: {
                    x: 100,
                    y: 100
                },
                duration: 500,
                delay: 300
            })
            .start();
    }, []);

    return (<Animated.Text style={{
            position
        }}>Example text</Animated.Text>);
}