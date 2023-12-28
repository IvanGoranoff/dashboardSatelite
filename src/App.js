import React, { useEffect } from 'react';
import Display from './components/Display';
import CommandPanel from './components/CommandPanel';
import NotificationsPanel from './components/NotificationsPanel';
import './App.css';

//redux
import { useDispatch } from 'react-redux';
import { updateVoltage, updateCurrent, addNotification } from './redux/actions';


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            // Симулира напрежението и тока
            const newVoltage = Math.random() * (30 - 18) + 18;
            const newCurrent = Math.random() * 3;

            dispatch(updateVoltage(newVoltage));
            dispatch(updateCurrent(newCurrent));

            // Генерира времева марка и случаен номер на модула
            const timestamp = new Date().toLocaleString();
            const moduleId = Math.floor(Math.random() * 1000);

            // Проверка за предупреждения
            if (newVoltage < 18) {
                dispatch(addNotification({ type: 'warning', message: `Ниско напрежение на батерията! [${timestamp}, Модул: ${moduleId}]` }));
            } else if (newVoltage > 30) {
                dispatch(addNotification({ type: 'error', message: `Високо напрежение! [${timestamp}, Модул: ${moduleId}]` }));
            }

            if (newCurrent > 2.5) {
                dispatch(addNotification({ type: 'error', message: `Висок ток на устройството! [${timestamp}, Модул: ${moduleId}]` }));
            }
        }, 5000); // Обновява се на всеки 5 секунди

        return () => clearInterval(interval);
    }, [dispatch]);



    return (
        <div className="App">
            <Display />
            <CommandPanel />
            <NotificationsPanel />
        </div>
    );
}

export default App;
