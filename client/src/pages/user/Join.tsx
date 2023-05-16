import './styles.css';
import AuthFormComponent from '../../components/AuthFormComponent';
import { useNavigate } from 'react-router-dom';
import { withNoAuth } from '../../hocs/withAuth';
import { useCallback } from 'react';

const Join = () => {
    const navigate = useNavigate();
    const handleSuccess = useCallback(() => {
        alert('로그인 페이지로 이동합니다.');
        navigate('/login');   
    }, []);

    return (
      <div className="container fixed">
          <AuthFormComponent service='join' onSuccess={handleSuccess}/>
      </div>
    )
}

export default withNoAuth(Join);