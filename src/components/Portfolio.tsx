import React, {useState} from 'react';
import { Modal } from 'react-bootstrap';

import Image1 from '../images/projects/chimney-repair-before-after.jpg';
import Image4 from '../images/projects/tuck-pointed-chimney.jpg';
import Image5 from '../images/projects/tuck-pointed-chimney-close-up.jpg';
import Image2 from '../images/projects/franklin-monument-tuck-pointing-before.jpeg';
import Image3 from '../images/projects/franklin-monument-tuck-pointing-after.jpeg';

// Portfolio Content
const content = [
	{ 
		thumb: Image4,
		LightImg: Image4,
		title: "Before before of stone monument in need of restoration",
	},
	{ 
		thumb: Image5,
		LightImg: Image5,
		title: "Picture of stone monument after full tuck pointing and repointing restoration",
	},
	{ 
		thumb: Image2,
		LightImg: Image2,
		title: "Chimney tuck pointed",
	},
	{ 
		thumb: Image3,
		LightImg: Image3,
		title: "Chimney tuck pointed close up",
	},
	{ 
		thumb: Image1, 
		LightImg: Image1,
		title: "Failing chimney in need of repair",
	},
]

const Portfolio = () => {
	const [show, setShow] = useState(false);
	const [imgSrc, setImgSrc] = useState('');

	const handleClose = () => setShow(false);

	const handleModal = React.useCallback((e: any, src: string) => {
	  setImgSrc(src);
	  setShow(true);
	}, [show]);


    return <div className='projects-wrapper p-md-5' id='recent'>
		<div className='projects'>
    <div className='outline'>Projects</div>
    <h3 className="mb-0">Our Recent Work</h3>
    <p className="m-auto p-3 w-md-75">Click on the pictures below in our project gallery to enlarge and view our most recent 
    masonry projects from some of our happy customers.</p>

	<div className='d-flex flex-wrap' id='gallery'>
		{content.map((item, index)=>(	
			<div key={index}>
					<img className='w-100 p-2' 
						src={item.thumb}  
						alt={item.title} 
						title={item.title} 
						onClick={(e) => handleModal(e, item.LightImg)}
					/>
			</div>
		))}

		<Modal show={show} onHide={handleClose} centered style={{'zIndex':'9999'}}>
        <Modal.Body>
			<img src={imgSrc} onClick={handleClose} />
		</Modal.Body>
      </Modal>
	</div>
	</div>
</div>;
}

export default Portfolio;