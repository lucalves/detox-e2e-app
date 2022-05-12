describe('Creating a message', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should add the message to the list', async () => {
    await element(by.id('messageText')).typeText('Enviando mensagem');
    await element(by.id('sendButton')).tap();

    await expect(element(by.id('messageText'))).toHaveText('');
    await expect(element(by.label('Enviando mensagem'))).toBeVisible();
  });
});
