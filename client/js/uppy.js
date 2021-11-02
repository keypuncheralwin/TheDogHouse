

function uploadUppy(imageUrls){
  const uppy = Uppy.Core({ autoProceed: false, restrictions: {
      maxFileSize: 8000000,
      allowedFileTypes: ['image/*']
    } })
  uppy.use(Uppy.Dashboard, { target: '#drag-drop-area',width: '100%', height: '40%',inline: true, proudlyDisplayPoweredByUppy: false, theme: 'dark', })
  uppy.use(Uppy.Webcam, { target: Uppy.Dashboard });   
  uppy.use(Uppy.XHRUpload, { endpoint: '/api/pets/images', formData: true,
  fieldName: 'images' })

  uppy.on('upload-success', (file, response) => {
    const url = response.secure_url
    imageUrls.push(url)
    console.log(imageUrls)

})
}

function uploadUppyEdit(imageUrls){
  const uppy = Uppy.Core({ autoProceed: false, restrictions: {
      maxFileSize: 8000000,
      allowedFileTypes: ['image/*']
    } })
  uppy.use(Uppy.Dashboard, { target: '#drag-drop-area-edit',width: '100%', height: '40%',inline: true, proudlyDisplayPoweredByUppy: false, theme: 'dark', })
  uppy.use(Uppy.Webcam, { target: Uppy.Dashboard });   
  uppy.use(Uppy.XHRUpload, { endpoint: '/api/pets/images', formData: true,
  fieldName: 'images' })

  uppy.on('upload-success', (file, response) => {
    const url = response.secure_url
    imageUrls.push(url)
    console.log(imageUrls)

})
}

