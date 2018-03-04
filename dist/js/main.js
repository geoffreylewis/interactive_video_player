const transcripts = document.getElementById('transcription').getElementsByTagName('span');
const video = document.querySelector('video');

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
