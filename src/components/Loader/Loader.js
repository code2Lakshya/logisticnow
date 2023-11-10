import { useScrollToTop } from '../../utils/Hooks/useScrollToTop';
import './Loader.css';


const Loader=()=>{

useScrollToTop();

    return(
        <div className="loader-container">
            <span id='loader'></span>
        </div>
    );
}
export default Loader;