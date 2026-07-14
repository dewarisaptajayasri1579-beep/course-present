export type Lang = 'id' | 'en';

export interface SlidePoint {
  title: string;
  details?: string[];
}

export const content = {
  id: {
    register: {
      title: 'Registrasi Workshop AI',
      subtitle: 'Menjadi Programmer AI: Buat Aplikasi, Online-kan, dan Siap Dijual',
      nameLabel: 'Nama Lengkap',
      namePlaceholder: 'Masukkan nama Anda',
      originLabel: 'Asal / Pekerjaan',
      originPlaceholder: 'Misal: Mahasiswa, UMKM, dll',
      expLabel: 'Pengalaman Menggunakan AI',
      expPlaceholder: 'Misal: Pernah pakai ChatGPT',
      ideaLabel: 'Ide Aplikasi',
      ideaPlaceholder: 'Misal: Aplikasi Kasir',
      submit: 'Daftar Sekarang',
      submitting: 'Mendaftar...',
      successTitle: 'Berhasil Mendaftar!',
      successMessage: 'Sampai jumpa di workshop.',
      errorFull: 'Maaf, kuota registrasi sudah penuh.',
      errorGeneric: 'Terjadi kesalahan.',
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
        id: 'hasil',
        title: 'Hasil yang Akan Didapatkan',
        stackingItems: [
          {
            label: "PELUANG",
            title: "Peluang Bisnis",
            desc: "Memahami peluang bisnis pembuatan aplikasi dan melihat potensi besar pasar digital.",
            stats: [{ v: "100%", l: "Potensi" }, { v: "UMKM", l: "Target Utama" }],
            img: "/img/cards/peluang_bisnis.png"
          },
          {
            label: "KONSEP",
            title: "Merancang Konsep Cepat",
            desc: "Mampu membuat konsep aplikasi terstruktur, dari fitur hingga model bisnis menggunakan bantuan ChatGPT.",
            stats: [{ v: "Tahap 1", l: "Ideation" }, { v: "Prompt", l: "AI" }],
            img: "/img/cards/konsep_aplikasi.png"
          },
          {
            label: "DEVELOPMENT",
            title: "Generate Kode Frontend",
            desc: "Mampu menggunakan tools AI (Lovable / v0) untuk menghasilkan kode frontend siap pakai tanpa ngoding dari nol.",
            stats: [{ v: "99%", l: "Otomatis" }, { v: "UI/UX", l: "Premium" }],
            img: "/img/cards/generate_kode.png"
          },
          {
            label: "DEPLOY",
            title: "Online & Siap Jual",
            desc: "Memahami dasar GitHub dan Vercel, hingga memiliki 1 aplikasi sederhana yang sudah online dan siap dipamerkan.",
            stats: [{ v: "1 App", l: "Live" }, { v: "Siap", l: "Jual" }],
            img: "/img/cards/deploy_aplikasi.png"
          }
        ]
      },
      {
        id: 'sesi-1',
        title: 'SESI 1 (09.00–10.30 WIB)',
        subtitle: 'Mindset, Peluang, dan Konsep Aplikasi',
        devExItems: [
          { num: "01", title: 'Pembukaan & Perkenalan', desc: 'Sesi awal dengan coach', details: ['Pembukaan oleh coach.', 'Tujuan workshop & penjelasan hasil akhir yang akan dibuat peserta.', 'Masing-masing peserta memperkenalkan diri secara singkat (Nama, Pekerjaan, Pengalaman AI, Ide Aplikasi).'] },
          { num: "02", title: 'Siapa Coach Ony Sapta?', desc: 'Founder & IT Consultant', details: ['Founder Seven Smarts Indonesia.', 'Memiliki pengalaman 10+ tahun di bidang IT.', 'Telah menangani lebih dari 100 klien dari berbagai wilayah (Jepang, Jakarta, Surabaya, dll).'] },
          { num: "03", title: 'Kenapa Harus Jualan Aplikasi?', desc: 'Peluang bisnis digital', details: ['Peluang bisnis dengan modal kecil.', 'Sangat dibutuhkan di era digital.', 'Bisa menjadi Passive Income (langganan bulanan).'] },
          { num: "04", title: 'Menentukan Ide Aplikasi', desc: 'Pilih ide Anda hari ini', details: ['Contoh: Sistem kasir, booking, laundry, dsb.', 'Tentukan target pengguna secara spesifik.', 'Tentukan model bisnis yang paling masuk akal.'] }
        ]
      },
      {
        id: 'profile-ony',
        title: 'Coach Ony Sapta Nugraha',
        subtitle: 'Founder Seven Smarts Indonesia & IT Consultant',
        videoUrl: '/video/profil.mp4',
        videoSideText: {
          title: 'Kerja sama dengan iMedia Japan (Mr. Yamada)',
          description: 'Aplikasi Membership Manajemen Seluruh Circuit di Jepang'
        },
        bottomImages: [
          { src: '/img/aktifitas.png', label: 'Aktivitas' },
          { src: '/img/transfer/image.png', label: 'Cuan dari Aplikasi' }
        ],
        items: [
          { title: '2005–2008 | Pendidikan', details: ['Kuliah D3 Teknik Komputer.'] },
          { title: '2009–2014 | Yamaha', details: ['Bekerja di bagian IT dan Sistem Quality Assurance.'] },
          { title: '2014–2015 | Kawasaki', details: ['Bekerja di bagian Audit Operasional.'] },
          { title: '2016–2018 | Programmer', details: ['2016: Bekerja sebagai programmer di Gresik.', '2017-2018: Menjadi programmer single fighter mengerjakan proyek mandiri.'] },
          { title: '2019–Sekarang | Seven Smarts', details: ['Mendirikan dan mengembangkan Seven Smarts Indonesia.', 'Telah menangani lebih dari 100 klien dari berbagai wilayah (Jepang, Jakarta, Surabaya, dll).'] }
        ],
      },
      {
        id: 'peluang',
        title: 'Kenapa Harus Jualan Aplikasi?',
        bentoItems: [
          { icon: 'DollarSign', title: 'Modal Terjangkau', details: ['Keahlian', 'Kreativitas', 'Laptop & Internet', 'Tools AI (Tanpa sewa toko)'] },
          { icon: 'Target', title: 'Banyak yang Butuh', details: ['UMKM', 'Sekolah', 'Rental Mobil / Toko', 'Rumah Sakit / Klinik', 'Dinas Pemerintahan'] },
          { icon: 'TrendingUp', title: 'Passive Income', details: ['Biaya pembuatan awal', 'Biaya langganan bulanan', 'Biaya maintenance', 'Biaya server tahunan'] },
          { icon: 'Sparkles', title: 'Lebih Mudah Dibuat', details: ['Dibantu ChatGPT untuk konsep', 'AI (v0/Lovable) untuk frontend', 'Tanpa ngetik kode 100% manual'] },
          { icon: 'MonitorSmartphone', title: 'Permintaan Naik', details: ['Semua usaha butuh digitalisasi', 'Kerja lebih cepat', 'Data lebih rapi & aman'] }
        ]
      },
      {
        id: 'ide',
        title: 'Menentukan Ide Aplikasi',
        text: 'Tentukan SATU ide aplikasi hari ini. Contoh:',
        items: [
          'Aplikasi Kasir / POS',
          'Sistem Booking (Rental, Lapangan)',
          'Pencatatan Keuangan / Laundry / Kos',
          'Aplikasi Absensi'
        ]
      },
      {
        id: 'sesi-2',
        title: 'SESI 2 (10.30–12.00 WIB)',
        subtitle: 'Praktik Membuat Aplikasi Dengan AI',
        items: [
          { title: 'Mengenal Tools Konseptor & Frontend', details: ['ChatGPT untuk mengonsep alur', 'Lovable / v0.app / Bolt untuk frontend UI', 'Figma/Canva untuk mockup'] },
          { title: 'Tahap 1 & 2: Konsep & Desain Responsive', details: ['Menentukan nama aplikasi, tujuan, dan fitur utama via ChatGPT', 'Memastikan aplikasi harus bisa dibuka di Laptop & Smartphone'] },
          { title: 'Tahap 3 & 4: Mockup & Prompt AI Frontend', details: ['Menyiapkan visual sederhana', 'Menulis prompt detail: gaya desain, warna, letak menu, dll'] },
          { title: 'Tahap 5: Generate Aplikasi & Revisi', details: ['Memasukkan prompt ke tools', 'Memeriksa hasil pertama', 'Menambahkan instruksi revisi (misal: "ubah warna tombol jadi merah")'] }
        ]
      },
      {
        id: 'tools',
        title: 'Mengenal Tools AI',
        items: [
          { title: 'Tools Konseptor (ChatGPT)', details: ['Mengembangkan ide & alur aplikasi', 'Menentukan fitur dan pengguna aplikasi', 'Membuat struktur menu & prompt'] },
          { title: 'Tools Frontend AI (v0, Lovable, Bolt)', details: ['Membuat tampilan responsive', 'Menghasilkan kode frontend otomatis', 'Mengubah desain hanya dengan chat (prompt)'] },
          { title: 'Tools Mockup (ChatGPT Image, Canva)', details: ['Gambaran visual sebelum aplikasi di-generate', 'Memastikan posisi tombol dan warna'] }
        ]
      },
      {
        id: 'konsep-chatgpt',
        title: 'Tahap 1: Konsep di ChatGPT',
        text: 'Gunakan ChatGPT untuk membuat konsep aplikasi (Nama, Tujuan, Target Pengguna, Fitur, Menu).',
        quote: '"Saya ingin membuat aplikasi laundry. Buatkan konsep sederhana: nama, masalah yang diselesaikan, pengguna, fitur utama, menu, warna, dan bisnis model."'
      },
      {
        id: 'frontend-prompt',
        title: 'Tahap 4: Prompt Frontend AI',
        text: 'Gunakan prompt lengkap untuk v0 atau Lovable.',
        quote: '"Buatkan aplikasi web LaundrySmart. Ada sidebar, order stats, pesanan terbaru, & tombol tambah. Desain modern biru putih. HARUS responsive untuk desktop & HP. Beri data dummy."'
      },
      {
        id: 'ishoma',
        title: 'ISHOMA (12.00–13.00)',
        subtitle: 'Istirahat, Salat, dan Makan',
        text: 'Jangan lupa simpan prompt, link aplikasi, dan akun AI Anda.'
      },
      {
        id: 'sesi-3',
        title: 'SESI 3 (13.00–15.00 WIB)',
        subtitle: 'Online-kan Aplikasi, Testing, dan Kompetisi',
        items: [
          { title: 'Menyempurnakan Aplikasi', details: ['Memastikan navigasi bekerja', 'Tampilan mobile rapi', 'Data dummy relevan'] },
          { title: 'Mengenal & Upload ke GitHub', details: ['Menyimpan source code ke repository', 'Membuat akun GitHub'] },
          { title: 'Deploy Aplikasi ke Vercel', details: ['Menghubungkan GitHub ke Vercel', 'Mendapatkan link aplikasi untuk dipamerkan'] },
          { title: 'Testing & Penilaian', details: ['Memastikan semua tombol dan desain tidak error', 'Penilaian dilakukan via AI dan Coach'] }
        ]
      },
      {
        id: 'github-vercel',
        title: 'GitHub & Vercel',
        items: [
          { title: 'GitHub', details: ['Tempat menyimpan source code', 'Mengelola versi aplikasi', 'Berkolaborasi dengan programmer lain'] },
          { title: 'Vercel', details: ['Meng-online-kan aplikasi (hosting gratis)', 'Otomatis update (deploy) saat kode berubah di GitHub'] }
        ]
      },
      {
        id: 'kompetisi',
        title: 'Penilaian & Kompetisi',
        text: 'Nilai Akhir = AI 30% + Coach 40% + Testing 20% + Presentasi 10%',
        items: [
          { title: 'Kejelasan ide & Manfaat (30%)', details: ['Apakah target pasar jelas?', 'Apakah bisa dijual?'] },
          { title: 'Desain UI & Kemudahan (20%)', details: ['Warna konsisten', 'Tulisan mudah dibaca', 'Navigasi jelas'] },
          { title: 'Responsive & Fungsi (25%)', details: ['Bisa dibuka di HP tanpa rusak', 'Tidak ada error atau tombol mati'] },
          { title: 'Kelengkapan Fitur & Presentasi (25%)', details: ['Presentasi meyakinkan', 'Fitur utama terpenuhi'] }
        ]
      },
      {
        id: 'penutup',
        title: 'Selesai!',
        subtitle: 'Pengumuman Pemenang & Penutupan',
        text: 'Terus kembangkan aplikasi Anda dan jadikan portfolio profesional!'
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
        step2Prompt: 'Buatkan aplikasi web bernama [NAMA APLIKASI]. Target user adalah [TARGET USER]. Buat halaman dashboard dengan: sidebar di kiri, header dengan nama aplikasi. Isi konten: [DAFTAR FITUR]. Gunakan gaya desain modern, profesional, dan warna [WARNA]. Tampilan HARUS responsive untuk HP dan Laptop. Beri data dummy agar terlihat nyata.'
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
      expPlaceholder: 'E.g.: Used ChatGPT',
      ideaLabel: 'App Idea',
      ideaPlaceholder: 'E.g.: POS App',
      submit: 'Register Now',
      submitting: 'Registering...',
      successTitle: 'Success!',
      successMessage: 'See you at the workshop.',
      errorFull: 'Sorry, the registration is full.',
      errorGeneric: 'An error occurred.',
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
        id: 'hasil',
        title: 'What You Will Achieve',
        stackingItems: [
          {
            label: "OPPORTUNITY",
            title: "App Business Potential",
            desc: "Understand app business opportunities and see the huge potential of the digital market.",
            stats: [{ v: "100%", l: "Potential" }, { v: "SMEs", l: "Target" }],
            img: "/img/cards/peluang_bisnis.png"
          },
          {
            label: "CONCEPT",
            title: "Rapid Concepting",
            desc: "Able to create structured app concepts, from features to business models using ChatGPT.",
            stats: [{ v: "Phase 1", l: "Ideation" }, { v: "Prompt", l: "AI" }],
            img: "/img/cards/konsep_aplikasi.png"
          },
          {
            label: "DEVELOPMENT",
            title: "Generate Frontend Code",
            desc: "Able to use AI tools (Lovable / v0) to generate ready-to-use frontend code without coding from scratch.",
            stats: [{ v: "99%", l: "Automated" }, { v: "Premium", l: "UI/UX" }],
            img: "/img/cards/generate_kode.png"
          },
          {
            label: "DEPLOY",
            title: "Live & Ready to Sell",
            desc: "Understand basics of GitHub and Vercel, up to owning 1 simple app deployed online and ready to sell.",
            stats: [{ v: "1 App", l: "Live" }, { v: "Ready", l: "To Sell" }],
            img: "/img/cards/deploy_aplikasi.png"
          }
        ]
      },
      {
        id: 'sesi-1',
        title: 'SESSION 1 (09.00–10.30)',
        subtitle: 'Mindset, Opportunities, and App Concepts',
        devExItems: [
          { num: "01", title: 'Opening & Introductions', desc: 'Welcome session', details: ['Workshop goals & final output explanation.', 'Personal introductions (Name, Job, AI Experience, App Idea).'] },
          { num: "02", title: 'Who is Coach Ony?', desc: 'Founder & Consultant', details: ['Founder of Seven Smarts Indonesia.', '10+ years experience in IT.', 'Managed 100+ clients across regions (Japan, Jakarta, etc).'] },
          { num: "03", title: 'Why the App Business?', desc: 'Digital opportunity', details: ['High demand in the digital era.', 'Low capital required.', 'Generates Passive Income (subscriptions).'] },
          { num: "04", title: 'Determine Your App Idea', desc: 'Pick your concept today', details: ['E.g., POS, Booking, Laundry manager.', 'Specify your target users.', 'Decide on a viable business model.'] }
        ]
      },
      {
        id: 'profile-ony',
        title: 'Coach Ony Sapta Nugraha',
        subtitle: 'Founder Seven Smarts Indonesia & IT Consultant',
        videoUrl: '/video/profil.mp4',
        videoSideText: {
          title: 'Collaboration with iMedia Japan (Mr. Yamada)',
          description: 'Membership Management Application for All Circuits in Japan'
        },
        bottomImages: [
          { src: '/img/aktifitas.png', label: 'Aktivitas' },
          { src: '/img/transfer/image.png', label: 'Cuan dari Aplikasi' }
        ],
        items: [
          { title: '2005–2008 | Education', details: ['Diploma in Computer Engineering.'] },
          { title: '2009–2014 | Yamaha', details: ['Worked in IT and Quality Assurance Systems.'] },
          { title: '2014–2015 | Kawasaki', details: ['Worked in Operational Auditing.'] },
          { title: '2016–2018 | Programmer', details: ['2016: Worked as a programmer in Gresik.', '2017-2018: Independent freelance programmer.'] },
          { title: '2019–Present | Seven Smarts', details: ['Founded and developed Seven Smarts Indonesia.', 'Managed over 100 clients across various regions (Japan, Jakarta, Surabaya, etc.).'] }
        ],
      },
      {
        id: 'peluang',
        title: 'Why the App Business?',
        bentoItems: [
          { icon: 'DollarSign', title: 'Low Capital', details: ['Laptop, internet, and AI tools'] },
          { icon: 'Target', title: 'High Demand', details: ['SMEs, Schools, Clinics, Agencies'] },
          { icon: 'TrendingUp', title: 'Passive Income', details: ['Monthly subscriptions', 'Maintenance fees'] },
          { icon: 'Sparkles', title: 'Easier to Build', details: ['AI generates code and designs'] }
        ]
      },
      {
        id: 'ide',
        title: 'Finding Your App Idea',
        text: 'Pick ONE app idea today. Examples:',
        items: [
          'POS / Cashier App',
          'Booking System (Rentals, Venues)',
          'Expense Tracker / Boarding House Manager',
          'Attendance App'
        ]
      },
      {
        id: 'sesi-2',
        title: 'SESSION 2 (10.30–12.00)',
        subtitle: 'Practice Building Apps with AI',
        items: [
          { title: 'Intro to AI Tools', details: ['ChatGPT for concept', 'Lovable/v0 for frontend'] },
          { title: 'Drafting Concepts', details: ['Define features and flows'] },
          { title: 'Writing Prompts', details: ['Structuring instructions for AI'] },
          { title: 'Generating App', details: ['Deploying UI and revising iteratively'] }
        ]
      },
      {
        id: 'tools',
        title: 'AI Tools Overview',
        items: [
          { title: 'Concept Tools (ChatGPT)', details: ['Ideas, Flows, Prompts'] },
          { title: 'Frontend AI (v0, Lovable)', details: ['Generates interactive code'] },
          { title: 'Design Tools (Canva)', details: ['Mockups'] }
        ]
      },
      {
        id: 'konsep-chatgpt',
        title: 'Phase 1: ChatGPT Concepts',
        text: 'Use ChatGPT to structure your app (Name, Goal, Users, Features, Menus).',
        quote: '"I want to build a laundry app. Create a simple concept: name, problem solved, users, features, menu, colors, and business model."'
      },
      {
        id: 'frontend-prompt',
        title: 'Phase 4: Frontend AI Prompts',
        text: 'Use detailed prompts for v0 or Lovable.',
        quote: '"Build a web app named LaundrySmart. Include a sidebar, order stats, recent orders, & add button. Modern blue & white design. MUST be responsive. Include dummy data."'
      },
      {
        id: 'ishoma',
        title: 'BREAK (12.00–13.00)',
        subtitle: 'Lunch and Prayer Break',
        text: 'Remember to save your prompts, app links, and accounts.'
      },
      {
        id: 'sesi-3',
        title: 'SESSION 3 (13.00–15.00)',
        subtitle: 'Deploying, Testing, and Competition',
        items: [
          { title: 'Refining the App', details: ['Fixing bugs, responsive checks'] },
          { title: 'GitHub Upload', details: ['Saving code to repository'] },
          { title: 'Deploying to Vercel', details: ['Getting the live link'] },
          { title: 'Testing & Competition', details: ['Scoring by Coach & AI'] }
        ]
      },
      {
        id: 'github-vercel',
        title: 'GitHub & Vercel',
        items: [
          { title: 'GitHub', details: ['Code storage repository & collaboration'] },
          { title: 'Vercel', details: ['Automatic deployment from GitHub'] }
        ]
      },
      {
        id: 'kompetisi',
        title: 'Competition & Scoring',
        text: 'Final Score = AI 30% + Coach 40% + Testing 20% + Presentation 10%',
        items: [
          { title: 'Utility & Ideas (30%)', details: ['Business potential'] },
          { title: 'UI Design (20%)', details: ['Clean, accessible'] },
          { title: 'Responsiveness (25%)', details: ['Works on mobile'] }
        ]
      },
      {
        id: 'penutup',
        title: 'Finish!',
        subtitle: 'Winners & Closing',
        text: 'Keep developing your app and use it as a professional portfolio!'
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
        step2Prompt: 'Build a web app named [APP NAME]. Target user is [TARGET USER]. Create a dashboard with: a left sidebar, a header with the app name. Content: [LIST OF FEATURES]. Use a modern, professional design style with [COLORS]. The UI MUST be responsive for mobile and desktop. Include dummy data to make it look real.'
      },
      checklist: {
        title: 'Pre-Submission Checklist',
        items: [
          'UI is not broken on mobile phones',
          'All main buttons are clickable / working',
          'Colors are visually appealing (not too bright)',
          'Successfully deployed to Vercel (Has a Link)',
          'Dummy data has been modified / relevant',
          'App screenshots taken for submission'
        ]
      }
    }
  }
};
