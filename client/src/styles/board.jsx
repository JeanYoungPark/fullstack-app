import styled from 'styled-components';

export const BoardTitle = styled.h1`
    font-size: 1.5em;
    text-align: center;
    padding: 3vh 0 3vh 0;
`;

export const BoardTab = styled.ul`
    display: flex;
    justify-content: center;
    margin-bottom: 3vh;
`;

export const BoardTabList = styled.li`
    padding: 0 1vw;
    cursor: pointer;

    &.focus {
        color
        : blue;
        text-decoration: underline;
    }
`;

export const BoardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5vh;
    height: 30px;
`;

export const BoardSearchWrap = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const BoardSearch = styled.input`
    height: 100%;
    border: 1px solid #ccc;
    padding: 5px;
    box-sizing: border-box;
`;

export const BoardSearchBtn = styled.button`
    height: 100%;
    padding: 2px 8px;
    border: 1px solid #ccc;
    border-width: 1px 1px 1px 0;
    box-sizing: border-box;
`;

export const BoardTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

export const BoardTableTh = styled.th`
    padding: 15px;
    text-align: center;
    border-top: 1px solid #333;
    border-bottom: 1px solid #ccc;
    font-size: 1.1em;
    font-weight: bold;
`;

export const BoardTableTd = styled.td`
    padding: 15px;
    text-align: center;
    border: 1px solid #ccc;
    border-width: 0 0 1px 0;
    font-size: 1.1em;

    &.left {
        text-align: left;
    }

    &.bold {
        font-weight: bold;
    }
`;

export const BoardPostBtnWrap = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-top: 1vh;
`;

export const BoardPostBtn = styled.a`
    padding: 8px;
    text-align: center;
    color: #333;
    background-color: #f3f3f3;
    border: 1px solid #ddd;

    &:hover {
        color: #333;
        text-decoration: none;
    }
`;

export const BoardPostForm = styled.div`
    input, textarea {
        display: block;
        width: 100%;
        padding: 10px;
        border-radius: 4px;
        border: 1px solid #ccc;
        margin-bottom: 20px;
        box-sizing: border-box;
    }
`;