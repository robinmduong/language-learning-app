

import React, { useEffect, useState, useRef} from 'react';
import '../app.css'

export default function Canvas() {

    const canvasRef = useRef(null);
    const contextRef = useRef(null); // can use ref to store info
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2; // support high-res screens
        canvas.height = window.innerHeight * 2;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        const context = canvas.getContext("2d");
        context.scale(2, 2);
        context.lineCap = "round"; // rounded ends to line
        context.strokeStyle = "black";
        context.lineWidth = 3;
        contextRef.current = context;

    }, [])

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent; 
        contextRef.current.beginPath();
        contextRef.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    }

    const stopDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    }

    const draw = ({ nativeEvent }) => {
        if (isDrawing) {
            return;
        }
        const { offsetX, offsetY } = nativeEvent;
        contextRef.moveTo(offsetX, offsetY);
        contextRef.current.stroke();
    }

    return (
        <div className="Canvas-wrapper page-wrapper">
            <canvas id="writing-canvas">
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
                onMouseMove={draw}
                ref={canvasRef}
            </canvas>
        </div>
    )
}