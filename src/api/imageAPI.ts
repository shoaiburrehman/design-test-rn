const url = 'https://sdk.photoroom.com/v1/segment';

const apiKey = '8d0f9d7c48fb041f25fe64e86991bae9bafc3988';

export async function removeBackground(imageFile: File): Promise<Blob> {
  const formData = new FormData();
  formData.append('image_file', imageFile);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'X-Api-Key': apiKey,
    },
    body: formData,
  });
  console.log('response: ', response);
  if (!response.ok) {
    console.error(response.json());
    throw new Error('Network response was not ok');
  }

  const imageBlob: Blob = await response.blob();
  console.log('imageBlob: ', imageBlob);

  return imageBlob;
}
