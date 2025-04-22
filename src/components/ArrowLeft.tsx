export default function ArrowLeft(props: { className?: string }) {
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
				<line x1="22" y1="4" x2="12" y2="12" />
				<line x1="12" y1="12" x2="22" y2="20" />
				<line x1="10" y1="4" x2="0" y2="12" />
				<line x1="0" y1="12" x2="10" y2="20" />
			</svg>
		</div>
	);
}
