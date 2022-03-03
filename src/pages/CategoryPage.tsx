import { useContext, useState, useEffect } from 'react';
import { CategoryContext } from '../context/category-context';

import { CategoryList } from '../components/Category/CategoryList';
import { AddCategoryForm } from '../components/Category/AddCategoryForm';
import { getToken } from '../utils/getToken';
import { useHistory } from 'react-router-dom';
import { GET_CATEGORIES } from '../api/category/get-categories';
import { Loader } from '../components/Loader/Loader';

export const CategoryPage = () => {
	const history = useHistory();
	const { categories, setCategories } = useContext(CategoryContext);
	const [isAddCategoryFormOpen, setIsAddCategoryFormOpen] = useState(false);
	const [loading, setLoading] = useState(true);

	const { id } = getToken();
	if (!id) {
		history.push('/auth');
	}

	const fetchCategories = async (userId: number) => {
		setLoading(true);
		try {
			const result = await GET_CATEGORIES(userId);
			console.log(result);
			setLoading(false);
			setCategories?.(result);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchCategories(id);
	}, []);

	// IMPLEMENT LOADER -> via loading state.

	if (loading) {
		return <Loader />;
	}

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
