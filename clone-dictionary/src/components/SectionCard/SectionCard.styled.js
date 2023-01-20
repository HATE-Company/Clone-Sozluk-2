import styled from "styled-components";

export const Styled = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 1rem;
    justify-content: flex-start;
    box-sizing: border-box;

    .card-general {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 2rem;
        margin: 1rem 0;
        border-radius: 1rem;
        background-color: #0A0C14;
    }
    .card-header {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        font-size: small;
        margin-bottom: 10px;
    }
    .card-left {
        display: flex;
        flex-direction: row;
        color: white;
        gap: .4rem;
    }
    .card-right {
        color: gray;
    }
    .card-main {
        display: flex;
        justify-content: flex-start;
        margin: 1rem 0;
        flex-direction: column;
    }
    .card-main-text {
        text-align: justify;
    }
    .card-img {
        display: flex;
        justify-content: center;
        width: 100%;

    }
`