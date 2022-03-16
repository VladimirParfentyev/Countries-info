import styled from "styled-components";
import { Link } from "react-router-dom";

export const Links = styled(Link)`
    text-decoration: none;
    display: block;
    transition: .1s;
    color:var(--color-link);

&:link {
  color: #265301;
  color:var(--color-link);
}


&:hover {
  transform: scale(1.2, 1.2);
  color:var(--color-link);
}
`