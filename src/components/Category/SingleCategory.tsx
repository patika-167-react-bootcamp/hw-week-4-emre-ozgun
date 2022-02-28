import React, { useContext } from 'react';
import { Category } from '../../category-context';
import './Category.css';
import { CategoryContext } from '../../category-context';

type SingleCategoryProps = {
	category: Category;
};

export const SingleCategory = ({ category }: SingleCategoryProps) => {
	// need to setup a link -> singlecategory page -> /category/:categoryId

	const { removeCategory } = useContext(CategoryContext);

	return (
		<div className='single-category' key={category.id}>
			<span className='single-category__title'>
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
			<button
				className='btn single-category__btn-delete'
				onClick={() => removeCategory?.(category.id)}
			>
				X
			</button>
		</div>
	);
};
