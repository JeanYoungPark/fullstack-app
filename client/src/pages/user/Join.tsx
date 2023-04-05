import './styles.css';
import AuthFormComponent from '../../components/AuthFormComponent';

const Join = () => {
  return (
    <div className="container fixed">
        <AuthFormComponent service='join'/>
    </div>
  )
}

export default Join