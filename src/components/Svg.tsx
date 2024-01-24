import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cleanInfo } from "../store/reducer/Login";


function Svg({ type, className }: {type: 'home' | 'disconnect', className?: string }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let path = '';
  switch (type) {
    case 'home':
      path = 'M20 7.093l-3-3v-2.093h3v5.093zm4 5.907h-3v10h-18v-10h-3l12-12 12 12zm-10 2h-4v6h4v-6z';
      break;
    case 'disconnect' :
      path = 'M11 21h8v-2l1-1v4h-9v2l-10-3v-18l10-3v2h9v5l-1-1v-3h-8v18zm10.053-9l-3.293-3.293.707-.707 4.5 4.5-4.5 4.5-.707-.707 3.293-3.293h-9.053v-1h9.053z';
      break;
  }

  const clickHandle = () => {
    if(type === 'home') navigate('/home');
    if(type === 'disconnect'){
      navigate('/');
      dispatch(cleanInfo());
      localStorage.removeItem('user');
      localStorage.removeItem('sessionToken');
    }
  }
  return (
    <svg
      className={`hover:fill-current cursor-pointer ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      onClick={clickHandle}
    >
      <path d={path} />
    </svg>
  );
}

export default Svg;
