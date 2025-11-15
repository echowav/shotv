export default defineContentScript({
  matches: ['<all_urls>'],
  main() {
    console.log('Shotv content script loaded');

    browser.runtime.onMessage.addListener((message) => {
      if (message.type === 'CAPTURE_VIDEO') {
        captureVideoFrame();
      }
    });
  },
});

function captureVideoFrame(videoElement = null) {
  const video = videoElement || document.querySelector('video');

  if (!video) {
    console.error('Cannot find a video element on the page.');
    return;
  }

  // Create a canvas element to draw the current frame
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth || video.clientWidth;
  canvas.height = video.videoHeight || video.clientHeight;

  const ctx = canvas.getContext('2d')!;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Convert the canvas to a data URL (PNG format)
  const dataUrl = canvas.toDataURL('image/png');

  // Create a temporary <a> element for downloading
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = `${document.title}-${Date.now()}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  console.log('Current video frame has been exported as a PNG image');
  return dataUrl;
}
