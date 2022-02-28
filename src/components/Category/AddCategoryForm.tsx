import React, { useState } from 'react';

import { idGenerator } from '../../utils/idGenerator';
import { colorGenerator } from '../../utils/colorGenerator';
import { Category } from '../../category-context';
import './AddCategoryForm.css';

type AddCategoryFormProps = {
	isAddCategoryFormOpen: boolean;
	setIsAddCategoryFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddCategoryForm = ({
	isAddCategoryFormOpen,
	setIsAddCategoryFormOpen,
}: AddCategoryFormProps) => {
	// import addCategory from global context to add  new category
	// const {addCategory} = useContext(CategoryContext)

	const initialAddFormState: Category = {
		id: Math.random() * 1000,
		title: '',
		status: [{ id: idGenerator(), title: '', color: '#ff9500' }],
		todo: [{ id: idGenerator(), title: '', statusId: '' }],
	};

	const [singleCategory, setSingleCategory] =
		useState<Category>(initialAddFormState);

	// const handleCategorySubmit = (e) => {
	//   e.preventDefault();
	//   addCategory(singleCategory)
	// 	setSingleCategory(initialAddFormState);
	// };

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSingleCategory({
			...singleCategory,
			[e.target.name]: e.target.value,
		});
	};

	const handleStatusChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		i: number
	) => {
		setSingleCategory((prev) => {
			const newStatus = prev.status.map((s, idx) => {
				if (idx === i) {
					return {
						...s,
						[e.target.name]: e.target.value,
					};
				} else {
					return s;
				}
			});

			return {
				...prev,
				status: newStatus,
			};
		});
	};

	const handleAddStatus = () => {
		const newStatus = {
			id: idGenerator(),
			title: '',
			color: colorGenerator(),
		};

		setSingleCategory((prev) => {
			return {
				...prev,
				status: [newStatus, ...prev.status],
			};
		});
	};

	const handleRemoveStatus = (i: number) => {
		setSingleCategory((prev) => {
			return {
				...prev,
				status: prev.status.filter((_, idx) => idx !== i),
			};
		});
	};

	const handleAddTodo = () => {
		const newTodo = {
			id: idGenerator(),
			title: '',
			statusId: '',
		};

		setSingleCategory((prev) => {
			return {
				...prev,
				todo: [newTodo, ...prev.todo],
			};
		});
	};

	const handleTodoChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLSelectElement>,
		i: number
	) => {
		setSingleCategory((prev) => {
			const newTodo = prev.todo.map((t, idx) => {
				if (idx === i) {
					return {
						...t,
						[e.target.name]: e.target.value,
					};
				} else {
					return t;
				}
			});
			return {
				...prev,
				todo: newTodo,
			};
		});
	};

	const handleRemoveTodo = (i: number) => {
		setSingleCategory((prev) => {
			return {
				...prev,
				todo: prev.todo.filter((_, idx) => idx !== i),
			};
		});
	};

	// console.log(singleCategory);

	// onSubmit={(e) => handleCategorySubmit}
	return (
		<form className={`form form-add ${isAddCategoryFormOpen && 'active'}`}>
			<h1 className='form__title'>Add Category</h1>
			<button
				className='form-add__btn-delete'
				type='button'
				onClick={() => setIsAddCategoryFormOpen(false)}
			>
				x
			</button>

			<div className='form__block'>
				<label htmlFor='email' className='form__block-label'>
					Category Title
				</label>
				<input
					className='form__block-input'
					type='text'
					name='title'
					value={singleCategory.title}
					onChange={(e) => handleTitleChange(e)}
					id='title'
					placeholder='Category Title'
				/>
			</div>
			<div className='form__block'>
				<label
					className='form__block-label form__block-label-cta'
					htmlFor='password'
				>
					Status
					<button onClick={handleAddStatus} type='button'>
						+
					</button>
				</label>
				<div className='form-separator'></div>

				{singleCategory.status.map((status, i) => (
					<div className='form__block-inline' key={status.id}>
						<input
							className='form__block-input'
							type='text'
							name='title'
							value={status.title}
							onChange={(e) => handleStatusChange(e, i)}
							id='status-name'
							placeholder='Status Title'
						/>
						<input
							className='form__block-input'
							type='color'
							value={status.color}
							onChange={(e) => handleStatusChange(e, i)}
							name='color'
							id='status-color'
							placeholder='Status Color'
						/>
						<button
							className='form__remove-field'
							onClick={() => handleRemoveStatus(i)}
						>
							x
						</button>
					</div>
				))}
			</div>

			<div className='form__block'>
				<label
					className='form__block-label form__block-label-cta'
					htmlFor='password'
				>
					Todo
					<button onClick={handleAddTodo} type='button'>
						+
					</button>
				</label>
				<div className='form-separator'></div>

				{singleCategory.todo.map((todo, i) => (
					<div className='form__block-inline' key={todo.id}>
						<input
							className='form__block-input'
							type='text'
							name='title'
							value={todo.title}
							onChange={(e) => handleTodoChange(e, i)}
							id='status-name'
							placeholder='Todo Title'
						/>

						<select
							name='statusId'
							className='form__block-input'
							value={'...???'}
							onChange={(e) => handleTodoChange(e, i)}
						>
							{singleCategory.status.map((status, idx) => (
								<option
									className='form__status-options'
									value={status.id}
									key={status.id}
								>
									{status.title}
								</option>
							))}
						</select>

						<button
							className='form__remove-field'
							onClick={() => handleRemoveTodo(i)}
						>
							x
						</button>
					</div>
				))}
			</div>

			<button type='submit' className='btn form__btn'>
				ADD CATEGORY
			</button>
		</form>
	);
};
