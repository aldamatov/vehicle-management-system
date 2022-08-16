const prodConfig = {
  apiKey: 'AIzaSyBIYIb_dbizBcruyN0lZG8DeFuWbZZETbI',
  authDomain: 'vehicle-management-syste-337b8.firebaseapp.com',
  databaseURL: 'https://vehicle-management-syste-337b8-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'vehicle-management-syste-337b8',
  storageBucket: 'vehicle-management-syste-337b8.appspot.com',
  messagingSenderId: '403167433279',
  appId: '1:403167433279:web:d4340e70e0b00fb1869e8a',
  measurementId: 'G-TJ6EQ1QHKF'
};

const devConfig = {
  apiKey: 'AIzaSyBIYIb_dbizBcruyN0lZG8DeFuWbZZETbI',
  authDomain: 'vehicle-management-syste-337b8.firebaseapp.com',
  databaseURL: 'https://vehicle-management-syste-337b8-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'vehicle-management-syste-337b8',
  storageBucket: 'vehicle-management-syste-337b8.appspot.com',
  messagingSenderId: '403167433279',
  appId: '1:403167433279:web:d4340e70e0b00fb1869e8a',
  measurementId: 'G-TJ6EQ1QHKF'
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
