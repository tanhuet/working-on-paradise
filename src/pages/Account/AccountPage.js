import Account from "./Componets/Account";

const DUMMYUSER = {
        id: '1',
        name: 'Username',
        phone: '0123456789',
        email: 'uet@vnu.edu.vn',
        address: 'E3, Vietnam University of Hanoi, 144 Xuan Thuy, Cau Giay, Ha Noi',
        age: '20',
        gender: 'Female',
    }

const AccountPage = () => {


    return (
        <Account user={DUMMYUSER}/>
    );
  };
  
  export default AccountPage;