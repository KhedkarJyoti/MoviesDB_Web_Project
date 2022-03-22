/*=== Import Modules ===*/
import {useNavigate} 		from 'react-router-dom';
import React  					from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } 		from '@fortawesome/free-solid-svg-icons';

/*=== Import CSS ===*/
import './Header.css';

const Header = (props) =>{
	const navigate = useNavigate();

	return(
		<div className='row'>
			<div className="fs-3 fw-bolder col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 app_header">
			{props.showBackBtn 
				?
					<FontAwesomeIcon 
						className="back_to_prev" 
						icon={faArrowLeft} 
						style={{ color: '#fff', marginRight: '15px', padding : '3px' }} 
						onClick={() => navigate(-1)}
						title="Go Back"
					/>
				:
					null
			}
				{props.heading}
			</div>
		</div>
	)
}

export default Header;

// import { useHistory } from 'react-router-dom';
// const App = () => {
//    const history = useHistory()
//    <i className="icon list arrow left"
//       onClick={() => {
//         history.goBack()
//    }}></i>
// }