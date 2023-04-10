import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addTodo } from '../redux/store';

export const App = () => {
  const value = useSelector(state => state.myValue);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <button onClick={() => dispatch(increment(1))}>Плюс</button>
      <p>{value}</p>
      {/* decrement(100) вернет обьект {tepe:decrement payload: 100} */}
      <button onClick={() => dispatch(decrement(1))}>Минус</button>
      <button
        onClick={() => {
          dispatch(
            addTodo([
              { q: 1, f: 2 },
              { q: 1, f: 2 },
            ])
          );
        }}
      >
        Добавить массив
      </button>
    </div>
  );
};
