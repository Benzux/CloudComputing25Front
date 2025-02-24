import styled from "styled-components";

// Styled Components used in the UI, plus a const that determines what width constitutes as a "small screen", used for responsive UI

export const ResponsiveSettings = {
    smallScreenMaxWidth: "550px"
}

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
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
    padding: 1em;
`

export const TextParagraph = styled.p`
    display: flexbox;
    min-width: 200px;
    align-items: center;
`