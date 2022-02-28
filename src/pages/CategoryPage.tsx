import { useContext, useState } from 'react';
import { CategoryContext } from '../category-context';

import { CategoryList } from '../components/Category/CategoryList';
import { AddCategoryForm } from '../components/Category/AddCategoryForm';

export const CategoryPage = () => {
	const { categories } = useContext(CategoryContext);

	const [isAddCategoryFormOpen, setIsAddCategoryFormOpen] = useState(false);

	const openAddCategoryForm = () => {};

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
