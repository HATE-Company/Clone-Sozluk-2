import styled from "styled-components";

export const Styled = styled.div`
    display: flex;
    padding: 10px;
    border: 1px solid red;
    min-width: 16rem;
    justify-content: center;
    flex-grow: 1;
    background: rgba(200,216,222,0.05);
    -webkit-backdrop-filter: blur(48px);
    backdrop-filter: blur(48px);
    border: 1px solid rgba(200,216,222,0.025);
    height: 400px;
    overflow-y: auto;
    box-sizing: border-box;
    border-radius: 1rem;
    overflow-x: hidden;
    ::-webkit-scrollbar-track {
	    border-radius: 1rem;
	    background-color: none;
    }
    ::-webkit-scrollbar {
        width: .4rem;
	    background-color: none;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 1rem;
        border-radius: 20px;
    }




`