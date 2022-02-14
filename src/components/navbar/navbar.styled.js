import styled from "styled-components";
import { GloMedium, GloPaddingSm, GloSmall } from "../../styles/GlobalStyles";

export const ScNavbar = styled.div`
    ${GloPaddingSm};
    background: var(--primary-bg);
    color: var(--primary-color);
    line-height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--primary-color);
    font-weight: 700;
    transition: all 0.3s ease;
    ${GloSmall({ flexDirection: "column", justifyContent: "space-between" })};

    .logoContainer {
        .logo {
            color: var(--col-brand);
            font-size: 1.8rem;
            ${GloMedium({ fontSize: "1.5rem" })};
            ${GloSmall({ fontSize: "1.3rem" })};
        }
    }

    .logoLinks {
        display: flex;
        align-items: center;

        p {
            font-size: 18px;
            margin-right: 2rem;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s ease;

            &:hover {
                color: var(--col-brand);
            }
        }

        span {
            font-size: 20px;
            cursor: pointer;
        }
    }
`;
