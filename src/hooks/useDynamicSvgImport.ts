import { useEffect, useRef, useState } from 'react';

export const useDynamicSvgImport = (
	iconName: string
): {
	error: unknown;
	loading: boolean;
	SvgIcon: React.FC<React.SVGProps<SVGElement>> | undefined;
} => {
	const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown>();

	useEffect(() => {
		setLoading(true);
		const importSvgIcon = async (): Promise<void> => {
			try {
				importedIconRef.current = (
					await import(`../assets/icon/${iconName}.svg`)
				).ReactComponent;
			} catch (err) {
				setError(err);
				console.error(err);
			} finally {
				setLoading(false);
			}
		};
		importSvgIcon();
	}, [iconName]);

	return {
		error,
		loading,
		SvgIcon: importedIconRef.current,
	};
};
