import { useParams, useRouteError } from "react-router-dom"

export default prop => {

	// ルートで発生した例外エラーを取得
	const error = useRouteError();

	return (
		<div>
			<p>{error.message}</p>
		</div>
	)
}
