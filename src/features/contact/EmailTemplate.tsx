import { Body, Head, Html, Text } from "@react-email/components";
import type * as React from "react";

interface EmailTemplateProps {
	sendTo: string;
}

export default function EmailTemplate(props: EmailTemplateProps) {
	const name = props.sendTo;
	return (
		<Html lang="ja">
			<Text>Welcome, {name}!</Text>
		</Html>
	);
}
