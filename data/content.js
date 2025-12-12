// File: data/content.js

export const translations = {
  id: {
    navbar: ["Beranda", "Tentang", "Skill", "Portfolio", "Kontak"],
    hero: {
      tag: "SIAP BEKERJA",
      title: "SAYA ADALAH",
      role: ["Pengembang Web", "Analis Data", "Desainer Logo"],
      desc: "Mahasiswa Teknik Informatika yang berfokus menciptakan pengalaman digital futuristik. Menggabungkan analisis data presisi dengan desain web yang imersif.",
      btn1: "Lihat Project",
      btn2: "Hubungi Saya"
    },
    skills: {
      title: "TEKNOLOGI",
      desc: "Tools dan bahasa pemrograman yang saya gunakan."
    },
    about: {
      title: "Tentang",
      highlight: "Saya",
      desc1: "Mahasiswa IT yang antusias mengubah baris kode menjadi solusi digital yang nyata.",
      desc2: "Saya percaya bahwa Kode adalah seni dan Data adalah cerita yang belum terungkap.",
      timelineTitle: "RIWAYAT PERJALANAN",
      timeline: [
        { year: "2023 - Sekarang", title: "S1 Teknik Informatika", place: "Univ. Muhammadiyah Makassar", desc: "Mempelajari Rekayasa Perangkat Lunak & Data Science." },
        { year: "2019 - 2022", title: "Teknik Komputer Jaringan", place: "SMKN 1 Gowa", desc: "Fokus pada infrastruktur jaringan & dasar web." },
        { year: "2022", title: "Freelance Dev", place: "Remote", desc: "Membangun website UMKM & desain identitas brand." }
      ],
      stats: { exp: "Tahun Koding", proj: "Project Selesai" }
    },
    portfolio: {
      title: "Karya",
      highlight: "Pilihan",
      subtitle: "Beberapa project terbaik yang pernah saya kerjakan.",
      link: "Lihat Semua Project",
      items: [
        { 
          t: "Toko Online UMKM", 
          d: "Platform e-commerce responsif dengan fitur keranjang belanja dan dashboard admin.", 
          img: "/p1.jpg", // GAMBAR 1 (Sesuai file Anda)
          tech: ["React", "Next.js", "Tailwind"] 
        },
        { 
          t: "Dashboard Analisis Keuangan", 
          d: "Visualisasi data interaktif untuk memantau arus kas dan prediksi keuntungan.", 
          img: "/p2.jpg", // Ganti ke /p2.jpg nanti
          tech: ["Python", "Pandas", "Chart.js"] 
        },
        { 
          t: "Brand Identity: Kopi Senja", 
          d: "Desain logo dan panduan visual lengkap untuk startup kedai kopi lokal.", 
          img: "/p3.jpg", // Ganti ke /p3.jpg nanti
          tech: ["Illustrator", "Figma"] 
        },
        { 
          t: "Sistem Absensi Sekolah", 
          d: "Aplikasi berbasis web untuk manajemen kehadiran siswa dengan QR Code.", 
          img: "/p4.jpg", 
          tech: ["PHP", "Laravel", "MySQL"] 
        },
        { 
          t: "Landing Page Event Gaming", 
          d: "Website promosi turnamen esports dengan animasi parallax futuristik.", 
          img: "/p5.jpg", 
          tech: ["HTML5", "GSAP", "CSS3"] 
        },
        { 
          t: "Bot Telegram Otomatis", 
          d: "Bot pintar untuk manajemen grup dan auto-reply layanan pelanggan.", 
          img: "/p6.jpg", 
          tech: ["Python", "Telegram API"] 
        }
      ]
    },
    contact: {
      title: "Mari",
      highlight: "Bekerja Sama",
      desc: "Punya ide project menarik? Atau sekadar ingin berdiskusi tentang teknologi?",
      btn1: "Kirim Email",
      btn2: "WhatsApp"
    },
    footer: "Sistem Online."
  },
  en: {
    navbar: ["Home", "About", "Skills", "Portfolio", "Contact"],
    hero: {
      tag: "AVAILABLE FOR HIRE",
      title: "I AM",
      role: ["Web Developer", "Data Analyst", "Logo Designer"],
      desc: "Informatics Engineering student focused on creating futuristic digital experiences. Combining precise data analysis with immersive web design.",
      btn1: "View Projects",
      btn2: "Contact Me"
    },
    skills: {
      title: "TECH STACK",
      desc: "Technologies and tools I use."
    },
    about: {
      title: "About",
      highlight: "Me",
      desc1: "IT student enthusiastic about turning lines of code into real digital solutions.",
      desc2: "I believe Code is art and Data is an untold story.",
      timelineTitle: "JOURNEY TIMELINE",
      timeline: [
        { year: "2023 - Now", title: "Bachelor of Informatics", place: "Muhammadiyah Univ. Makassar", desc: "Studying Software Engineering & Data Science." },
        { year: "2019 - 2022", title: "Computer Network Eng.", place: "SMKN 1 Gowa", desc: "Focus on network infrastructure & web basics." },
        { year: "2022", title: "Freelance Dev", place: "Remote", desc: "Building MSME websites & brand identity design." }
      ],
      stats: { exp: "Years Coding", proj: "Projects Done" }
    },
    portfolio: {
      title: "Selected",
      highlight: "Work",
      subtitle: "Some of the best projects I've worked on.",
      link: "See All Projects",
      items: [
        { 
          t: "MSME E-Commerce Store", 
          d: "Responsive e-commerce platform with shopping cart and admin dashboard features.", 
          img: "/p1.jpg", // Tambahkan juga di sini
          tech: ["React", "Next.js", "Tailwind"] 
        },
        { 
          t: "Financial Analytics Dashboard", 
          d: "Interactive data visualization to monitor cash flow and profit predictions.", 
          img: "/p2.jpg",
          tech: ["Python", "Pandas", "Chart.js"] 
        },
        { 
          t: "Brand Identity: Twilight Coffee", 
          d: "Logo design and complete visual guidelines for a local coffee shop startup.", 
          img: "/p3.jpg",
          tech: ["Illustrator", "Figma"] 
        },
        { 
          t: "School Attendance System", 
          d: "Web-based application for student attendance management using QR Code.", 
          img: "/p4.jpg",
          tech: ["PHP", "Laravel", "MySQL"] 
        },
        { 
          t: "Gaming Event Landing Page", 
          d: "Esports tournament promotion website with futuristic parallax animations.", 
          img: "/p5.jpg",
          tech: ["HTML5", "GSAP", "CSS3"] 
        },
        { 
          t: "Automated Telegram Bot", 
          d: "Smart bot for group management and customer service auto-reply.", 
          img: "/p6.jpg",
          tech: ["Python", "Telegram API"] 
        }
      ]
    },
    contact: {
      title: "Let's Work",
      highlight: "Together",
      desc: "Have an interesting project idea? Or just want to discuss technology?",
      btn1: "Send Email",
      btn2: "WhatsApp"
    },
    footer: "System Online."
  }
};

export const skillsList = [
  { n: "HTML5", c: "text-orange-500" }, { n: "CSS3", c: "text-blue-500" }, { n: "JS", c: "text-yellow-400" },
  { n: "React", c: "text-cyan-400" }, { n: "Next.js", c: "text-white" }, { n: "Tailwind", c: "text-cyan-300" },
  { n: "Python", c: "text-blue-400" }, { n: "SQL", c: "text-purple-400" }, { n: "Git", c: "text-orange-600" },
  { n: "Figma", c: "text-pink-500" }, { n: "VS Code", c: "text-blue-600" }, { n: "Logo", c: "text-green-400" }
];