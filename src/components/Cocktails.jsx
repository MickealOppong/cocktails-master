import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Cocktails = ({ data }) => {
  if (!data) {
    return <h4 style={{ textAlign: "center" }}>No matching cocktails</h4>
  }

  const formatedList = data.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      alcoholic: strAlcoholic,
      glass: strGlass
    }
  })

  return <section className="cocktails">
    <Wrapper>
      {
        formatedList.map((item) => {
          const { id, name, image, alcoholic, glass } = item;
          return <article className="item" key={id}>
            <img src={image} alt={name} className="img" />
            <div className='info'>
              <h4>{name}</h4>
              <p>{alcoholic}</p>
              <p>{glass}</p>
              <Link to={`/cocktail/${id}`} className='details-btn'>details</Link>
            </div>
          </article>
        })
      }
    </Wrapper>
  </section>
}

const Wrapper = styled.div`

  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  margin-bottom:4rem;

p{
  margin-top:-0.5rem;
}

.item {
  width: 70vw;
  display: flex;
  flex-direction: column;
    box-shadow:0 5px 15px rgba(0,0,0,0.2);
  background-color: white;
}

.info{
  padding:1rem;
}
.img{
  width: 70vw;
  height: 12rem;
  object-fit:cover;
}


.details-btn {
 display: flex;
 align-items:center;
 justify-content:center;
  height: 1.5rem;
  width: 5rem;
  background-color: #d0944d;
  border-color: transparent;
  color: white;
  text-transform: capitalize;
  border-radius:5px;
  letter-spacing:1px;
  cursor: pointer;
}

@media screen and (min-width:992px) {

    display: grid;
    grid-template-columns: repeat(3, 25rem);
    column-gap:2rem;
    margin-left:15vw;

    .item{
      width: 25rem;
    }
    .img{
      width: 25rem;
    }
  
}
`

export default Cocktails;