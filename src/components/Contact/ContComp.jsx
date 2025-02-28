function ContComp({ icon, content }) {
	return (
		<div className="flex items-start justify-between my-4">
			<div className="w-[6%]">{icon}</div>
			<div className="w-full">{content}</div>
		</div>
	);
}

export default ContComp;
