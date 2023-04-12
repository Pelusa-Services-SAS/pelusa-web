// Index
import type { IIconProps } from '.';

// Hooks
import { useDynamicSvgImport } from '@hooks/useDynamicSvgImport';

// Styles
import './Icon.style.scss';

const Icon: React.FC<IIconProps> = props => {
	const { iconName, svgProp, onClick } = props;
	const { SvgIcon } = useDynamicSvgImport(iconName);

	return (
		<>
			{SvgIcon && (
				<div>
					<SvgIcon {...svgProp} onClick={onClick} className='icon' />
				</div>
			)}
		</>
	);
};

export default Icon;
