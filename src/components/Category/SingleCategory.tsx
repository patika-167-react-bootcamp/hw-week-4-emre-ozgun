import React, { useContext, useState } from 'react';
import { Category } from '../../context/category-context';
import './Category.css';
import { CategoryContext } from '../../context/category-context';
import { TodoList } from '../Todo/TodoList';
import { Loader } from '../Loader/Loader';
import { DELETE_CATEGORY } from '../../api/category/delete-category';

type SingleCategoryProps = {
	category: Category;
};

export const SingleCategory = ({ category }: SingleCategoryProps) => {
	// need to setup a link -> singlecategory page -> /category/:categoryId

	const { removeCategory } = useContext(CategoryContext);
	const [loading, setLoading] = useState(false);

	const handleDelete = async (categoryId: number) => {
		setLoading(true);
		try {
			await DELETE_CATEGORY(categoryId);
		} catch (error) {
			console.error(error);
		}
	};

	const handleRemoveCategory = (categoryId: number) => {
		handleDelete(categoryId);
		removeCategory?.(categoryId);
		setLoading(false);
	};

	return (
		<>
			<div className='single-category' key={category.id}>
				{loading ? (
					<span className='single-category__title'>
						<Loader />
					</span>
				) : (
					<span className='single-category__title capitalize'>
						{category.title}{' '}
						<span className='single-category__status'>
							{category.status.map((s) => (
								<span
									key={s.id}
									className='single-category__status-color'
									style={{ backgroundColor: `${s.color}` }}
								></span>
							))}
						</span>
					</span>
				)}

				<button
					className='btn single-category__btn-delete'
					onClick={() => handleRemoveCategory(category.id)}
				>
					X
				</button>
			</div>
			<TodoList category={category} />
		</>
	);
};
