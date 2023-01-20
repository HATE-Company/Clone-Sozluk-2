import styled from "styled-components";

export const Styled = styled.div`
    display: flex;
    flex-grow: 8;
    border: 1px solid gray;
    flex-direction: column;
    margin: 0 2rem;
    background: rgba(200,216,222,0.05);
    -webkit-backdrop-filter: blur(48px);
    backdrop-filter: blur(48px);
    border: 1px solid rgba(200,216,222,0.025);
    border-radius: 1rem;
    align-items: flex-start;
    .section-text {
        display: flex;
        justify-content: center;
        align-items: center;
        color: gray;
        text-align: center;
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        margin-top: 1rem;
    }
    
`