import React from 'react';

function GetStartedCard({post, theme = 'light'}) {
  const isDark = theme === 'dark';

  return (
    <div
      style={{
        background: isDark ? '#23272f' : '#fff',
        color: isDark ? '#eef2fa' : '#222',
        borderRadius: '12px',
        boxShadow: isDark
          ? '0 2px 12px rgba(30,32,38,0.45)'
          : '0 2px 12px rgba(30,32,38,0.075)',
        padding: '22px 26px 22px 22px',
        margin: '30px 0',
        minWidth: '320px',
        maxWidth: '380px',
        border: isDark ? '1px solid #363d4d' : '1px solid #f2f4f8',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3
          style={{
            fontSize: '1.2em',
            fontWeight: 600,
            margin: 0,
            color: isDark ? '#fff' : '#222'
          }}
        >
          {post.title}
        </h3>
        {/* External link 'open' icon as inline SVG */}
        <a href="_blank"><svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke={isDark ? "#b0eacf" : "#8fa4af"}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ marginLeft: 8, marginTop: 2 }}
          viewBox="0 0 20 20"
        >
          <path d="M15 9.5V15a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 15v-8A1.5 1.5 0 0 1 5.5 5H11"/>
          <polyline points="13.1 3.5 16 3.5 16 6.4"/>
          <line x1="16" y1="4" x2="10.5" y2="9.5"/>
        </svg></a>
      </div>
      <p
        style={{
          margin: '14px 0 0 0',
          fontSize: '1em',
          color: isDark ? '#c2c6d4' : '#495162'
        }}
      >
       {post.content}
      </p>
    </div>
  );
}

export default GetStartedCard;
