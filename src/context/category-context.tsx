import React, { createContext, useState } from 'react';
import { idGenerator } from '../utils/idGenerator';

export type Status = {
	id: number;
	title: string;
	color: string;
	flag?: number;
};

export type Todo = {
	id: number;
	title: string;
	statusId: Status['id'];
	categoryId?: number;
	userId?: number;
};

export type Category = {
	updatedAt?: string;
	userId?: number;
	id: number;
	title: string;
	status: Status[];
	todo: Todo[];
};

const initialCategories: Category[] = [
	{
		id: 1,
		title: 'Frontend uygulamalari',
		status: [
			{ id: idGenerator(), title: 'In Progress', color: '#ecb341' },
			{ id: idGenerator(), title: 'Urgent', color: '#ed562c' },
		],
		todo: [
			{ id: idGenerator(), title: 'Academic Vocabulary', statusId: 25257 },
			{ id: idGenerator(), title: 'Read Articles', statusId: 29582058 },
		],
	},
	{
		id: 2,
		title: 'Keep up with development trends, Keep up with development trends',
		status: [{ id: idGenerator(), title: 'Urgent', color: '#ed562c' }],
		todo: [
			{ id: idGenerator(), title: 'Practice CSS-In-JS', statusId: 250982508 },
			{
				id: idGenerator(),
				title: 'Docker and Containerization',
				statusId: 3390383,
			},
		],
	},
	{
		id: 3,
		title: 'React JS',
		status: [{ id: idGenerator(), title: 'Idle', color: '#2DCCEE' }],
		todo: [{ id: idGenerator(), title: 'Redux Toolkit', statusId: 25952858 }],
	},
];

type CategoryContextType = {
	categories: Category[];
	setCategories?: React.Dispatch<React.SetStateAction<Category[]>>;
	addCategory?: (newCategory: Category) => void;
	removeCategory?: (id: number) => void;
	categoryToBeEdited?: Category;
	setCategoryToBeEdited?: React.Dispatch<React.SetStateAction<Category>>;
};

export const CategoryContext = createContext<CategoryContextType>({
	categories: initialCategories,
});

export const CategoryProvider: React.FC = ({ children }) => {
	const [categories, setCategories] = useState<Category[]>([] as Category[]);
	const [categoryToBeEdited, setCategoryToBeEdited] = useState({} as Category);

	const addCategory = (newCategory: Category) => {
		setCategories((prev) => [newCategory, ...prev]);
	};

	const removeCategory = (categoryId: number) => {
		setCategories(categories.filter((c) => c.id !== categoryId));
	};

	return (
		<CategoryContext.Provider
			value={{
				categories,
				addCategory,
				removeCategory,
				setCategories,
				categoryToBeEdited,
				setCategoryToBeEdited,
			}}
		>
			{children}
		</CategoryContext.Provider>
	);
};
