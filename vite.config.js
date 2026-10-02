import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// این کانفیگ به صورت خودکار محیط لوکال را از دپلو تفکیک می‌کند
export default defineConfig(({ command }) => ({
  plugins: [
    react(), 
    tailwindcss() // مشکل اصلی اینجا بود: پلاگین تلویند به آرایه اضافه شد
  ],
  base: command === 'serve' ? '/' : '/Weblog/', 
}))
