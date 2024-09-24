import React from 'react'
import './Widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Widget = ({type}) => {
    let data;

    const amount = 100;
    const diff = 20;

    switch(type){
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: <PeopleAltIcon className='icon' style={{
                    color: 'crimson',
                    backgroundColor: '',
                }}/>
            }
            break;
            case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'View all orders',
                icon: <ShoppingCartIcon className='icon' style={{
                    color: 'goldenrod',
                    backgroundColor: '',
                }}/>
            }
            break;
            case 'earning':
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link: 'View net earnings',
                icon: <AccountBalanceWalletIcon className='icon' style={{
                    color: 'green',
                    backgroundColor: '',
                }}/>
            }
            break;
            case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See details',
                icon: <AttachMoneyIcon  className='icon' style={{
                    color: 'purple',
                    backgroundColor: '',
                }}/>
            }
            break;
        default: 
            break
    }

  return (
    <div className='widget'>
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.isMoney && '$'} {amount}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <span className="percentage positive">
            <KeyboardArrowUpIcon/>
            {diff}%
        </span>
        {data.icon}
      </div>
    </div>
  )
}

export default Widget
