'use client';
import AnimatedCursor from 'react-animated-cursor';

const CustomCursor = () => {
    return (
        <AnimatedCursor
            color="72,76,78"
            innerSize={15}
            outerSize={40}
            innerScale={1}
            outerScale={1.4}
            outerAlpha={0.49}
            hasBlendMode={true}
            outerStyle={{
                backgroundColor: 'rgba(72,76,78,0.40)'
            }}
            innerStyle={{
                backgroundColor: "#930EFF",
            }}
        />
    );
};

export default CustomCursor;
