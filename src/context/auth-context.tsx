import React, { createContext, useState } from 'react';

export type Credentials = {
	username: string;
	password: string;
	passwordConfirm?: string;
};

type AuthContextType = {
	credentials: Credentials;
	isAuth?: boolean;
	setIsAuth?: React.Dispatch<React.SetStateAction<boolean>>;
	setCredentials?: React.Dispatch<React.SetStateAction<Credentials>>;
};
const initialCredentials: Credentials = {
	username: '',
	password: '',
	passwordConfirm: '',
};

export const AuthContext = createContext<AuthContextType>({
	credentials: initialCredentials,
});

export const AuthContextProvider: React.FC = ({ children }) => {
	const [credentials, setCredentials] =
		useState<Credentials>(initialCredentials);

	// const [isAuth, setIsAuth] = useState(false);

	return (
		<AuthContext.Provider value={{ credentials, setCredentials }}>
			{children}
		</AuthContext.Provider>
	);
};
