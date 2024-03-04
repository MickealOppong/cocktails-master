import axios from "axios";
import { useQuery } from "react-query";
import { Link, useLoaderData } from "react-router-dom";
import styled from "styled-components";

const singleItemUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const fetchSingleItem = (id) => {
  return {
    queryKey: ['id', id],
    queryFn: async () => {
      const response = await axios.get(`${singleItemUrl}${id}`)
      console.log(response.data);
      return response.data;
    }
  }
}

export const loader = (queryClient) => async ({ params }) => {
  const { id } = params;
  await queryClient.prefetchQuery(fetchSingleItem(id))
  // const response = await axios.get(`${singleItemUrl}${id}`)
  // const data = await response.data;
  return {
    id
  }

}


const Cocktail = () => {

  const { id } = useLoaderData();
  const { data } = useQuery(fetchSingleItem(id));


  const { strDrink: name, strDrinkThumb: img, strAlcoholic: alcoholic, strCategory: category, strGlass: glass, strInstructions: instructions } = data.drinks[0];

  const ingredients = Object.keys(data.drinks[0]).filter((key) => {
    return key.startsWith('strIngredient') && data.drinks[0][key]
  }).map(key => data.drinks[0][key])
  /*
  let ingredients = [];

  for (let i = 1; i <= 15; i++) {
    const strIngredient = `strIngredient${i}`
    const item = data.drinks[0][strIngredient];
    if (item) {
      ingredients.push(item)
    }
  }
*/
  return <section className="cocktail-container">

    <Wrapper>
      <div className="header">
        <Link to='/' className='home-btn'>Back home</Link>
      </div>
      <article className="cocktail">
        <img src={img} alt={name} />
        <div className="info">
          <p><span>name:</span>{name}</p>
          <p><span>category:</span>{category}</p>
          <p><span>info:</span>{alcoholic}</p>
          <p><span>glass:</span>{glass}</p>
          <p><span>ingredients:</span>  {
            ingredients.map(item => {
              return item;
            }).join(", ")
          }</p>
          <p><span>instructions:</span>{instructions}</p>

        </div>
      </article>
    </Wrapper>

  </section>

}

const Wrapper = styled.div`
  margin-top:2rem;
  .header{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:4rem;
  }

.cocktail{
  display: flex;
flex-direction:column;
}
.home-btn {
 display: flex;
 align-items:center;
 justify-content:center;
  height: 2rem;
  width: 8rem;
  background-color: #d0944d;
  border-color: transparent;
  color: white;
  text-transform: capitalize;
  border-radius:5px;
  letter-spacing:1px;
  cursor: pointer;
}

.info{
  display: flex;
  flex-direction: column;
  align-items: start;
}
span{
  display: inline-flex;
  width: auto;
  padding:0.2rem;
  background-color:#d0944d;
  color:green;
  text-transform:capitalize;
  margin-right:0.5rem;
  letter-spacing:1px
}


p{
  font-weight:700;
 color: rgb(73, 81, 81);
 line-height:1.5rem;
  width:22rem;
}
img{
  width: 20rem;
  margin-bottom:1rem;
}

@media screen and (min-width:992px) {
  margin-left:15rem;
  margin-top:-10rem;
  .cocktail{
    display: flex;
    flex-direction: row;
    align-items:start;
    column-gap:2rem;
  }

  p{
   line-height: 1.5rem;
  }

  img{
  height: 25rem;
  margin-bottom:1rem;
}
}
`
export default Cocktail;