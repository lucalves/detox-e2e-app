import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import NewMessageForm from './NewMessageForm';

describe('NewMessageForm', () => {
  describe('clicking send', () => {
    const messageText = 'Hello world';

    let sendHandler;
    let getByTestId;

    beforeEach(() => {
      sendHandler = jest.fn().mockName('sendHandler');
      ({getByTestId} = render(<NewMessageForm onSend={sendHandler} />));

      fireEvent.changeText(getByTestId('messageText'), messageText);
      fireEvent.press(getByTestId('sendButton'));
    });

    it('clears the message field', () => {
      expect(getByTestId('messageText')).toHaveProp('value', '');
    });

    it('calls the send handler', () => {
      expect(sendHandler).toHaveBeenCalledWith(messageText);
    });
  });
});
