import './styles.css';

function Login() {
  return (
    <div className="container fixed">
        <div className="container__wrapper">
            <h1 className='logo text-center'>logo</h1>
            <p className='text-center'>하나의 계정으로 서비스를 이용하세요.</p>
            <div className="socialLogin">
                <p className='txt text-center'>다른 서비스로 로그인</p>
                <ul className="socialLogin__box">
                    <li className="el">구글</li>
                    <li className="el">네이버</li>
                    <li className="el">카카오톡</li>
                </ul>
            </div>
            <div className='or'>
                <div className='mid-line'></div>
                <p className='txt text-center'>또는</p>
            </div>
            <div className="form">
                <form>
                    <p><input type="text" name="id" placeholder='이메일'></input></p>
                    <p><input type="password" name="password" placeholder='비밀번호'></input></p>
                    <button type="submit">로그인</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login