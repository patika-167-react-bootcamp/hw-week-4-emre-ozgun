import { useContext, useState, useEffect } from 'react';
import { CategoryContext } from '../context/category-context';

import { CategoryList } from '../components/Category/CategoryList';
import { AddCategoryForm } from '../components/Category/AddCategoryForm';
import { getToken } from '../utils/getToken';
import { useHistory } from 'react-router-dom';
import { GET_CATEGORIES } from '../api/category/get-categories';

export const CategoryPage = () => {
	const history = useHistory();
	const { categories, setCategories } = useContext(CategoryContext);
	const [isAddCategoryFormOpen, setIsAddCategoryFormOpen] = useState(false);

	const { id } = getToken();
	if (!id) {
		history.push('/auth');
	}

	const fetchCategories = async (userId: number) => {
		const result = await GET_CATEGORIES(userId);
		console.log(result);
		setCategories?.(result);
	};

	useEffect(() => {
		fetchCategories(id);
	}, []);

	return (
		<main className='container'>
			<section className='section section-categories'>
				<article className='categories-title'>
					<h1>Category List</h1>
					<button
						className='btn btn__category-add'
						onClick={() => setIsAddCategoryFormOpen(true)}
					>
						ADD
					</button>
				</article>
				<div className='separator'></div>
				{categories.length < 1 ? (
					<p>Your category list is currently empty, try adding one.</p>
				) : (
					<CategoryList categories={categories} />
				)}
				<AddCategoryForm
					isAddCategoryFormOpen={isAddCategoryFormOpen}
					setIsAddCategoryFormOpen={setIsAddCategoryFormOpen}
				/>
			</section>
		</main>
	);
};
