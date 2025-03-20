const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');

  if (updatingBar) {
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  }

  if (event.detail.totalProgress === 1) {
    progressBar?.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar?.classList.remove('hide');
  }
};

const modelViewer = document.querySelector('model-viewer');
if (modelViewer) {
  modelViewer.addEventListener('progress', onProgress);
}
