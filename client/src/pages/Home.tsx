import { useEffect, useRef } from "react";
import { Wrap, Ball, BallBubble, BallBubbleTail, BallClose } from "../styles/game";

function Home() {
    const ballRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            const ball = ballRef.current;
            let speed = 10;

            if(e.ctrlKey){
                speed += 20;
            }

            if(ball){
                if(e.key === "ArrowUp"){
                    ball.style.top = `${ball.offsetTop - speed}px`;
                }else if(e.key === "ArrowDown"){
                    ball.style.top = `${ball.offsetTop + speed}px`;
                }else if(e.key === "ArrowLeft"){
                    ball.style.left = `${ball.offsetLeft - speed}px`;
                }else if(e.key === "ArrowRight"){
                    ball.style.left = `${ball.offsetLeft + speed}px`;
                }
            }

        }

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, []);

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

export default Home;
