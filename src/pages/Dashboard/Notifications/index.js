import React, {useEffect ,useState} from 'react';
import { useSelector } from 'react-redux';
import {connect, disconnect, subscribeToNewRequestMusic} from '../../../services/socket';

import LogoParecis from '../../../assets/logoParecis.svg'

import {Launcher} from 'react-chat-window'

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
  }, [stupWebSocket]);

  useEffect(() => {
    loadNewRequestMusic();
  }, [conteudo, loadNewRequestMusic])

  function loadNewRequestMusic() {
    subscribeToNewRequestMusic(request => setConteudo([...conteudo, {
      author: 'them',
      type: 'text',
      data: {
        text: request
      }
    }]));
  }

  // async function loadNotifications(){
  //   const response = await api.get(`notifications/${radio_id}?data=${date}`);

  //   response.data.map(el=> setRecentRequest(el.content));
  // }

  return (
    <div style={{zIndex: 5}} className="left-align">
       <Launcher
        agentProfile={{
          teamName: 'Pedidos de músicas',
          imageUrl: `${LogoParecis || 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'}  `
        }}
        onMessageWasSent={() => {console.log("Ainda não implementado")}}
        messageList={conteudo}
      />
    </div>
  );
}
