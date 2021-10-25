
function uploadUppy(){
    const uppy = Uppy.Core({ autoProceed: false, restrictions: {
        maxFileSize: 8000000,
        allowedFileTypes: ['image/*']
      } })
    uppy.use(Uppy.Dashboard, { target: '#drag-drop-area', width: '100%', height: '40%',inline: true })
    uppy.use(Uppy.Webcam, { target: Uppy.Dashboard });
    uppy.use(Uppy.XHRUpload, { endpoint: 'http://localhost:3000/uploads' })
}
