import styled from "styled-components";
const About = () => {
  return (
    <Wrapper>
      <h1>about us</h1>
      <div className="underline"></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore totam quia nostrum, aut ea excepturi voluptatem consectetur quis aliquam magni vitae impedit nisi quaerat. Labore nam iure nesciunt provident rem.
      </p>
    </Wrapper>

  )
}

const Wrapper = styled.div`
 
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-left:2rem;
  margin-top:-20rem;

 h1{
  
  text-transform:capitalize;
  color: rgb(73, 81, 81);
 }


 p{
  color: rgb(73, 81, 81);
  line-height:1.7rem;
  font-size:1.2rem;
 }

 .underline{
  width: 8rem;
  height: 3px;
  margin-top:-0.5rem;
  margin-bottom:2rem;
  display: flex;
  align-items: center;
  background-color: #d0944d;
 }

 @media screen and (min-width:992px){
  width: 60vw;
  align-content:center;
  margin-left:20vw;

  p{
    width: 80%;
  }
 }

 
`
export default About;