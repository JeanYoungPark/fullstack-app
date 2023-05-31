import { useEffect, useMemo, useRef, useState } from "react";
import { Wrap, Ball, BallBubble, BallBubbleTail, BallClose } from "../styles/game";

export const Home = () => {
    const ballRef = useRef<HTMLDivElement>(null);
    const [ctrlKey, setCtrlKey] = useState(false);
    const [arrowKey, setArrowKey] = useState('');
    const arrowKeyArr = useMemo(() => { return ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]}, []);
    
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            const ball = ballRef.current;

            if(ball){
                let speed = 10;
                let keyName = '';
                
                if(e.ctrlKey){
                    setCtrlKey(true);
                }

                if(arrowKeyArr.includes(e.key)){
                    setArrowKey(e.key);
                }

                if((ctrlKey && arrowKeyArr.includes(e.key)) || (arrowKey && e.ctrlKey)){
                    // 컨트롤키 먼저 누른 경우, 방향키를 먼저 누른 경우
                    speed += 10;
                    keyName = arrowKey || e.key;
                }else if(arrowKeyArr.includes(e.key)){
                    keyName = e.key;
                }

                if(keyName){
                    if(keyName === "ArrowUp"){
                        ball.style.top = `${ball.offsetTop - speed}px`;
                    }else if(keyName === "ArrowDown"){
                        ball.style.top = `${ball.offsetTop + speed}px`;
                    }else if(keyName === "ArrowLeft"){
                        ball.style.left = `${ball.offsetLeft - speed}px`;
                    }else if(keyName === "ArrowRight"){
                        ball.style.left = `${ball.offsetLeft + speed}px`;
                    }
                }
            }
        };       

        window.addEventListener("keydown", handleKeyPress);

        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [arrowKeyArr, ctrlKey, arrowKey]);
    
    useEffect(() => {
        const handleKyePressOut = (e: KeyboardEvent) => {
            if(e.ctrlKey){
                setCtrlKey(false);
            }

            if(arrowKeyArr.includes(e.key)){
                setArrowKey('');
            }
        };

        window.addEventListener("keyup", handleKyePressOut);
        return () => window.removeEventListener("keyup", handleKyePressOut);
    }, [arrowKeyArr]);

    return (
        <Wrap>
            <Ball ref={ballRef}>
                <BallBubble>
                    <BallClose><strong>x</strong></BallClose>
                    <BallBubbleTail />
                    <strong>booster</strong> with ctrl!
                </BallBubble>
            </Ball>
        </Wrap>
    );
}