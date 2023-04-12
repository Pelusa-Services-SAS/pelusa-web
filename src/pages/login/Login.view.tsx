// Libraries
import { Form, Formik } from 'formik';

// Components
import { Input } from '@components/form/input';
import { Checkbox } from '@components/form/checkbox';

// Images
import Wave from '@assets/img/wave.svg';

// Validations
import { useLoginValidations } from './validations/useLoginValidations';

// Hooks
import { useLogin } from './hooks/useLogin';

// Icons
import Icon from '@components/icon';

// Styles
import './Login.style.scss';

const Login = (): JSX.Element => {
	const { loginSchema, validateCustom } = useLoginValidations();
	const {
		visiblePassword,
		handleVisiblePassword,
		initialLoginState,
		handleLogin,
		failedRequest,
	} = useLogin();

	return (
		<div className='container'>
			<div className='login__form'>
				<div className='login__form--header'>
					<div className='title'>
						Welcome <span>Back</span>
					</div>
					<div className='description'>Welcome! Please login to continue.</div>
				</div>

				<Formik
					enableReinitialize
					initialValues={initialLoginState}
					onSubmit={values => {
						handleLogin(values);
					}}
					validationSchema={loginSchema}
					validate={values => validateCustom(values)}
				>
					{({ values }): JSX.Element => (
						<Form>
							<div>
								<Input
									type='email'
									name='email'
									label='Email'
									value={values.email}
									placeholder='Enter your email address'
								/>
							</div>
							<div>
								<Input
									type={visiblePassword ? 'text' : 'password'}
									value={values.password}
									name='password'
									label='Password'
									placeholder='Enter your password'
									icon={
										<Icon
											iconName={visiblePassword ? 'eye' : 'eye-slash'}
											onClick={handleVisiblePassword}
										/>
									}
								/>
							</div>
							{failedRequest && (
								<div className='text__error'>{failedRequest}</div>
							)}
							<div>
								<Checkbox name='remember' label='Remember me' />
							</div>
							<div className='login__buttons'>
								<button type='submit' className='login__buttons--button'>
									Sign Up
								</button>
								<a href='#' className='login__buttons--forgot'>
									Forgot Password?
								</a>
							</div>
						</Form>
					)}
				</Formik>
			</div>
			<img src={Wave} alt='wave' className='wave' />
		</div>
	);
};

export default Login;
