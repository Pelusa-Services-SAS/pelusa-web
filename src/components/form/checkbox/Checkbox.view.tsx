// Libraries
import { type FieldHookConfig, useField } from 'formik';

// Index
import { type ICustomCheck } from '.';

// Styles
import './Checkbox.style.scss';

export const Checkbox: React.FC<
	React.ComponentProps<'input'> & ICustomCheck & FieldHookConfig<string>
> = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className='container__checkbox'>
			<input
				{...field}
				{...props}
				id={field.name}
				type='checkbox'
				className='container__checkbox--input'
			/>
			<label htmlFor={field.name} className='container__checkbox--label'>
				{label}
			</label>
			{meta.touched && meta.error != null && (
				<div className='form__group--error'>{meta.error}</div>
			)}
		</div>
	);
};
