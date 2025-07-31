'use client';

export default function ClientDashboard() {
  const mostUsedTools = [
    {
      name: 'PDF to Word',
      uses: '1,247 uses',
      icon: 'M14.1606 6.66665V13.3333H12.4944L10.8281 11.6666L9.16186 13.3333H7.49561V6.66665H9.16186V10.8333L10.8281 9.16665L12.4944 10.8333V6.66665H13.3275V3.33331H4.99624V16.6666H16.66V6.66665H14.1606ZM3.32999 2.49998C3.32999 2.26665 3.41052 2.06943 3.57159 1.90831C3.73266 1.7472 3.92984 1.66665 4.16311 1.66665H14.1606L18.3262 5.83331V17.5C18.3262 17.7222 18.2457 17.9166 18.0846 18.0833C17.9236 18.25 17.7264 18.3333 17.4931 18.3333H4.16311C3.92984 18.3333 3.73266 18.2528 3.57159 18.0916C3.41052 17.9305 3.32999 17.7333 3.32999 17.5V2.49998Z',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      name: 'PDF to Excel',
      uses: '892 uses',
      icon: 'M11.492 9.99998L13.8247 13.3333H11.8252L10.4922 11.4333L9.1592 13.3333H7.1597L9.49246 9.99998L7.1597 6.66665H9.1592L10.4922 8.56665L11.8252 6.66665H12.9916V3.33331H4.66033V16.6666H16.3241V6.66665H13.8247L11.492 9.99998ZM2.99408 2.49998C2.99408 2.26665 3.07462 2.06943 3.23569 1.90831C3.39676 1.7472 3.59393 1.66665 3.8272 1.66665H13.8247L17.9903 5.83331V17.5C17.9903 17.7222 17.9098 17.9166 17.7487 18.0833C17.5877 18.25 17.3905 18.3333 17.1572 18.3333H3.8272C3.59393 18.3333 3.39676 18.2528 3.23569 18.0916C3.07462 17.9305 2.99408 17.7333 2.99408 17.5V2.49998Z',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      name: 'Merge PDFs',
      uses: '654 uses',
      icon: 'M6.99845 4.99998V2.49998C6.99845 2.26665 7.07899 2.06943 7.24006 1.90831C7.40113 1.7472 7.5983 1.66665 7.83158 1.66665H17.8291C18.0624 1.66665 18.2595 1.7472 18.4206 1.90831C18.5817 2.06943 18.6622 2.26665 18.6622 2.49998V14.1666C18.6622 14.4 18.5817 14.5972 18.4206 14.7583C18.2595 14.9194 18.0624 15 17.8291 15H15.3297V17.5C15.3297 17.7333 15.2492 17.9305 15.0881 18.0916C14.927 18.2528 14.7299 18.3333 14.4966 18.3333H4.49908C4.2658 18.3333 4.06863 18.2528 3.90756 18.0916C3.74649 17.9305 3.66595 17.7333 3.66595 17.5V5.83331C3.66595 5.59998 3.74927 5.40276 3.91589 5.24165C4.08252 5.08054 4.27691 4.99998 4.49908 4.99998H6.99845ZM5.3322 6.66665V16.6666H13.6635V6.66665H5.3322ZM8.6647 4.99998H15.3297V13.3333H16.996V3.33331H8.6647V4.99998Z',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      name: 'Compress PDF',
      uses: '543 uses',
      icon: 'M17.4931 18.3333H4.16314C3.92987 18.3333 3.73269 18.2528 3.57162 18.0916C3.41055 17.9305 3.33002 17.7333 3.33002 17.5V2.49998C3.33002 2.26665 3.41055 2.06943 3.57162 1.90831C3.73269 1.7472 3.92987 1.66665 4.16314 1.66665H17.4931C17.7264 1.66665 17.9236 1.7472 18.0847 1.90831C18.2457 2.06943 18.3263 2.26665 18.3263 2.49998V17.5C18.3263 17.7333 18.2457 17.9305 18.0847 18.0916C17.9236 18.2528 17.7264 18.3333 17.4931 18.3333ZM16.66 16.6666V3.33331H4.99627V16.6666H16.66ZM12.4944 9.99998V14.1666H9.16189V11.6666H10.8281V9.99998H12.4944ZM10.8281 3.33331H12.4944V4.99998H10.8281V3.33331ZM9.16189 4.99998H10.8281V6.66665H9.16189V4.99998ZM10.8281 6.66665H12.4944V8.33331H10.8281V6.66665ZM9.16189 8.33331H10.8281V9.99998H9.16189V8.33331Z',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      name: 'Split PDF',
      uses: '432 uses',
      icon: 'M8.54269 6.69998L10.6755 8.81665L16.2741 3.21665C16.4963 3.00554 16.749 2.86109 17.0322 2.78331C17.3155 2.70554 17.6015 2.70554 17.8904 2.78331C18.1792 2.86109 18.4291 3.00554 18.6402 3.21665L8.54269 13.3C8.85372 13.8222 9.00924 14.3861 9.00924 14.9916C9.00924 15.5972 8.85928 16.1555 8.55935 16.6666C8.25943 17.1778 7.85397 17.5833 7.34299 17.8833C6.83201 18.1833 6.27659 18.3333 5.67674 18.3333C5.07689 18.3333 4.52147 18.1833 4.01049 17.8833C3.49951 17.5833 3.09405 17.1778 2.79413 16.6666C2.4942 16.1555 2.34424 15.6 2.34424 15C2.34424 14.4 2.4942 13.8444 2.79413 13.3333C3.09405 12.8222 3.49951 12.4166 4.01049 12.1166C4.52147 11.8166 5.07967 11.6666 5.68507 11.6666C6.29047 11.6666 6.85422 11.8222 7.37631 12.1333L9.49245 9.99998L7.37631 7.86665C6.85422 8.17776 6.29047 8.33331 5.68507 8.33331C5.07967 8.33331 4.52147 8.18331 4.01049 7.88331C3.49951 7.58331 3.09405 7.17776 2.79413 6.66665C2.4942 6.15554 2.34424 5.59998 2.34424 4.99998C2.34424 4.39998 2.4942 3.84443 2.79413 3.33331C3.09405 2.8222 3.49951 2.41665 4.01049 2.11665C4.52147 1.81665 5.07689 1.66665 5.67674 1.66665C6.27659 1.66665 6.83201 1.81665 7.34299 2.11665C7.85397 2.41665 8.25943 2.8222 8.55935 3.33331C8.85928 3.84443 9.00924 4.40276 9.00924 5.00831C9.00924 5.61387 8.85372 6.17776 8.54269 6.69998ZM13.0249 11.1833L18.6402 16.7833C18.4291 16.9944 18.1792 17.1389 17.8904 17.2166C17.6015 17.2944 17.3155 17.2944 17.0322 17.2166C16.749 17.1389 16.4963 16.9944 16.2741 16.7833L11.8585 12.35L13.0249 11.1833Z',
      bgColor: 'bg-red-100',
      iconColor: 'text-red-600'
    },
    {
      name: 'PDF Signature',
      uses: '321 uses',
      icon: 'M6.94841 11.7C6.74846 12.2222 6.58183 12.7166 6.44853 13.1833C7.25944 12.5944 8.2092 12.2333 9.29782 12.1C10.3198 11.9666 11.2751 11.5889 12.1638 10.9666C13.0302 10.3555 13.7023 9.60554 14.1799 8.71665L12.9802 7.49998L14.9797 5.48331C15.3463 5.11665 15.7462 4.46109 16.1794 3.51665C13.9022 3.8722 11.9916 4.74998 10.4475 6.14998C8.99234 7.48331 7.82596 9.33331 6.94841 11.7ZM15.3296 7.49998L16.1628 8.33331C15.874 9.18887 15.4241 9.99442 14.8131 10.75C14.1577 11.55 13.3912 12.2055 12.5137 12.7166C11.5695 13.2722 10.5642 13.6166 9.49777 13.75C7.2761 14.0278 5.88756 15.5555 5.33214 18.3333H3.66589L3.71588 18.0166C3.97137 16.4833 4.2102 15.2555 4.43237 14.3333C4.81005 12.7333 5.27105 11.3 5.81536 10.0333C6.51518 8.43331 7.36497 7.06665 8.36472 5.93331C9.53109 4.59998 10.9085 3.57776 12.497 2.86665C14.2855 2.06665 16.3405 1.66665 18.6621 1.66665C17.829 4.16665 16.9959 5.83331 16.1628 6.66665L15.3296 7.49998Z',
      bgColor: 'bg-gray-100',
      iconColor: 'text-gray-600'
    }
  ];

  const recentActivities = [
    {
      title: 'PDF to Word conversion',
      description: 'quarterly-report.pdf',
      time: '2 minutes ago',
      status: 'completed'
    },
    {
      title: 'API key regenerated',
      description: 'Production environment',
      time: '1 hour ago',
      status: 'completed'
    },
    {
      title: 'Bulk PDF merge',
      description: '12 files processed',
      time: '3 hours ago',
      status: 'completed'
    },
    {
      title: 'OCR processing',
      description: 'scanned-document.pdf',
      time: '5 hours ago',
      status: 'completed'
    },
    {
      title: 'PDF compression',
      description: 'large-presentation.pdf',
      time: '1 day ago',
      status: 'completed'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 22 20">
              <path d="M10.9922 13.3333H7.65969V6.66667H10.9922C11.592 6.66667 12.1475 6.81667 12.6584 7.11667C13.1694 7.41667 13.5749 7.82223 13.8748 8.33334C14.1747 8.84445 14.3247 9.4 14.3247 10C14.3247 10.6 14.1747 11.1556 13.8748 11.6667C13.5749 12.1778 13.1694 12.5833 12.6584 12.8833C12.1475 13.1833 11.592 13.3333 10.9922 13.3333ZM9.32594 8.33334V11.6667H10.9922C11.2921 11.6667 11.5698 11.5917 11.8253 11.4417C12.0808 11.2917 12.2835 11.0889 12.4335 10.8333C12.5835 10.5778 12.6584 10.3 12.6584 10C12.6584 9.7 12.5835 9.42222 12.4335 9.16667C12.2835 8.91111 12.0808 8.70834 11.8253 8.55834C11.5698 8.40834 11.2921 8.33334 10.9922 8.33334H9.32594ZM13.4916 3.33334H5.16031V16.6667H16.8241V6.66667H13.4916V3.33334ZM3.49406 2.5C3.49406 2.26667 3.5746 2.06945 3.73567 1.90834C3.89674 1.74722 4.09391 1.66667 4.32719 1.66667H14.3247L18.4903 5.83334V17.5C18.4903 17.7222 18.4098 17.9167 18.2487 18.0833C18.0876 18.25 17.8905 18.3333 17.6572 18.3333H4.32719C4.09391 18.3333 3.89674 18.2528 3.73567 18.0917C3.5746 17.9306 3.49406 17.7333 3.49406 17.5V2.5Z"/>
            </svg>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Pro Plan Badge */}
            <div className="flex items-center px-3 py-2 border border-blue-200 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-blue-700 text-sm font-medium">Pro Plan</span>
            </div>

            {/* Manage Plan Button */}
            <button className="flex items-center px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 15 14">
                <path d="M2.60943 9.04167V2.04167H1.44318V0.875H3.19255C3.35583 0.875 3.49383 0.931389 3.60657 1.04417C3.71931 1.15694 3.77568 1.295 3.77568 1.45833V8.45833H11.0298L12.196 3.79167H4.94193V2.625H12.9424C13.1057 2.625 13.2437 2.68139 13.3564 2.79417C13.4692 2.90694 13.5255 3.045 13.5255 3.20833C13.5255 3.255 13.5178 3.30167 13.5022 3.34833L12.0444 9.18167C12.0133 9.31389 11.9453 9.42083 11.8403 9.5025C11.7353 9.58417 11.6168 9.625 11.4846 9.625H3.19255C3.02928 9.625 2.89127 9.56861 2.77853 9.45583C2.66579 9.34306 2.60943 9.205 2.60943 9.04167Z"/>
              </svg>
              Manage Plan
            </button>

            {/* Notifications */}
            <button className="relative p-2 border border-gray-200 rounded-lg">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5h-5l5-5zM4 14h11a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v7a2 2 0 002 2z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 text-white text-xs rounded-full flex items-center justify-center">2</span>
            </button>

            {/* User Profile */}
            <button className="flex items-center px-2 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg text-white">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-semibold text-sm">SJ</span>
              </div>
              <div className="text-left mr-3">
                <div className="text-sm font-medium">Sarah Johnson</div>
                <div className="text-xs text-red-100">sarah@company.com</div>
              </div>
              <svg className="w-4 h-4 text-red-200" fill="currentColor" viewBox="0 0 17 16">
                <path d="M8.66411 8.70667L11.9554 5.41333L12.9015 6.34667L8.66411 10.5867L4.42676 6.34667L5.37283 5.41333L8.66411 8.70667Z"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pl-64">
        <main className="p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Welcome Banner */}
            <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 overflow-hidden">
              {/* Background decorations */}
              <div className="absolute inset-0 bg-black bg-opacity-10"></div>
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-white bg-opacity-5 rounded-full"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white bg-opacity-5 rounded-full"></div>
              
              <div className="relative z-10 flex justify-between items-center">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Sarah Johnson!</h1>
                  <p className="text-blue-100 text-lg mb-1">Ready to convert your PDFs? You're on the Pro Plan.</p>
                  <p className="text-blue-200 text-sm">Thursday, July 31, 2025 • 08:33 AM</p>
                </div>
                <div className="flex space-x-4">
                  <button className="px-6 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl text-white font-medium hover:bg-opacity-30 transition-colors">
                    Upload New PDF
                  </button>
                  <button className="px-6 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-xl text-white font-medium hover:bg-opacity-30 transition-colors">
                    View All Tools
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Files Converted */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">Files Converted</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">2,847</p>
                    <p className="text-green-600 text-sm">+12%</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M13.4915 3.33334H5.1603V16.6667H16.824V6.66668H13.4915V3.33334ZM3.49405 2.50001C3.49405 2.26668 3.57458 2.06946 3.73566 1.90834C3.89673 1.74723 4.0939 1.66668 4.32717 1.66668H14.3247L18.4903 5.83334V17.5C18.4903 17.7222 18.4098 17.9167 18.2487 18.0833C18.0876 18.25 17.8904 18.3333 17.6572 18.3333H4.32717C4.0939 18.3333 3.89673 18.2528 3.73566 18.0917C3.57458 17.9306 3.49405 17.7333 3.49405 17.5V2.50001ZM10.9922 9.16668V6.66668L14.3247 10L10.9922 13.3333V10.8333H7.65967V9.16668H10.9922Z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* API Calls Remaining */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">API Calls Remaining</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">47,153</p>
                    <p className="text-gray-500 text-sm">3,847 used</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.1566 9.99999L14.258 15.9L13.0917 14.7167L17.8072 9.99999L13.0917 5.28333L14.258 4.09999L20.1566 9.99999ZM4.17723 9.99999L8.89272 14.7167L7.72635 15.9L1.82782 9.99999L7.72635 4.09999L8.89272 5.28333L4.17723 9.99999Z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Storage Used */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">Storage Used</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">45.2 GB</p>
                    <p className="text-gray-500 text-sm">of 100 GB</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M10.159 15.8333V7.5H4.32714V15.8333H10.159ZM10.159 5.83333V3.33333C10.159 3.1 10.2395 2.90278 10.4006 2.74167C10.5617 2.58055 10.7589 2.5 10.9921 2.5H18.4903C18.7235 2.5 18.9207 2.58055 19.0818 2.74167C19.2429 2.90278 19.3234 3.1 19.3234 3.33333V16.6667C19.3234 16.9 19.2429 17.0972 19.0818 17.2583C18.9207 17.4194 18.7235 17.5 18.4903 17.5H3.49401C3.26074 17.5 3.06357 17.4194 2.90249 17.2583C2.74142 17.0972 2.66089 16.9 2.66089 16.6667V6.66667C2.66089 6.43333 2.74142 6.23611 2.90249 6.075C3.06357 5.91389 3.26074 5.83333 3.49401 5.83333H10.159ZM11.8253 4.16667V15.8333H17.6571V4.16667H11.8253ZM5.16026 13.3333H9.32589V15H5.16026V13.3333ZM12.6584 13.3333H16.824V15H12.6584V13.3333ZM12.6584 10.8333H16.824V12.5H12.6584V10.8333ZM12.6584 8.33333H16.824V10H12.6584V8.33333ZM5.16026 10.8333H9.32589V12.5H5.16026V10.8333Z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Active Integrations */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-gray-600 text-sm font-medium mb-1">Active Integrations</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">8</p>
                    <p className="text-green-600 text-sm">+2 this month</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M11.8253 15V16.6667H16.824V18.3333H11.8253C11.5253 18.3333 11.2476 18.2583 10.9921 18.1083C10.7367 17.9583 10.5339 17.7556 10.384 17.5C10.234 17.2445 10.159 16.9667 10.159 16.6667V15H7.65965C7.0598 15 6.50438 14.85 5.9934 14.55C5.48242 14.25 5.07696 13.8445 4.77704 13.3333C4.47711 12.8222 4.32715 12.2667 4.32715 11.6667V5.83334C4.32715 5.60001 4.40768 5.40279 4.56875 5.24168C4.72983 5.08057 4.927 5.00001 5.16027 5.00001H7.65965V1.66668H9.3259V5.00001H12.6584V1.66668H14.3246V5.00001H16.824C17.0573 5.00001 17.2545 5.08057 17.4155 5.24168C17.5766 5.40279 17.6571 5.60001 17.6571 5.83334V11.6667C17.6571 12.2667 17.5072 12.8222 17.2073 13.3333C16.9073 13.8445 16.5019 14.25 15.9909 14.55C15.4799 14.85 14.9245 15 14.3246 15H11.8253Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Most Used Tools */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Most Used Tools</h2>
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 text-sm hover:bg-gray-50">
                  View All Tools
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                {mostUsedTools.map((tool, index) => (
                  <button
                    key={index}
                    className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className={`w-12 h-12 ${tool.bgColor} rounded-lg flex items-center justify-center mb-3`}>
                      <svg className={`w-5 h-5 ${tool.iconColor}`} fill="currentColor" viewBox="0 0 22 20">
                        <path d={tool.icon} />
                      </svg>
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 text-center mb-1">{tool.name}</h3>
                    <p className="text-xs text-gray-600 text-center">{tool.uses}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
                <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 text-sm hover:bg-gray-50">
                  View Full History
                </button>
              </div>

              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center p-3 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 18 17">
                        <path d="M7.57973 10.62L13.7092 4.48664L14.642 5.43331L7.57973 12.5133L3.34238 8.25997L4.27513 7.32664L7.57973 10.62Z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-600 truncate">{activity.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{activity.time}</p>
                      <span className="inline-block px-2 py-1 mt-1 text-xs text-green-800 bg-green-100 rounded-full">
                        {activity.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
