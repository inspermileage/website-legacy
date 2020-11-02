import React from 'react';
import Header from './Header';
import Footer from './Footer';

import './style.scss';
import CookieConsent from 'react-cookie-consent';

const Layout = ({ children }) => (
	<div>
		<CookieConsent
			location="bottom"
			buttonText="Aceitar"
			declineButtonText="Recusar"
			cookieName="gatsby-gdpr-google-analytics"
			expires={365}
			enableDeclineButton
		>
			Nosso site utiliza cookies para o controle de tráfego de usuários e para garantir que você tenha uma melhor
			experiência, através do google analytics. Seus dados não serão compartilhados com terceiros.
		</CookieConsent>
		<Header />
		{children}
		<Footer />
	</div>
);

export default Layout;
