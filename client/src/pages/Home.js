import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMessages, postMessage } from "../actions/home";
import Card from "antd/lib/card";
import Button from "antd/lib/button";
import LoadingOutlined from "@ant-design/icons/LoadingOutlined";
import EditorModal from "../components/EditorModal";
import Message from "../components/Message";
import "../styles/home.scss";

const Home = () => {

    const [editorModalVisible, setEditorModalVisible] = useState(false);

    // SELECTORS
    const messages = useSelector(state => state.messages);
    const messagesPending = useSelector(state => state.messagesPending);

    const dispatch = useDispatch();

    useEffect( () => {
      dispatch(getMessages());
    }, []);

    const handleOnSubmit = (data) => {
      setEditorModalVisible(!editorModalVisible)
      dispatch(postMessage(data));
    }

    const messagesMemo = useMemo(() =>
      messages.map(({ ...data }) => <Message {...data} />),
      [messages]
    );

    return (
        <div>
          <Card
	          loading={messagesPending}
            title={
              <span>
                Messages { messagesPending && <LoadingOutlined className="messages-loading-icon" /> }
              </span>
            }
            className="card-messages"
          >
            { messagesMemo }
          </Card>
          <div className="container-button-editor-modal">
            <Button
              type="primary"
              onClick={() => setEditorModalVisible(!editorModalVisible)}
            >
              Nouveau message
            </Button>
          </div>
          {
            editorModalVisible &&
            <EditorModal
              isVisible={editorModalVisible}
              onCancel={() => setEditorModalVisible(!editorModalVisible)}
              onSubmit={handleOnSubmit}
            />
          }
        </div>
    );
};

export default Home;