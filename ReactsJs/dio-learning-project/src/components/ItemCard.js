import { useState } from 'react';
import Button from '../components/Button'

const ItemCard = () => {

	const [number, setNumber] = useState(0) ;

	function increaseNumber(){
		setNumber(number + 1);
	}

	function decreaseNumber(){
		setNumber(number - 1);
	}
	
	return (
		<div className="card">
			<div className="card-header">
				My First Card
			</div>
			<div className="card-body">
				<Button
					className="btn btn-success"
					onClick={increaseNumber}>
					Increase
				</Button>
				<Button
					className="btn btn-danger"
					onClick={decreaseNumber}>
					Increase
				</Button>
				<p>{number}</p>
			</div>
		</div>
	)
}

export default ItemCard;
