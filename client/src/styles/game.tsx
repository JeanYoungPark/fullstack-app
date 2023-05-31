import styled, { keyframes } from 'styled-components';

export const Wrap = styled.div`
    position: fixed;
    width: 100%;
    height: calc(100% - 80px);
    top: 80px;
    left: 0;
`;

export const Ball = styled.div`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ccc;
`;

const ballBubbleScale = keyframes`
    0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
`;

export const BallBubbleTail = styled.div`
    position: absolute;
    left: 6px;
    bottom: 3px;
    width: 11px;
    height: 8px;
    background-color: #fff;
    border-left: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    transform: rotate(355deg);
`;

export const BallClose = styled.div`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #3e85e4;
    color: #fff;
    text-align: center;
    line-height: 3vh;

    strong {
        color: #fff;
    }
`;

export const BallBubble = styled.div`
    position: absolute;
    top: -40px;
    left: 40px;
    width: 70px;
    height: auto;
    padding: 10px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #ccc;
    animation: ${ballBubbleScale} 2s linear infinite;
    cursor: pointer;

    &:hover {
        border-color: #3e85e4;

        ${BallClose} {
            display: block;
        }

        ${BallBubbleTail} {
            background-color: #3e85e4;
            border-color: #3e85e4;
        }
    }
`;