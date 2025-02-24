import styled from "styled-components";

export const ResponsiveSettings = {
    smallScreenMaxWidth: "550px"
}

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1500px;
    width: 100%;
    align-items: center;
    justify-self: center;
    user-select: text;
    overflow-y: auto;
`

export const DataDiv = styled.div`
    display: flex;
    max-width: max-content;
    align-items: center;
    justify-self: center;
`

export const TextParagraph = styled.p`
    display: flexbox;
    min-width: 200px;
    align-items: center;
`