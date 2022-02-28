import React, { createContext, useState } from 'react';
import { idGenerator } from './utils/idGenerator';

export type Status = {
	id: number;
	title: string;
	color: string;
};

export type Todo = {
	id: number;
	title: string;
	statusId: string;
};

export type Category = {
	id: number;
	title: string;
	status: Status[];
	todo: Todo[];
};

const initialCategories: Category[] = [
	{
		id: 1,
		title: 'Practice English',
		status: [
			{ id: idGenerator(), title: 'In Progress', color: '#ecb341' },
			{ id: idGenerator(), title: 'Urgent', color: '#ed562c' },
		],
		todo: [
			{ id: idGenerator(), title: 'Academic Vocabulary', statusId: 'a1' },
			{ id: idGenerator(), title: 'Read Articles', statusId: 'a1' },
		],
	},
	{
		id: 2,
		title: 'Keep up with development trends, Keep up with development trends',
		status: [{ id: idGenerator(), title: 'Urgent', color: '#ed562c' }],
		todo: [
			{ id: idGenerator(), title: 'Practice CSS-In-JS', statusId: 'a2' },
			{
				id: idGenerator(),
				title: 'Docker and Containerization',
				statusId: 'a2',
			},
		],
	},
	{
		id: 3,
		title: 'React JS',
		status: [{ id: idGenerator(), title: 'Idle', color: '#2DCCEE' }],
		todo: [{ id: idGenerator(), title: 'Redux Toolkit', statusId: 'a3' }],
	},
];

type CategoryContextType = {
	categories: Category[];
	addCategory?: (newCategory: Category) => void;
	removeCategory?: (id: number) => void;
};

export const CategoryContext = createContext<CategoryContextType>({
	categories: initialCategories,
});

export const CategoryProvider: React.FC = ({ children }) => {
	const [categories, setCategories] = useState<Category[]>(initialCategories);

	const addCategory = (newCategory: Category) => {
		setCategories((prev) => [newCategory, ...prev]);
	};

	const removeCategory = (categoryId: number) => {
		setCategories(categories.filter((c) => c.id !== categoryId));
	};

	console.log(categories);

	return (
		<CategoryContext.Provider
			value={{ categories, addCategory, removeCategory }}
		>
			{children}
		</CategoryContext.Provider>
	);
};
