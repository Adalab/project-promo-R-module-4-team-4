const callToApi = (data) => {
  return fetch(
    'https://project-promo-r-module-4-team-4-production.up.railway.app/card',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
    .then((response) => response.json())

    .then((response) => {
      console.log(response);
      if (response.success) {
        return response;
      } else {
        console.log(response.error);
        const errorResponse = {
          success: response.success,
          //esto nos permite controlar lo que vamos a decir en el error para que no muestre el que está por defecto.
          error: 'Error al enviar los datos. Por favor revisa el formulario.',
        };
        return errorResponse;
      }
    });
};

export default callToApi;
