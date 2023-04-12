export { default } from './Icon.view';

export interface IIconProps {
	iconName: string;
	svgProp?: React.SVGProps<SVGSVGElement>;
	onClick?: () => void;
}
