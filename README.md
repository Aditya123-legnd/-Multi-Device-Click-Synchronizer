🔥 Multi-Device Click Synchronizer

Control 10–15 devices at once in real-time!
Whenever you click on one device, the same click (same position) is instantly mirrored across all connected devices — with millisecond precision ⚡

Built with Node.js, Socket.IO, and Cloudflare Tunnel.

🚀 Features

📱 Works across mobiles, laptops, tablets.

⚡ Millisecond-level synchronized clicks.

🌍 Secure remote access via Cloudflare Tunnel.

🎯 Supports same-model & same-resolution devices for perfect accuracy.

⚙️ Installation & Setup
1️⃣ Clone the Repo
git clone https://github.com/your-username/multi-device-sync.git
cd multi-device-sync

2️⃣ Install Dependencies
npm install

3️⃣ Start the Server
node server.js


Server will run locally at 👉 http://localhost:3000

4️⃣ Install Cloudflare Tunnel
# For Debian/Ubuntu
sudo apt update
sudo apt install cloudflared -y

# Verify installation
cloudflared --version

5️⃣ Expose Localhost to Internet
cloudflared tunnel --url http://localhost:3000


You’ll get a public URL like:

https://random-name.trycloudflare.com

6️⃣ Connect Devices

Open the Cloudflare URL on all devices (mobiles, laptops, etc).

Click on any device → All other devices instantly click at the same spot! 🎉

🛣️ Next Roadmap

✅ Add UI controls (buttons, touchpad style).

✅ Support multiple rooms/sessions.

🔒 Add authentication for secure sessions.

📱 Wrap into mobile app (React Native / Capacitor).

💡 Demo Idea

Connect 4+ devices → Click anywhere on one device → See the magic sync ✨

👉 Contributions & feature suggestions are welcome!
