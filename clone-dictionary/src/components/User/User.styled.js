import styled from "styled-components";

export const Styled = styled.div`
    display: flex;
    padding: 10px;
    min-width: 16rem;
    justify-content: end;
    flex-grow: 1;
    align-items: center;

    .user-icon-btn {
        text-align: center;
        margin-right: .2rem;
    }

    .user-dropdown {
        background: rgba(255,255,255,0.5);
        -webkit-backdrop-filter: blur(4px);
        backdrop-filter: blur(4px);
        border: 1px solid rgba(255,255,255,0.25);
    }
`