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
    padding: 10px;
    text-align: left;
    border: 1px solid #ccc;
    font-weight: bold;
`;

export const BoardTableTd = styled.td`
    padding: 10px;
    text-align: left;
    border: 1px solid #ccc;
`;