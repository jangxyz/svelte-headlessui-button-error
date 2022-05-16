
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  let ssr = true;

  // no error when ssr is set to false.
  //ssr = false;

  const response = await resolve(event, {
    ssr,
  });
  return response;
}

