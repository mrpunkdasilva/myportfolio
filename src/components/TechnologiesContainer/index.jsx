import './styles.sass';
import technologies from "../../data/technologies.jsx";


export const TechnologiesContainer = () => {

	return (
		<section id="technologies-container">
			<h2>🛠 Technologies</h2>

			<div className="technologies-grid">
				{technologies.map(({ id, name, icon, desc }) => (
					<div 
						className="technology-card" 
						id={id} 
						key={id}
					>
						{icon}

						<div className="technology-info">
							<h3>{name}</h3>

							<p>
								{desc}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);

};	