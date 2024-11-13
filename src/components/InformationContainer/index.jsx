import './styles.sass';
import informations from "../../data/informations.jsx";

export const InformationContainer = () => {

	return (
		<section id="information">

			{informations.map(({ id, icon, details }) => (
				<div className="info-card" key={id}>
					{ icon }

					<div>
						<h3>{ details.title }</h3>
						<p>{ details.content }</p>
					</div>
				</div>
			))}
            
			<div className="info-card">
			    <div>
					<h3>
						Email
					</h3>
					<p>
			            gustavojs417@gmail.com
					</p>
				</div>
			</div>
		</section>
	);

};
