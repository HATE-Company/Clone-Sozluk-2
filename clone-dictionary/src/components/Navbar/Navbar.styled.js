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


    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);;
	    border-radius: 1rem;
	    background-color: none;
    }
    ::-webkit-scrollbar {
        width: .4rem;
	    background-color: none;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 1rem;
	    box-shadow: inset 0 0 6px rgba(0,0,0,.3);

        background: rgba(187, 187, 187, 0.39);
        border-radius: 20px;
    }




`