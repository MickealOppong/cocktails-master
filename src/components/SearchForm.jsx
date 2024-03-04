import { Form, useNavigation } from 'react-router-dom';
import './form.css';

const SearchForm = ({ searchItem }) => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  return <section className='form-container'>
    <Form>
      <input type="search" name="search" id="search" className='input' defaultValue={searchItem} />
      <button className="search-btn" >search</button>
    </Form>
  </section>
}
export default SearchForm;