import React, {useState} from 'react';
import {Button, Text, TextInput} from 'react-native';

export default function NewMessageForm({onSend}) {
  const [inputText, setInputText] = useState('');

  function handleSend() {
    onSend(inputText);
    setInputText('');
  }

  return (
    <>
      <TextInput
        testID="messageText"
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Enviar" testID="sendButton" onPress={handleSend}></Button>
    </>
  );
}
