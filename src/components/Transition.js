import React, { useEffect, useRef } from 'react';
import {Power4} from 'gsap';

const Transition = ({timeline}) => {
    const trans = useRef(null);

    useEffect(() => {
        timeline.to(trans.current, {
            duration:5,
            x: 2600,
            ease: Power4.easeInOut
        })
    }, [timeline])
    return (
        <div>
            <div
            className='absolute z-50 bg-purple-400 top-0 w-full h-full'
            ></div>
        </div>
    );
};

export default Transition;