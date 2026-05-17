import './sidebar.css'

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

const Sidebar = () => {
    return (
        <div className="sidebar">

            <div className="sidebar-header">
              <img src="/logo.png" alt="EasyDash" className="sidebar-logo" />
            </div>

            <ul className="sidebar-menu">

                <li className="sidebar-link active">
                    <svg {...iconProps} className="icon">
                        <path d="m12 14 4-4" />
                        <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                    </svg>
                    Dashboard
                </li>

                <li className="sidebar-link">
                    <svg {...iconProps} className="lucide lucide-folder-icon lucide-folder">
                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                    </svg>
                    Projects
                </li>

                <li className="sidebar-link">
                    <svg {...iconProps} className="lucide lucide-chart-no-axes-combined-icon lucide-chart-no-axes-combined">
                        <path d="M12 16v5" />
                        <path d="M16 14.639V21" />
                        <path d="M20 10.656V21" />
                        <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
                        <path d="M4 18.463V21" />
                        <path d="M8 14.656V21" />
                    </svg>
                    Analytics
                </li>

                <li className="sidebar-link">
                    <svg {...iconProps} className="lucide lucide-users-icon lucide-users">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <path d="M16 3.128a4 4 0 0 1 0 7.744" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <circle cx="9" cy="7" r="4" />
                    </svg>
                    Team
                </li>

                <li className="sidebar-link">
                    <svg {...iconProps} className="lucide lucide-clipboard-list-icon lucide-clipboard-list">
                        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                        <path d="M12 11h4" />
                        <path d="M12 16h4" />
                        <path d="M8 11h.01" />
                        <path d="M8 16h.01" />
                    </svg>
                    Tasks
                </li>
            </ul>

            <div className="sidebar-footer">
             
             
              <ul className='sidebar-footer-menu'>
                <li className="sidebar-footer-link">
                    <svg {...iconProps} className="lucide lucide-settings-icon lucide-settings">
                        <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                  Settings
                </li>

                <li className="sidebar-footer-link">
                    <svg {...iconProps} className="lucide lucide-badge-info-icon lucide-badge-info">
                        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
                        <line x1="12" x2="12" y1="16" y2="12"/>
                        <line x1="12" x2="12.01" y1="8" y2="8"/>
                    </svg>
                    Help
                </li>

                <li className="sidebar-footer-link">
                    <svg {...iconProps} className="lucide lucide-log-out-icon lucide-log-out">
                        <path d="m16 17 5-5-5-5"/>
                        <path d="M21 12H9"/>
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    </svg>
                    Logout
                </li>
              </ul>
            </div>

        </div>
    )
}

export default Sidebar
