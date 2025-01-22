import { useRouteError, useNavigate } from 'react-router-dom';
import { LoginModal } from '@shared/ui/LoginModal';

export function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  // console.log(error);
  
  return (
    <>
      {
        error.status && [401, 403].includes(error.status)
        ? (
          <LoginModal prevPage='' />
        )
        : (
          <div id='error-page'>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>[{error.status}] {error.statusText || error.message}</i>
            </p>
            <p className='mt-2 flex gap-2'>
              <button onClick={() => { navigate(-1) }}>prev</button>
              <button onClick={() => { navigate("/") }}>Home</button>
            </p>
          </div>
        )
      }
    </>
  );
}
