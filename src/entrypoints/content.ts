export default defineContentScript({
  matches: ['<all_urls>'],
  main() {
    console.log('Shotv content script loaded');
  },
});
