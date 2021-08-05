import React from "react";
import Comment from "antd/lib/comment";
import Avatar from "antd/lib/avatar/avatar";
import Tooltip from "antd/lib/tooltip";
import UserOutlined from '@ant-design/icons/UserOutlined';
import Author from "../Author";
import format from "date-fns/format";
import { bool, string, instanceOf } from "prop-types";

const Message = ({ author, content, date, isPrivate }) => (
		<Comment
			author={
				<Author
					name={author}
					isPrivateMessage={isPrivate}
				/>
			}
			avatar={
				<Avatar
					icon={<UserOutlined />}
					alt={author}
				/>
			}
			content={<p data-testid="messageContent">{content}</p>}
			datetime={
				<Tooltip title={format(date, 'dd/MM/yyyy')}>
					<span data-testid="messageDate">{format(date, 'dd/MM/yyyy')}</span>
				</Tooltip>
			}
		/>
)

Message.propTypes = {
	author: string.isRequired,
	content: string.isRequired,
	date: instanceOf(Date).isRequired,
	isPrivate: bool.isRequired
}

export default Message;