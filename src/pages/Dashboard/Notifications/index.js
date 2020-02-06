import React, {useEffect ,useState} from 'react';
import { useSelector } from 'react-redux';
import {connect, disconnect, subscribeToNewRequestMusic} from '../../../services/socket';

import {Launcher} from 'react-chat-window'
import { Container } from './styles';


export default function Notifications() {

  
  const [conteudo, setConteudo] = useState([{
    author: 'them',
      type: 'text',
      data: {
        text: 'Aqui você recebera os seus pedidos de música'
      }
  }]);

  const {radio_id} = useSelector(state => state.user.profile);

  function stupWebSocket() {
    disconnect();
    connect(radio_id);
  }

  useEffect(() => {
    stupWebSocket();

    subscribeToNewRequestMusic(request => setConteudo([...conteudo, {
      author: 'them',
      type: 'text',
      data: {
        text: request
      }
    }]))
  }, [])

  return (
    <div className="left-align">
       <Launcher
        agentProfile={{
          teamName: 'react-chat-window',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={() => {console.log(this)}}
        messageList={conteudo}
      />
    </div>
  );
}
