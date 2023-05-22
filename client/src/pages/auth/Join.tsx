import { useCallback } from 'react';
import { AuthFormComponent } from '../../components/AuthFormComponent';
import { useNavigate } from 'react-router-dom';
import { withNoAuth } from '../../hocs/withAuth';

export const Join = withNoAuth(() => {
    const navigate = useNavigate();
    const handleSuccess = useCallback(() => {
        alert('로그인 페이지로 이동합니다.');
        navigate('/login');   
    }, []);

    return (
      <div className="container">
          <AuthFormComponent service='join' onSuccess={handleSuccess}/>
      </div>
    )
});