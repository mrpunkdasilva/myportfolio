import './style.sass';
import listSocialNetworks from "../../data/socialNetworks.jsx";

export const SocialNetworks = () => {

	return (
		<section id="social-networks">
			{listSocialNetworks.map(( network ) => (
				<a 
					className="social-btn"
					href={network.link} 
					id={network.name} 
					key={network.name}
					target="_blank">
					{ network.icon }
				</a>
			))}
		</section>
	);

};
