export type Lang = 'id' | 'en';

export const content = {
  id: {
    register: {
      title: 'Registrasi Workshop AI',
      subtitle: 'Menjadi Programmer AI: Buat Aplikasi, Online-kan, dan Siap Dijual',
      nameLabel: 'Nama Lengkap',
      namePlaceholder: 'Masukkan nama Anda',
      originLabel: 'Asal / Pekerjaan',
      originPlaceholder: 'Misal: Mahasiswa, Pemilik UMKM, dll',
      expLabel: 'Pengalaman Menggunakan AI',
      expPlaceholder: 'Misal: Pernah pakai ChatGPT untuk buat artikel',
      ideaLabel: 'Ide Aplikasi yang Ingin Dibuat',
      ideaPlaceholder: 'Misal: Aplikasi pencatatan kasbon',
      submit: 'Daftar Sekarang',
      submitting: 'Mendaftar...',
      successTitle: 'Berhasil Mendaftar!',
      successMessage: 'Sampai jumpa di workshop.',
      errorFull: 'Maaf, kuota registrasi sudah penuh (maksimal 8 peserta).',
      errorGeneric: 'Terjadi kesalahan. Silakan coba lagi.',
    },
    slides: [
      {
        id: 'cover',
        title: 'Menjadi Programmer AI',
        subtitle: 'Buat Aplikasi, Online-kan, dan Siap Dijual',
        coach: 'Ony Sapta Nugraha',
        organization: 'Seven Smarts Indonesia'
      },
      {
        id: 'outcome',
        title: 'Hasil yang Akan Didapatkan',
        items: [
          'Memahami peluang bisnis pembuatan aplikasi',
          'Mengetahui tahapan dari ide sampai online',
          'Membuat konsep dengan ChatGPT',
          'Membuat frontend aplikasi dengan AI (Lovable/Bolt/v0)',
          'Mempraktikkan GitHub & Vercel',
          'Memiliki 1 aplikasi yang online & siap jual'
        ]
      },
      {
        id: 'coach',
        title: 'Siapa Ony Sapta Nugraha?',
        items: [
          '2005-2008: Kuliah Teknik Komputer',
          '2009-2014: IT & QA di Yamaha',
          '2014-2015: Audit Operasional di Kawasaki',
          '2016-2018: Programmer Mandiri (Single Fighter)',
          '2019-Sekarang: Founder Seven Smarts Indonesia (100+ Klien)'
        ]
      },
      {
        id: 'why-apps',
        title: 'Kenapa Bisnis Aplikasi?',
        items: [
          'Modal Relatif Terjangkau (Skill, Laptop, AI, Internet)',
          'Permintaan Sangat Tinggi (UMKM, Sekolah, RS, Dinas, dll)',
          'Potensi Passive Income (Langganan, Server, Maintenance)',
          'Pembuatan Makin Cepat berkat AI'
        ]
      },
      {
        id: 'ideation',
        title: 'Sesi 1: Menentukan Ide',
        text: 'Tentukan 1 ide aplikasi Anda hari ini:',
        items: [
          'Aplikasi Kasir / POS',
          'Sistem Booking (Rental, Lapangan)',
          'Pencatatan Keuangan',
          'Aplikasi Absensi',
          'Aplikasi Pengelolaan Kos/Laundry'
        ]
      },
      {
        id: 'ai-tools',
        title: 'Tools AI yang Akan Digunakan',
        items: [
          'ChatGPT: Untuk konseptor, ide, fitur, & alur',
          'Frontend AI: Lovable, Bolt, v0, atau Google AI Studio',
          'Tujuan Frontend AI: Generate UI, Layout, Warna, dan Kode React/Next.js'
        ]
      },
      {
        id: 'chatgpt-prompt',
        title: 'Tahap 1: Konsep di ChatGPT',
        text: 'Contoh Prompt:',
        quote: '"Saya ingin membuat aplikasi laundry. Buatkan konsep sederhana: nama, target pengguna, fitur utama, struktur menu, warna, dan model bisnisnya."'
      },
      {
        id: 'frontend-prompt',
        title: 'Tahap 2: Prompt Frontend AI',
        text: 'Contoh Prompt:',
        quote: '"Buatkan aplikasi web LaundrySmart. Ada sidebar, statistik pesanan, daftar pesanan terbaru, dan tombol tambah pesanan. Warna biru & putih. Harus responsive."'
      },
      {
        id: 'cheat-code',
        title: 'The Ultimate Cheat Code 🔥',
        text: 'Tidak perlu coding dari nol! Gunakan Template Master kita:',
        items: [
          'Sudah termasuk Radix UI & animasi canggih',
          'Tinggal copy-paste hasil dari v0.dev',
          'Siap dukung grafik (Recharts) & 3D (Three.js)',
          'Hasil akhir sekelas Startup Profesional!'
        ]
      },
      {
        id: 'github-vercel',
        title: 'Tahap 3: Online-kan (Deploy)',
        items: [
          'GitHub: Tempat menyimpan kode (Repository)',
          'Vercel: Tempat meng-online-kan aplikasi',
          'Keduanya Gratis untuk tahap awal!'
        ]
      },
      {
        id: 'competition',
        title: 'Kompetisi & Penilaian',
        items: [
          'Kejelasan ide & Manfaat (30%)',
          'Desain UI & Responsive (30%)',
          'Kelengkapan Fitur & Fungsi (30%)',
          'Presentasi (10%)',
          'Juri dibantu oleh AI!'
        ]
      }
    ],
    handout: {
      title: 'Panduan Praktik Workshop AI',
      subtitle: 'Simpan panduan ini sebagai referensi step-by-step pembuatan aplikasi Anda.',
      rundown: {
        title: 'Rundown Workshop',
        items: [
          { time: '09.00 - 10.30', activity: 'Sesi 1: Mindset, Peluang, & Ide Aplikasi' },
          { time: '10.30 - 12.00', activity: 'Sesi 2: Praktik Konsep & Generate AI Frontend' },
          { time: '12.00 - 13.00', activity: 'Istirahat (ISHOMA)' },
          { time: '13.00 - 15.00', activity: 'Sesi 3: GitHub, Vercel, Testing, & Kompetisi' }
        ]
      },
      worksheet: {
        title: 'Worksheet: Ide Aplikasi Anda',
        q1: '1. Apa nama aplikasi Anda?',
        q2: '2. Siapa target penggunanya (User)?',
        q3: '3. Apa fitur utamanya (Minimal 3)?'
      },
      prompts: {
        title: 'Template Prompt AI (Copy-Paste)',
        step1Title: 'Prompt ChatGPT (Untuk Konsep)',
        step1Prompt: 'Saya ingin membuat aplikasi [NAMA APLIKASI]. Buatkan konsep aplikasi sederhana untuk membantu [TARGET USER]. Buatkan: 1. Masalah yang diselesaikan, 2. Fitur utama (maks 4), 3. Struktur menu, 4. Rekomendasi warna UI, 5. Model bisnisnya.',
        step2Title: 'Prompt Frontend AI (Lovable/Bolt/v0)',
        step2Prompt: 'Buatkan aplikasi web bernama [NAMA APLIKASI]. Target user adalah [TARGET USER]. Buat halaman dashboard dengan: sidebar di kiri, header dengan nama aplikasi. Isi konten: [DAFTAR FITUR]. Gunakan gaya desain modern, profesional, dan warna [WARNA]. Tampilan HARUS responsive untuk HP dan Laptop. Beri data dummy agar terlihat nyata.',
        cheatCodeTitle: 'Terminal Command: Clone Template',
        cheatCodeCommand: 'git clone https://github.com/OnySeven/agentic-build-orchestrate-a.git aplikasi-saya\ncd aplikasi-saya\nnpm install\nnpm run dev'
      },
      checklist: {
        title: 'Checklist Sebelum Penilaian',
        items: [
          'Tampilan tidak rusak saat dibuka di HP',
          'Semua tombol utama bisa diklik / bekerja',
          'Warna desain enak dipandang (tidak menyilaukan)',
          'Sudah berhasil di-deploy ke Vercel (Punya Link)',
          'Data dummy sudah diubah / relevan',
          'Sudah screenshot aplikasi untuk di-submit'
        ]
      }
    }
  },
  en: {
    register: {
      title: 'AI Workshop Registration',
      subtitle: 'Become an AI Programmer: Build, Deploy, and Sell Apps',
      nameLabel: 'Full Name',
      namePlaceholder: 'Enter your name',
      originLabel: 'Origin / Occupation',
      originPlaceholder: 'E.g.: Student, Business Owner, etc.',
      expLabel: 'AI Experience',
      expPlaceholder: 'E.g.: Used ChatGPT for writing articles',
      ideaLabel: 'App Idea You Want to Build',
      ideaPlaceholder: 'E.g.: Expense tracker app',
      submit: 'Register Now',
      submitting: 'Registering...',
      successTitle: 'Registration Successful!',
      successMessage: 'See you at the workshop.',
      errorFull: 'Sorry, the registration is full (max 8 participants).',
      errorGeneric: 'An error occurred. Please try again.',
    },
    slides: [
      {
        id: 'cover',
        title: 'Become an AI Programmer',
        subtitle: 'Build, Deploy, and Sell Apps',
        coach: 'Ony Sapta Nugraha',
        organization: 'Seven Smarts Indonesia'
      },
      {
        id: 'outcome',
        title: 'What You Will Achieve',
        items: [
          'Understand the app business opportunities',
          'Learn the lifecycle from idea to deployment',
          'Draft app concepts using ChatGPT',
          'Generate app frontend with AI (Lovable/Bolt/v0)',
          'Practice GitHub & Vercel deployment',
          'Go home with 1 fully deployed app ready to sell'
        ]
      },
      {
        id: 'coach',
        title: 'Who is Ony Sapta Nugraha?',
        items: [
          '2005-2008: Computer Engineering Degree',
          '2009-2014: IT & QA at Yamaha',
          '2014-2015: Operational Audit at Kawasaki',
          '2016-2018: Indie Programmer (Single Fighter)',
          '2019-Present: Founder of Seven Smarts Indonesia (100+ Clients)'
        ]
      },
      {
        id: 'why-apps',
        title: 'Why the App Business?',
        items: [
          'Low Capital (Needs Skill, Laptop, AI, Internet)',
          'High Demand (SMEs, Schools, Clinics, Agencies)',
          'Passive Income Potential (Subscriptions, Maintenance)',
          'Development is Much Faster with AI'
        ]
      },
      {
        id: 'ideation',
        title: 'Session 1: Finding an Idea',
        text: 'Pick 1 app idea to build today:',
        items: [
          'POS / Cashier App',
          'Booking System (Rentals, Venues)',
          'Expense Tracker',
          'Attendance App',
          'Laundry / Boarding House Manager'
        ]
      },
      {
        id: 'ai-tools',
        title: 'AI Tools We Will Use',
        items: [
          'ChatGPT: For concepts, ideas, features, & flows',
          'Frontend AI: Lovable, Bolt, v0, or Google AI Studio',
          'Purpose: Generate UI, layouts, colors, and React/Next.js code'
        ]
      },
      {
        id: 'chatgpt-prompt',
        title: 'Phase 1: ChatGPT Concept',
        text: 'Example Prompt:',
        quote: '"I want to build a laundry app. Create a simple concept: name, target users, core features, menu structure, colors, and business model."'
      },
      {
        id: 'frontend-prompt',
        title: 'Phase 2: Frontend AI Prompt',
        text: 'Example Prompt:',
        quote: '"Build a web app named LaundrySmart. Include a sidebar, order stats, recent orders list, and an add order button. Use blue & white colors. Make it responsive."'
      },
      {
        id: 'cheat-code',
        title: 'The Ultimate Cheat Code 🔥',
        text: 'No need to code from scratch! Use our Master Template:',
        items: [
          'Includes Radix UI & smooth animations',
          'Just copy-paste code from v0.dev',
          'Ready for charts (Recharts) & 3D (Three.js)',
          'End result looks like a Silicon Valley Startup!'
        ]
      },
      {
        id: 'github-vercel',
        title: 'Phase 3: Deploy (Go Live)',
        items: [
          'GitHub: Where we store our code (Repository)',
          'Vercel: Where we host the application',
          'Both are Free for starting out!'
        ]
      },
      {
        id: 'competition',
        title: 'Competition & Scoring',
        items: [
          'Idea Clarity & Utility (30%)',
          'UI Design & Responsiveness (30%)',
          'Feature Completeness & Function (30%)',
          'Presentation (10%)',
          'Judges assisted by AI!'
        ]
      }
    ],
    handout: {
      title: 'AI Workshop Practice Guide',
      subtitle: 'Keep this guide as a step-by-step reference for building your app.',
      rundown: {
        title: 'Workshop Rundown',
        items: [
          { time: '09.00 - 10.30', activity: 'Session 1: Mindset, Opportunities, & Ideas' },
          { time: '10.30 - 12.00', activity: 'Session 2: Concepts & Generate AI Frontend' },
          { time: '12.00 - 13.00', activity: 'Break / Lunch' },
          { time: '13.00 - 15.00', activity: 'Session 3: GitHub, Vercel, Testing, & Competition' }
        ]
      },
      worksheet: {
        title: 'Worksheet: Your App Idea',
        q1: '1. What is your app name?',
        q2: '2. Who is the target user?',
        q3: '3. What are the main features (Min 3)?'
      },
      prompts: {
        title: 'AI Prompt Templates (Copy-Paste)',
        step1Title: 'ChatGPT Prompt (For Concepts)',
        step1Prompt: 'I want to build an app called [APP NAME]. Create a simple concept to help [TARGET USER]. Provide: 1. Problem solved, 2. Core features (max 4), 3. Menu structure, 4. UI color recommendations, 5. Business model.',
        step2Title: 'Frontend AI Prompt (Lovable/Bolt/v0)',
        step2Prompt: 'Build a web app named [APP NAME]. Target user is [TARGET USER]. Create a dashboard with: a left sidebar, a header with the app name. Content: [LIST OF FEATURES]. Use a modern, professional design style with [COLORS]. The UI MUST be responsive for mobile and desktop. Include dummy data to make it look real.',
        cheatCodeTitle: 'Terminal Command: Clone Template',
        cheatCodeCommand: 'git clone https://github.com/OnySeven/agentic-build-orchestrate-a.git my-app\ncd my-app\nnpm install\nnpm run dev'
      },
      checklist: {
        title: 'Pre-Submission Checklist',
        items: [
          'UI is not broken on mobile phones',
          'All main buttons are clickable / working',
          'Colors are visually appealing (not too bright)',
          'Successfully deployed to Vercel (Has a Link)',
          'Dummy data has been replaced / relevant',
          'App screenshots are ready for submission'
        ]
      }
    }
  }
};
