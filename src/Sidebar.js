import React from 'react';

function Sidebar({ currentPage, setCurrentPage, theme, toggleTheme }) {
  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'Portfolio', value: 'portfolio' },
     { label: 'Experimentals', value: 'experimentals' },
      { label: 'Slack archives', value: 'archives' },
      { label: 'Refer a friend', value: 'friend' },
      { label: 'Gift a subscription', value: 'subscription' },
      { label: 'Account', value: 'account' },

  ];

  const isDark = theme === 'dark';

  return (
    <nav style={{
      width: '25%',
      height: '100vh',
      background: isDark ? '#1e1e1e' : '#fff',
      color: isDark ? '#ddd' : '#333',
      borderRight: isDark ? '1px solid #333' : '1px solid #e7e7e7',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: 0,
      left: 0,
      padding: '24px'
    }}>
      {/* Logo (adjust colors based on theme) */}
      <div style={{
        marginBottom: '24px',
        color: isDark ? '#ddd' : '#333'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ fontWeight: 900, fontSize: '2.2em' }}>C.</div>
  <div style={{ fontWeight: 700, fontSize: '1.35em', marginLeft: 2 }}>capitalmind</div></div>
        
        <div style={{ fontWeight: '700', fontSize: '1.2em', color: '#18d29c' }}>premium</div>
      </div>

      {/* Navigation buttons */}
      <div style={{ flexGrow: 1 }}>
        {navItems.map(item => (
          <button
            key={item.value}
            onClick={() => setCurrentPage(item.value)}
            style={{
              background: currentPage === item.value ? (isDark ? '#333' : '#eff5ff') : 'transparent',
              color: currentPage === item.value ? (isDark ? '#18d29c' : '#1890ff') : (isDark ? '#ccc' : '#555'),
              fontWeight: currentPage === item.value ? 'bold' : 'normal',
              border: 'none',
              width: '100%',
              padding: '12px',
              textAlign: 'left',
              cursor: 'pointer',
              fontSize: '1.07em'
            }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Dark/Light mode switch */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <label style={{ cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={isDark}
            onChange={toggleTheme}
            style={{ marginRight: '8px' }}
          />
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </label>
      </div>
    </nav>
  );
}


export default Sidebar;