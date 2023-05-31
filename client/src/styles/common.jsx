import styled from 'styled-components';

export const CommonLayout = styled.div`
    padding: 0 15vw 0 15vw;
`;

export const CommonTab = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    height: 80px;
    padding: 10px 0;
    box-sizing: border-box;
`;

export const CommonList = styled.ul`
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const CommonTabLinkWrap = styled.div`
    display: flex;
`;

export const CommonTabLink = styled.a`
    display: block;
    color: #333;
    font-size: 1.1em;

    &.pd-left {
        padding-left: 10px;
    }

    &:hover {
        font-weight: bold;
        color: #609ae9;
        text-decoration: none;
    }
`;

export const CommonBtnButton = styled.button`
    display: block;
    width: 100%;
    border: none;
    background-color: #609ae9;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &:hover {
        background-color: #3e85e4;
    }
`;

export const CommonBtnA = styled.a`
    display: block;
    width: 100%;
    border: none;
    background-color: #609ae9;
    color: #fff;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &:hover {
        background-color: #3e85e4;
    }
`;