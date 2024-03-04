import { Link, useRouteError } from "react-router-dom";
import styled from "styled-components";
import img from '../assets/404.svg';
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return <section className="hero">
      <Wrapper>
        <img src={img} alt="not found" />
        <h1>ooh!</h1>
        <p>We could not find the page.</p>
        <Link to="/">Back home</Link>
      </Wrapper>
    </section>
  }

  return <section className="hero">
    <Wrapper>
      <h3>ooh!</h3>
      <p>Something went wrong</p>
      <Link to="/" >Back home</Link>
    </Wrapper>
  </section>
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 20rem;
    margin-bottom:1rem;
  }

  a{
    text-transform:capitalize;
    color:  #d0944d;
    font-size:1rem;
  }
`
export default Error;