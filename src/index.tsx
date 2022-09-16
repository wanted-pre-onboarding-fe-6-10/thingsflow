import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

// [리팩토링]
// 가급적 class 안쓰게
// class 쓰게 되야 한다면 되도록 this 안쓰게끔
// class로 하면 this가 뭔지 계속 신경써야하고  신경써야 하는게 더 많아져서
