![TCPEER](https://github.com/user-attachments/assets/45034cd6-acc7-409c-b4f6-d999d950efc5)


**Vue.js 3 + Vite + Electron.js**

## 📝 What is it?
TCPeer is a lightweight desktop application that runs from the system tray. By clicking the tray icon, users can open a small side window to drag and drop files for quick sharing. The app detects other people connected to the same network who also have the app, allowing direct file transfer between them, potentially using the TCP protocol.

## 💡 Why?
This project addresses the need for a simple and hassle-free solution for local file sharing without requiring accounts, facing ads, or worrying about upload limits. TCPeer aims to provide a seamless experience for users who want to share files quickly within the same network, removing barriers and keeping the process straightforward.

## 📅 When?
The target release for the MVP is early January 2025 (or Q4 of 2024).

## 🌍 Where?
The application will initially launch for GNU/Linux, with fast future plans to support Windows (not necessarily LTS).

## 👨‍💻 By whom?
Developed by **Victor André**, a front-end developer focused on expanding knowledge across different platforms. This project is an opportunity to learn desktop programming while enhancing web development skills.

## ⚙️ How?
The project is being developed using the following main technologies:

- **[Vue.js 3](https://vuejs.org/)**: A JavaScript framework for building reactive and dynamic interfaces.
- **[Vite](https://vitejs.dev/)**: A fast and lightweight development tool for bundling and optimization.
- **[Electron.js](https://www.electronjs.org/)**: A framework for creating desktop applications using Web technologies, ideal for cross-platform applications.

---

## 🛠️ Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/eusolomax/TCPeer.git

2. Install dependencies:
   ```bash
   cd TCPeer
   npm install

3. Run the project in development mode:
   ```bash
   npm run dev

4. To build the application:
   ```bash
    npm run build:win
    npm run build:linux
    npm run build:mac
