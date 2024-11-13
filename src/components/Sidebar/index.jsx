import { SocialNetworks } from '../SocialNetworks'
import { InformationContainer } from '../InformationContainer';

import './style.sass';

export const Sidebar = () => {
	return (	
		<aside id="sidebar">

			<p className="title">
				FullStack Developer<br/><br/>
				Nickname: <span className="nick">Mr. Punk da Silva</span>
			</p>

			<SocialNetworks />

			<InformationContainer />

			<a 
				href="../../../resources/Currículo%20Gustavo%20Henrique%20de%20Jesus%20da%20Silva.pdf"
				className="btn" 
				download={true}
				role="button" 
				aria-label="download curriculum">
				Download Curriculum
			</a>
		</aside>
	);

};
