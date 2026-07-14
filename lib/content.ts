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
        items: [
          'Memahami peluang bisnis pembuatan aplikasi',
          'Mengetahui tahapan dari ide sampai online',
          'Mampu membuat konsep aplikasi menggunakan ChatGPT',
          'Mampu menggunakan tools AI untuk frontend (Lovable/v0)',
          'Memahami dasar penggunaan GitHub dan Vercel',
          'Memiliki 1 aplikasi sederhana yang online & siap jual'
        ]
      },
      {
        id: 'sesi-1',
        title: 'SESI 1 (09.00–10.30 WIB)',
        subtitle: 'Mindset, Peluang, dan Konsep Aplikasi',
        items: [
          { title: 'Pembukaan & Perkenalan Peserta', details: ['Pembukaan oleh coach.', 'Tujuan workshop & penjelasan hasil akhir yang akan dibuat peserta.', 'Masing-masing peserta memperkenalkan diri secara singkat (Nama, Pekerjaan, Pengalaman AI, Ide Aplikasi).'] },
          { title: 'Siapa Coach Ony Sapta Nugraha?', details: ['Founder Seven Smarts Indonesia', 'Memiliki pengalaman 10+ tahun di bidang IT', 'Telah menangani lebih dari 100 klien dari berbagai wilayah (Jepang, Jakarta, Surabaya, dll)'] },
          { title: 'Kenapa Harus Jualan Aplikasi?', details: ['Peluang bisnis dengan modal kecil', 'Sangat dibutuhkan di era digital', 'Bisa menjadi Passive Income'] },
          { title: 'Menentukan Ide Aplikasi Anda Hari Ini', details: ['Sistem kasir, booking, laundry, dsb.', 'Tentukan target pengguna', 'Tentukan model bisnis'] }
        ]
      },
      {
        id: 'peluang',
        title: 'Kenapa Harus Jualan Aplikasi?',
        items: [
          { title: 'Modal Relatif Terjangkau', details: ['Keahlian', 'Kreativitas', 'Laptop', 'Internet', 'Tools AI (Tanpa perlu sewa toko fisik/gudang)'] },
          { title: 'Banyak yang Membutuhkan', details: ['UMKM', 'Sekolah', 'Rental Mobil / Toko', 'Rumah Sakit / Klinik', 'Dinas Pemerintahan', 'Bisnis Jasa lainnya'] },
          { title: 'Bisa Menghasilkan Passive Income', details: ['Biaya pembuatan awal', 'Biaya langganan bulanan', 'Biaya maintenance', 'Biaya server tahunan', 'Biaya tambahan fitur / per user'] },
          { title: 'Sekarang Aplikasi Lebih Mudah Dibuat', details: ['Dibantu ChatGPT untuk konsep', 'Dibantu AI (v0/Lovable) untuk desain & kode frontend', 'Tidak perlu ngetik kode 100% manual lagi'] },
          { title: 'Permintaan Terus Bertambah', details: ['Semua usaha butuh digitalisasi agar kerja lebih cepat', 'Data lebih rapi & minim kesalahan manusia'] }
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
        items: [
          'Understand app business opportunities',
          'Learn the lifecycle from idea to online',
          'Draft app concepts using ChatGPT',
          'Generate frontend with AI (Lovable/v0)',
          'Master basics of GitHub and Vercel',
          'Possess 1 simple app deployed & ready to sell'
        ]
      },
      {
        id: 'sesi-1',
        title: 'SESSION 1 (09.00–10.30)',
        subtitle: 'Mindset, Opportunities, and App Concepts',
        items: [
          { title: 'Opening & Introductions', details: ['Workshop goals', 'Personal intros'] },
          { title: 'Who is Coach Ony?', details: ['Founder Seven Smarts Indonesia', '10+ years experience'] },
          { title: 'Why the App Business?', details: ['High Demand', 'Low Capital', 'Passive Income'] },
          { title: 'Determine Your App Idea Today', details: ['Pick a simple problem to solve'] }
        ]
      },
      {
        id: 'peluang',
        title: 'Why the App Business?',
        items: [
          { title: 'Low Capital', details: ['Only needs laptop, internet, and AI tools'] },
          { title: 'High Demand', details: ['SMEs, Schools, Clinics, Agencies'] },
          { title: 'Passive Income', details: ['Monthly subscriptions', 'Maintenance fees'] },
          { title: 'Easier to Build', details: ['AI generates code and designs'] }
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
