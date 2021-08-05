import React from "react";
import Tooltip from "antd/lib/tooltip";
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import { string, bool } from "prop-types";
import "./styles.scss";

const Author = ({ name, isPrivateMessage }) => (
	<p data-testid="paragraphAuthor">
		{
			isPrivateMessage ?
				<Tooltip placement="left" title="message privé">
					<EyeInvisibleOutlined className="message-visibility" />
				</Tooltip> :
				<Tooltip placement="left" title="message public">
					<EyeOutlined className="message-visibility" />
				</Tooltip>
		} { name }
	</p>
);

Author.propTypes = {
	name: string.isRequired,
	isPrivateMessage: bool.isRequired
}

export default Author;