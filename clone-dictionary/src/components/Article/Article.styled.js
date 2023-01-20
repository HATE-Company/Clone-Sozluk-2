import styled from "styled-components";

export const Styled = styled.div`
    display: flex;
    padding: 10px;
    border: 1px solid red;
    min-width: 16rem;
    justify-content: end;
    flex-grow: 1;
    background: rgba(200,216,222,0.05);
    -webkit-backdrop-filter: blur(48px);
    backdrop-filter: blur(48px);
    border: 1px solid rgba(200,216,222,0.025);
    border-radius: 1rem;

    .article {
        background-image: url('../images/art1.png');
        width: 100px;
        height: 100px;
        margin: .3rem;
        border-radius: 10px;
    }
`