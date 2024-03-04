import axios from "axios";
import { useQuery } from "react-query";
import { useLoaderData } from "react-router-dom";
import Cocktails from "../components/Cocktails";
import SearchForm from "../components/SearchForm";


const cocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const searchQuery = (item) => {
  return {
    queryKey: ['search', item || 'all'],
    queryFn: async () => {
      const response = await axios.get(cocktailUrl + item);
      return response.data?.drinks;
    }
  }
}

export const loader = (queryClient) => async ({ request }) => {
  const url = new URL(request.url);
  const searchItem = url.searchParams.get('search') || '';

  await queryClient.getQueryData(searchQuery(searchItem))

  return {
    searchItem
  }
}

const Landing = () => {
  const { searchItem } = useLoaderData();
  const { data } = useQuery(searchQuery(searchItem))

  return (
    <section className="landing">
      <SearchForm searchItem={searchItem} />
      <Cocktails data={data} />
    </section>
  )
}

export default Landing;