const transWrap = document.getElementById('transcription');
const transcripts = document.getElementById('transcription').getElementsByTagName('span');
const video = document.querySelector('video');

// Click on any part of the transcript, and the video will forward to that part
transWrap.addEventListener('click', (e) => {
     if (e.target.tagName === 'SPAN') {
          let startPoint = e.target.getAttribute('data-start');
          video.currentTime = startPoint;
     }
});

// As the video progresses, the associated part in the transcript will be highlighted
video.addEventListener('timeupdate', () => {
     for (let i = 0; i < transcripts.length; i += 1) {
          let start = transcripts[i].getAttribute('data-start');
          let end = transcripts[i].getAttribute('data-end');

          if (video.currentTime >= start && video.currentTime <= end) {
               transcripts[i].className = 'spoken';
          } else {
               transcripts[i].className = '';
          }
     }
});
