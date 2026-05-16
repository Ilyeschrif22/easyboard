import './contentcards.css';

const iconProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: '16',
  height: '16',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '2',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const ContentCards = () => {
  return (
    <div className="content-cards">
        <div className="content-card">
            <div className='card-header'>
                <p className='card-title'>Total customers</p> <div className='card-avatar-icon'>
                   <div className='avatar-icon-container'> <svg {...iconProps} className="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg></div>
                    </div>
                    </div>
            <p className='card-value'>500 clients</p>
            <p className='card-change positive'>+5.2% from last month</p>

        </div>

         <div className="content-card">
            <div className='card-header'>
                <p className='card-title'>Credit card transactions</p> <div className='card-avatar-icon'>
                   <div className='avatar-icon-container'> <svg {...iconProps} className="lucide lucide-credit-card-icon lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg></div>
                    </div>
                    </div>
            <p className='card-value'>1,200TND</p>
            <p className='card-change positive'>+2.1% from last month</p>
        </div>

         <div className="content-card">
            <div className='card-header'>
                <p className='card-title'>Banknote Arrow Up</p> <div className='card-avatar-icon'>
                   <div className='avatar-icon-container'> <svg {...iconProps} className="lucide lucide-banknote-arrow-up-icon lucide-banknote-arrow-up"><path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"/><path d="M18 12h.01"/><path d="M19 22v-6"/><path d="m22 19-3-3-3 3"/><path d="M6 12h.01"/><circle cx="12" cy="12" r="2"/></svg></div>
                    </div>
                    </div>
            <p className='card-value'>500TND</p>
            <p className='card-change positive'>+2.1% from last month</p>

        </div>

         <div className="content-card">
            <div className='card-header'>
                <p className='card-title'>Banknote Arrow Down</p> <div className='card-avatar-icon'>
                   <div className='avatar-icon-container'> <svg {...iconProps} className="lucide lucide-banknote-arrow-down-icon lucide-banknote-arrow-down"><path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5"/><path d="m16 19 3 3 3-3"/><path d="M18 12h.01"/><path d="M19 16v6"/><path d="M6 12h.01"/><circle cx="12" cy="12" r="2"/></svg></div>
                    </div>
                    </div>
            <p className='card-value'>200TND</p>
            <p className='card-change negative'>-1.5% from last month</p>

        </div>


     
    </div>
  );
};

export default ContentCards;
