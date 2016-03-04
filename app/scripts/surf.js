function surf(filepath, elem) {
    
    var wavesurfer = Object.create(WaveSurfer);
    
    wavesurfer.init({
        container: elem,
        waveColor: 'violet',
        progressColor: 'purple'
    });
    
    wavesurfer.load(filepath);
}

