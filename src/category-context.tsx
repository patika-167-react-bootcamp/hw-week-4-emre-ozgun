import React, { createContext, useState } from 'react';

export type Status = {
	id: string;
	title: string;
	color: string;
};

export type Todo = {
	id: string;
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
			{ id: 'a1', title: 'In Progress', color: '#ecb341' },
			{ id: 'aa1', title: 'Urgent', color: '#ed562c' },
		],
		todo: [
			{ id: 'b1', title: 'Academic Vocabulary', statusId: 'a1' },
			{ id: 'b11', title: 'Read Articles', statusId: 'a1' },
		],
	},
	{
		id: 2,
		title: 'Keep up with development trends, Keep up with development trends',
		status: [{ id: 'a2', title: 'Urgent', color: '#ed562c' }],
		todo: [
			{ id: 'b2', title: 'Practice CSS-In-JS', statusId: 'a2' },
			{ id: 'b22', title: 'Docker and Containerization', statusId: 'a2' },
		],
	},
	{
		id: 3,
		title: 'React JS',
		status: [{ id: 'a3', title: 'Idle', color: '#2DCCEE' }],
		todo: [{ id: 'b3', title: 'Redux Toolkit', statusId: 'a3' }],
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
		setCategories((prev) => [...prev, newCategory]);
	};

	const removeCategory = (categoryId: number) => {
		setCategories(categories.filter((c) => c.id !== categoryId));
	};

	return (
		<CategoryContext.Provider
			value={{ categories, addCategory, removeCategory }}
		>
			{children}
		</CategoryContext.Provider>
	);
};
