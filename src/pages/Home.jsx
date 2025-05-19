import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">

<h2>Personajes</h2>


<h2>Planetas</h2>


<h2>Vehículos</h2>






			<h2>Hello Rigo!!</h2>
			<p>
				<img src={rigoImageUrl} />
			</p>
		</div>
	);
}; 