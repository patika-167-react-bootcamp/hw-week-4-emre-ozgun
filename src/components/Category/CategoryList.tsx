import React from 'react';

import { Category } from '../../category-context';
import { SingleCategory } from './SingleCategory';
import './Category.css';

type CategoryListProps = {
	categories: Category[];
};

export const CategoryList = ({ categories }: CategoryListProps) => {
	return (
		<article className='category-list'>
			{categories.map((category) => (
				<SingleCategory category={category} key={category.id} />
			))}
		</article>
	);
};
