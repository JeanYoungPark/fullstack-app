
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
        color: blue;
        text-decoration: none;
    }
`;