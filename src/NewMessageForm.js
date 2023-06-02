import React, {useState} from 'react';
import {Button, View, TextInput} from 'react-native';

export default function NewMessageForm({onSend}) {
  const [inputText, setInputText] = useState('');

  function handleSend() {
    onSend(inputText);
    setInputText('');
  }

  return (
    <View style={{ margin: 15 }}>
      <TextInput
        testID="messageText"
        value={inputText}
        onChangeText={setInputText}
        placeholder='Insert one thing...'
        style={{ marginBottom: 10, borderWidth: 1, borderColor: '#ccc', padding: 10, fontSize: 18 }}
      />
      <Button title="Enviar" testID="sendButton" onPress={handleSend}></Button>
    </View>
  );
}
