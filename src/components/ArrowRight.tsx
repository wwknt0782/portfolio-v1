export default function ArrowRight(props: { className?: string }) {
	const classname = props.className;
	return (
		<div className="flex items-center justify-center">
			<svg
				className={`stroke-2 my-auto ${classname}`}
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<title> </title>
				<line x1="2" y1="4" x2="12" y2="12" />
				<line x1="12" y1="12" x2="2" y2="20" />
				<line x1="14" y1="4" x2="24" y2="12" />
				<line x1="24" y1="12" x2="14" y2="20" />
			</svg>
		</div>
	);
}
