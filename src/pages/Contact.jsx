import { Form } from "react-router-dom";
import styled from "styled-components";

export const action = async ({ request }) => {
  const form = await request.formData();
  const data = Object.fromEntries(form);
  //const response = await axios.post("https://www.course-api.com/cocktails-newsletter", data)
  console.log(data);
  return null;
}
const Contact = () => {

  return (
    <Wrapper >
      <h1>connect with us</h1>
      <div className="underline"></div>
      <article className="">
        <Form method="POST">
          <input type="text" name="name" id="name" placeholder="name" required />
          <input type="text" name="email" id="email" placeholder="email" required />
          <input type="text" name="phone" id="phone" placeholder="phone" required />
          <textarea name="message" id="message" className="message" rows="5" cols="50" required defaultValue='message goes here...'></textarea>
          <button type="submit" className="submit-btn">submit</button>
        </Form>
      </article>
    </Wrapper>
  )
}
const Wrapper = styled.div`
 width: 75%;
  display: flex;
  flex-direction: column;
  margin-left:1rem;

  margin-top:-5rem;
  padding: 0 1rem 2rem 2rem;
  box-shadow:0 5px 15px rgba(0,0,0,0.2);
  background-color:white;
  font-size:0.65rem;

  form{
    width: 70vw;
    height: 20rem;
     display: flex;
    flex-direction: column;
    row-gap:1rem;
  }
 h1{
  text-transform:capitalize;
  color: rgb(73, 81, 81);
 }

 input[type="text"]{
  height: 2rem;
  border-color:transparent;
  border-radius:5px;
  text-indent:10px;
  border:1px solid lightslategray;
 }


.message{
height: 10rem;
border-radius:5px;
text-indent:10px;
}

.submit-btn{
  height: 2rem;
  background-color: #d0944d;
  border-color:transparent;
  color:white;
  text-transform:capitalize;
  font-size:1rem;
}

 .underline{
  width: 13rem;
  height: 3px;
  margin-top:-0.5rem;
  margin-bottom:2rem;
  display: flex;
  align-items: center;
  background-color: #d0944d;
 }

 @media screen and (min-width:800px){
  width: 35%;
  padding-left: 4rem;
margin-left:30vw;
font-size:0.9rem;
  form{
    width: 30vw;
  }
 }

`
export default Contact;