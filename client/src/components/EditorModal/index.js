import React, { useState, useRef, useEffect } from "react";
import Form from 'antd/lib/form';
import Button from 'antd/lib/button';
import Modal from "antd/lib/modal";
import CheckableTag from "antd/lib/tag/CheckableTag";
import Input from "antd/lib/input";
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import { bool, func } from "prop-types";

const { TextArea } = Input;

const EditorModal = ({ isVisible, onCancel, onSubmit }) => {

	const [message, setMessage] = useState("");
	const [isPrivate, setIsPrivate] = useState(false);
	const inputMessage = useRef(null);

	useEffect(() => {
		inputMessage.current.focus({ cursor: 'start' });
	}, []);

	const handleOnChangeMessage = (e) => {
		setMessage(e.target.value);
	}

	const handleOnChangePrivacy = (e) => {
		setIsPrivate(e);
	}

	return (
		<Modal
			title="Nouveau message"
			visible={isVisible}
			onCancel={onCancel}
			footer={
				<div>
					<Button
						disabled={!message.trim().length}
						onClick={() => onSubmit({ message: message.trim(), isPrivate })}
					>
						Envoyer
					</Button>
				</div>
			}
		>
			<>
				<Form.Item>
					<TextArea
						data-testid="textArea"
						ref={inputMessage}
						placeholder="Saisissez votre message ici..."
						allowClear
						rows={4}
						maxLength={200}
						onChange={handleOnChangeMessage}
						value={message}
					/>
				</Form.Item>
				<Form.Item>
					<span>Visibilité : </span>
					<CheckableTag
						data-testid="privacyCheckbox"
						checked={isPrivate}
						onChange={handleOnChangePrivacy}
					>
						{
							isPrivate ?
								<span><EyeInvisibleOutlined /> Privé</span> :
								<span><EyeOutlined /> Public</span>
						}
					</CheckableTag>
				</Form.Item>
			</>
		</Modal>
	)
}

EditorModal.propTypes = {
	isVisible: bool.isRequired,
	onCancel: func.isRequired,
	onSubmit: func.isRequired
}

export default EditorModal;