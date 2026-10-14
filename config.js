/* Taruh file ini satu folder dengan index.html */
/* Ambil API key gratis di https://console.groq.com/keys (diawali gsk_) */
window.GROQ_KEY = "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";
/* Daftar model visi, dicoba berurutan. Jika satu error/limit, otomatis lanjut ke berikutnya.
   Jika semua gagal, aplikasi mengambil daftar model dari akun Groq dan mencoba yang berbau visi.
   Model visi Groq saat ini: qwen/qwen3.8-27b (Llama 4 Scout/Maverick & Llama 3.2 vision sudah dihentikan). */
window.GROQ_MODELS = [
  "qwen/qwen3.8-27b"
];
