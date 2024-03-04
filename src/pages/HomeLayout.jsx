import { Outlet, useNavigation } from "react-router-dom";
import Navbar from '../components/Navbar';


const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading'
  return (
    <>

      <Navbar />
      <section className="hero">
        {
          isPageLoading ? <div className="loader" /> :
            <Outlet />
        }
      </section>
    </>

  )
}

export default HomeLayout;